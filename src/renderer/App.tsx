import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AppShell,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
  MantineProvider,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Content from './layout/ContentLayout';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Queue from './pages/queue/Queue';
import AddQueue from './pages/queue/Add';
import Ongoing from './pages/Ongoing';
import Finish from './pages/Finish';
import Stats from './pages/Pages';
import Client from './pages/Client';
import Grinder from './pages/Grinder';
import Settings from './pages/Settings';
import Login from './pages/Login';

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Hello />} />
      </Routes> */}
      <MantineProvider
        theme={{
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <NotificationsProvider>
          <AppShell
            styles={{
              main: {
                background:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<AppBar opened={opened} />}
            aside={
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Aside
                  p="md"
                  hiddenBreakpoint="sm"
                  width={{ sm: 200, lg: 300 }}
                >
                  <Text>Recently finished service</Text>
                </Aside>
              </MediaQuery>
            }
            footer={<AppFooter />}
            header={
              <AppHeader opened={opened} setOpened={setOpened} theme={theme} />
            }
          >
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login />} />
                <Route index element={<Home />} />

                <Route path="queue">
                  <Route index element={<Queue />} />
                  <Route path="add" element={<AddQueue />} />
                </Route>

                <Route path="ongoing">
                  <Route index element={<Ongoing />} />
                </Route>

                <Route path="finish">
                  <Route index element={<Finish />} />
                </Route>

                <Route path="stats">
                  <Route index element={<Stats />} />
                </Route>

                <Route path="client">
                  <Route index element={<Client />} />
                </Route>

                <Route path="grinder">
                  <Route index element={<Grinder />} />
                </Route>

                <Route path="settings">
                  <Route index element={<Settings />} />
                </Route>
              </Route>
            </Routes>
          </AppShell>
        </NotificationsProvider>
      </MantineProvider>
    </Router>
  );
}
