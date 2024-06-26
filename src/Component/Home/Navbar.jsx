import React, { useState, useEffect, useRef } from 'react';
import {logo} from "../../constants/imageConstant";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef();
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleSubMenuToggle = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };
    const navItems=[
        {
            name:"Home",
            path:"/",
        },
        {
            name:"About Us",
            path:"/AboutUs",
        },
        {
            name:"Accommodations",
            subCategory:[{
                name:"Friendly",
                path:"/friendlyAccommodations"
            },
            {
                name:"Separate",
                path:"/seprateAccomadations"
            },
            {
                name:"Deck",
                path:"/deckAccomadations"
            }
        ]
        },
        {
            name:"Services",
            subCategory:[{
                name:"Doggy Day Care Service",
                path:"/doggyDayCare"
            },
            {
                name:" Dog Walk",
                path:"/dogWalk"
            },
            {
                name:"Dog Pickup/Drop within City",
                path:"/dogPickupNDrop"
            }
        ]
        },
        {
            name:"Gallery",
            subCategory:[{
                name:"Photo Gallery",
                path:"/photo-galary"
            },
            {
                name:"Video Gallery",
                path:"/video-galary"
            },
            
        ]
        },
        {
            name:"FAQ's",
            path:"/faq",
        },
        {
            name:"Blogs",
            path:"/blogs",
        },
        {
            name:"Our Team",
            path:"/CrewMembers",
        },
        {
            name:"Contact",
            path:"/contactus",
        },
       
    ]

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setActiveMenu(null);
            setMobileMenuOpen(false);
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

    const text = "block hover:border-orange-800 border-b-2 cursor-pointer p-2  text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative";

    return (
        <header className="bg-gray-200 shadow-md sticky top-0 z-50">
            <div className="lg:container mx-auto flex items-center justify-between p-4">
                <div className="flex min-[950px]:hidden xl:flex items-center w-1/5">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="pl-4 h-20" />
                    </Link>
                </div>
                <div className="min-[950px]:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
                        {mobileMenuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
                    </button>
                </div>
                <div className="hidden min-[950px]:flex flex-col w-full xl:w-4/5">
                    <div className="flex  gap-x-4 mb-2 pr-4 max-xl:w-full">
                    <div className="flex xl:hidden  w-1/5">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="pl-4 h-20" />
                            </Link>
                        </div>
                        <span className=' flex justify-end w-full gap-x-4 mb-2 pr-4'>
                        <div className="flex items-center text-gray-700 ">
                       
                            <div className="border cursor-pointer border-gray-700 rounded-full p-2 hover:bg-orange-500">
                                <FaPhoneAlt />
                            </div>
                            <span className="ml-2">7702564422</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <div className="border cursor-pointer border-gray-700 rounded-full p-2 hover:bg-orange-500">
                                <IoMailSharp />
                            </div>
                            <span className="ml-2">scoobydoobypethouse@gmail.com</span>
                        </div>
                        </span>
                    </div>
                    <nav className="bg-gray-200 p-2 rounded-lg">
                      <ul className="flex flex-col md:flex-row md:space-x-4">
                       {navItems.map((nav, index) => (
                        <li key={index} className=' relative'>
                            <Link to={nav.path}
                        className={text}
                        onClick={() => handleSubMenuToggle(index)}
                    >
                        {nav.name}
                    </Link>
                    {nav.subCategory && openSubMenu === index &&  (
                                        <ul className="absolute left-0 mt-2 w-48 bg-gray-200 rounded shadow-lg">
                                            {nav.subCategory.map((sub, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={sub.path}
                                                        className={text}
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                        </li>
                       ))}
                       </ul>
                    </nav>
                </div>
                {mobileMenuOpen && (
                    <nav ref={navRef} className="block min-[950px]:hidden absolute top-20 left-0 w-full bg-gray-200 shadow-md p-4 rounded-lg">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((nav, index) => (
                                <li key={index} className="relative">
                                    <Link
                                        to={nav.path}
                                        className={text}
                                        onClick={() => handleSubMenuToggle(index)}
                                    >
                                        {nav.name}
                                    </Link>
                                    {nav.subCategory && openSubMenu === index && (
                                        <ul className="mt-2 bg-gray-200 rounded shadow-lg">
                                            {nav.subCategory.map((sub, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={sub.path}
                                                        className={text}
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                
            </div>
        </header>
    );
};

export default Navbar;
