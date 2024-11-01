import React from 'react';
import { CarCard, Accardion, Card } from '../../components/layouts';
import { Flex, Button, } from '@chakra-ui/react';
import { Header, Footer } from '../../components/layouts';



const Home = () => {
    return (
        <div>
              <Header />

            <div className="container mx-auto p-10">
                <CarCard />
                <Accardion />

                <Flex mt={8} padding={2} justifyContent="space-between">
                    <a className="text-[#90A3BF] font-bold text-base" href="#">Popular Car</a>
                    <a className="text-[#3563E9] font-bold text-base" href="#">View All</a>
                </Flex>

                <Flex mt={7} className="justify-between">
                    <Card />
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
                    <Card />
                </Flex>

                <Flex mt={7} className="justify-between">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Flex>

                <Flex marginTop={14} placeContent='Center' paddingBottom={12}>
                    <Button colorScheme='blue' className="w-40 h-11">Show more car</Button>
                </Flex>



            </div>
            <Footer />
        </div>
    );
};

export default Home;