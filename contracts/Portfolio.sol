// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Portfolio is ERC721URIStorage,AccessControl{

    struct Student{
        string name;
        string pfpURI;
        string email;
        uint[] certificates; //array of ids
    }

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant STUDENT_ROLE = keccak256("STUDENT_ROLE");

    mapping(address=>Student) private students;
    mapping(address=>uint) private portfolios;
    uint private _tokenId;

    constructor(address _admin) ERC721("Portfolio","pfl"){
        _grantRole(OWNER_ROLE,msg.sender);
        _grantRole(ADMIN_ROLE,_admin);
    }

    function registerStudent(string memory name,string memory pfpURI,string memory email) public {
        require(keccak256(abi.encodePacked(name))!=keccak256(abi.encodePacked("")),"Empty name.");
        require(keccak256(abi.encodePacked(email))!=keccak256(abi.encodePacked("")),"Empty email.");
        uint[] memory temp;
        temp=new uint[](0);
        students[msg.sender]=Student(name,pfpURI,email,temp);
        _grantRole(STUDENT_ROLE,msg.sender);    
        emit MetadataUpdate(0,students[msg.sender],msg.sender);
    }

    function mint(address to,string memory uri)public {
        require(to!=address(0),"Cannot mint to 0 address.");
        require(balanceOf(to)==0,"Already minted a portfolio.");
        require(keccak256(abi.encodePacked(uri))!=keccak256(abi.encodePacked("")),"Empty URI.");
        uint currTokenId=_getTokenId();
        _safeMint(to,currTokenId);
        _setTokenURI(currTokenId, uri);
        portfolios[to]=currTokenId;
    }

    function updatePortfolio(address student)public{
        emit MetadataUpdate(portfolios[student], students[student],student);
    }

    function changeURI(uint tokenId,string memory uri)public{
        require(keccak256(abi.encodePacked(uri))!=keccak256(abi.encodePacked("")),"Empty URI.");
        _setTokenURI(tokenId,uri);
    }

    function _getTokenId() private returns(uint){
        _tokenId+=1;
        return _tokenId;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721URIStorage,AccessControl) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

  event MetadataUpdate(uint _tokenId,Student _metadata,address _student);
}