import React from 'react';
import { Header, Footer } from '../../components/layouts';
import { categoryTypes, categoryCapacity } from '../../mockss';
import Priceslider from "../../components/priceslider/index"
import { Accardion } from '../../components/layouts';
import { Checkbox, Box, Flex } from '@chakra-ui/react';
import {Card } from '../../components/layouts';



const Category = () => {
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

                <Box>
                    <Accardion />

                    <Flex mt={7} className="justify-between">
                        <Card />
                        <Card />
                        <Card />
                    </Flex>

                    <Flex mt={7} className="justify-between">
                        <Card />
                        <Card />
                        <Card />
                    </Flex>

                    <Flex mt={7} mb={7} className="justify-between">
                        <Card />
                        <Card />
                        <Card />
                    </Flex>
                </Box>
            </Flex>

            <Footer />


        </>
    );
};

export default Category;