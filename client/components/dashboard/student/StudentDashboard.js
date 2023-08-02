import React from "react";
import ProfileCard from "./ProfileCard";
import NFTicates from "./NFTicates";

export default function StudentDashboard() {
  const profileDetails = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    // Add other profile details here
  };

  const nfts = [
    {
      name: 'NFT 1',
      description: 'Description of NFT 1',
      image: '/images/all-img/v3/hero-thumb2.png',
      issuedDays: '120',
      link: '/nfts/nft1',
    },
    {
      name: 'NFT 2',
      description: 'Description of NFT 2',
      image: '/images/all-img/v3/hero-thumb2.png',
      issuedDays: '2',
      link: '/nfts/nft2',
    }
  ];

  return (
    <>
      <ProfileCard profileDetails={profileDetails} />
      <NFTicates nfts={nfts} />
    </>
  );
}
