import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

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