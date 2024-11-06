import { useState } from "react";
import Navbar from "../components/Navbar";
import Admin from "../components/Admin";

export default function Homepage() {
  const [tableUser, setTableUser] = useState(false);
  const changeUserTable = () => {
    setTableUser((table) => !table);
    setTableAdmin(false);
  };

  const [tableAdmin, setTableAdmin] = useState(false);
  const changeAdminTable = () => {
    setTableAdmin((table) => !table);
    setTableUser(false);
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto flex flex-col max-w-7xl items-center p-6">
        <div className="w-[1000px] text-6xl font-bold flex flex-col justify-center items-center p-5 m-10'">
          <h1>Generation Thailand</h1>
          {tableUser ? (
            <h1>Home - User sector</h1>
          ) : tableAdmin ? (
            <h1>Home - Admin sector</h1>
          ) : (
            <h1>React - Assessment</h1>
          )}
        </div>
        <div className="w-[500px] flex justify-between font-semibold pt-4">
          <button
            onClick={changeUserTable}
            className="bg-slate-300 p-6 rounded-xl drop-shadow-lg"
          >
            User Home Sector
          </button>
          <button
            onClick={changeAdminTable}
            className="bg-slate-300 p-6 rounded-xl drop-shadow-lg"
          >
            Admin Home Sector
          </button>
        </div>
        <div>
          <Admin tableUser={tableUser} tableAdmin={tableAdmin} />
        </div>
      </div>
    </>
  );
}
