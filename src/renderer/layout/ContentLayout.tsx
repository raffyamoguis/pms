import React from 'react';
import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default Content;
