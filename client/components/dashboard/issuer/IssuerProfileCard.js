import React from "react";
import Link from "next/link";

const IssuerProfileCard = ({ issuerProfile }) => {
  return (
    <div className="col-lg-8">
      <div className="">
        <div className="fugu--card-wrap">
          <div className="fugu--card-thumb">
            <img src="/images/all-img/v3/hero-thumb2.png" alt="" />
          </div>
          <div className="fugu--card-data">
            <h3>Issuer Profile</h3>
            <p>Name: {issuerProfile.name}</p>
            <p>Organization: {issuerProfile.organization}</p>
            <p>Contact Email: {issuerProfile.contactEmail}</p>
            {/* Add other issuer profile details here */}
            <div className="fugu--card-footer">
              <div className="fugu--card-footer-data">
                {/* Add any additional footer data here if needed */}
              </div>
              <Link href={"#"} legacyBehavior>
                <a className="fugu--btn btn-sm bg-white">Edit</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuerProfileCard;
