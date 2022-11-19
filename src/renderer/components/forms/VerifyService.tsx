/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextInput, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { db } from '../../db/server';

interface Prop {
  client: {
    id: number;
    name: string;
    game: string;
    service: string;
    grinder: string;
  };
  setFinished: (val: boolean) => void;
}

interface ValueType {
  name: string;
  facebook: string;
  mobile: string;
  game: string;
  service: string;
  fee: string;
  grinder: string;
}

const VerifyService: React.FC<Prop> = ({ client, setFinished }) => {
  const [loader, setLoader] = useState<boolean>(false);
  const services = 1;

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: client.name,
      facebook: '',
      mobile: '',
      game: client.game,
      service: client.service,
      fee: '',
      grinder: '',
    },
    validate: {
      name: (value) => (value === '' ? 'Name should not be empty' : null),
      facebook: (value) =>
        value === '' ? 'Facebook should not be empty' : null,
      mobile: (value) =>
        // eslint-disable-next-line no-nested-ternary
        value === ''
          ? 'Name should not be empty'
          : isNaN(value)
          ? 'Number should not contain a string.'
          : null,
      game: (value) => (value === '' ? 'Game should not be empty' : null),
      service: (value) => (value === '' ? 'Service should not be empty' : null),
      fee: (value) =>
        value === ''
          ? 'Service should not be empty'
          : isNaN(value)
          ? 'Fee should not contain a string.'
          : null,
      grinder: (value) => (value === '' ? 'Grinder should not be empty' : null),
    },
  });

  const handleSubmit = (values: ValueType) => {
    setLoader(true);
    return db.transaction('rw', db.clients, db.services, db.queue, () => {
      return db.clients
        .add({
          name: values.name,
          facebook: values.facebook,
          mobile: values.mobile,
          services,
        })
        .then((id) => {
          return db.services.add({
            clientid: id,
            grinderid: 1,
            name: values.name,
            game: values.game,
            service: values.service,
            status: 'Ongoing',
            grinder: values.grinder,
            cost: values.fee,
            start: 'Nov 16, 2022 - 9:00PM',
          });
        })
        .then(() => {
          return db.queue.delete(client.id);
        })
        .then(() => {
          setTimeout(() => {
            setLoader(false);
            setFinished(false);
          }, 1000);
          return null;
        });
    });
  };

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          placeholder="Your name"
          label="Name"
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          placeholder="Facebook name or link"
          label="Facebook"
          withAsterisk
          {...form.getInputProps('facebook')}
        />
        <TextInput
          placeholder="Mobile no"
          label="Mobile"
          {...form.getInputProps('mobile')}
        />
        <Select
          mt="xs"
          label="Game"
          placeholder="Pick one"
          withAsterisk
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
          {...form.getInputProps('service')}
        />
        <TextInput
          mt="xs"
          placeholder="Service fee"
          label="Fee"
          withAsterisk
          {...form.getInputProps('fee')}
        />
        <Select
          mt="xs"
          label="Grinder"
          placeholder="Choose grinder"
          withAsterisk
          searchable
          nothingFound="No data found."
          data={[
            { value: 'Genshin', label: 'Genshin' },
            { value: 'Codm', label: 'Codm' },
            { value: 'Mobile Legends', label: 'Mobile Legends' },
            { value: 'Wildrift', label: 'Wildrift' },
          ]}
          {...form.getInputProps('grinder')}
        />
        <Button
          mt="md"
          type="submit"
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
          loading={loader}
          loaderPosition="center"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default VerifyService;
