import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    return (
        <footer className="flex items-center justify-around w-full p-6 h-24 border-t text-gray-500 font-normal text-md bg-gray-100">
            <span>© Matthew Evans 2021</span>
            <div className="flex justify-between">
                <a href="https://twitter.com/mevans93308" target="_blank" rel="noopener" className="px-2"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://linkedin.com/in/matthew-evans-a177838a" target="_blank" rel="noopener" className="px-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/mjevans93308" target="_blank" rel="noopener" className="px-2"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            
        </footer>
    )
}