const Section1 = (pageName) => {
    return (
        <div className="text-center text-xl-start col-12 col-xl-6 pt-5 pt-xl-0">

            {pageName.pageName.pageName == 'billing' &&
                <>
                    {/* Main title container for larger screens */}
                    <div className="title-container pe-md-5">
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">
                                Automated Billing
                            </span>
                        </h1>
                        <h1 className="huge-font fw-bold">Software That Makes</h1>
                        <h1 className="huge-font fw-bold">Accounting Easy.</h1>
                    </div>

                    {/* Alternative title container for very small screens */}
                    <div className="title-small-container d-none">
                        <h1 className="huge-font fw-bold">
                            <div className="div-text-280">
                                <span className="small-line-text-280">
                                    Automated
                                </span>
                                <span className="small-line-text-280">
                                    Billing
                                </span>
                            </div>

                            <div className="div-text">
                                <span className="small-line-text">
                                    Automated Billing
                                </span>
                            </div>
                        </h1>
                        <h1 className="huge-font fw-bold">Software That Makes</h1>
                        <h1 className="huge-font fw-bold">Accounting Easy.</h1>
                    </div>

                    <p className="pt-4 pe-md-5">
                        Let Tiflicare do the work for you. Our platform automates accounting processes like billing, invoicing, and more to save you time and take the stress out of managing your business.
                    </p>
                </>
            }

            {pageName.pageName.pageName == 'engagement' &&
                <>
                    {/* Main title container for larger screens */}
                    <div className="title-container pe-md-3">
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">
                                Include Parents
                            </span> in the
                        </h1>
                        <h1 className="huge-font fw-bold">Moments That Matter.</h1>
                    </div>

                    {/* Alternative title container for very small screens */}
                    <div className="title-small-container d-none">
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">
                                Include Parents
                            </span> in the
                        </h1>
                        <h1 className="huge-font fw-bold">Moments That Matter.</h1>
                    </div>

                    <p className="pt-4">
                        Families never have to miss a milestone with Tiflicar. They can see their children’s activities, follow along with daily notes, view photos and videos, and even pay their bill.
                    </p>
                </>
            }

            {pageName.pageName.pageName == 'management' &&
                <>
                    {/* Main title container for larger screens */}
                    <div className="pe-md-3">
                        <h1 className="huge-font fw-bold">Manage Your</h1>
                        <h1 className="huge-font fw-bold">
                            <span className="special-text">
                                Classrooms
                            </span> at Scale
                        </h1>
                    </div>

                    <p className="pt-4">
                        Tiflicare’s Classroom Management solution helps educators efficiently manage classroom activities, monitor child development, and maintain organized records.
                    </p>
                </>
            }

        </div>
    );
}

export default Section1;

export function ImageSection1(pageName) {
    return (
        <div className="col-12 col-xl-6 text-center">
            <img
                src="/images/left-point.svg"
                className="auto-left-point"
                alt="decorative left pointer"
            />

            {pageName.pageName.pageName == 'billing' &&
                <img
                    src="/images/billing-img.svg"
                    alt="Automated Image"
                    className="section1-img responsive-img"
                />
            }

            {pageName.pageName.pageName == 'engagement' &&
                <img
                    src="/images/engagement-img.svg"
                    alt="Automated Image"
                    className="section1-img responsive-img"
                />
            }

            {pageName.pageName.pageName == 'management' &&
                <img
                    src="/images/management-img.svg"
                    alt="Automated Image"
                    className="section1-img responsive-img"
                />
            }

            <img
                src="/images/right-point.svg"
                className="auto-right-point"
                alt="decorative right pointer"
            />
        </div>
    );
}
