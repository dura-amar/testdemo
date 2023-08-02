import React from 'react';

const ProfileCard = ({ profileDetails }) => {
  return (
    <div className="col-lg-6">
    <div className="fugu--hero-right">
      <div className="fugu--card-wrap">
        <div className="fugu--card-thumb">
          <img src="/images/all-img/v3/hero-thumb2.png" alt="" />
        </div>
        <div className="fugu--card-data">
          <h3>#1031</h3>
          <p>{profileDetails.fullName} {profileDetails.email}</p>
          <div className="fugu--card-footer">
            <div className="fugu--card-footer-data">
              <span>Skills</span>
              <h4>3</h4>
            </div>
            <div className="fugu--card-footer-data">
              <span>Education</span>
              <h4>13</h4>
            </div>
            <div className="fugu--card-footer-data">
              <span>Experience</span>
              <h4>5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ProfileCard;
