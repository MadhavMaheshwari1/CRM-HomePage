import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const Drawer = ({ isOpen, onClose }) => {
    const location = useLocation(); // To determine the current route

    const links = [
        { to: "/", icon: <HomeOutlinedIcon />, label: "Home" },
        { to: "/Projects", icon: <FactCheckOutlinedIcon />, label: "Projects" },
        { to: "/Contacts", icon: <CallOutlinedIcon />, label: "Contacts" },
        { to: "/Boards", icon: <ViewKanbanOutlinedIcon />, label: "Boards" },
        { to: "/Tasks", icon: <TaskOutlinedIcon />, label: "Tasks" },
        { to: "/Organisations", icon: <BusinessOutlinedIcon />, label: "Organisations" },
        { to: "/Albums", icon: <PhotoAlbumOutlinedIcon />, label: "Albums" },
        { to: "/PersonalProgress", icon: <TrendingUpOutlinedIcon />, label: "PersonalProgress" },
    ];

    return (
        <div
            className={`fixed inset-0 w-full backdrop-blur-md transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
            onClick={onClose}
        >
            <div
                className="w-[18rem] z-40 min-h-[100vh] bg-white h-auto p-4 absolute left-0 border-[1px] border-gray-200"
                onClick={(e) => e.stopPropagation()} // Prevent closing the drawer when clicking inside it
            >
                <div className="flex flex-col text-black font-semibold text-2xl gap-6 justify-center">
                    {links.map(({ to, icon, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-300
                            ${location.pathname === to
                                    ? 'bg-blue-500 text-white' // Active link styles
                                    : 'bg-gray-100 text-black hover:bg-blue-100 hover:text-blue-600' // Inactive & hover styles
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

export default Drawer;
