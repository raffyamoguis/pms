import React from 'react';
import { Table, Card, Text, Button } from '@mantine/core';

const Grinder = () => {
  return (
    <Card shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={700}>Grinder</Text>
      </Card.Section>

      {/* <Divider mt='xs' /> */}
      <Table mt="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Grinds</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>
              <Button variant="subtle" color="blue" radius="xl" size="xs">
                108
              </Button>
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Grinder;
