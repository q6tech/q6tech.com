import { Helmet } from "react-helmet-async";

export function ContactUsPage() {
    return (
        <div className="flex flex-col">

            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>

            <header className="text-center prose mx-auto mb-12">
                <h1 className="text-6xl font-normal mt-12 mb-3">
                    Contact Us!
                </h1>
                <div className="mx-auto w-24 mt-5 h-1 bg-purple-900" />
                <p className="mb-0">
                    Want to setup a video call, get a quote, or just say hi?
                </p>
                <p className="mt-0">
                    We're just an email away!
                </p>
            </header>

            <article className="flex flex-col items-center justify-center w-96 mx-auto px-24 pt-9 pb-12 relative">

                <a className="text-2xl px-6 py-3 rounded-2xl bg-purple-900 text-white mx-auto mt-6 transition-colors hover:bg-purple-800" href="mailto:hello@q6tech.com" role="button">Email Us</a>

                <p aria-hidden className="text-opacity-30 mt-3 font-semibold text-sm opacity-90">
                    (hello@q6tech.com)
                </p>

                <div className="absolute hidden md:block top-4 left-4 h-10 w-10 border-purple-900 border-t-4 border-s-4" />
                <div className="absolute hidden md:block bottom-4 right-4 h-10 w-10 border-purple-900 border-b-4 border-e-4" />

            </article>

        </div>
    )
}