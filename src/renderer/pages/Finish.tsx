import React from 'react';
import { Table, Card, Text } from '@mantine/core';

const Finish = () => {
  return (
    <Card shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={700}>Finish</Text>
      </Card.Section>

      {/* <Divider mt='xs' /> */}
      <Table mt="md">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Game</th>
            <th>Service</th>
            <th>Service Started</th>
            <th>Service Finished</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jane Doe</td>
            <td>Genshin Impact</td>
            <td>The Catch Grind</td>
            <td>Nov 10, 2022 - 8:00AM</td>
            <td>Nov 10, 2022 - 10:00AM</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Finish;
