import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean
}

export const ActiveLink = ({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) => {
    const { asPath } = useRouter();
    let activeLink = false;

    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        activeLink = true
    };

    if (!shouldMatchExactHref && (
        asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as))
    )) {
        activeLink = true;
    }
    
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: activeLink ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
};