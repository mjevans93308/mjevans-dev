import Head from 'next/head'

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

// fix huge fa icons - https://github.com/FortAwesome/react-fontawesome/issues/284#issuecomment-691707228
import { config as fontAwesomeConfig, dom } from "@fortawesome/fontawesome-svg-core";
fontAwesomeConfig.autoAddCss = false;

// run locally with `yarn run build && yarn run start`

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen antialiased leading-7 bg-gray-100">
      <Head>
        <title>Hi!</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <style>{dom.css()}</style>
      </Head>

      <Navbar />

      <main className="flex flex-col flex-grow w-full text-center text-gray-800">
        <div className="flex flex-col flex-wrap items-center justify-center bg-gradient-to-r from-green-500 to-blue-500 text-white mx-full h-40 md:h-60 mt-10">
          <div className="md:text-6xl text-4xl p-3 font-bold text-white">
            Hi! I'm Matthew!
          </div>
        </div>
        <div className="flex flex-col flex-wrap text-xl lg:text-2xl text-gray-700 leading-7 font-semibold px-6">
          <p className="m-4">
            I'm an experienced software engineer with a passion for learning new things.
          </p>
          <p className="m-4">
            Currently I'm mostly focused on backend development in Go and Python, but have been playing around with 
            <a href="https://nextjs.org/" className="text-blue-600 hover:text-blue-700 ml-1 hover:underline">Next.js </a> 
            and 
            <a href="https://tailwindcss.com/" className="text-blue-600 hover:text-blue-700 ml-1 hover:underline">tailwindcss</a> for building out a beautiful UI in record time.
          </p>
          <p className="m-4">
            I am available via email at 
            <a href="mailto:me@mjevans.dev" className="text-blue-600 hover:text-blue-700 ml-1 hover:underline">me@mjevans.dev</a>,
            or you can shoot me a message via DM on Twitter if you want to chat.
            <p className="m-4">
                Look forward to hearing from you!
            </p>
          </p>
        </div>
        <div>
            
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
