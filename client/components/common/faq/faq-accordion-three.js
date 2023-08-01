import { Accordion } from "react-bootstrap";

export default function FaqAccordionThree() {
	return (
		<div className="fugu--faq-section dark-version fugu--section-padding">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>If you need to know anything about NFTs, just ask us!</h2>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-four" id="accordionExample">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>What is an IDverse Resume?</Accordion.Header>
							<Accordion.Body>
							At laymen terms, IDverse Resume is a Dynamic NFT that act like your decentralized identity to showcase your digital resume.

							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>What makes an IDverse Resume valuable?</Accordion.Header>
							<Accordion.Body>
								At the most basic level, IDverse resume is non-fungible token is a one-of-a-kind, verifiable digital
								asset that is stored on blockchain and trusted.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>What’s the connection NFT & Idenity?</Accordion.Header>
							<Accordion.Body>
								With the help of Web2 Social Media, everyone is trying to create their digital identity, which has ownership issues with centralized manner. 
								An NFT stores on a Blockchain and it is tempered proof, means your identiy is absolutely secure and you own your own data.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>What can I do with IDverse Resume?</Accordion.Header>
							<Accordion.Body>
								You can share your IDverse resume with recruiters or anyone across globe for showcasing your skills and achievements.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>Do you have any more question?</Accordion.Header>
							<Accordion.Body>
								You can mail us at idverse@gmail.com for further instructions
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
