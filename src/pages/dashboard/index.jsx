import React from 'react';
import { Box, Icon, Button, Flex, Radio } from '@chakra-ui/react';
import { dashmenu, dashboardPreferences } from '../../mockss';
import { NavLink } from 'react-router-dom';
import Image from "../../assets/img/nissan-gtr.png"
import CarRentalChart from '../../components/pichart';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Header } from '../../components/layouts';
import Imag from "../../assets/img/car-2.png"

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Flex justifyContent='space-between' className='container'>

                <Box width={380} height={900} className='bg-white shadow p-10' paddingLeft={10}>

                    <h1 className='text-[#90A3BF] text-base font-semibold'>MAIN MENU</h1><br />

                    <ul>
                        {dashmenu?.map((item) => (
                            <li key={item.path}>

                                <NavLink to={item.path} className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px] flex items-center gap-3 text-[#90A3BF]'> <Icon as={item.icon} /> {item.label} </NavLink>

                            </li>
                        ))}
                    </ul>

                    <h1 className='text-[#90A3BF] text-base font-semibold mt-[56px]'>PREFERENCES</h1><br />

                    <ul>
                        {dashboardPreferences?.map((item) => (
                            <li key={item.path}>

                                <NavLink to={item.path} className='p-[10px] hover:bg-blue-500 hover:text-[#fff] rounded-[10px] flex items-center gap-3 text-[#90A3BF]'> <Icon as={item.icon} /> {item.label} </NavLink>

                            </li>
                        ))}
                    </ul>

                    <ul className='mt-[150px]'>
                        <Button>log out</Button>
                    </ul>

                </Box>

                <Box width={534} height={836} borderRadius={10} marginTop={5} padding={6} className='bg-[#ffffff] shadow'>
                    <h1 className='font-bold text-xl mb-6'>Details Rental</h1>

                    <Box borderRadius={10}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56876.13161910664!2d69.24516515144337!3d41.313942154396074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b357a6349f3%3A0x8a270cfbe3641046!2sRentCar!5e1!3m2!1sen!2s!4v1726311037835!5m2!1sen!2s"
                            width="486"
                            height="272"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </Box>

                    <Flex marginTop={7} gap={4}>
                        <img src={Image} alt="#" />
                        <Box>
                            <h1 className='text-xl font-bold items-center'>Nissan GT-R</h1>
                            <small>Sport Car</small>
                        </Box>
                        <h2 className='ml-40'>#9761</h2>
                    </Flex>

                    <Box>

                        <Flex alignItems='center' marginTop={7} gap={3}>
                            <Radio value='3'>Pick - Up</Radio>
                        </Flex>

                        <Accordion allowToggle className='flex mt-5 justify-between'>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Section 1 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem borderBottom={0}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </Box>

                    <Box>

                        <Flex alignItems='center' marginTop={7} gap={3}>
                            <Radio value='3'>Drop - Off</Radio>
                        </Flex>

                        <Accordion allowToggle className='flex mt-5 justify-between'>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Section 1 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem borderBottom={0}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </Box>



                </Box>

                <Box>
                    <CarRentalChart />
                    <Box width={524} height={480} className='bg-[#FFFFFF] shadow mt-5 rounded-xl p-6'>
                        <Flex justifyContent="space-between">
                            <h1 className='font-bold text-xl'>Recent Transaction</h1>
                            <a className='text-indigo-500' href="#">View All</a>
                        </Flex>

                        <Flex marginTop={7} alignItems='center' justifyContent='space-between' className='border border-t-0 border-r-0 border-l-0'>
                            <Box display="flex" alignItems='center' gap={4} >
                                <img src={Imag} alt="" />
                                <Box>
                                    <h1>Nissan GT - R</h1>
                                    <small>Sport Car</small>
                                </Box>
                            </Box>

                            <Box>
                                <small>20 July</small>
                                <h1>$80.00</h1>
                            </Box>
                        </Flex>

                        <Flex marginTop={7} alignItems='center' justifyContent='space-between' className='border border-t-0 border-r-0 border-l-0'>
                            <Box display="flex" alignItems='center' gap={4} >
                                <img src={Imag} alt="" />
                                <Box>
                                    <h1>Nissan GT - R</h1>
                                    <small>Sport Car</small>
                                </Box>
                            </Box>

                            <Box>
                                <small>20 July</small>
                                <h1>$80.00</h1>
                            </Box>
                        </Flex>

                        <Flex marginTop={7} alignItems='center' justifyContent='space-between' className='border border-t-0 border-r-0 border-l-0'>
                            <Box display="flex" alignItems='center' gap={4} >
                                <img src={Imag} alt="" />
                                <Box>
                                    <h1>Nissan GT - R</h1>
                                    <small>Sport Car</small>
                                </Box>
                            </Box>

                            <Box>
                                <small>20 July</small>
                                <h1>$80.00</h1>
                            </Box>
                        </Flex>

                        <Flex marginTop={7} alignItems='center' justifyContent='space-between' className='border border-t-0 border-r-0 border-l-0'>
                            <Box display="flex" alignItems='center' gap={4} >
                                <img src={Imag} alt="" />
                                <Box>
                                    <h1>Nissan GT - R</h1>
                                    <small>Sport Car</small>
                                </Box>
                            </Box>

                            <Box>
                                <small>20 July</small>
                                <h1>$80.00</h1>
                            </Box>
                        </Flex>
                    </Box>
                </Box>



            </Flex>
        </div>
    );
};

export default Dashboard;