import PropTypes from "prop-types";

export const UserList = ({ users, deleteHandler }) => {
  if (!Array.isArray(users)) {
    return <h3>Cargando...</h3>;
  }

  if (users?.length === 0) {
    return <h3>No hay usuarios.</h3>;
  }

  return (
    <div className="flex w-1/2">
      <ul className="flex flex-1 flex-col w-full items-start">
        {users?.map((it, index) => {
          return (
            <li
              key={index}
              className="flex gap-20 border-b py-10 items-center justify-between"
            >
              <div className="w-60">
                <h1>
                  {it.name} - {it.lastname} - {it.email}
                </h1>
              </div>

              <button
                onClick={() => {
                  const confirm = window.confirm(
                    "¿Estás seguro de eliminar este usuario?"
                  );
                  if (confirm) {
                    deleteHandler(it.id);
                    return;
                  }
                  return;
                }}
                className="border w-10 h-10 rounded-full bg-black text-white hover:opacity-50"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string,
      age: PropTypes.string,
    })
  ),
  deleteHandler: PropTypes.func,
};
