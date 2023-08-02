/* eslint-disable @next/next/no-img-element */
import Link from "next/Link";
import CountUp from "react-countup";

export default function HeroSection() {
	return (
		<div className="fugu--hero-section" style={{ backgroundImage: "url(/images/all-img/v3/hero-bg.png)" }}>
			<div id="fugu--counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="fugu--hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								Showcase your resume in the modern way
							</h1>
							<p className="wow fadeInUpX" data-wow-delay="0.10s">
								The Decentralized Identity Management Platform, We make resume easier and more efficient, verified and Decentralized.
							</p>
							<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-gray active">Get Started</a>
								</Link>
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-gray">View More</a>
								</Link>
							</div>
							<div className="fugu--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter">
											<CountUp end={10} />
										</span>
										<strong>+</strong>
									</h2>
									<p>Students</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="86" className="fugu--counter">
											<CountUp end={5} />
										</span>
										<strong>+</strong>
									</h2>
									<p>Recruiters</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="32" className="fugu--counter">
											<CountUp end={25} />
										</span>
										<strong>+</strong>
									</h2>
									<p>Achievement NFT</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="fugu--hero-right" id="rotateOne">
							<div className="fugu--card-wrap">
								<div className="fugu--card-thumb">
									<img src="/images/all-img/v3/hero-thumb2.png" alt="" />
								</div>
								<div className="fugu--card-data">
									<h3>IDverse Resume</h3>
									<p>Your Name Here</p>
									<div className="fugu--card-footer">
										<div className="fugu--card-footer-data">
											<span>*Mint Price:</span>
											<h4>FREE</h4>
										</div>
										<Link href={"#"} legacyBehavior>
											<a className="fugu--btn btn-sm bg-white">Collect Now</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="fugu--hero-shape2"></div>
			</div>
		</div>
	);
}
