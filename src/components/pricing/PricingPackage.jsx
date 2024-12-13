import { useState } from "react";
import DefaultButton from "../button/Button";

export default function PricingPackage() {
    return (
        <>
            <img
                src="/images/left-point.svg"
                className="pack-left-point"
                alt="decorative left pointer"
            />
            <div className="title-container-package d-flex align-items-lg-center justify-content-start justify-content-lg-center flex-column">
                <h1 className="huge-font fw-bold text-pricing">
                    Find your <span className="special-text text-pricing">perfect package</span>
                </h1>
                <p className="pt-3">Eget sollicitudin dignissim blandit luctus nunc faucibus. Diam arcu sodales varius varius tempus maecenas massa nec. In risus tortor ridiculus erat.</p>
            </div>

            <div className="title-small-container-package text-start d-none">
                <h1 className="huge-font fw-bold">
                    Find your <span className="small-line-text">perfect</span> <span className="small-line-text">package</span>
                </h1>
                <p className="pt-3">Eget sollicitudin dignissim blandit luctus nunc faucibus. Diam arcu sodales varius varius tempus maecenas massa nec. In risus tortor ridiculus erat.</p>
            </div>

            <img
                src="/images/right-point.svg"
                className="pack-right-point"
                alt="decorative right pointer"
            />
        </>
    );
}

export function PricingPackages() {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="toggle d-flex align-items-center justify-content-center gap-3 pt-5">
                <p className={`p-0 m-0 ${isActive ? '' : 'fw-bold'}`}>Month</p>
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={`toggleBtn rounded-5 p-1`}
                >
                    <div className={`rounded-5 ${isActive ? 'translate-x' : 'translate-x-0'}`}
                    />
                </button>
                <p className={`p-0 m-0 ${isActive ? 'fw-bold' : ''}`}>Year</p>
            </div>

            <div className="packagesCards d-flex flex-wrap align-items-center justify-content-center gap-4 mt-5">
                <div className="packageCard first rounded-3 py-4 px-3">
                    <div className="packageCardHead d-flex flex-column align-items-center justify-content-center gap-2 pb-4">
                        <h3 className="fw-bold">Foundation</h3>
                        <p className="p-0 m-0">Our basic, must-have features.</p>
                        <div className="packageSalary d-flex align-items-center gap-2">
                            <span className="fw-bold fs-4 mb-3">$</span>
                            <p className="m-0 p-0 fw-bold fs-1">97</p>
                            <span className="mt-3 text-secondary">/month</span>
                        </div>
                        <p className="p-0 m-0">All prices excl. VAT (20%).</p>
                    </div>

                    <DefaultButton text={"Get a Demo"} classe={"mt-4 bg-transparent"} />

                    <div className="packageInfo d-flex flex-column gap-3 mt-4">
                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Basic communication</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Private and team inbox messaging</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Basic daily logs (meals, sleep, nappies)</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">News feed and parent messaging</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Basic child development</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Assessments and progress reports</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Group observations</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Simple finances</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Basic payment and invoicing features</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Batch invoicing</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Limited admin</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Enquiries website form</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Enquiry tracking and statistics</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="packageCard middle rounded-3 py-4 px-3 mt-3 mt-lg-0">
                    <div className="mostPopular w-100 text-center">
                        <span className="py-2 px-4 rounded-3">Most Popular</span>
                    </div>

                    <div className="packageCardHead d-flex flex-column align-items-center justify-content-center gap-2 pb-4">
                        <h3 className="fw-bold">Premium</h3>
                        <p className="p-0 m-0">For settings ready to level up.</p>
                        <div className="packageSalary d-flex align-items-center gap-2">
                            <span className="fw-bold fs-4 mb-3">$</span>
                            <p className="m-0 p-0 fw-bold fs-1">159</p>
                            <span className="mt-3 text-secondary">/month</span>
                        </div>
                        <p className="p-0 m-0">All prices excl. VAT (20%).</p>
                    </div>

                    <DefaultButton text={"Get a Demo"} classe={"mt-4"} />

                    <div className="packageInfo d-flex flex-column gap-3 mt-4">
                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Basic communication</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Private and team inbox messaging</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Basic daily logs (meals, sleep, nappies)</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">News feed and parent messaging</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Basic child development</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Assessments and progress reports</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Group observations</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Simple finances</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Basic payment and invoicing features</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Batch invoicing</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Limited admin</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Enquiries website form</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Enquiry tracking and statistics</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="packageCard last rounded-3 py-4 px-3">
                    <div className="packageCardHead d-flex flex-column align-items-center justify-content-center gap-2 pb-4">
                        <h3 className="fw-bold">Professional</h3>
                        <p className="p-0 m-0">The powerful, customisable platform.</p>
                        <div className="packageSalary d-flex align-items-center gap-2">
                            <span className="fw-bold fs-4 mb-3">$</span>
                            <p className="m-0 p-0 fw-bold fs-1">216</p>
                            <span className="mt-3 text-secondary">/month</span>
                        </div>
                        <p className="p-0 m-0">All prices excl. VAT (20%).</p>
                    </div>

                    <DefaultButton text={"Get a Demo"} classe={"mt-4 bg-transparent"} />

                    <div className="packageInfo d-flex flex-column gap-3 mt-4">
                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Basic communication</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Private and team inbox messaging</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Basic daily logs (meals, sleep, nappies)</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">News feed and parent messaging</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Basic child development</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Assessments and progress reports</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Group observations</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Simple finances</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Basic payment and invoicing features</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Batch invoicing</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <h5 className="fw-bold">Limited admin</h5>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Enquiries website form</p>
                            </div>
                            <div className="packageOption d-flex align-items-center gap-2">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1354 0.359939C14.6559 -0.120131 13.8774 -0.119828 13.3974 0.359939L5.57505 8.18254L2.09837 4.70589C1.61831 4.22583 0.840122 4.22583 0.360052 4.70589C-0.120017 5.18596 -0.120017 5.96415 0.360052 6.44422L4.70571 10.7899C4.94559 11.0298 5.26014 11.15 5.57472 11.15C5.8893 11.15 6.20415 11.0301 6.44403 10.7899L15.1354 2.09823C15.6154 1.61849 15.6154 0.839978 15.1354 0.359939Z" fill="#674387" />
                                </svg>
                                <p className="p-0 m-0">Enquiry tracking and statistics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
