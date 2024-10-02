import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration, useMatches, useOutlet } from "react-router-dom";
import { RouteContextProps } from "../../pages/router";

export function RootLayout() {

    const matches = useMatches();

    const routeContext = useMemo(() => {
        const routesWithContext = matches.filter(x => !!x.handle);
        if (routesWithContext.length > 1) {
            console.warn("Multiple matches with context were detected for the current route. This isn't supported.");
        }
        if (routesWithContext.length == 1) {
            return routesWithContext[0].handle as RouteContextProps;
        }
        return undefined;
    }, [...matches]);

    const title = useMemo(
        () => routeContext?.title ? `${routeContext.title} | Q6 Technologies` : "Q6 Technologies",
        [routeContext?.title]
    );
    const outlet = useOutlet();

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
            </Helmet>
            <ScrollRestoration />
            {outlet}
        </>
    )
}
