import React from 'react';
import { Table, Card, Text, Button } from '@mantine/core';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/server';

const Client = () => {
  const result = useLiveQuery(() => db.clients.toArray());
  return (
    <Card shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={700}>Client</Text>
      </Card.Section>

      {/* <Divider mt='xs' /> */}
      <Table mt="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Facebook</th>
            <th>Mobile</th>
            <th>Services</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>www.facebook.com/johndoe</td>
            <td>
              <Button variant="subtle" color="blue" radius="xl" size="xs">
                10
              </Button>
            </td>
            <td>...</td>
          </tr> */}
          {result?.map((client, id) => (
            <tr key={client.id}>
              <td>{id + 1}</td>
              <td>{client.name}</td>
              <td>{client.facebook}</td>
              <td>{client.mobile}</td>
              <td>{client.services}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default Client;
