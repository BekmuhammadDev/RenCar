import { Flex, Box, Button } from '@chakra-ui/react';
import React from 'react';
import BgImg from "../../../assets/bigcard2/BgImg1.png"
import BgImg2 from "../../../assets/bigcard2/BgImg2.png"
import CarImgRes from "../../../assets/img/car.png"

const index = () => {
  return (
    <div>
      <Flex justifyContent="space-between">

        <Box bgImg={BgImg} width={{ base: '300px', md: '640px' }} height={{ base: '232px', md: '360' }} padding={{ md: '20px' }} className=' hover:shadow-xl hover:scale-105 transition-transform duration-300'>
          <h1 className='text-base md:text-[32px] font-bold text-[#FFFFFF] leading-[48px]'>The Best Platform <br className='hidden md:flex' /> for Car Rental</h1><br className='hidden md:flex' />
          <p className='text-xs md:text-lg text-[#ffffff]'>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          <br />
          <Button colorScheme='blue' size={{ base: 'sm', md: 'lg' }}>
            Rental Car
          </Button>
        </Box>

        <Box bgImg={BgImg2} width={640} height={360} padding={5} display={{ base: 'none', md: 'block' }} className=' hover:shadow-xl hover:scale-105 transition-transform duration-300'>
          <h1 className='text-[32px] font-bold text-[#FFFFFF] leading-[48px]'>Easy way to rent <br /> a car at a low price</h1><br />
          <p className='text-lg text-[#ffffff]'>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
          <br />
          <Button colorScheme='blue' size='lg'>
            Rental Car
          </Button>
        </Box>

      </Flex>
    </div>
  );
};

export default index;