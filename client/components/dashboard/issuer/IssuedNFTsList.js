import React from "react";
import Link from "next/link";

const IssuedNFTsList = ({ issuedNFTs }) => {
  return (
    <div className="">
        <h4 className="fugu--section-title" style={{color:"white"}}>Issued NFTs List</h4>
        <div className="row">
          {issuedNFTs.map((nft) => (
            <div className="col-md-6 mb-4" key={nft.id}>
                <div className="fugu--card-wrap">
                  <div className="fugu--card-thumb">
                    <img src={nft.imageUrl} alt={nft.name} />
                  </div>
                  <div className="fugu--card-data">
                    <h3>{nft.name}</h3>
                    <p>{nft.description}</p>
                    <div className="fugu--card-footer">
                      <Link
                      className="fugu--btn btn-sm bg-white" href="#"
                      >
                        View NFT
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default IssuedNFTsList;
