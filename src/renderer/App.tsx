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
import Content from './layout/ContentLayout';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Queue from './pages/Queue';
import Ongoing from './pages/Ongoing';
import Finish from './pages/Finish';
import Stats from './pages/Pages';
import Client from './pages/Client';
import Grinder from './pages/Grinder';
import Settings from './pages/Settings';

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
              <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Text>Recently finished service</Text>
              </Aside>
            </MediaQuery>
          }
          footer={<AppFooter />}
          header={
            <AppHeader opened={opened} setOpened={setOpened} theme={theme} />
          }
        >
          {/* <Text>Content here</Text> */}
          <Routes>
            <Route element={<Content />}>
              <Route path="/" element={<Home />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/ongoing" element={<Ongoing />} />
              <Route path="/finish" element={<Finish />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/client" element={<Client />} />
              <Route path="/grinder" element={<Grinder />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </AppShell>
      </MantineProvider>
    </Router>
  );
}
