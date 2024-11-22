import Heading from "../components/Heading";
import { SectionProps } from "../types";

const tags = [
    "Enhanced Tracebility And Authentication",
    "Smart Contract Automation",
    "Cross-Chain Interoperability",
    "Security and Risk Management",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Transforming Supply Chain Management"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                Zion leverages Omnichain technology to enhance supply chains with secure transactions, transparent tracking and real-time visibility, addressing inefficiencies and quality challenges.
                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full text-xs px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/robo.png"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
