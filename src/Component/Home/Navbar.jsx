import React, { useState, useEffect, useRef } from 'react';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
    const navRef = useRef();

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setActiveMenu(null);
             // Close mobile menu if clicked outside
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleScroll = (event) => {
        // Handle scroll events if needed
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <header className="bg-gray-200 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center w-1/5">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="pl-4 h-20" />
                    </Link>
                </div>
                <div className="flex flex-col w-4/5">
                    <div className="flex justify-end space-x-4 mb-2 pr-4">
                        <div className="flex items-center text-gray-700">
                            <div className="border cursor-pointer border-gray-700 rounded-full p-2 hover:bg-orange-500">
                                <FaPhoneAlt />
                            </div>
                            <span className="ml-2">7702564422</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <div className="border cursor-pointer border-gray-700 rounded-full p-2  hover:bg-orange-500">
                                <IoMailSharp />
                            </div>
                            <span className="ml-2">scoobydoobypethouse@gmail.com</span>
                        </div>
                    </div>
                    <nav className="bg-gray-200 p-2 rounded-lg">
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            <li>
                                <Link to="/" className="block hover:border-orange-800 border-b-2 cursor-pointer p-2 text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/AboutUs" >
                                <div className="block hover:border-orange-800 border-b-2 p-2 cursor-pointer text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    About Us
                                </div>
                                </Link>
                            </li>
                            <li className="relative group">
                                <div className="block p-2 hover:border-orange-800 border-b-2 cursor-pointer text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Accommodations
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block text-white bg-black shadow-lg mt-1 rounded w-40">
                                    <li>
                                        <Link to="/friendlyAccommodations">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Friendly
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/seprateAccomadations">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Separate
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/deckAccomadations">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Deck
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div className="block hover:border-orange-800 border-b-2 p-2 cursor-pointer text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Services
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-black shadow-lg mt-1 rounded w-40">
                                    <li>
                                        <Link to="/doggyDayCare">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Doggy Day Care Service
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dogBoarding">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Boarding
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dogWalk">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Dog Walk
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dogPickupNDrop">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Dog Pickup/Drop within City
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Gallery
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-black shadow-lg mt-1 rounded w-40">
                                    <li>
                                    <Link to="/photo-galary">
                                        <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                            Photo Gallery
                                        </div>
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to="/video-galary">
                                        <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                            Video Gallery
                                        </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                            <Link to="/faq">
                                <div className="block p-2 hover:border-orange-800 border-b-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    FAQ's
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs">
                                    <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                        Blogs
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactus">
                                    <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                        Contact
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/enquiry">
                                    <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                        Quick Enquiry
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="md:hidden flex items-center">
                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="block text-gray-700 hover:text-orange-800 focus:outline-none"
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    
                                        />
                                    ) : (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Menu */}
                      
{mobileMenuOpen && (
    <div className="md:hidden absolute top-0 left-0 w-full bg-gray-200">
        <nav className="p-4">
            <ul className="flex flex-col space-y-2">
                <li>
                    <Link
                        to="/"
                        className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                        onClick={() => {
                            toggleMobileMenu();
                            scrollToTop();
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/AboutUs"
                        className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                        onClick={toggleMobileMenu}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <div
                        className={`block p-2 px-4 text-lg text-gray-700 cursor-pointer hover:text-orange-800 ${
                            activeMenu === 'Accommodations' ? 'text-orange-800' : ''
                        }`}
                        onClick={() => {
                            setActiveMenu(activeMenu === 'Accommodations' ? null : 'Accommodations');
                        }}
                    >
                        Accommodations
                    </div>
                    {activeMenu === 'Accommodations' && (
                        <ul className="ml-4">
                            <li>
                                <Link
                                    to="/friendlyAccommodations"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={() => {
                                        toggleMobileMenu();
                                        scrollToTop();
                                    }}
                                >
                                    Friendly
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/separateAccommodations"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={() => {
                                        toggleMobileMenu();
                                        scrollToTop();
                                    }}
                                >
                                    Separate
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/deckAccomadations"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={() => {
                                        toggleMobileMenu();
                                        scrollToTop();
                                    }}
                                >
                                    Deck
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div
                        className={`block p-2 px-4 text-lg text-gray-700 cursor-pointer hover:text-orange-800 ${
                            activeMenu === 'Services' ? 'text-orange-800' : ''
                        }`}
                        onClick={() => {
                            setActiveMenu(activeMenu === 'Services' ? null : 'Services');
                        }}
                    >
                        Services
                    </div>
                    {activeMenu === 'Services' && (
                        <ul className="ml-4">
                            <li>
                                <Link
                                    to="/doggyDayCare"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={() => {
                                        toggleMobileMenu();
                                        scrollToTop();
                                    }}
                                >
                                    Doggy Day Care Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dogBoarding"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={toggleMobileMenu}
                                >
                                    Boarding
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dogWalk"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={toggleMobileMenu}
                                >
                                    Dog Walk
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dogPickupNDrop"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={toggleMobileMenu}
                                >
                                    Dog Pickup/Drop within City
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <div
                        className={`block p-2 px-4 text-lg text-gray-700 cursor-pointer hover:text-orange-800 ${
                            activeMenu === 'Gallery' ? 'text-orange-800' : ''
                        }`}
                        onClick={() => {
                            setActiveMenu(activeMenu === 'Gallery' ? null : 'Gallery');
                        }}
                    >
                        Gallery
                    </div>
                    {activeMenu === 'Gallery' && (
                        <ul className="ml-4">
                            <li>
                                <Link
                                    to="/photo-galary"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={toggleMobileMenu}
                                >
                                    Photo Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/video-galary"
                                    className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                                    onClick={toggleMobileMenu}
                                >
                                    Video Gallery
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link
                        to="/faq"
                        className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                        onClick={toggleMobileMenu}
                    >
                        FAQ's
                    </Link>
                </li>
                <li>
                    <Link
                        to="/blogs"
                        className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                        onClick={toggleMobileMenu}
                    >
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact-us"
                        className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                        onClick={toggleMobileMenu}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/enquiry"
                        className="block p-2 text-lg text-gray-700 hover:text-orange-800"
                        onClick={toggleMobileMenu}
                    >
                        Quick Enquiry
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
)}


            </div>
        </header>
    );
};

export default Navbar;