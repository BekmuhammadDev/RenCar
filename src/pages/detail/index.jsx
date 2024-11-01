import React from 'react';
import { Header, Footer } from '../../components/layouts';
import { categoryTypes, categoryCapacity } from '../../mockss';
import { Box,Checkbox, Flex } from '@chakra-ui/react';
import Priceslider from "../../components/priceslider/index"
import viweImg from "../../assets/detail-img/View.png"
import viweImgA from "../../assets/detail-img/View 1.png"
import viewImgB from "../../assets/detail-img/View 2.png"
import viewImgC from "../../assets/detail-img/View 3.png"
import Stars from "../../components/stars"
import iconAlex from '../../assets/icon/Alex.svg'
import iconSkyla from '../../assets/icon/skyla.svg'
import {Card } from '../../components/layouts';





const Detail = () => {
    return (
        <>
            <Header />

            <Flex gap={20}>

                <aside className='w-[360px] bg-white p-8 border'>
                    <h1 className='text-[#90A3BF] text-[12px] font-semibold'>TYPE</h1>

                    <ul>
                        {categoryTypes?.map((type) => (
                            <li key={type} className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px]'>

                                <Checkbox defaultChecked>{type} ({Math.floor(Math.random() * 31 + 1)})</Checkbox>

                            </li>
                        ))}
                    </ul>

                    <h1 className='text-[#90A3BF] text-[12px] font-semibold mt-[56px]'>CAPACITY</h1>

                    <ul>
                        {categoryCapacity?.map((type) => (
                            <li key={type} className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px]'>

                                <Checkbox defaultChecked>{type} ({Math.floor(Math.random() * 31 + 1)})</Checkbox>

                            </li>
                        ))}
                    </ul>

                    <ul>
                        <Priceslider />
                    </ul>

                </aside>

                <Box marginTop={8}>

                    <Flex gap={20}>

                        <Box>

                            <Box>
                                <img src={viweImg} alt="" />
                            </Box>

                            <Flex justifyContent='space-between' marginTop={7}>
                                <img src={viweImgA} alt="" />
                                <img src={viewImgB} alt="" />
                                <img src={viewImgC} alt="" />
                            </Flex>
                        </Box>

                        <Box className='w-[492px] h-[508px] shadow rounded-xl p-6'>
                            <Box>
                                <h1 className='font-bold text-4xl mb-6'>Nissan GT - R</h1>
                                <Stars />
                            </Box>

                            <Box marginTop={9}>
                                <h1 className='text-xl text-[#596780]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</h1>
                            </Box>

                            <Box marginTop={8}>

                                <Flex justifyContent='space-between'>
                                    <h1 className='text-[#90A3BF] font-bold'>Type Car</h1>
                                    <h1 className='font-bold'>Sport</h1>
                                    <h1 className='text-[#90A3BF] font-bold'>Capacity</h1>
                                    <h1 className='font-bold'>2Person</h1>

                                </Flex>

                                <Flex justifyContent='space-between' marginTop={8}>
                                    <h1 className='text-[#90A3BF] font-bold'>Steering </h1>
                                    <h1 className='font-bold'>Manual</h1>
                                    <h1 className='text-[#90A3BF] font-bold'>Gasoline </h1>
                                    <h1 className='font-bold'>70L</h1>

                                </Flex>
                            </Box>

                            <Box>
                                <Box className='mt-[68px]'>
                                    <h1 className='text-[28px] font-bold'>$80.00/ <small>days</small></h1>
                                    <small className='line-through text-base text-[#90A3BF]'>$100.00</small>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>

                    <Box className='w-[1086px] h-[452px] rounded-xl shadow mt-9 p-6'>
                        <Flex gap={4}>
                            <h1 className='text-xl font-bold'>Reviews</h1>
                        </Flex>

                        <Box marginTop={8} display='flex' justifyContent='space-between'>

                            <Flex gap={5} alignItems='center'>
                                <img src={iconAlex} alt="#" />
                                <Box className='mt-7'>
                                    <h1 className='text-xl font-bold'>Alex Stanton</h1>
                                    <small className='text-sm font-medium text-[#90A3BF]'>CEO at Bukalapak</small>
                                    <br /><br />

                                </Box>
                            </Flex>

                            <Box>
                                <h1 className='text-end text-base text-[#90A3BF] mb-3 mr-3'>21 July 2022</h1>
                                <Stars />
                            </Box>
                        </Box>
                        <Box className='ml-12'>
                            <p className='text-[#596780] text-sm'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                        </Box>

                        <Box marginTop={8} display='flex' justifyContent='space-between'>

                            <Flex gap={5} alignItems='center'>
                                <img src={iconSkyla} alt="#" />
                                <Box className='mt-7'>
                                    <h1 className='text-xl font-bold'>Alex Stanton</h1>
                                    <small className='text-sm font-medium text-[#90A3BF]'>CEO at Bukalapak</small>
                                    <br /><br />

                                </Box>
                            </Flex>

                            <Box>
                                <h1 className='text-end text-base text-[#90A3BF] mb-3 mr-3'>20 July 2022</h1>
                                <Stars />
                            </Box>
                        </Box>
                        <Box className='ml-12'>
                            <p className='text-[#596780] text-sm'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                        </Box>




                    </Box>

                    <Box className='mb-10'>
                        <Flex mt={8} padding={2} justifyContent="space-between">
                            <a className="text-[#90A3BF] font-bold text-base" href="#">Popular Car</a>
                            <a className="text-[#3563E9] font-bold text-base" href="#">View All</a>
                        </Flex>

                        <Flex mt={7} className="justify-between">
                            <Card />
                            <Card />
                            <Card />
                        </Flex>

                        <Flex mt={8} padding={2} justifyContent="space-between">
                            <a className="text-[#90A3BF] font-bold text-base" href="#">Recomendation Car</a>
                        </Flex>

                        <Flex mt={7} className="justify-between">
                            <Card />
                            <Card />
                            <Card />
                        </Flex>
                    </Box>
                </Box>

            </Flex>

            <Footer />
        </>
    );
};

export default Detail;