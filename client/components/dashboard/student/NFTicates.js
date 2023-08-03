import React from 'react';
import Link from 'next/link';

const NFTicates = ({ nfts }) => {
  return (
    <div className="fugu--nft-list">
      <div className="container">
        <div className="fugu--section-title">
          <div className="fugu--default-content content-sm">
            <h2>Your NFTicates</h2>
            <p>Here is the list of your certificate nfts:</p>
          </div>
        </div>

        <div className="row">
          {nfts.map((nft, index) => (
            <div className="col-md-6" key={index}>
              <div className="fugu--card-wrap">
                <div className="fugu--card-thumb">
                  <img src={nft.image} alt={nft.name} />
                </div>
                <div className="fugu--card-data">
                  <h3>{nft.name}</h3>
                  <p>{nft.description}</p>
                  <div className="fugu--card-footer">
                    <div className="fugu--card-footer-data">
                      <span>Issued:</span>
                      <h4>{nft.issuedDays} Days</h4>
                    </div>
                    <Link href={nft.link} legacyBehavior>
                      <a className="fugu--btn btn-sm bg-white">View NFT</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fugu--shape1">
        <img src="/images/shape2/shape1.png" alt="" />
      </div>
    </div>
  );
};

export default NFTicates;
