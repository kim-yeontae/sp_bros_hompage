import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "SP Bros",
    description: "SP Bros에 오신걸 환영합니다.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <Head>
                <meta
                    name="keywords"
                    content="hopage, website, react, next.js , project"
                />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="My Awesome Website" />
                <meta
                    property="og:description"
                    content="This is the description of my awesome website."
                />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:url" content="https://www.mywebsite.com" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="canonical" href="https://www.mywebsite.com" />
            </Head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main>{children}</main>
            </body>
        </html>
    );
}
