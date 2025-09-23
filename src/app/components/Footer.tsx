import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* School Info */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl font-bold mb-4">Bhrikuti Secondary School</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Providing quality education since 2024 Bs Shaping future leaders with excellence and integrity.
                            </p>
                        </div>

                    {/* Quick LInks*/}
                    <div className="text-center sm:text-left">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/about" className="hover:text-white transition duration-200 block">About Us</a></li>
                            <li><a href="/academics" className="hover:text-white transition duration-200 block">Academics</a></li>
                            <li><a href="/admissions" className="hover:text-white transition duration-200 block">Admissions</a></li>
                            <li><a href="/contact" className="hover:text-white transition duration-200 block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <address className="not-italic text-gray-300 text-sm">
                            <p className="mb-1">Damak-1, Jhapa</p>
                            <p className="mb-1">Nepal</p>
                            <p className="mb-1">Phone +977 9827941390</p>
                            <p className="mb-1">Email: bhrikutischooldmk1@gmail.com</p>
                        </address>
                    </div>

                    {/*Social Media */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white text-2xl transition duration-200" aria-label="Facebook"><FaFacebook /> </a>
                            <a href="#" className="text-gray-300 hover:text-white text-2xl transition duration-200" aria-label="Instagram"><FaInstagramSquare /></a>
                            <a href="#" className="text-gray-300 hover:text-white text-2xl transition duration-200" aria-label="Whatsapp"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Bhrikuti Secondary School, All rights reserved.</p>
                    <div className="mt-2 flex justify-center space-x-4 text-xs">
                        <a href="/privacy" className="hover:text-white transition duration-200">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition duration-200">Terms of Service</a>
                        <a href="/sitemap" className="hover:text-white transition duration-200">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}