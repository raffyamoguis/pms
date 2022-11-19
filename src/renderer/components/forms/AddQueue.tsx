/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextInput, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { db } from '../../db/server';

interface ValueType {
  name: string;
  game: string;
  service: string;
}

interface Prop {
  setFinished: (val: boolean) => void;
}

const AddQueue: React.FC<Prop> = ({ setFinished }) => {
  const [name, setName] = useState<string>('');
  const [game, setGame] = useState<string | null>(null);
  const [service, setService] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: '',
      game: '',
      service: '',
    },
    validate: {
      name: (value) => (value === '' ? 'Name should not be empty' : null),
      game: (value) => (value === '' ? 'Game should not be empty' : null),
      service: (value) => (value === '' ? 'Service should not be empty' : null),
    },
  });

  const handleSubmit = async (values: ValueType) => {
    setLoader(true);
    return db.queue
      .add({
        name: values.name,
        game: values.game,
        service: values.service,
      })
      .then(() => {
        setTimeout(() => {
          setLoader(false);
          setFinished(false);
        }, 1000);
        return null;
      });
  };

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          placeholder="Your name"
          label="Name"
          withAsterisk
          value={name}
          onChange={(e) => setName(e.target.value)}
          {...form.getInputProps('name')}
        />
        <Select
          mt="xs"
          label="Game"
          placeholder="Pick one"
          withAsterisk
          value={game}
          onChange={setGame}
          searchable
          nothingFound="No data found."
          data={[
            { value: 'Genshin', label: 'Genshin' },
            { value: 'Codm', label: 'Codm' },
            { value: 'Mobile Legends', label: 'Mobile Legends' },
            { value: 'Wildrift', label: 'Wildrift' },
          ]}
          {...form.getInputProps('game')}
        />
        <TextInput
          mt="xs"
          placeholder="Service type"
          label="Service"
          withAsterisk
          value={service}
          onChange={(e) => setService(e.target.value)}
          {...form.getInputProps('service')}
        />
        <Button
          mt="md"
          type="submit"
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
          loading={loader}
          loaderPosition="center"
        >
          Add
        </Button>
      </form>
    </>
  );
};

export default AddQueue;
