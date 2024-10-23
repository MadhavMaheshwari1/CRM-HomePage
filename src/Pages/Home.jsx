import React from 'react'
import { FaBars } from "react-icons/fa6";
import Drawer from '../components/Drawer';
import { useState } from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Me from '../assets/Me.jpg';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';
import Organisations from '../Pages/Organisations';

const HomePage = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <div className="max-w-[1920px] mx-auto flex flex-col gap-1 pe-6">
      <div className="grid grid-cols-[70%,30%]">
        <div className='py-6 lg:hidden'>
          <button
            onClick={toggleDrawer}
            className="lg:hidden p-4 text-2xl text-gray-800 mr-5"
          >
            <FaBars />
          </button>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        </div>
        <div className="flex-col gap-1 py-9 px-8 cursor-pointer md:flex hidden">
          <h1 className='lg:text-3xl text-2xl font-semibold md:block hidden'>Welcome Back Madhav! </h1>
          <p className='text-lg xl:block hidden'>Let's make today productive with your daily tasks and latest updates.</p>
        </div>
        <div className="cursor-pointer flex items-center justify-end xl:gap-4 gap-2">
          <button className='sm:block hidden py-2 px-4 bg-blue-500 rounded-xl text-white font-semibold'>+ Create</button>
          <div className="w-[80px] h-[60px] border-r-[1px] border-gray-300 flex items-center justify-center">
            <div className="w-[30px] h-[30px] border-[1px] border-black rounded-full">
              <div className='px-[2px]'><NotificationsNoneOutlinedIcon /></div>
            </div>
          </div>
          <div className="flex gap-4 h-[50px] items-center">
            <img src={Me} alt="My Image" className='w-[40px] h-[40px] rounded-full object-cover' />
            <h1 className='font-semibold text-lg'>Madhav</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[70%,30%] ps-8">
        <div className="w-full"><h1>Hello</h1></div>
        <div className="w-full h-[82vh] bg-gray-200 ps-9 md:grid hidden grid-cols-1 grid-rows-3 py-4">
          <div className="">Projects</div>
          <div className="">Projects</div>
          <div className="">Projects</div>
        </div>
      </div>

    </div>
  )
}

export default HomePage