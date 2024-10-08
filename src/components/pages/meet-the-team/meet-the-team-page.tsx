import { Helmet } from "react-helmet-async";
import { Member, MemberProps } from "./member";

const members: MemberProps[] = [
    {
        name: "Ananth",
        title: "Co-founder",
        email: "ananth@q6tech.com",
        image: new URL("./assets/ananth.webp", import.meta.url),
        description: (
            <>
                <p>
                    Meet Ananth, our frontend mastermind with a whopping 13 years of experience under his belt! When he's not crushing it in the coding world, you can find him spiking volleyballs on the court or plotting his next move in Settlers of Catan (don't challenge him, trust us).
                </p>
                <p>
                    But beware: there's one creature that can bring this tech titan to his knees - lizards! Keep those scaly friends at bay, and Ananth is your guy.
                </p>
                <p>
                    As a recent dad, Ananth has leveled up in the game of life, and we couldn't be more stoked to have him on our team. Come for the coding expertise, stay for the Catan tips and dad jokes!
                </p>
            </>
        )
    },
    {
        name: "Drew",
        title: "Co-founder",
        email: "drew@q6tech.com",
        image: new URL("./assets/drew.webp", import.meta.url),
        description: (
            <>
                <p>
                    Meet Drew, the pastor with a secret superpower: he's a backend engineering wizard with over 20 years of experience! When he's not guiding his flock or leading our team to victory, he's probably worrying about being seen with a pink drink in hand (don't worry, Drew, your secret is safe with us).
                </p>
                <p>
                    As a father of two, Drew knows a thing or two about keeping it real, and his humility is the stuff of legend (we're pretty sure he's the only person who's ever apologized for being too good at their job). But don't let his humble demeanor fool you - Drew is a force to be reckoned with, and his leadership skills are simply divine.
                </p>
                <p>
                    So if you need guidance, wisdom, or just a really solid backend solution, Drew's your guy. Just don't offer him a pink lemonade.
                </p>
            </>
        )
    },
    {
        name: "Mark",
        title: "Co-founder",
        email: "mark@q6tech.com",
        image: new URL("./assets/mark.webp", import.meta.url),
        description: (
            <>
                <p>
                    Meet Mark, the DevOps master with a decade of experience under his belt! This full-stack phenom can tackle anything from frontend to backend, and even throws in some top-notch security expertise for good measure.
                </p>
                <p>
                    But Mark's not just a one-trick pony - he's also a speed demon with a Rubik's cube, solving it in under 20 seconds (yes, we've timed him). We're pretty sure he's secretly a superhero, but so far, he's kept his cape hidden.
                </p>
                <p>
                    When he's not saving the world one deploy at a time, Mark is probably planning for the future - and by that, we mean contemplating the impending arrival of mini-Marks (no kids yet, but we're sure they'll be coding prodigies when they arrive). For now, though, Mark's all about bringing his A-game to our team, and we're thrilled to have him on board!
                </p>
            </>
        )
    }
]

export function MeetTheTeamPage() {
    return (
        <div className="flex flex-col">
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <header className="text-center prose mx-auto mb-12">
                <h1 className="text-6xl font-normal mt-12 mb-3">
                    Meet the Team!
                </h1>
                <div className="mx-auto w-24 mt-5 h-1 bg-purple-900" />
                <p>
                    Meet the small group of highly skilled engineers, with 40+ years of combined experience.
                </p>
            </header>
            <article className="flex flex-wrap justify-center">
                {members.map(x => (
                    <Member key={x.email} {...x} />
                ))}
            </article>
        </div>
    )
}
