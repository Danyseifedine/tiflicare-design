import PricingPackage from "./PricingPackage";
import { PricingPackages } from "./PricingPackage";
import PricingQuestion from "./PricingQuestion";
import { PricingQuestions } from "./PricingQuestion";
import './style.css';

export default function Pricing() {
    return (
        <>
            <section className="sectionPackages">
                <div className="container">
                    <PricingPackage />
                    <PricingPackages />
                </div>
            </section>

            <section className="sectionQuestions">
                <div className="container">
                    <PricingQuestion />
                    <PricingQuestions />
                </div>
            </section>
        </>
    );
}