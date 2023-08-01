/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeThree() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
					<div className="row">
						<div className="col-lg-3">
							<div className="fugu--textarea">
								<div className="fugu--footer-logo">
									<img src="/images/logo/logo-white.svg" alt="" className="light-version-logo" />
								</div>
								<p>
									Discover Identity in Decentralized Way in Web3 World!
								</p>
								<div className="fugu--social-icon">
									<ul>
										<li>
											<Link href="#">
												<img src="/images/social2/twitter.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/facebook.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/instagram.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="#">
												<img src="/images/social2/github.svg" alt="" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Menu</span>
								<ul>
									<li>
										<Link href="#">Home </Link>
									</li>
									<li>
										<Link href="#">About </Link>
									</li>
									<li>
										<Link href="#">Team </Link>
									</li>
									<li>
										<Link href="#">Contact </Link>
									</li>

								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Links</span>
								<ul>
									<li>
										<Link href="#">White Paper </Link>
									</li>
									<li>
										<Link href="#">Community </Link>
									</li>
									<li>
										<Link href="#">Discord (coming soon) </Link>
									</li>

								</ul>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-4 col-sm-4">
							<div className="fugu--footer-menu">
								<span>Contact</span>
							</div>
							<div className="fugu--info">
								<ul>
									<li>
										<Link href="#">
											<img src="/images/svg2/phone.svg" alt="" />
											+91 99549 XXXXX
										</Link>
									</li>
									<li>
										<Link href="#">
											<img src="/images/svg2/mail.svg" alt="" />
											idverse@gmail.com
										</Link>
									</li>
									<li>
										<Link href="#">
											<img src="/images/svg2/map.svg" alt="" />
											India & Nepal
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--footer-bottom">
					assets <p>&copy; Copyright 2023, All Rights Reserved by IDverse</p>
					<div className="fugu--footer-menu">
						<ul>
							<li>
								<Link href="#">Terms </Link>
							</li>
							<li>
								<Link href="#"> Privacy Policy </Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
