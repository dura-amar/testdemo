// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract NFTicket is ERC721URIStorage,AccessControl {

    struct Issuer{
        string name;
        string pfpURI;
        string email;
        bool approved;
    }

    uint private _tokenId;
    mapping(address=>Issuer) private issuer;

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");

    constructor(address _admin) ERC721("NFTicket","nfticket") {
        _grantRole(OWNER_ROLE,msg.sender);
        _grantRole(ADMIN_ROLE,_admin);
    }

    function registerIssuer(string memory name,string memory pfpURI,string memory email) public {
        issuer[msg.sender]=Issuer(name,pfpURI,email,false);
    }

    function approveIssuer(address issuerAddr)public {
        require(hasRole(ADMIN_ROLE, issuerAddr),"Caller is not an admin.");
        require(keccak256(abi.encodePacked(issuer[issuerAddr].name))!=keccak256(abi.encodePacked("")),"Issuer not registered.");
        _grantRole(ISSUER_ROLE, issuerAddr);
        issuer[issuerAddr].approved=true;
    }
    
    function _getTokenId() private returns(uint){
        _tokenId+=1;
        return _tokenId;
    }

    function mint(address to,string memory uri)public {
        require(hasRole(ISSUER_ROLE, msg.sender), "Caller is not a issuer.");
        uint currTokenId=_getTokenId();
        _safeMint(to,currTokenId);
        _setTokenURI(currTokenId, uri);
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "baseURI";
    // }

    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize) internal override {
        require(from==address(0),"No permission to transfer");
        super._beforeTokenTransfer(from,to,firstTokenId,batchSize);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721URIStorage,AccessControl) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}