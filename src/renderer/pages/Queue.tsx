import React, { useState } from 'react';
import { Table, Card, Text, Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconTextPlus, IconTrash, IconCheck } from '@tabler/icons';
import { useLiveQuery } from 'dexie-react-hooks';
import { queryAllByPlaceholderText } from '@testing-library/react';
import AppDialogue from '../components/AppDialogue';
import AddQueue from '../components/forms/AddQueue';
import VerifyService from '../components/forms/VerifyService';
import { db } from '../db/server';

interface clientProp {
  client: {
    id: number;
    name: string;
    game: string;
    service: string;
  };
}

const Queue = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [verify, setVerify] = useState<boolean>(false);
  const [clientt, setClient] = useState<clientProp | null>();
  const result = useLiveQuery(() => db.queue.toArray());

  const onDelete = async (id: number) => {
    await db.queue.delete(id);
  };

  const onVerify = (client: clientProp) => {
    setClient(client);
    setVerify(true);
  };

  return (
    <Card shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={700}>Queue</Text>
      </Card.Section>

      <Tooltip label="Add" color="gray" position="bottom" withArrow>
        <ActionIcon
          variant="transparent"
          mt="xs"
          onClick={() => setOpened(true)}
        >
          <IconTextPlus size={18} />
        </ActionIcon>
      </Tooltip>

      <AppDialogue
        opened={opened}
        setOpened={setOpened}
        size="md"
        title="Add Queue"
        component={<AddQueue setFinished={setOpened} />}
      />
      <AppDialogue
        opened={verify}
        setOpened={setVerify}
        size="md"
        title="Verify Requested Service"
        component={<VerifyService client={clientt} setFinished={setVerify} />}
      />

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
        <tbody>
          {result?.map((q, id) => (
            <tr key={q.id}>
              <td>{id + 1}</td>
              <td>{q.name}</td>
              <td>{q.game}</td>
              <td>{q.service}</td>
              <td>
                <Group spacing={5}>
                  <Tooltip
                    label="Verify"
                    color="gray"
                    position="bottom"
                    withArrow
                  >
                    <ActionIcon
                      variant="light"
                      color="blue"
                      onClick={() => onVerify(q)}
                    >
                      <IconCheck size={16} />
                    </ActionIcon>

                    {/* //Verify Modal */}
                  </Tooltip>

                  <Tooltip
                    label="Delete"
                    color="gray"
                    position="bottom"
                    withArrow
                  >
                    <ActionIcon
                      variant="light"
                      color="red"
                      onClick={() => onDelete(q.id)}
                    >
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default Queue;
