import { Header } from "./Header";
import { Subheader } from "./Subheader";
import { ListHeader } from "./ListHeader";
import { ItemsList } from "./ItemsList";
import { ListContainer } from "./ListContainer";
import "./App.css";

const itemsList = [
  {
    uuid: "1a2b3c4d",
    title: "TodoApp 1",
    description: "Description of TodoApp 1",
    status: "pending",
  },
  {
    uuid: "2b3c4d5e",
    title: "TodoApp 2",
    description: "Description of TodoApp 2",
    status: "in progress",
  },
  {
    uuid: "3c4d5e6f",
    title: "TodoApp 3",
    description: "Description of TodoApp 3",
    status: "done",
  },
  {
    uuid: "4d5e6f7g",
    title: "TodoApp 4",
    description: "Description of TodoApp 4",
    status: "pending",
  },
  {
    uuid: "5e6f7g8h",
    title: "TodoApp 5",
    description: "Description of TodoApp 5",
    status: "done",
  },
  {
    uuid: "6f7g8h9i",
    title: "TodoApp 6",
    description: "Description of TodoApp 6",
    status: "in progress",
  },
  {
    uuid: "7g8h9i0j",
    title: "Task 7",
    description: "Description of task 7",
    status: "pending",
  },
  {
    uuid: "8h9i0j1k",
    title: "TodoApp 8",
    description: "Description of TodoApp 8",
    status: "done",
  },
  {
    uuid: "9i0j1k2l",
    title: "TodoApp 9",
    description: "Description of TodoApp 9",
    status: "in progress",
  },
  {
    uuid: "0j1k2l3m",
    title: "TodoApp 10",
    description: "Description of task 10",
    status: "done",
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={itemsList} />
      </ListContainer>
    </>
  );
};

export default App;
