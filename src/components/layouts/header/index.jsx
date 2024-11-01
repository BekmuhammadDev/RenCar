import React from "react";
import { SettingsIcon,BellIcon } from '@chakra-ui/icons'
import { PiHeartFill } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { InputGroup,InputLeftElement,Stack,InputRightElement } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import ProfileImg from '../../../assets/profileIMG/profileImg.jpg'



function Header() {
  return (
    <header className=" bg-white shadow p-4">
      <div className="container mx-auto p-6 pr-[10px] flex md:justify-between ">

        <div className=" md:flex gap-x-16 items-center">
          <h1 className="text-2xl md:text-[32px] font-bold text-indigo-600">Morent</h1>

          <Stack>
            <InputGroup marginTop={{base:'20px', md:'1px'}}>

              <InputLeftElement pointerEvents='none'>
                <RiSearch2Line  className="text-2xl"/>
              </InputLeftElement>

              <InputRightElement>
              <VscSettings className="text-2xl"/>
              </InputRightElement>

              <Input  type='text' placeholder='Search something here' width={{md:492}} rounded={{base:'12px', md:'100px'}}/>
            </InputGroup>
          </Stack>
        </div>

        <div className="flex items-center md:space-x-4">
          <a href="#" className=" hidden md:flex border rounded-3xl p-2 text-gray-600 hover:text-gray-800">
            <PiHeartFill className="text-2xl text-[#596780]" />
          </a>
          <a href="#" className=" hidden md:flex border rounded-3xl p-2 text-gray-600 hover:text-gray-800">
            <BellIcon boxSize={6} />
          </a>
          <a href="#" className="hidden md:flex border rounded-3xl p-2 text-gray-600 hover:text-gray-800">
            <SettingsIcon boxSize={6} />
          </a>
          <a href="#" className=" mb-16  text-gray-600 hover:text-gray-800 md:mb-0 ">
            <img src={ProfileImg} alt="user-profile" className="w-7 h-7 rounded-full md:h-10 md:w-10" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
