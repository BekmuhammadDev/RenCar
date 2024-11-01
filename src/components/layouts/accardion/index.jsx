import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Radio

} from '@chakra-ui/react'
import { LuArrowUpDown } from "react-icons/lu";

const accardion = () => {
    return (

        <Flex display={{base:'block',md:'flex'}} alignItems='center' justify='space-between'>

            <Accordion defaultIndex={[0]} allowMultiple width={{base:'327px',md:'582px'}} padding={{base:'10px',md:'32px'}} className=' mt-8 bg-[#FFFFFF]  rounded-lg border shadow'>

                <Flex alignItems='Center' marginBottom={{base:'16px',md:'32px'}} gap={2}>
                <Radio value='1'>Pick - Up</Radio>
                </Flex>
                <Flex justify='space-between'>
                    <AccordionItem className='border-b-2 '>
                        <h1 className='pl-4 font-bold text-base'>Locations</h1>
                        <p>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Select your city

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </p>
                        <AccordionPanel pb={3}>
                            Lorem ipsum dolor
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem className='border-b-2'>
                        <h1 className='pl-4 font-bold text-base'>Date</h1>
                        <p>
                            <AccordionButton>
                                <Box as='span' flex='3' textAlign='left'>
                                    Select your Date
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </p>
                        <AccordionPanel pb={1}>
                            Select your date
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem className='border-b-2'>
                        <h1 className='pl-4 font-bold text-base'>Time</h1>
                        <p>
                            <AccordionButton>
                                <Box as='span' flex='3' textAlign='left'>
                                    Select your Time
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </p>
                        <AccordionPanel pb={1}>
                            Select your Time
                        </AccordionPanel>
                    </AccordionItem>


                </Flex>

            </Accordion>

            <div className='border w-16 h-16 p-5  bg-[#3563E9] rounded-xl animate-bounce'>
                <LuArrowUpDown  className=' md:text-2xl  text-white '/>
            </div>

            <Accordion defaultIndex={[0]} allowMultiple width={{base:'327px',md:'582px'}} padding={{base:'10px',md:'32px'}} className='  md:mt-8 bg-[#FFFFFF]  rounded-lg border shadow'>

                <Flex alignItems='Center'marginBottom={{base:'16px',md:'32px'}} gap={2}>
                <Radio value='2'>Drop - Off</Radio>
                    
                </Flex>

                <Flex justify='space-between'>


                    <AccordionItem className='border-b-2 '>
                        <h1 className='pl-4 font-bold text-base'>Locations</h1>
                        <p>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Select your city

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </p>
                        <AccordionPanel pb={3}>
                            Lorem ipsum dolor
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem className='border-b-2'>
                        <h1 className='pl-4 font-bold text-base'>Date</h1>
                        <p>
                            <AccordionButton>
                                <Box as='span' flex='3' textAlign='left'>
                                    Select your Date
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </p>
                        <AccordionPanel pb={1}>
                            Select your date
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem className='border-b-2'>
                        <h1 className='pl-4 font-bold text-base'>Time</h1>
                        <p>
                            <AccordionButton>
                                <Box as='span' flex='3' textAlign='left'>
                                    Select your Time
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </p>
                        <AccordionPanel pb={1}>
                            Select your Time
                        </AccordionPanel>
                    </AccordionItem>


                </Flex>

            </Accordion>

        </Flex>

    );
};

export default accardion;