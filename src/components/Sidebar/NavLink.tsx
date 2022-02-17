import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkprops extends LinkProps {
    icon: ElementType;
    children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkprops) {
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}