import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image"
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
const Navbar = ()=>{
    return(
        <nav className="bg-white shadow-md">
          
        <div className="  px-4 py-3 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <a href="#" className=" font-Montserrat text-xl font-bold">Bandage</a>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline flex items-center space-x-1">Shop <IoIosArrowDown width={20} height={20}/></a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Pages</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="hover:underline text-black-800">
          
        
            </button>
          </div>

          {/* Utility Links */}
          <div className="flex space-x-4 items-center">
            
          <span className="flex items-center space-x-2">
          <Image style={{objectFit:"contain",width:""}} src={user} alt="" width={12} height={12} />
            <a href="#" style={{color:"#23A6F0"}} className=" hover:underline text-sm-1 font-bold ">Login / Register</a>
            
            </span>
            
            <Image className="" src={search} alt="" width={16} height={16} />
            <Image className="" src={cart} alt="" width={16} height={16}/>
            <Image className="" src={mail} alt="" width={16} height={16} />
            </div>
           
   </div>
      </nav>

  );
}
    
export default Navbar