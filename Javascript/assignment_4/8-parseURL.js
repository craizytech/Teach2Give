//  Write a JavaScript function to parse an URL.

function parseURL(url) {
    try {
        const parsedURL = new URL(url);

        // extracting the different components of a URL
        return {
            href: parsedURL.href,
            origin: parsedURL.origin,
            protocol: parsedURL.protocol,
            host: parsedURL.host,
            hostname: parsedURL.hostname,
            port: parsedURL.port,
            pathname: parsedURL.pathname,
            search: parsedURL.search,
            searchParams: Object.fromEntries(parsedURL.searchParams),
            hash: parsedURL.hash
        };
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}

// Test usage
const url = "https://example.com:8080/path/to/resource?query=123&lang=en#section";
console.log(parseURL(url));