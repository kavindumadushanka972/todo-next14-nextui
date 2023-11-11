'use client';
import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { removeTodo, toggleTodo } from '@/redux/features/todo-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '@nextui-org/react';
import { BsFillTrashFill } from 'react-icons/bs';

const TodoList: React.FC = () => {
  const { list } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-lg font-bold">Todo List</p>
          <p className="text-small text-default-500">Manage your tasks</p>
        </div>
      </CardHeader>
      <CardBody>
        {list.map((todo) => (
          <div className="flex mb-2 justify-between" key={todo.id}>
            <div>
              <p>{todo.name}</p>
            </div>

            <div className="flex space-x-1">
              <div className="my-auto">
                <Checkbox
                  isSelected={todo.done}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
              </div>

              <div className="my-auto">
                <BsFillTrashFill
                  className="cursor-pointer text-[18px]"
                  onClick={() => dispatch(removeTodo(todo.id))}
                />
              </div>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default TodoList;
