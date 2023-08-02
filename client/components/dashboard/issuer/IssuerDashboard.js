import React, { useState, useEffect } from 'react';
import IssuerProfileCard from './IssuerProfileCard';
import IssuedNFTsList from './IssuedNFTsList';
import CertificateIssuanceForm from './CertificateIssuanceForm';

const IssuerDashboard = () => {
  // Dummy data for illustration purposes
  const [issuerProfile, setIssuerProfile] = useState({
    name: 'Issuer Name',
    organization: 'Issuer Organization',
    contactEmail: 'issuer@example.com',
  });

  const [issuedNFTs, setIssuedNFTs] = useState([]);

  useEffect(() => {
    // Fetch issued NFTs from the backend or contract and update the state
    // Replace this with actual API or contract calls to fetch the data
    const dummyIssuedNFTs = [
        {
          id: 'nft-1',
          name: 'Academic Certificate',
          recipient: 'John Doe',
          issuanceDate: '2023-07-15',
          imageUrl: '/images/all-img/v3/hero-thumb2.png',
          link:"#",
        },
        {
          id: 'nft-2',
          name: 'Achievements',
          recipient: 'Jane Smith',
          issuanceDate: '2023-07-16',
          imageUrl: '/images/all-img/v3/hero-thumb2.png',
          link:"#",
        },
        // Add more NFT objects as needed
      ];
    setIssuedNFTs(dummyIssuedNFTs);
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-5">
          <IssuerProfileCard issuerProfile={issuerProfile} />
        </div>
        {/* <div className="col-md-6">
          <IssuedNFTsList issuedNFTs={issuedNFTs} />
        </div> */}

        <div className="col-md-7">
          <CertificateIssuanceForm/>
        </div>
      </div>
    </div>
  );
};

export default IssuerDashboard;
