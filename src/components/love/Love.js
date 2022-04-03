import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { LoveItem } from './LoveItem.js'

import { Link as lee,useNavigate} from 'react-router-dom'
// import { cartData } from './data'

const Love = () => {
    const { loveItems, total } = useSelector(state => state.love)
    const [loveData, setloveData] = useState([])
    console.log(loveItems)
    // const [total, setTotal] = useState(0)
 console.log("hai from love")


    // useEffect(() => {
    //     let total = 0
    //     let quantity = 0
    //     cartData?.forEach(item => {
    //         if (!item.quantity) {
    //             total += item.listPrice;
    //             quantity += 1

    //         }
    //         else {
    //             total += item.listPrice * item.quantity
    //             quantity += item.quantity
    //         }
    //     })
    //     setTotal(total)
    //     settotalItems(quantity)
    // }, [JSON.parse(localStorage.getItem("cart"))])

    useEffect(() => {
        setloveData(loveItems)
      
    }, [loveItems])

    // console.log(totalItems)

    return (
        <Box
            maxW={{ base: '3xl', lg: '7xl' }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}
        >
            {loveData?.length > 0 ? <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ lg: 'flex-start' }}
                spacing={{ base: '8', md: '16' }}
            >
                <Stack spacing={{ base: '8', md: '10' }} flex="2">
                    <Heading fontSize="2xl" fontWeight="extrabold">
                        Wish List ({total} Items)
                    </Heading>

                    <Stack spacing="6">
                        {loveData.map((item) => (
                            <LoveItem item={item} setloveData={setloveData} key={item._id} {...item} />
                        ))}
                    </Stack>
                </Stack>

               
            </Stack> : "Nothing in the Loved yet"}
        </Box>
    )
}

export default Love