import Head from 'next/head';

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// fix huge fa icons - https://github.com/FortAwesome/react-fontawesome/issues/284#issuecomment-691707228
import { config as fontAwesomeConfig, dom } from "@fortawesome/fontawesome-svg-core";
fontAwesomeConfig.autoAddCss = false;

export default function Resume() {
    return (
        <div className="flex flex-col justify-between h-screen antialiased leading-7 bg-gray-100">
            <Head>
                <title>Resume</title>
                <link rel="shortcut icon" href="/favicon.svg" />
                <style>{dom.css()}</style>
            </Head>
  
            <Navbar />
  
            <main className="flex flex-col flex-grow w-full text-gray-800">
                <p className="text-3xl font-bold">
                    hi
                </p>
            </main>

            <Footer />
        </div>
    )
}