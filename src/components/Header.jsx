import React from "react";
//import { MdAdd, MdLogout} from "react-icons/md"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
//import Logo from "./img/logo.png";
//import Avatar from './img/avatar.png';
import NewLogo from "../images/NewLogo.png"

const Header = function Header() {

  return (
    <header className="fixed bg-headingColor w-full z-50 md:p-6 md:px-16 p-3 px-8 m-0">


      {/* for desktop and tablet */}


      <div className="flex w-full h-full items-center justify-between">
        <div className="h-80  rounded-full  mr-48 ">
        <Link to="/" className="mr-80 ml-4 flex items-center gap-2">
          <img src={NewLogo} alt="logo" className="h-90 object-cover"/>
          {/* <p className="font-bold cursor-pointer text-xl text-textColor relative top-12 -left-32 mt-3">Your pc mentor</p> */}
        </Link>
        </div>

        <div className="flex items-center mr-18 ml-48 gap-8 justify-between">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex gap-8 items-center">
            <Link to={"/home"} className="text-base  text-textColor hover:text-textColor1 hover:text-xl hover:font-bold cursor-pointer duration-100 
             transition-all ease-in-out">Home</Link>
            <Link to={"/Pcservice"} className="text-base text-textColor hover:text-textColor1 hover:text-xl hover:font-bold cursor-pointer duration-100 
             transition-all ease-in-out">PC Service</Link>
            <Link to={"/customPc"} className="text-base text-textColor hover:text-textColor1 hover:text-xl hover:font-bold cursor-pointer duration-100 
             transition-all ease-in-out">Custom PC</Link>
            <Link to={"/contact"} className="text-base text-textColor hover:text-textColor1 hover:text-xl hover:font-bold cursor-pointer duration-100 
             transition-all ease-in-out">Contact Us</Link>
          </motion.ul>

          <div className="relative">
            {/* <motion.img
                   whileTap={{ scale: 0.6 }}
                  
                   //src="" alt="User Profile"
                   className="w-9 h-9 min-w-[30px] min-h-[30px]: cursor-pointer rounded-full"
                  /> */}

           <Link to={"/login"}>
           <RxAvatar className="text-3xl text-textColor min-w-[30px] min-h-[30px]: cursor-pointer rounded-full hover:bg-card" />
           </Link> 
            {/* <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="w-40 bg-gray-50 flex flex-col shadow-lg absolute items-center rounded-xl right-4 mt-4 py-2">
                      
                         <Link to={"/createItem"}>
                            <p className="flex items-center py-1 px-8 cursor-pointer transition-all duration-100 ease-in-out hover:bg-slate-200" >New Item  <MdAdd className="relative left-2" /></p>
                         </Link>
                      

                      <p className="flex items-center py-1 px-8 cursor-pointer bg-slate-300 hover:bg-slate-400 " >Logout <MdLogout className="relative left-4" /></p>
                   </motion.div> */}

          </div>

        </div>
      </div>





    </header>
  )
}

export default Header;