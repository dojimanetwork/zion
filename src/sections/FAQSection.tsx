import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is Zion?",
        answer:"Zion is an advanced supply chain management application powered by Omnichain technology, designed to improve transparency, security, and collaboration across blockchain networks."
    },
    {
        question: "How does Zion enhance supply chain transparency?",
        answer:"Zion uses blockchain technology to provide real-time tracking and transparent records, ensuring visibility at every stage of the supply chain."
    },
    {
        question: "What is Omnichain technology?",
        answer:"Omnichain technology allows seamless interaction between different blockchains, enabling data and transactions to flow securely across multiple networks without boundaries."
    },
    {
        question: "How secure are transactions in Zion?",
        answer:"Zion ensures high-level security by leveraging blockchain’s decentralized nature, making transactions immutable and resistant to fraud."
    },
    {
        question: "How does Zion handle quality assurance?",
        answer:"Zion tracks each product through the supply chain, providing traceability and ensuring adherence to quality standards at every step."
    },
    {
        question: "Can Zion be used globally?",
        answer:"Yes, Zion’s Omnichain capabilities enable global reach, allowing businesses across various countries and networks to collaborate seamlessly."
    },
    {
        question: "How does Zion improve supply chain efficiency?",
        answer:"By automating processes, eliminating manual tracking, and enhancing communication across networks, Zion reduces inefficiencies and speeds up operations."
    },
    {
        question: "What kind of businesses can benefit from Zion?",
        answer: "Zion is ideal for businesses of all sizes involved in manufacturing, logistics, distribution, and retail, looking to enhance their supply chain management.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
