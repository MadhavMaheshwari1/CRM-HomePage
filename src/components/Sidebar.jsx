import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

const Sidebar = () => {
    const links = [
        { to: "/Home", icon: <HomeOutlinedIcon fontSize="large" />, label: "Home" },
        { to: "/Projects", icon: <FactCheckOutlinedIcon fontSize="large" />, label: "Projects" },
        { to: "/Contacts", icon: <CallOutlinedIcon fontSize="large" />, label: "Contacts" },
    ];

    return (
        <div className='w-[300px] h-[100vh] flex-col lg:flex hidden border-[1px] border-black'>
            {/* First link with logo */}
            <Link to="/" className='flex items-center gap-4 border-b-[1px] border-black py-4 px-6'>
                <img src={Logo} alt="Logo" className='w-[70px] h-[70px] object-contain' />
                <span className="text-3xl font-semibold">Markble</span>
            </Link>

            {/* Other links */}
            <div className="flex justify-center py-2">
                <div className="grid grid-cols-1 gap-6">
                    {links.map(({ to, icon, label }) => (
                        <Link key={to} to={to} className='flex items-center gap-6 text-xl'>
                            {icon} {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
