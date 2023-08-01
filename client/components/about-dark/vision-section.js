/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function VisionSection() {
	return (
		<div className="fugu--vision-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4">
						<div className="fugu--swiper-slider-wrap">
							<div className="fugu--swiper-slider">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="fugu--card-wrap">
											<div className="fugu--card-thumb">
												<img src="/images/all-img/v3/card5.jpg" alt="" />
											</div>
											<div className="fugu--card-data">
												<h3>IDverse Resume</h3>
												<p>Your Name Here</p>
												<div className="fugu--card-footer">
													<div className="fugu--card-footer-data">
														<span>Mint Price:</span>
														<h4>FREE</h4>
													</div>
													<Link href={"/"} legacyBehavior>
														<a className="fugu--btn btn-sm bg-white">Claim Now</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 offset-xl-2 col-lg-7 offset-lg-1 d-flex align-items-center">
						<div className="fugu--default-content content-sm">
							<h2>Our vision is to build a strong identity by utilizing NFT</h2>
							<p>
								We're excited about a brand new type of digital identity called IDverse Resume. NFTs have exciting new
								properties: unique, provably scarce, tradeable, and usable across multiple applications & trustable.
							</p>
							<p>
								Using blockchain technology to digitally signify ownership can make a students
								ownership of his identity more secure. Blockchain tech can also make identity
								transparent.
							</p>
							<div className="fugu--btn-wrap">
								<Link legacyBehavior href={"/"}>
									<a className="fugu--btn bg-gradient">Join Community</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
