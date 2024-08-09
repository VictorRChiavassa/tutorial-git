import { useState } from "react";
import { v4 } from "uuid";

const inpStyle = { display: "flex", flex: 1 };

export const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (!name || !lastname || !email) {
      alert("Por favor, llena todos los campos");
      return;
    }
    const data = {
      name,
      lastname,
      email,
      id: v4(),
    };
    onSubmit(data);
    setName("");
    setLastname("");
    setEmail("");
  };

  return (
    <div className="p-10 flex w-1/2 flex-col gap-10 rounded-md justify-center items-center">
      <div className="flex flex-row items-start">
        <div className="flex justify-start w-20">
          <label htmlFor="">Nombre</label>
        </div>
        <input
          className="border rounded-full w-80 px-3"
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-row  items-start">
        <div className="flex justify-start w-20">
          <label htmlFor="">Apellido</label>
        </div>
        <input
          className="border rounded-full w-80 px-3"
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row  items-start">
        <div className="flex justify-start w-20">
          <label htmlFor="">Email</label>
        </div>
        <input
          className="border rounded-full w-80 px-3"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          marginTop: 50,
        }}
      >
        <button
          onClick={handleClick}
          className="border w-60 h-10 rounded-full bg-blue-500 text-white hover:opacity-50"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
