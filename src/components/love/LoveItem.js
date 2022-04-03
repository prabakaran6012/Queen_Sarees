import { CloseButton, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { LoveProductMeta } from './LoveProductMeta'
import { useDispatch } from 'react-redux'
import { modifyQuantity, deleteItem } from '../../actions/love'




export const LoveItem = (props) => {
    const {
        isGiftWrapping,
        name,
        description,
        quantity,
        imageUrl,
        currency,
        price,
        listPrice,
        onChangeQuantity,
        onClickDelete,
        setcartData,
        item,
        _id
    } = props

    const dispatch = useDispatch()

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <LoveProductMeta
                name={name}
                description={description}
                image={imageUrl}
                product_id={_id}
            />

            {/* Desktop */}
            <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
             
                <PriceTag price={listPrice}
                    currency={
                        currency} />
                <strike><PriceTag price={price} currency={currency} /></strike>
                <CloseButton aria-label={`Delete ${name} from cart`} onClick={() => {
                   dispatch(deleteItem(item))
                }} />
            </Flex>

            {/* Mobile */}
            <Flex
                mt="4"
                align="center"
                width="full"
                justify="space-between"
                display={{ base: 'flex', md: 'none' }}
            >
                <Link fontSize="sm" textDecor="underline">
                    Delete
                </Link>
                
                <PriceTag price={listPrice} currency={currency} />
                <strike><PriceTag price={price} currency={currency} /></strike>
            </Flex>
        </Flex>)

}
