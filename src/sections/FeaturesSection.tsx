import Heading from "../components/Heading";

const cards = [
    {
        id: 1,
        title: "Omnichain Interoperability",
        desc: "Zion connects multiple supply chain networks, enabling secure and efficient cross-chain transactions for seamless collaboration.",
    },
    {
        id: 2,
        title: "Real-Time Transparency and Tracking",
        desc: "Zion offers real-time visibility into the supply chain with blockchain-based tracking for enhanced accountability and trust.",
    },
    {
        id: 3,
        title: "Quality Assurance and Traceability",
        desc: "Zion ensures product quality and traceability by allowing businesses to track each product’s journey from origin to destination.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-4">
            <Heading
                heading="Key Features"
                subHeading="Access The Future"
                className="text-center"
            />
            <div className="row w-full justify-center gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
                    >
                        <img
                            className="w-16 h-w-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
