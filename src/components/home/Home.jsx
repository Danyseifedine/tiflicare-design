import { Container } from "react-bootstrap";
import HeroSection from "./heroSection/HeroSection";
import { HeroSectionImage } from "./heroSection/HeroSection";
import SecondSection from "./secondSection/SecondSection";
import ThirdSection from "./thirdSection/ThirdSection";
import FourthSection from "./fourthSection/FourthSection";
import FifthSection from "./fifthSection/FifthSection";
// import Video from "./video/Video";
import LastSection from "./lastSection/lastSection";
export default function Home() {
  return (
    <>
      <section className="section-home">
        <Container>
          <HeroSection />
        </Container>
        <HeroSectionImage />
      </section>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <Video /> */}
      <FifthSection />
      <LastSection />
    </>
  );
}
