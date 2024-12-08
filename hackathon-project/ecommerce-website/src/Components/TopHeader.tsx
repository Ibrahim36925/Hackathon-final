import { LuPhone } from "react-icons/lu"
import { BiMessage } from "react-icons/bi"
import { IoLogoInstagram } from "react-icons/io"
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi"


export default function TopHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <LuPhone width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <BiMessage width={16} height={16} />
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div style={{color:"white"}} className="flex gap-[10px] ">
            <IoLogoInstagram width={16} height={16}  />
            <FiYoutube width={16} height={16} />
            <FiFacebook  width={16} height={16} />
            <FiTwitter width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}