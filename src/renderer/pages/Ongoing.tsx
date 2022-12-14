import React from 'react';
import {
  Table,
  Card,
  Text,
  Button,
  ActionIcon,
  Tooltip,
  Group,
} from '@mantine/core';
import { IconCircleCheck, IconClockPause } from '@tabler/icons';

const Ongoing = () => {
  return (
    <Card shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={700}>Ongoing</Text>
      </Card.Section>

      <Table mt="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Game</th>
            <th>Service</th>
            <th>Status</th>
            <th>Grinder</th>
            <th>Started</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Codm</td>
            <td>Ak47 Diamond Grind</td>
            <td>
              <Button
                component={Text}
                variant="subtle"
                color="green"
                radius="xl"
                size="xs"
              >
                Ongoing
              </Button>
            </td>
            <td>Coco Martin</td>
            <td>Nov 14, 2022 - 9:30AM</td>
            <td>
              <Group spacing={5}>
                <Tooltip
                  label="Finish service"
                  color="gray"
                  position="top"
                  withArrow
                >
                  <ActionIcon variant="light" color="green">
                    <IconCircleCheck size={16} />
                  </ActionIcon>
                </Tooltip>

                <Tooltip
                  label="Pause service"
                  color="gray"
                  position="top"
                  withArrow
                >
                  <ActionIcon variant="light" color="yellow">
                    <IconClockPause size={16} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Ongoing;
