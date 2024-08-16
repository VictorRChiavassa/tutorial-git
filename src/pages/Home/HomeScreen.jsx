import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();
  const [loginmode, setLoginmode] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passwordvalue, setPasswordValue] = useState("");

  const creatAcconunt = (email, password) => {
    fetch("http://localhost:3000/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      // body: { email: email, password: password },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Cuenta creada");
        setEmailValue("");
        setPasswordValue("");
      });
  };

  const login = (email, password) => {
    fetch("http://localhost:3000/accounts")
      .then((res) => res.json())
      .then((data) => {
        const accounts = data;
        const foundAccount = accounts.find(
          (account) => account.email === email
        );
        // const foundAccount = accounts.filter((acc) => acc.email === email);
        console.log(foundAccount);
        if (foundAccount) {
          if (foundAccount.password === password) {
            alert("Bienvenido");
            navigate("/products");
          } else {
            alert("Contraseña incorrecta");
          }
        } else {
          alert("Cuenta no encontrada");
        }
      });
  };

  if (loginmode) {
    return (
      <div>
        <h1>Home Screen</h1>
        <form
          className="flex flex-col gap-4 border p-4 rounded-md border-red-500 border-2"
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
          }}
        >
          <h1>sign In</h1>
          <button
            className="text-blue-600 underline"
            onClick={() => setLoginmode(false)}
          >
            ¿No tienes una cuenta? Registrate
          </button>
          <div className="">
            <label htmlFor="email">Email:</label>
            <input
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="border-green-600 border-2"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              value={passwordvalue}
              onChange={(e) => setPasswordValue(e.target.value)}
              className="border-green-600 border-2"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button
            onClick={() => login(emailValue, passwordvalue)}
            className="rounded-full bg-blue-600 w-40"
            type="submit"
          >
            Iniciar Sesíon
          </button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <h1>Home Screen</h1>
      <div
        className="flex flex-col gap-4 border p-4 rounded-md border-red-500 border-2"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const email = e.target.email.value;
        //   const password = e.target.password.value;

        // }}
      >
        <h1>sign Up</h1>
        <button
          className="text-blue-600 underline"
          onClick={() => setLoginmode(true)}
        >
          ¿ya tienes una cuenta? Iniciar Sesíon
        </button>
        <div className="">
          <label htmlFor="email">Email:</label>
          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="border-green-600 border-2"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            value={passwordvalue}
            onChange={(e) => setPasswordValue(e.target.value)}
            className="border-green-600 border-2"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button
          disabled={emailValue === "" || passwordvalue === ""}
          className="rounded-full bg-blue-600 w-40"
          onClick={() => {
            const email = emailValue;
            const password = passwordvalue;
            creatAcconunt(email, password);
          }}
        >
          Registrar
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
