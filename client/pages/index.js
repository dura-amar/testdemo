import dynamic from "next/dynamic";
import Head from "next/head";

//import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import TextSliderTwo from "../components/common/sliders/text/text-slider-two";
import HeroSection from "../components/home-three/hero-section";
import NewsLetter from "../components/home-three/news-letter";
import NftRoadMap from "../components/home-three/nft-roadmap";
import Team from "../components/home-three/Team";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";

const FilterGalarryOne = dynamic(() => import("../components/common/filter-gallary/filter-gallary-one"), {
	ssr: false,
});

export default function IndexThree() {
	return (
		<>
			<Head>
				<title>Idverse | Decentalized Resume</title>
			</Head>
			<HeroSection />
			<TextSliderTwo />
			<NftRoadMap />
			<ClientSliderOne/>
			<CardSliderOne />
			<Team />
			<NewsLetter />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
