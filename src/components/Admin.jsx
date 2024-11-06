import { useState } from "react";

export default function Admin({ tableUser, tableAdmin }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setposition] = useState("");
  const [addUser, setAddUser] = useState([]);

  const handleSave = (e) => {
    const newUser = {
      id: Date.now(),
      name: name,
      lastname: lastname,
      position: position,
    };
    setAddUser([...addUser, newUser]);

    console.log(addUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form after submission
    setName("");
    setLastname("");
    setposition("");
  };

  const handleDelete = (index) => {
    setAddUser((prev) => {
      return prev.splice(index, 1);
    });
  };

  return (
    <>
      {tableAdmin && (
        <>
          <div className="mt-20 mb-2 flex justify-start">
            <p className="font-semibold text-xl ">Create User Here</p>
          </div>
          <form onSubmit={handleSubmit} className="flex justify-center gap-6">
            <input
              className="bg-slate-300 p-3 rounded-lg"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-slate-300 p-3 rounded-lg"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              className="bg-slate-300 p-3 rounded-lg"
              type="text"
              placeholder="Position"
              onChange={(e) => setposition(e.target.value)}
            />
            <button
              onClick={handleSave}
              className="bg-slate-600 p-3 rounded-lg drop-shadow-lg font-medium text-white hover:bg-slate-700"
            >
              Save
            </button>
          </form>
          <table className="border-1 border-solid border-black mt-20">
            <thead className="bg-slate-300 text-black">
              <tr className="h-10">
                <th className="w-[200px] border-solid border">Name</th>
                <th className="w-[200px] border-solid border">Lastname</th>
                <th className="w-[200px] border-solid border">Position</th>
                <th className="w-[200px] border-solid border">Action</th>
              </tr>
            </thead>
            <tbody className="mx-auto">
              {addUser.map((user, index) => (
                <tr key={user.id} className="h-8">
                  <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                    {user.name}
                  </td>
                  <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                    {user.lastname}
                  </td>
                  <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                    {user.position}
                  </td>
                  <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 cursor-pointer text-center"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {tableUser && (
        <table className="border-1 border-solid border-black mt-20">
          <thead className="bg-slate-300 text-black">
            <tr className="h-10">
              <th className="w-[200px] border-solid border">Name</th>
              <th className="w-[200px] border-solid border">Lastname</th>
              <th className="w-[200px] border-solid border">Position</th>
            </tr>
          </thead>
          <tbody className="bg-slate-50">
            {addUser.map((user) => (
              <tr key={user.id} className="h-8">
                <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                  {user.name}
                </td>
                <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                  {user.lastname}
                </td>
                <td className="text-center border-solid border-b-2 h-10 bg-slate-100">
                  {user.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
