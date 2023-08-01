import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Team() {
	return (
		<div className="fugu--team-section fugu--section-padding2">
			<div className="container">
				<div className="fugu--section-title-wrap">
					<div className="fugu--section-title">
						<div className="fugu--default-content content-sm">
							<h2>Meet our dynamic team</h2>
							<p>
								Builders that trusted in a decentralized tempered proof resume for your future.
							</p>
						</div>
					</div>
					<div className="fugu--section-button">
						<div className="fugu--portfolio-btn">
							<Link href={"team.html"} legacyBehavior>
								<a className="fugu--outline-btn">
									<span>View All Members</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team1.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Bristin Baruah</h4>
									<p>Mentor</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.10s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team2.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Mohit Agarwal</h4>
									<p>Team Lead</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.20s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team3.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Amar Dura</h4>
									<p>Smart Contranct</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team4.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Jishantu Kripal</h4>
									<p>Frontend & Documentation</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.40s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team5.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Rahul Barman</h4>
									<p>Marketing</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.50s">
							<div className="fugu--team-left">
								<div className="fugu--team-thumb">
									<img src="/images/all-img/v3/team6.jpg" alt="" />
								</div>
								<div className="fugu--team-data">
									<h4>Abhinav Sarma</h4>
									<p>Backend</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--shape3">
				<img src="/images/shape2/shape3.png" alt="" />
			</div>
		</div>
	);
}
