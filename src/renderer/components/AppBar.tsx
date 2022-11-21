import React from 'react';
import { Navbar, Box, NavLink } from '@mantine/core';
import { Link, useMatch } from 'react-router-dom';
import {
  IconHome2,
  IconTimeline,
  IconBrowserCheck,
  IconDeviceDesktopAnalytics,
  IconAdjustmentsHorizontal,
  IconUsers,
  IconOld,
  IconCircleDashed,
} from '@tabler/icons';
import { isRouteQueue } from 'renderer/util/checkRoutes';

const AppBar = ({ opened }: { opened: boolean }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Box sx={{ width: 240 }}>
        <NavLink
          label="Home"
          component={Link}
          to="/"
          icon={<IconHome2 size={16} stroke={1.5} />}
          active={!!useMatch('/')}
        />
        <NavLink
          label="Queue"
          component={Link}
          to="/queue"
          icon={<IconTimeline size={16} stroke={1.5} />}
          active={!!useMatch('/queue' || '/queue/add')}
        />

        <NavLink
          label="Ongoing"
          component={Link}
          to="/ongoing"
          icon={<IconCircleDashed size={16} stroke={1.5} />}
          active={!!useMatch('/ongoing')}
        />
        <NavLink
          label="Finish"
          component={Link}
          to="/finish"
          icon={<IconBrowserCheck size={16} stroke={1.5} />}
          active={!!useMatch('/finish')}
        />
        <NavLink
          label="Stats"
          component={Link}
          to="/stats"
          icon={<IconDeviceDesktopAnalytics size={16} stroke={1.5} />}
          active={!!useMatch('/stats')}
        />
        <NavLink
          label="Client"
          component={Link}
          to="/client"
          icon={<IconUsers size={16} stroke={1.5} />}
          active={!!useMatch('/client')}
        />
        <NavLink
          label="Grinder"
          component={Link}
          to="/grinder"
          icon={<IconOld size={16} stroke={1.5} />}
          active={!!useMatch('/grinder')}
        />
        <NavLink
          label="Settings"
          component={Link}
          to="/settings"
          icon={<IconAdjustmentsHorizontal size={16} stroke={1.5} />}
          active={!!useMatch('/settings')}
        />
      </Box>
    </Navbar>
  );
};

export default AppBar;
