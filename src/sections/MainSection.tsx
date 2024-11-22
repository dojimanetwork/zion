import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Redefining Supply Chain Management
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    Zion leverages Omnichain technology to enhance supply chain processes
                    with secure transactions, transparent tracking and real-time
                    visibility, addressing inefficiencies and quality challenges across
                    networks.
                </span>
                {/* <div className="row gap-4">
                    <Button>Get Started</Button>
                    <Button outline={true}>Join Discord</Button>
                </div> */}
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    width="500"
                    height="500"
                >
                    <circle
                        cx="250"
                        cy="250"
                        r="200"
                        fill="none"
                        stroke="#00aaff"
                        stroke-width="2"
                    />

                    <line
                        x1="150"
                        y1="100"
                        x2="350"
                        y2="200"
                        stroke="#00aaff"
                        stroke-width="1"
                    />
                    <line
                        x1="350"
                        y1="200"
                        x2="200"
                        y2="350"
                        stroke="#00aaff"
                        stroke-width="1"
                    />
                    <line
                        x1="200"
                        y1="350"
                        x2="100"
                        y2="200"
                        stroke="#00aaff"
                        stroke-width="1"
                    />
                    <line
                        x1="100"
                        y1="200"
                        x2="150"
                        y2="100"
                        stroke="#00aaff"
                        stroke-width="1"
                    />

                    <circle
                        cx="150"
                        cy="100"
                        r="10"
                        fill="#ffffff"
                        stroke="#00aaff"
                        stroke-width="2"
                    />
                    <circle
                        cx="350"
                        cy="200"
                        r="10"
                        fill="#ffffff"
                        stroke="#00aaff"
                        stroke-width="2"
                    />
                    <circle
                        cx="200"
                        cy="350"
                        r="10"
                        fill="#ffffff"
                        stroke="#00aaff"
                        stroke-width="2"
                    />
                    <circle
                        cx="100"
                        cy="200"
                        r="10"
                        fill="#ffffff"
                        stroke="#00aaff"
                        stroke-width="2"
                    />

                    <circle
                        cx="150"
                        cy="100"
                        r="10"
                        fill="none"
                        stroke="#00aaff"
                        stroke-width="2"
                    >
                        <animate
                            attributeName="r"
                            from="10"
                            to="15"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            from="1"
                            to="0"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>
        </section>
    );
}
