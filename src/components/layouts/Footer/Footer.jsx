import "./footer.css";

export default function Footer() {
    return (
        <section className="footer">
            <div className="container pb-4 pt-5">
                <div className="footerUpBtn rounded-5 d-flex align-items-center justify-content-center">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.89551 0L17.791 9.97636L16.5456 11.373L8.89551 2.79338L1.24537 11.373L0 9.97636L8.89551 0Z" fill="white" />
                    </svg>
                </div>
                <div className="row pb-4 pt-3">
                    <div className="col-12 col-md-3 pb-md-0 pb-5">
                        <div className="d-flex flex-column align-items-start gap-5">
                            <img
                                src="./../../public/logo.png"
                                alt="Brand Logo"
                                width="150"
                                height="90"
                            />
                            <div className="d-flex flex-column gap-2">
                                <button className="px-2 rounded d-flex align-items-center gap-3">
                                    <div className="d-flex flex-column align-items-center">
                                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.03734 3.49062C4.84886 2.51641 5.24867 1.26423 5.15186 0C3.91202 0.13022 2.76677 0.72278 1.94428 1.65961C1.13211 2.58392 0.720661 3.79316 0.800567 5.021C2.05702 5.03394 3.25 4.46988 4.03734 3.49062Z" fill="black" />
                                        </svg>

                                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.769 6.58036C15.7908 4.88389 16.6802 3.31686 18.1256 2.4283C17.2096 1.12019 15.7305 0.320557 14.1344 0.270619C12.4552 0.0943589 10.8272 1.27545 9.97149 1.27545C9.09922 1.27545 7.78172 0.288119 6.36299 0.317309C4.49631 0.377617 2.79825 1.4132 1.89007 3.04518C-0.0439277 6.3936 1.39866 11.3146 3.25127 14.0213C4.17817 15.3466 5.26145 16.8271 6.6789 16.7746C8.06596 16.717 8.584 15.8901 10.2583 15.8901C11.9171 15.8901 12.4031 16.7746 13.8493 16.7412C15.3377 16.717 16.2754 15.4099 17.1698 14.072C17.8358 13.1277 18.3483 12.084 18.6882 10.9795C16.9205 10.2319 15.7711 8.49971 15.769 6.58036Z" fill="black" />
                                        </svg>
                                    </div>
                                    <p className="m-0 p-0 d-flex flex-column align-items-start">
                                        <span className="small_btn_span opacity-75">Download on the</span>
                                        <span className="bold_btn_span fw-bold">App Store</span>
                                    </p>
                                </button>
                                <button className="px-2 rounded d-flex align-items-center gap-2">
                                    <svg width='22' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 3v58l33-29z" fill="#57cef3"></path>
                                        <path d="m36 32 8-10 15 10-15 10z" fill="#fff200"></path>
                                        <path d="M36 32 7 3h4l34 20z" fill="#48ff48"></path>
                                        <path d="M36 32 7 61h4l34-20z" fill="#ff6c58"></path>
                                        <path d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" fill="#ff3333"></path>
                                        <path d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0v4z" fill="#ffffff"></path>
                                        <path d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7 0-1.9-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5l2.8 2.8z" fill="#ffffff"></path>
                                    </svg>
                                    <p className="m-0 p-0 d-flex flex-column align-items-start">
                                        <span className="small_btn_span opacity-75">GET IT ON</span>
                                        <span className="bold_btn_span fw-bold">Google Play</span>
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 d-flex flex-wrap justify-content-between gap-5">
                        <div className=" d-flex flex-column align-items-start gap-3">
                            <h4 className="fw-bold">Our Solutions</h4>
                            <div className="d-flex flex-column align-items-start gap-2">
                                <a href="" className="text-decoration-none text-black opacity-75">Preschools & Child</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Care</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Parents</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Activity</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Nannies/Caregivers</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Billing</a>
                            </div>
                        </div>
                        <div className=" d-flex flex-column align-items-start gap-3">
                            <h4 className="fw-bold">Our Product</h4>
                            <div className="d-flex flex-column align-items-start gap-2">
                                <a href="" className="text-decoration-none text-black opacity-75">Billing/Payments</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Experience Curriculum</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Freature Overview</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Demo</a>
                            </div>
                        </div>
                        <div className=" d-flex flex-column align-items-start gap-3">
                            <h4 className="fw-bold">Resources</h4>
                            <div className="d-flex flex-column align-items-start gap-2">
                                <a href="" className="text-decoration-none text-black opacity-75">Resources</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Experience Curriculum</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Freature Overview</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Pricing</a>
                            </div>
                        </div>
                        <div className=" d-flex flex-column align-items-start gap-3">
                            <h4 className="fw-bold">Company</h4>
                            <div className="d-flex flex-column align-items-start gap-2">
                                <a href="" className="text-decoration-none text-black opacity-75">Pricing</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Preschools & Child</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Care</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Parents</a>
                                <a href="" className="text-decoration-none text-black opacity-75">Montessori</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-top pt-4 d-flex flex-row-reverse align-items-center flex-wrap gap-3 justify-content-center justify-content-md-between">
                    <div className="d-flex align-items-center gap-3">
                        <a className="media d-flex align-items-center justify-content-center rounded-circle">
                            <svg width="12" height="20" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.16667 8.50004H6.83333L7.5 5.83337H5.16667V4.50004C5.16667 3.81337 5.16667 3.16671 6.5 3.16671H7.5V0.926707C7.28267 0.898041 6.462 0.833374 5.59533 0.833374C3.78533 0.833374 2.5 1.93804 2.5 3.96671V5.83337H0.5V8.50004H2.5V14.1667H5.16667V8.50004Z" />
                            </svg>
                        </a>
                        <a className="media d-flex align-items-center justify-content-center rounded-circle">
                            <svg width="20" height="20" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.78592 5.47937H8.26192V6.71271C8.61858 6.00337 9.53325 5.36604 10.9073 5.36604C13.5413 5.36604 14.1666 6.77804 14.1666 9.36871V14.1667H11.4999V9.95871C11.4999 8.48337 11.1433 7.65137 10.2353 7.65137C8.97592 7.65137 8.45258 8.54804 8.45258 9.95804V14.1667H5.78592V5.47937ZM1.21325 14.0534H3.87992V5.36604H1.21325V14.0534ZM4.26192 2.53337C4.26202 2.75689 4.21769 2.9782 4.13151 3.18443C4.04533 3.39067 3.91902 3.57772 3.75992 3.73471C3.43752 4.05512 3.00113 4.23448 2.54659 4.23337C2.09284 4.23307 1.65746 4.05417 1.33459 3.73537C1.17606 3.57785 1.05018 3.39059 0.964148 3.18433C0.87812 2.97807 0.833638 2.75686 0.833252 2.53337C0.833252 2.08204 1.01325 1.65004 1.33525 1.33137C1.65784 1.01215 2.09341 0.833175 2.54725 0.833374C3.00192 0.833374 3.43792 1.01271 3.75992 1.33137C4.08125 1.65004 4.26192 2.08204 4.26192 2.53337Z" />
                            </svg>
                        </a>
                        <a className="media d-flex align-items-center justify-content-center rounded-circle">
                            <svg width="50" height="50" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="none" />
                                <path d="M14.6999 10.8334H20.2999C22.4333 10.8334 24.1666 12.5667 24.1666 14.7V20.3C24.1666 21.3255 23.7592 22.309 23.0341 23.0342C22.3089 23.7593 21.3254 24.1667 20.2999 24.1667H14.6999C12.5666 24.1667 10.8333 22.4334 10.8333 20.3V14.7C10.8333 13.6745 11.2406 12.691 11.9658 11.9659C12.6909 11.2408 13.6744 10.8334 14.6999 10.8334ZM14.5666 12.1667C13.9301 12.1667 13.3196 12.4196 12.8695 12.8697C12.4194 13.3197 12.1666 13.9302 12.1666 14.5667V20.4334C12.1666 21.76 13.2399 22.8334 14.5666 22.8334H20.4333C21.0698 22.8334 21.6802 22.5805 22.1303 22.1304C22.5804 21.6803 22.8333 21.0699 22.8333 20.4334V14.5667C22.8333 13.24 21.7599 12.1667 20.4333 12.1667H14.5666ZM20.9999 13.1667C21.2209 13.1667 21.4329 13.2545 21.5892 13.4108C21.7455 13.5671 21.8333 13.779 21.8333 14C21.8333 14.2211 21.7455 14.433 21.5892 14.5893C21.4329 14.7456 21.2209 14.8334 20.9999 14.8334C20.7789 14.8334 20.5669 14.7456 20.4107 14.5893C20.2544 14.433 20.1666 14.2211 20.1666 14C20.1666 13.779 20.2544 13.5671 20.4107 13.4108C20.5669 13.2545 20.7789 13.1667 20.9999 13.1667ZM17.4999 14.1667C18.384 14.1667 19.2318 14.5179 19.8569 15.143C20.4821 15.7681 20.8333 16.616 20.8333 17.5C20.8333 18.3841 20.4821 19.2319 19.8569 19.8571C19.2318 20.4822 18.384 20.8334 17.4999 20.8334C16.6159 20.8334 15.768 20.4822 15.1429 19.8571C14.5178 19.2319 14.1666 18.3841 14.1666 17.5C14.1666 16.616 14.5178 15.7681 15.1429 15.143C15.768 14.5179 16.6159 14.1667 17.4999 14.1667ZM17.4999 15.5C16.9695 15.5 16.4608 15.7108 16.0857 16.0858C15.7106 16.4609 15.4999 16.9696 15.4999 17.5C15.4999 18.0305 15.7106 18.5392 16.0857 18.9143C16.4608 19.2893 16.9695 19.5 17.4999 19.5C18.0304 19.5 18.5391 19.2893 18.9141 18.9143C19.2892 18.5392 19.4999 18.0305 19.4999 17.5C19.4999 16.9696 19.2892 16.4609 18.9141 16.0858C18.5391 15.7108 18.0304 15.5 17.4999 15.5Z" />
                            </svg>

                        </a>
                        <a className="media d-flex align-items-center justify-content-center rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1227">
                                <g><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black" /></g>
                                <defs><clipPath id="clip0_1_2"><rect width="1200" height="1227" fill="white" /></clipPath></defs>
                            </svg>
                        </a>
                        <a className="media d-flex align-items-center justify-content-center rounded-circle">
                            <svg width="45" height="45" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="none" />
                                <path d="M15.7143 19.6429L19.4214 17.5L15.7143 15.3571V19.6429ZM23.9714 14.05C24.0643 14.3857 24.1286 14.8357 24.1714 15.4071C24.2214 15.9786 24.2429 16.4714 24.2429 16.9L24.2857 17.5C24.2857 19.0643 24.1714 20.2143 23.9714 20.95C23.7929 21.5929 23.3786 22.0071 22.7357 22.1857C22.4 22.2786 21.7857 22.3429 20.8429 22.3857C19.9143 22.4357 19.0643 22.4571 18.2786 22.4571L17.1429 22.5C14.15 22.5 12.2857 22.3857 11.55 22.1857C10.9071 22.0071 10.4929 21.5929 10.3143 20.95C10.2214 20.6143 10.1571 20.1643 10.1143 19.5929C10.0643 19.0214 10.0429 18.5286 10.0429 18.1L10 17.5C10 15.9357 10.1143 14.7857 10.3143 14.05C10.4929 13.4071 10.9071 12.9929 11.55 12.8143C11.8857 12.7214 12.5 12.6571 13.4429 12.6143C14.3714 12.5643 15.2214 12.5429 16.0071 12.5429L17.1429 12.5C20.1357 12.5 22 12.6143 22.7357 12.8143C23.3786 12.9929 23.7929 13.4071 23.9714 14.05Z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-black m-0 p-0">© 2024 Tiflicare - All rights reserved</p>
                </div>
            </div>
        </section>
    );
}