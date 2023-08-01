import AboutHeroSection from "../components/about-dark/about-hero-section";
import AboutSection from "../components/about-dark/about-section";
import FeatureSection from "../components/about-dark/feature-section";
import NewsletterSection from "../components/about-dark/newsletter-section";
import VisionSection from "../components/about-dark/vision-section";
import FaqAccordionThree from "../components/common/faq/faq-accordion-three";
import VideoSectionFive from "../components/common/video/video-section-five";
import TextSliderOne from "./../components/common/sliders/text/text-slider-one";
import Team from "./../components/home-three/Team";

export default function About() {
	return (
		<>
			<AboutHeroSection />
			<AboutSection />
			<FeatureSection />
			<VisionSection />
			<Team />
			<FaqAccordionThree />
			<NewsletterSection />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
