export interface ResultItem {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
        height: number;
        url: string;
        width: number;
    }>;
    name: string;
    type: string;
    uri: string;
}
