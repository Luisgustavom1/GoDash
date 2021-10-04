import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItem {
    isCurrent: boolean;
    number: number
}

export const PaginationItem = ({ isCurrent = false, number }) => {
    if(isCurrent) {
        return (
            <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='pink'
            disbled
            _disabled={{
                bg: 'pink.500',
                cursor: 'default'
            }}
        >
            {number}
        </Button>
        )
    }
    return (
        <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='gray'
            bg='gray.700'
            _hover={{
                bg:'gray.500'
            }}
        >
            {number}
        </Button>
    )
};