import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { Box, Stack } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export const SidebarNav = () => {
    return (
        <Stack spacing='12'>
            <Box>
                <NavSection title='GERAL'>
                    <NavLink icon={RiDashboardLine}>
                        Dashboard
                    </NavLink>
                    <NavLink icon={RiContactsLine}>
                        Usuários
                    </NavLink>
                </NavSection>
            </Box>
            <Box>
                <NavSection title='AUTOMAÇÃO'>
                    <NavLink icon={RiInputMethodLine}>
                        Formulários
                    </NavLink>
                    <NavLink icon={RiGitMergeLine}>
                        Automação
                    </NavLink>
                </NavSection>
            </Box>
        </Stack>
    );
};