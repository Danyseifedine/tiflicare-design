import { useState } from "react";

export default function PricingQuestion() {
    return (
        <>
            <div className="text-center">
                <h1 className="huge-font fw-bold">
                    Frequently asked <span className="special-text">questions</span>
                </h1>
            </div>
        </>
    );
}

export function PricingQuestions() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            number: "01",
            title: "Orci sollicitudin aliquet elementum vitae.",
            content: `Rutrum suscipit tempor orci eu placerat. Laoreet leo euismod nec netus imperdiet. Urna pretium eu facilisi arcu proin blandit et tincidunt. Proin vel at lacus at. Et ultrices elit sed imperdiet felis cursus accumsan.
Vulputate vel magna tincidunt viverra. Purus rhoncus eget ac ut ridiculus scelerisque nam. Feugiat pellentesque amet aliquet tellus scelerisque lacus nullam. Mauris pretium accumsan id ipsum tempor id dui tempus donec. Phasellus tincidunt condimentum sed sit. Cras aenean vitae aliquet nec egestas. Amet gravida sed eget adipiscing.`,
            isTextShowing: false,
        },
        {
            id: 2,
            number: "02",
            title: "Etiam tincidunt diam vel urna viverra gravida.",
            content: `Rutrum suscipit tempor orci eu placerat. Laoreet leo euismod nec netus imperdiet. Urna pretium eu facilisi arcu proin blandit et tincidunt. Proin vel at lacus at. Et ultrices elit sed imperdiet felis cursus accumsan.
Vulputate vel magna tincidunt viverra. Purus rhoncus eget ac ut ridiculus scelerisque nam. Feugiat pellentesque amet aliquet tellus scelerisque lacus nullam. Mauris pretium accumsan id ipsum tempor id dui tempus donec. Phasellus tincidunt condimentum sed sit. Cras aenean vitae aliquet nec egestas. Amet gravida sed eget adipiscing.`,
            isTextShowing: false,
        },
        {
            id: 3,
            number: "03",
            title: "Phasellus tincidunt condimentum sed sit.",
            content: `Rutrum suscipit tempor orci eu placerat. Laoreet leo euismod nec netus imperdiet. Urna pretium eu facilisi arcu proin blandit et tincidunt. Proin vel at lacus at. Et ultrices elit sed imperdiet felis cursus accumsan.
Vulputate vel magna tincidunt viverra. Purus rhoncus eget ac ut ridiculus scelerisque nam. Feugiat pellentesque amet aliquet tellus scelerisque lacus nullam. Mauris pretium accumsan id ipsum tempor id dui tempus donec. Phasellus tincidunt condimentum sed sit. Cras aenean vitae aliquet nec egestas. Amet gravida sed eget adipiscing.`,
            isTextShowing: false,
        },
        {
            id: 4,
            number: "04",
            title: "Mauris pretium accumsan id ipsum tempor.",
            content: `Rutrum suscipit tempor orci eu placerat. Laoreet leo euismod nec netus imperdiet. Urna pretium eu facilisi arcu proin blandit et tincidunt. Proin vel at lacus at. Et ultrices elit sed imperdiet felis cursus accumsan.
Vulputate vel magna tincidunt viverra. Purus rhoncus eget ac ut ridiculus scelerisque nam. Feugiat pellentesque amet aliquet tellus scelerisque lacus nullam. Mauris pretium accumsan id ipsum tempor id dui tempus donec. Phasellus tincidunt condimentum sed sit. Cras aenean vitae aliquet nec egestas. Amet gravida sed eget adipiscing.`,
            isTextShowing: false,
        },
    ]);

    const toggleText = (id) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id ? { ...q, isTextShowing: !q.isTextShowing } : q
            )
        );
    };

    return (
        <div className="questions d-flex flex-column gap-4 mt-5 px-0 px-lg-5">
            <div className="pricing-img-left">
                <img
                    src="/images/curve-img-left.svg"
                    alt="decorative background left"
                />
            </div>

            {questions.map((question) => (
                <div key={question.id} className="questionContent w-100 py-2 px-2 px-md-4 rounded-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="w-100 d-flex align-items-center">
                            <p className="questionNumber p-0 m-0 fw-bold">{question.number}</p>
                            <p className="questionTitle p-0 m-0 ps-3 fw-bold">{question.title}</p>
                        </div>
                        <button
                            className="border-0"
                            onClick={() => toggleText(question.id)}
                        >
                            <svg
                                className={`${question.isTextShowing ? 'rotate' : 'rotate-0'}`}
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.75635 7.69458C7.55916 7.89014 7.29175 8 7.01292 8C6.7341 8 6.46668 7.89014 6.26949 7.69458L0.321018 1.79348C0.220587 1.69725 0.140479 1.58214 0.08537 1.45487C0.0302606 1.32761 0.00125297 1.19072 3.97018e-05 1.05222C-0.00117356 0.913706 0.0254321 0.776345 0.0783037 0.648146C0.131175 0.519946 0.209254 0.403476 0.307985 0.305532C0.406715 0.207587 0.52412 0.13013 0.653348 0.0776796C0.782577 0.0252291 0.921041 -0.00116422 1.06066 3.93863e-05C1.20028 0.00124299 1.33826 0.0300196 1.46655 0.0846901C1.59484 0.139361 1.71087 0.21883 1.80787 0.318461L7.01292 5.48206L12.218 0.318461C12.4163 0.128443 12.6819 0.0232993 12.9576 0.0256761C13.2333 0.0280528 13.4971 0.13776 13.692 0.331168C13.887 0.524577 13.9976 0.786212 14 1.05972C14.0024 1.33323 13.8964 1.59674 13.7048 1.79348L7.75635 7.69458Z"
                                    fill="#333333"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className={`questionText pt-2 ${question.isTextShowing ? 'block' : 'none'}`}>
                        <p className="text-secondary px-5 m-0">{question.content}</p>
                    </div>
                </div>
            ))}
            <div className="pricing-img-right">
                <img
                    src="/images/curve-img-right.svg"
                    alt="decorative background right"
                />
            </div>
        </div>
    );
}

