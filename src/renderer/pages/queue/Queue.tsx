import React from 'react';
import { Table, Card, Text, ActionIcon, Tooltip } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconTextPlus } from '@tabler/icons';

const Queue = () => {
  return (
    <>
      <Card shadow="sm">
        <Card.Section withBorder inheritPadding py="xs">
          <Text weight={700}>Queue</Text>
        </Card.Section>

        <Tooltip label="Add" color="gray" position="bottom" withArrow>
          <ActionIcon
            component={Link}
            to="/queue/add"
            variant="transparent"
            mt="xs"
          >
            <IconTextPlus size={18} />
          </ActionIcon>
        </Tooltip>

        {/* <Divider mt='xs' /> */}
        <Table mt="md">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Game</th>
              <th>Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody />
        </Table>
      </Card>
    </>
  );
};

export default Queue;
