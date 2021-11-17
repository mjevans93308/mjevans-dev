import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

  return (
    <>
      <nav className="flex items-center flex-wrap bg-blue-500 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <FontAwesomeIcon icon={faBullseye} className="text-white mr-2" />
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Matthew Evans
            </span>
          </a>
        </Link>
        <button 
            className="inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="inline-flex flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto">
            <a href="/resume_08_28_2021_no_contact_info.pdf" alt="hello" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white">
                <FontAwesomeIcon className="mr-2" icon={faCloudDownloadAlt} />
                Resume
            </a>
            <a href="https://twitter.com/mevans93308" target="_blank" rel="noopener" className="px-2 text-white rounded hover:bg-blue-600"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://linkedin.com/in/matthew-evans-a177838a" target="_blank" rel="noopener" className="px-2 text-white rounded hover:bg-blue-600"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/mjevans93308" target="_blank" rel="noopener" className="px-2 text-white rounded hover:bg-blue-600"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </nav>
    </>
  );
};
