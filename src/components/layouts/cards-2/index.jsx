import React from 'react';
import { SimpleGrid, CardHeader, Heading, CardBody, CardFooter, Card, Button, Box, Flex, Image } from '@chakra-ui/react';
import { RiGasStationFill } from "react-icons/ri";
import { TbPlaystationCircle } from "react-icons/tb";
import { MdOutlinePeople } from "react-icons/md";
import Images from "../../../assets/img/car.png"
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const index = () => {

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div>

            <SimpleGrid>
                <Card className='w-[304px] h-[388px] hover:shadow-xl hover:scale-105 transition-transform duration-300'>

                    <CardHeader justifyContent='space-between' display='flex' alignItems='center'>
                        <Box>
                            <Heading size='md'> Koenigsegg</Heading>
                            <small>Sport</small>
                        </Box>
                        <Box>
                            <FaHeart
                                onClick={handleLikeClick}
                                style={{ color: isLiked ? 'red' : '#ccc', cursor: 'pointer'}}
                                className='text-2xl'
                            />
                        </Box>
                    </CardHeader>

                    <CardBody>
                        <Box justifyContent='Center'>
                            <Image src={Images} alt='super-car' />
                        </Box>
                    </CardBody>

                    <Flex padding={5} justifyContent='space-between'>

                        <Flex alignItems='center' gap={2}>
                            <RiGasStationFill size={24} />
                            <small>90L</small>
                        </Flex>

                        <Flex alignItems='center' gap={2}>
                            <TbPlaystationCircle size={24} />
                            <small>Manual</small>
                        </Flex>

                        <Flex alignItems='center' gap={2}>
                            <MdOutlinePeople size={24} />
                            <small>2 People</small>
                        </Flex>

                    </Flex>

                    <CardFooter alignItems='center' className='justify-between'>
                        <h1>$99.00/ day</h1>
                        <Button colorScheme='blue'><a href="./payment">Rent Now</a></Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </div>
    );
};

export default index;