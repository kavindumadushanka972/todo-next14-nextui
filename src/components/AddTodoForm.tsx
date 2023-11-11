'use client';
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addTodo } from '@/redux/features/todo-slice';

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [todo, setTodo] = useState<string>();
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = () => {
    if (!todo) {
      setIsInvalid(true);
      setErrorMessage('Task name is required');
      return;
    }
    dispatch(addTodo({ id: Date.now(), name: todo, done: false }));
    setTodo('');
    setIsInvalid(false);
    setErrorMessage(undefined);
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-lg font-bold">Add Todo</p>
          <p className="text-small text-default-500">Type and save your task</p>
        </div>
      </CardHeader>
      <CardBody>
        <Input
          isRequired
          label="Task Name"
          value={todo}
          onValueChange={setTodo}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
          variant="bordered"
        />
      </CardBody>

      <CardFooter>
        <Button color="primary" variant="solid" onClick={() => handleSubmit()}>
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddTodoForm;
