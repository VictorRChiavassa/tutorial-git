import { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onSubmit = (user) => {
    setUsers([...users, user]);
  };

  const onDelete = (id) => {
    const newUsers = users.filter((it) => it.id !== id);
    setUsers(newUsers);
  };

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch("http://localhost:4000/users");
  //     const data = await response.json();
  //     if (data) {
  //       setUsers(data.users);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <>
      <div className="flex flex-col flex-1 gap-20 py-10">
        <h1 className="text-6xl text-center">APPLICATION</h1>
        {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        <div className="flex flex-row">
          <UserForm onSubmit={onSubmit} />
          <UserList users={users} deleteHandler={onDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
