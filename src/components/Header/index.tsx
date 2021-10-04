import React from 'react';
import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';

const Header: React.FC = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return(
      <Flex
        as='header'
        w='100%'
        maxWidth={1480}
        h='20'
        mx='auto'
        mt='4'
        px='6'
        align='center'
      > 
        { 
          !isWideVersion && 
          <IconButton
            aria-label='Open Navigation'
            icon={<Icon as={RiMenuLine}/>}
            onClick={onOpen}
            fontSize={24}
            variant='unstyled'
            mr='2'
          />
        }
        <Logo />
        { isWideVersion && <SearchBox /> }      

        <Flex
          align='center'
          ml='auto'
        >
          <NotificationsNav />
          <Profile showProfileData={isWideVersion} />
        </Flex>      
      </Flex>
  );
}

export default Header;