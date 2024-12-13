export default function Section3(pageName) {
    return (
        <div className="text-center">
            {pageName.pageName.pageName == 'billing' &&
                <>
                    {/* Main title container for larger screens */}
                    <div className="title-container">
                        <h1 className="huge-font fw-bold">Have a Look At Our </h1>
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">Billing Interface</span>
                        </h1>
                    </div>

                    {/* Alternative title container for very small screens */}
                    <div className="title-small-container d-none">
                        <h1 className="huge-font fw-bold">Have a Look At Our </h1>
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">Billing Interface</span>
                        </h1>
                    </div>
                </>
            }

            {pageName.pageName.pageName == 'engagement' &&
                <>
                    {/* Main title container for larger screens */}
                    <div className="title-container-engag">
                        <h1 className="huge-font fw-bold special-text-big">Have a Look At Our Parents</h1>
                        <h1 className="huge-font fw-bold special-text-big">
                            <span className="special-text special-text-big">Engagement Interface</span>
                        </h1>
                    </div>

                    {/* Alternative title container for very small screens */}
                    <div className="title-small-container-engag d-none">
                        <h1 className="huge-font fw-bold">Have a Look At Our Parents</h1>
                        <h1 className="huge-font fw-bold">
                            <span className="small-line-text">Engagement</span>
                        </h1>
                        <h1 className="huge-font fw-bold">
                            <span className="small-line-text">Interface</span>
                        </h1>
                    </div>
                </>
            }

            {pageName.pageName.pageName == 'management' &&
                <>
                    {/* Main title container for larger screens */}
                    <div className="title-container">
                        <h1 className="huge-font fw-bold special-text-big">Have a Look At Our</h1>
                        <h1 className="huge-font fw-bold">
                            <span className="special-text special-text-big">Management Interface</span>
                        </h1>
                    </div>

                    {/* Alternative title container for very small screens */}
                    <div className="title-small-container d-none">
                        <h1 className="huge-font fw-bold">Have a Look At Our </h1>
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">Management Interface</span>
                        </h1>
                    </div>
                </>
            }
        </div>
    );
}

export function ContentSection3() {
    return (
        <div className="section3Content d-flex flex-wrap align-items-center justify-content-center gap-3 mt-5">
            <div className="section3-img-left">
                <img
                    src="/images/curve-img-left.svg"
                    alt="decorative background left"
                />
            </div>

            <img
                src="/images/section-1.svg"
                alt="Childcare Management"
                className="responsive-image"
            />
            <img
                src="/images/section-1.svg"
                alt="Childcare Management"
                className="responsive-image"
            />
            <img
                src="/images/section-1.svg"
                alt="Childcare Management"
                className="responsive-image"
            />

            <div className="section3-img-right">
                <img
                    src="/images/curve-img-right.svg"
                    alt="decorative background right"
                />
            </div>
        </div>
    );
}
