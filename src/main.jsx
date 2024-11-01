import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './router';
import { RouterProvider } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(

    <ChakraProvider>
    <RouterProvider router={Router}/>
    </ChakraProvider>

)
