import React from 'react';
import { Box, Flex, Input, Text, Radio, Checkbox, Button } from '@chakra-ui/react';
import { Header, Footer } from '../../components/layouts';
import iconvisa from "../../assets/icon/Visa.svg"
import iconPayPal from "../../assets/icon/PayPal.svg"
import iconBitcoin from "../../assets/icon/Bitcoin.svg"
import iconsecurity from "../../assets/icon/security.svg"
import iconNissan from "../../assets/icon/Nissan.svg"
import Stars from "../../components/stars"
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'

const Payment = () => {
    return (
        <>
            <Header />

            <Box className='container mx-auto'>

                <Flex justifyContent='space-between'>

                    <Box>
                        <Box className='w-[852px] h-[336px] rounded-xl shadow p-6 mt-8'>
                            <Box>
                                <Box>
                                    <h1 className='text-xl font-bold'>Billing Info</h1>
                                    <p className='text-sm text-gray-500'>Please enter your billing info</p>
                                </Box>

                                <Box>
                                    <Flex marginTop={7} justifyContent='space-between'>
                                        <form>
                                            <Text mb='8px' className='font-bold'>Name</Text>
                                            <Input
                                                placeholder='Your Name'
                                                size='lg'
                                                width={386}
                                            />

                                            <Text mb='8px' className='font-bold mt-6'>Address</Text>
                                            <Input
                                                placeholder='Adress'
                                                size='lg'
                                                width={386}
                                            />

                                        </form>

                                        <form>
                                            <Text mb='8px' className='font-bold'>Phone Number</Text>
                                            <Input
                                                placeholder='Phone number'
                                                size='lg'
                                                width={386}

                                            />

                                            <Text mb='8px' className='font-bold mt-6'>Town / City</Text>
                                            <Input
                                                placeholder='Town or city'
                                                size='lg'
                                                width={386}
                                            />

                                        </form>
                                    </Flex>
                                </Box>

                            </Box>

                        </Box>

                        <Box className='w-[852px] h-[664px] rounded-xl shadow p-6 mt-8'>

                            <Box>
                                <Box>
                                    <h1 className='text-xl font-bold'>Rental Info</h1>
                                    <p className='text-sm text-gray-500'>Please select your rental date</p>
                                </Box>

                                <Box marginTop={7} alignItems='center' gap={4} display='flex'>
                                    <Radio value='1'><span className='font-bold'>Pick - Up</span></Radio>
                                </Box>

                                <Box>
                                    <Flex marginTop={7} justifyContent='space-between'>
                                        <form>
                                            <Text mb='8px' className='font-bold'>Locations</Text>
                                            <Input
                                                placeholder='Select your city'
                                                size='lg'
                                                width={386}
                                            />

                                            <Text mb='8px' className='font-bold mt-6'>Time</Text>
                                            <Input
                                                placeholder='Select your time'
                                                size='lg'
                                                width={386}
                                            />

                                        </form>

                                        <form>
                                            <Text mb='8px' className='font-bold'>Date</Text>
                                            <Input
                                                placeholder='Select your date'
                                                size='lg'
                                                width={386}

                                            />

                                        </form>
                                    </Flex>
                                </Box>

                            </Box>

                            <Box>
                                <Box marginTop={7} alignItems='center' gap={4} display='flex'>
                                    <Radio value='1'><span className='font-bold'>Drop - off
                                    </span></Radio>
                                </Box>

                                <Box>
                                    <Flex marginTop={7} justifyContent='space-between'>
                                        <form>
                                            <Text mb='8px' className='font-bold'>Locations</Text>
                                            <Input
                                                placeholder='Select your city'
                                                size='lg'
                                                width={386}
                                            />

                                            <Text mb='8px' className='font-bold mt-6'>Time</Text>
                                            <Input
                                                placeholder='Select your time'
                                                size='lg'
                                                width={386}
                                            />

                                        </form>

                                        <form>
                                            <Text mb='8px' className='font-bold'>Date</Text>
                                            <Input
                                                placeholder='Select your date'
                                                size='lg'
                                                width={386}

                                            />

                                        </form>
                                    </Flex>
                                </Box>

                            </Box>

                        </Box>

                        <Box className='w-[852px] h-[596px] rounded-xl shadow p-6 mt-8'>

                            <Box >
                                <Box>
                                    <h1 className='text-xl font-bold'>Payment Method</h1>
                                    <p className='text-sm text-gray-500'>Please select your rental method</p>
                                </Box>

                                <Box className='bg-[#F6F7F9] rounded-xl mt-8 p-6'>
                                    <Flex alignItems='center' justifyContent='space-between'>
                                        <Radio value='1'><span className='font-bold'>Credit Card</span></Radio>
                                        <img src={iconvisa} alt="#" />
                                    </Flex>

                                    <Flex marginTop={7} justifyContent='space-between'>
                                        <form>
                                            <Text mb='8px' className='font-bold'>Card Number</Text>
                                            <Input
                                                placeholder='Card Number'
                                                size='lg'
                                                width={362}
                                            />

                                            <Text mb='8px' className='font-bold mt-6'>Card Holder</Text>
                                            <Input
                                                placeholder='Card Holder'
                                                size='lg'
                                                width={362}
                                            />

                                        </form>

                                        <form>
                                            <Text mb='8px' className='font-bold'>Expration Date</Text>

                                            <Input placeholder='Select Date and Time'
                                                size='lg'
                                                type='datetime-local' />

                                            <Text mb='8px' className='font-bold mt-6'>CVC</Text>
                                            <Input
                                                placeholder='CVC'
                                                size='lg'
                                                width={362}

                                            />

                                        </form>
                                    </Flex>
                                </Box>

                                <Box>

                                    <Flex alignItems='center' justifyContent='space-between' className='border p-4 rounded-xl bg-[#F6F7F9] mt-6 mb-6'>
                                        <Radio value='1'><span className='font-bold'>Credit Card</span></Radio>
                                        <img src={iconPayPal} alt="#" />
                                    </Flex>

                                    <Flex alignItems='center' justifyContent='space-between' className='border p-4 rounded-xl bg-[#F6F7F9] mt-6 mb-6'>
                                        <Radio value='1'><span className='font-bold'>Credit Card</span></Radio>
                                        <img src={iconBitcoin} alt="#" />
                                    </Flex>

                                </Box>

                            </Box>



                        </Box>

                        <Box className='w-[852px] h-[484px] rounded-xl shadow p-6 mt-8 mb-8'>
                            <Box >
                                <Box>
                                    <h1 className='text-xl font-bold mb-2'>Confirmation</h1>
                                    <p className='text-sm text-gray-500'>We are getting to the end. Just few clicks and your rental is ready!</p>
                                </Box>

                                <Box>

                                    <Flex alignItems='center' justifyContent='space-between' className='border p-4 rounded-xl bg-[#F6F7F9] mt-6 mb-6'>
                                        <Checkbox defaultChecked>I agree with sending an Marketing and newsletter emails. No spam, promissed!</Checkbox>
                                    </Flex>

                                    <Flex alignItems='center' justifyContent='space-between' className='border p-4 rounded-xl bg-[#F6F7F9] mt-6 mb-6'>
                                        <Checkbox defaultChecked>I agree with our terms and conditions and privacy policy.</Checkbox>
                                    </Flex>

                                </Box>

                                <Box marginBottom={7}>
                                    <Button colorScheme='blue' width={140} height={14}>Rent Now</Button>
                                </Box>

                                <Box>
                                    <img src={iconsecurity} alt="#" />
                                    <h1 className='text-xl font-bold mb-2 mt-8'>All your data are safe</h1>
                                    <p className='text-sm text-gray-500'>We are using the most advanced security to provide you the best experience ever.</p>
                                </Box>

                            </Box>
                        </Box>

                    </Box>

                    <Box className='w-[492px] h-[580px] bg-[#FFFFFF] shadow rounded-xl mt-8 p-6'>

                        <Box marginBottom={7}>
                            <h1 className='font-bold text-xl'>Rental Summary</h1>
                            <p className='text-[#90A3BF]'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                        </Box>



                        <Box className='flex items-center gap-4 border pb-8 border-r-0 border-l-0 border-t-0'>
                            <img src={iconNissan} alt="#" />
                            <Box>
                                <h1 className='font-bold text-xl mb-3'>Nissan GT - R</h1>
                                <Stars />
                            </Box>
                        </Box>

                        <Box marginTop={8}>
                            <Flex justifyContent='space-between'> <small className='text-base text-[#90A3BF]'>Subtotal</small>
                                <h1 className='font-bold'>$80.00</h1>
                            </Flex><br />

                            <Flex justifyContent='space-between'>
                                <small className='text-base text-[#90A3BF]'>Tax</small>
                                <h1 className='font-bold'>$0</h1>
                            </Flex>
                        </Box>

                      
                        <Box className='rounded-xl w-[444px] h-[56px] shadow mt-8 p-2  pl-7 pr-7'>
                            <Flex alignItems='center' justifyContent='space-between'>

                                <HStack>
                                    <PinInput otp>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                </HStack>

                                <a href="#" className='text-base font-bold '>Apply now promo code</a>
                            </Flex>
                        </Box>




                        <Flex marginTop={7} alignItems='center' justifyContent='space-between'>
                            <Box>
                                <h1 className='font-bold text-xl'>Total Rental Price</h1>
                                <p className='text-[#90A3BF]'>Overall price and includes rental discount</p>
                            </Box>
                            <Box>
                                <h1 className='text-end text-4xl font-semibold'>$80.00</h1>
                            </Box>
                        </Flex>

                    </Box>
                </Flex>


            </Box>

            <Footer />
        </>
    );
};

export default Payment;