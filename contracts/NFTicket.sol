// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

interface IPortfolio{
    function appendCertificate(address student,uint certId) external;
}

contract NFTicket is ERC721URIStorage,AccessControl {

    struct Issuer{
        string name;
        string pfpURI;
        string email;
        bool approved;
    }

    uint private _tokenId;
    address private _portfolioAddress;
    mapping(address=>Issuer) private issuer;

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");

    constructor(address _admin,address portfolioAddress) ERC721("NFTicket","nfticket") {
        _grantRole(OWNER_ROLE,msg.sender);
        _grantRole(ADMIN_ROLE,_admin);
        _portfolioAddress=portfolioAddress;
    }

    function registerIssuer(string memory name,string memory pfpURI,string memory email) public {
        require(keccak256(abi.encodePacked(name))!=keccak256(abi.encodePacked("")),"Empty name.");
        require(keccak256(abi.encodePacked(email))!=keccak256(abi.encodePacked("")),"Empty email.");
        issuer[msg.sender]=Issuer(name,pfpURI,email,false);
    }

    function approveIssuer(address issuerAddr)public {
        require(hasRole(ADMIN_ROLE, msg.sender),"Caller is not an admin.");
        require(keccak256(abi.encodePacked(issuer[issuerAddr].name))!=keccak256(abi.encodePacked("")),"Issuer not registered.");
        _grantRole(ISSUER_ROLE, issuerAddr);
        issuer[issuerAddr].approved=true;
    }

    function isIssuerApproved(address issuerAddr) public view returns(bool){
        return issuer[issuerAddr].approved;
    }
    
    function _getTokenId() private returns(uint){
        _tokenId+=1;
        return _tokenId;
    }

    function mint(address to,string memory uri)public {
        require(hasRole(ISSUER_ROLE, msg.sender), "Caller is not a issuer.");
        require(to!=address(0),"Cannot mint to 0 address.");
        require(keccak256(abi.encodePacked(uri))!=keccak256(abi.encodePacked("")),"Empty URI.");
        uint currTokenId=_getTokenId();
        _safeMint(to,currTokenId);
        _setTokenURI(currTokenId, uri);
        IPortfolio(_portfolioAddress).appendCertificate(to,currTokenId);
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "baseURI";
    // }

    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize) internal override {
        require(from==address(0),"No permission to transfer.");
        super._beforeTokenTransfer(from,to,firstTokenId,batchSize);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721URIStorage,AccessControl) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}