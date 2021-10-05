import { Flex, Input, Icon } from "@chakra-ui/react"
import { RiSearchLine } from 'react-icons/ri'
import React, { useRef } from "react"

export const SearchBox = () => {

    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log(searchInputRef.current.value);
        
    }, [])
    return(
        <Flex
            as='label'
            flex='1'
            maxWidth={400}
            py='4'
            px='8'
            ml='6'
            bg='gray.800'
            color='gray.200'
            position='relative'
            alignSelf='center'
            borderRadius='full'
        >
            <Input 
                variant='unstyled'
                color='gray.50'
                placeholder='Buscar na plataforma'
                px='4'
                mr='4'
                _placeholder={{
                    color: 'gray.400'
                }}
                ref={searchInputRef}
            />
            <Icon as={RiSearchLine} font-size='20'/>
        </Flex>
    )
}