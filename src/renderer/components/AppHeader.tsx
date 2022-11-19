import React from 'react';
import { Header, MediaQuery, Burger, Text, MantineTheme } from '@mantine/core';

const AppHeader = ({
  opened,
  setOpened,
  theme,
}: {
  opened: boolean;
  setOpened: (o: boolean) => boolean;
  theme: MantineTheme;
}) => {
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text fw={700}>Piloting Management System</Text>
      </div>
    </Header>
  );
};

export default AppHeader;
