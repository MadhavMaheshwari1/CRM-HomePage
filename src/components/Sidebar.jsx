import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const Sidebar = () => {
    const location = useLocation(); // To determine the current route

    const links = [
        { to: "/", icon: <HomeOutlinedIcon fontSize="medium" />, label: "Home" },
        { to: "/Projects", icon: <FactCheckOutlinedIcon fontSize="medium" />, label: "Projects" },
        { to: "/Contacts", icon: <CallOutlinedIcon fontSize="medium" />, label: "Contacts" },
        { to: "/Boards", icon: <ViewKanbanOutlinedIcon fontSize="medium" />, label: "Boards" },
        { to: "/Tasks", icon: <TaskOutlinedIcon fontSize="medium" />, label: "Tasks" },
        { to: "/Organisations", icon: <BusinessOutlinedIcon fontSize="medium" />, label: "Organisations" },
        { to: "/Albums", icon: <PhotoAlbumOutlinedIcon fontSize="medium" />, label: "Albums" },
        { to: "/PersonalProgress", icon: <TrendingUpOutlinedIcon fontSize="medium" />, label: "PersonalProgress" },
    ];

    return (
        <div className='w-[300px] h-[100vh] flex-col lg:flex hidden bg-white border-r-[1px] border-gray-200'>
            {/* Logo section */}
            <Link to="/" className='flex items-center border-b-[1px] border-gray-200 py-3 px-[26px]'>
                <img src={Logo} alt="Logo" className='w-[70px] h-[80px] object-cover' />
                <span className="text-3xl font-semibold">Clientble</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex py-9 justify-center">
                <div className="grid grid-cols-1 gap-4">
                    {links.map(({ to, icon, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`flex items-center gap-6 text-xl px-6 py-4 rounded-xl transition-all duration-200
                            ${location.pathname === to
                                ? 'bg-blue-500 text-white'  // Active state
                                : 'bg-gray-100 text-black hover:bg-blue-100 hover:text-blue-600' // Inactive and hover state
                            }`}
                        >
                            {icon} {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
