import { Link } from "react-router-dom";
import { ExpertiseCard } from "./expertise-card";

export function LandingPage() {
    return (
        <div className="flex flex-col">
            <Hero />
        </div>
    );
}

function Hero() {

    return (
        <div className="flex flex-col h-full mt-24">
            <div className="flex flex-col rounded-lg items-center">

                <div className="relative px-16 pt-14 pb-12">
                    <div className="text-5xl lg:text-6xl text-gray-950 text-center animate-fade animate-ease-in-out">
                        Quality in Engineering
                    </div>
                    <div className="text-2xl text-end text-gray-600 mt-2 animate-fade animate-ease-in-out animate-delay-300">
                        It's in the name.
                    </div>
                    <div className="absolute top-4 left-4 h-20 w-20 border-purple-900 border-t-4 border-s-4" />
                    <div className="absolute bottom-4 right-4 h-20 w-20 border-purple-900 border-b-4 border-e-4" />
                </div>

                <Link className="px-6 py-3 rounded-2xl bg-purple-900 text-white mx-auto mt-12 transition-colors hover:bg-purple-800"
                    to="/contact-us"
                    role="button">Contact Us</Link>

                <div className="text-center prose mx-auto mb-6 mt-6">
                    <h2 className="text-2xl font-normal mt-12 mb-3">
                        What We Do
                    </h2>
                    <div className="mx-auto w-24 mt-5 h-1 bg-purple-900" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-3">
                    <ExpertiseCard name="API's" image={new URL("./assets/api.webp", import.meta.url)}>
                        <p>
                            API's - the unsung heroes of the digital world - are the behind-the-scenes magic that makes your favorite apps and services talk to each other seamlessly, but a poorly designed API can be a real party pooper.
                        </p>
                        <p>
                            At Q6 Technologies, we're the API whisperers, crafting APIs that are not only functional but also elegant, scalable, and secure, because we believe that a well-designed API is not just a nicety, but a necessity for any business that wants to stay ahead of the curve.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Websites" image={new URL("./assets/websites.webp", import.meta.url)}>
                        <p>
                            If eyes are the window to the soul, then websites are the gateway to API's. Websites are the first and last thing customers see.
                        </p>
                        <p>
                            A great API is only as good as the website that uses it. That's why we're on a mission to whip up not only amazing APIs, but also websites that make your brand do the happy dance.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Databases" image={new URL("./assets/databases.webp", import.meta.url)}>
                        <p>
                            We're obsessed with quality in engineering, and databases are our sweet spot. Meet our team of experts - query ninjas, indexing wizards, and data modeling masters who have spent years perfecting the dark arts of database design, development, and optimization.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Networking" image={new URL("./assets/networking.webp", import.meta.url)}>
                        <p>
                            A strong network is the backbone of any successful operation. That's why our team is dedicated to crafting networks that are as robust as they are reliable. Got network woes? We're the heroes you need - we'll design, build, and maintain a network that just works, or rescue your existing one from its troubles.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Storage" image={new URL("./assets/storage.webp", import.meta.url)}>
                        <p>
                            Quality in Engineering is our mantra, and storage is our superpower. We're the pros you want on your team, with unmatched expertise in solutions like Ceph. Warning: we might just geek out about it - we can't help ourselves
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Security" image={new URL("./assets/security.webp", import.meta.url)}>
                        <p>
                            Security is the secret sauce that takes your product from 'meh' to 'mission-critical'. We're your stealthy ninja warriors, protecting your users from the shadows and keeping the bad guys at bay.                        </p>
                    </ExpertiseCard>
                </div>

                <div className="text-center prose mx-auto mb-6 mt-6">
                    <h2 className="text-2xl font-normal mt-6 mb-3">
                        Where We Do
                    </h2>
                    <div className="mx-auto w-24 mt-5 h-1 bg-purple-900" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="">
                        <img className="w-full h-[512px]" src={new URL("./assets/map.svg", import.meta.url).toString()} alt="Map of the USA, showing a pin in the State of Texas." />
                    </div>
                    <div className="relative mt-6 p-12">
                        <p className="prose text-center">
                            We design and craft in Texas, USA.
                            <br />
                            All development is done in-house, no outsourcing here!
                        </p>

                        <div className="absolute top-4 left-4 h-20 w-20 border-purple-900 border-t-4 border-s-4" />
                        <div className="absolute bottom-4 right-4 h-20 w-20 border-purple-900 border-b-4 border-e-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
