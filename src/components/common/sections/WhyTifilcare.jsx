export default function WhySection() {
    return (
        <div className="text-center">
            {/* Main title container for larger screens */}
            <div className="title-container">
                <h1 className="huge-font fw-bold">Why Child Care Centers</h1>
                <h1 className="huge-font fw-bold">
                    <span className="special-text">Love Tiflicare</span>
                </h1>
            </div>

            {/* Alternative title container for very small screens */}
            <div className="title-small-container d-none">
                <h1 className="huge-font fw-bold">Why Child Care Centers</h1>
                <h1 className="huge-font fw-bold">
                    <span className="special-text">Love Tiflicare</span>
                </h1>
            </div>
        </div>
    );
}

export function WhyContentSection() {
    return (
        <div className="whyContent d-flex flex-wrap align-items-center justify-content-center justify-content-xl-between gap-5 mt-5">
            <div className="">
                <img src="./images/whyTifilcare-img.svg" alt="" className="responsive-img" />
            </div>
            <div className="whyCards d-flex flex-column gap-3">
                <div className="whyCard d-flex align-items-center gap-3 p-3 rounded-2">
                    <div className="whyNumber fw-bold d-flex align-items-center justify-content-center rounded-3">01</div>
                    <p className="p-0 m-0">A Comprehensive <span className="fw-bold">Suite of Solutions</span></p>
                </div>
                <div className="whyCard d-flex align-items-center gap-3 p-3 rounded-2">
                    <div className="whyNumber fw-bold d-flex align-items-center justify-content-center rounded-3">02</div>
                    <p className="p-0 m-0">Equipped for Any <span className="fw-bold">Center Size & Type</span></p>
                </div>
                <div className="whyCard d-flex align-items-center gap-3 p-3 rounded-2">
                    <div className="whyNumber fw-bold d-flex align-items-center justify-content-center rounded-3">03</div>
                    <p className="p-0 m-0">Priced and Sized <span className="fw-bold">Right for Your Needs</span></p>
                </div>
                <div className="whyCard d-flex align-items-center gap-3 p-3 rounded-2">
                    <div className="whyNumber fw-bold d-flex align-items-center justify-content-center rounded-3">04</div>
                    <p className="p-0 m-0"><span className="fw-bold">Designed Specifically</span> for Child Care Professionals</p>
                </div>
                <div className="whyCard d-flex align-items-center gap-3 p-3 rounded-2">
                    <div className="whyNumber fw-bold d-flex align-items-center justify-content-center rounded-3">05</div>
                    <p className="p-0 m-0"><span className="fw-bold">End-to-End Capabilities</span> to Keep Your Data Secure</p>
                </div>
            </div>
            <img
                src="/images/right-point.svg"
                className="why-right-point"
                alt="decorative right pointer"
            />
        </div>
    );
}
