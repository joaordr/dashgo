import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';
import { Logo } from './Header/Logo';
import { NotificationNav } from './Header/NotificationNav';
import { Profile } from './Header/Profile';
import { SearchBox } from './Header/SearchBox';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="10"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />

            <SearchBox />

            <Flex alignItems="center" ml="auto">
                <NotificationNav />
                <Profile />
            </Flex>

        </Flex>
    )
}