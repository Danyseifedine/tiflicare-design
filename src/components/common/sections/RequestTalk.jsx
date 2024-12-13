import DefaultButton from "../../button/Button";

export default function RequestTalk() {
    return (
        <div className="requestTalkContent d-flex flex-row-reverse gap-5 flex-wrap align-items-center justify-content-start justify-content-xl-between">
            <div className="talk-img-right">
                <img
                    src="/images/right-point.svg"
                    alt="decorative background right"
                />
            </div>
            <div className="talkImage rounded-3">
                <img
                    src="/images/red-page-img.jpeg"
                    alt="decorative background left"
                />
            </div>
            <div className="text_div d-flex justify-content-start flex-column gap-3">
                <div className="talk-huge-big-div">
                    <h1 className="talk-huge-font fw-bold">Talk with a friendly Tiflicare expert to get</h1>
                    <h1 className="talk-huge-font fw-bold">a tailored childcare solution for the</h1>
                    <h1 className="talk-huge-font fw-bold">unique needs of your center</h1>
                </div>
                <div className="talk-huge-small-div d-none">
                    <h1 className="talk-huge-font fw-bold">
                        Talk with a friendly Tiflicare expert to get
                        a tailored childcare solution for the
                        unique needs of your center
                    </h1>
                </div>
                <div>
                    <DefaultButton text={"Request a Demo"} width={'fit-content'} contained={true} />
                </div>
            </div>
        </div>
    );
}
