import Section1 from "./sections/Section1";
import { ImageSection1 } from "./sections/Section1";
import Section2 from "./sections/Section2";
import { CardSection2 } from "./sections/Section2";
import WhyTifilcare from "./sections/WhyTifilcare";
import { WhyContentSection } from "./sections/WhyTifilcare";
import Section3 from "./sections/Section3";
import { ContentSection3 } from "./sections/Section3";
import RequestTalk from "./sections/RequestTalk";
import "./style/page.css";

const Content = (pageName) => {    
    return (
        <>
            {/* Section1 */}
            <section className="section1">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center">
                        <ImageSection1 pageName={pageName} />
                        <Section1 pageName={pageName} />
                    </div>
                </div>
            </section>
            {/* section2 */}
            <section className="section2">
                <div className="container">
                    <Section2 pageName={pageName} />
                    <CardSection2 pageName={pageName} />
                </div>
            </section>
            {/* Why */}
            <section className="section-why">
                <div className="container">
                    <WhyTifilcare />
                    <WhyContentSection />
                </div>
            </section>
            {/* Section3 */}
            <section className="section3">
                <div className="container">
                    <Section3 pageName={pageName} />
                    <ContentSection3 />
                </div>
            </section>
            {/* Request Talk */}
            <section className="section-requestTalk">
                <div className="container">
                    <RequestTalk />
                </div>
            </section>
        </>
    );
}

export default Content;