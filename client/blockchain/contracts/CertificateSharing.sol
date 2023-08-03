// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Import the ERC721 interface
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract CertificateSharing {
    address public owner;

    struct SharedCertificate {
        address student;
        address verifier;
        uint256 certificateId;
    }

    mapping(bytes32 => SharedCertificate) public sharedCertificates;
    event CertificateShared(address indexed student, address indexed verifier, uint256 certificateId);
    event CertificateAccessRevoked(address indexed student, address indexed verifier, uint256 certificateId);

    // Address of the ERC-721 contract representing the NFTicates (certificates)
    address public nftContractAddress;

    constructor(address _nftContractAddress) {
        nftContractAddress = _nftContractAddress;
        owner= msg.sender;
    }

    // Modifier to ensure only the student who owns the certificate can share or revoke access
    modifier onlyCertificateOwner(address student, uint256 certificateId) {
        require(
            IERC721(nftContractAddress).ownerOf(certificateId) == student,
            "CertificateSharing: You are not the owner of this certificate"
        );
        _;
    }

    // Function to share a certificate with a verifier
    function shareCertificate(address verifier, uint256 certificateId) internal onlyCertificateOwner(msg.sender, certificateId) {
        bytes32 sharedCertificateKey = keccak256(abi.encodePacked(msg.sender, verifier, certificateId));
        require(sharedCertificates[sharedCertificateKey].certificateId == 0, "CertificateSharing: Certificate already shared with this verifier");
        
        SharedCertificate memory sharedCertificate = SharedCertificate({
            student: msg.sender,
            verifier: verifier,
            certificateId: certificateId
        });
        sharedCertificates[sharedCertificateKey] = sharedCertificate;
        emit CertificateShared(msg.sender, verifier, certificateId);
    }

    // Function to share a list of certificates with multiple verifiers at once
    function shareCertificatesList(address verifier, uint256[] calldata certificateIds) external {
        for (uint256 i = 0; i < certificateIds.length; i++) {
            shareCertificate(verifier, certificateIds[i]);
        }
    }

    // Function to revoke access to a shared certificate by the student
    function revokeCertificateAccess(address verifier, uint256 certificateId) external onlyCertificateOwner(msg.sender, certificateId) {
        bytes32 sharedCertificateKey = keccak256(abi.encodePacked(msg.sender, verifier, certificateId));
        require(sharedCertificates[sharedCertificateKey].certificateId != 0, "CertificateSharing: Certificate is not shared with this verifier");
        
        // Remove the shared certificate entry, effectively revoking access
        delete sharedCertificates[sharedCertificateKey];
        emit CertificateAccessRevoked(msg.sender, verifier, certificateId);
    }

    // Function to check if a verifier has access to view a specific certificate
    function hasAccessToCertificate(address student, address verifier, uint256 certificateId) external view returns (bool) {
        bytes32 sharedCertificateKey = keccak256(abi.encodePacked(student, verifier, certificateId));
        return sharedCertificates[sharedCertificateKey].certificateId != 0;
    }
}