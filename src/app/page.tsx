import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2 p-5">
      <div className="md:col-span-1 col-span-2">
        <AddTodoForm />
      </div>

      <div className="md:col-span-1 col-span-2">
        <TodoList />
      </div>
    </div>
  );
}
