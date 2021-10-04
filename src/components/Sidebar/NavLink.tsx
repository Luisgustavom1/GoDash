import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps { 
    children: string;
    icon: ElementType;
}

export const NavLink = ({ children, icon, ...rest }: NavLinkProps) => {
    return (
        <Link display='flex' align='center' {...rest}>
            <Icon as={icon} fontSize='20'/>
            <Text ml='4' fontSize='medium'>{children}</Text>
        </Link>
    );
};