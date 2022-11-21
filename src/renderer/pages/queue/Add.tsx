/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Card,
  Text,
  Button,
  Box,
  Center,
  TextInput,
  Select,
  Group,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';

const Add = () => {
  const form = useForm({
    initialValues: {
      name: '',
      facebook: '',
    },

    validate: {
      name: (value) => (value !== '' ? null : 'Name is required'),
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    showNotification({
      autoClose: 5000,
      color: 'green',
      title: 'Success',
      message: 'Data is added successfully!',
    });
    navigate('/queue');
  };
  return (
    <Card shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={700}>Add Queue</Text>
      </Card.Section>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Center>
          <Box p="xl" style={{ width: '400px' }}>
            <TextInput
              withAsterisk
              label="Name"
              placeholder="Input name"
              {...form.getInputProps('name')}
            />
            <TextInput
              mt="md"
              withAsterisk
              label="Facebook"
              placeholder="Facebook profile or link"
              {...form.getInputProps('facebook')}
            />
            <TextInput
              mt="md"
              withAsterisk
              label="Mobile"
              placeholder="Mobile No"
              {...form.getInputProps('mobile')}
            />

            <Select
              mt="md"
              label="Game"
              placeholder="Pick one"
              searchable
              nothingFound="No options"
              data={[
                'Mobile Legends',
                'Call of Duty:Mobile',
                'Wildrift',
                'Genshin',
              ]}
            />
            <Select
              mt="md"
              label=" Service type"
              placeholder="Pick one"
              searchable
              nothingFound="No options"
              data={['Rank - Grind', 'Character Builds', 'Anything', 'Uwu']}
            />
            <TextInput
              mt="md"
              withAsterisk
              label="Cost"
              placeholder="Mobile No"
              {...form.getInputProps('mobile')}
            />
            <Group position="right">
              <Button mt="lg" type="submit">
                Add
              </Button>
            </Group>
          </Box>
        </Center>
      </form>
    </Card>
  );
};

export default Add;
