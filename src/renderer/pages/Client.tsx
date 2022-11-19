import React from 'react';
import { Table, Card, Text, Button } from '@mantine/core';

const Client = () => {
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
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>www.facebook.com/johndoe</td>
            <td>
              <Button variant="subtle" color="blue" radius="xl" size="xs">
                10
              </Button>
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Client;
