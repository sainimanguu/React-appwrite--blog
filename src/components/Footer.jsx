import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div>
                    <h1 className="text-2xl font-bold text-white mb-4">BlogVerse</h1>
                    <p className="text-sm">
                        Sharing stories, insights, and ideas. Join the conversation with our global writing community.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><Link to="/help" className="hover:underline">Help Center</Link></li>
                        <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" aria-label="GitHub" className="hover:text-white"><FaGithub /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} BlogVerse. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
