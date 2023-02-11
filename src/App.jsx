import React from "react";
// import { nanoid } from "nanoid";
import "./App.css";
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import Table from "./Table";


function App() {
  const columns = [
    {
      label: "Name",
      id: "firstName",
    },
    {
      label: "Last name",
      id: "lastName",
    },
    {
      label: "Skills",
      id: "skill",
    },
    {
      label: "Positions",
      id: "position",
    },
  ];

  // ['firstName', 'lastName']

  const data = [
    {
      id: 1,
      lastName: "Pouraghai",
      firstName: "Delara",
      skill: "Cat lover",
      position: "Intern",
    },
    {
      id: 2,
      firstName: "Hossein",
      lastName: "Rahimi",
      skill: "Khodaye JS",
      position: "Engineer's head",
    },
    {
      id: 3,
      firstName: "Josef",
      lastName: "Baltazar",
      skill: "THE BOSS",
      position: "CEO",
    },
    {
      id: 4,
      firstName: "Samira",
      lastName: "Kian",
      skill: "Always laugh",
      position: "Developer",
    },
    {
      id: 5,
      lastName: "Mahsa",
      firstName: "Abadian",
      skill: "Why so serious?!",
      position: "Backend developer",
    },
    {
      id: 6,
      lastName: "Niknejad",
      firstName: "Helia",
      skill: "Nice ",
      position: "Frontend developer",
    },
    {
      id: 7,
      lastName: "Hassanzadeh",
      firstName: "Mjavad",
      skill: "Calm ",
      position: "DevOps engineer",
    },
    {
      id: 8,
      lastName: "JM",
      firstName: "Matin",
      skill: "Trouble maker",
      position: "BackEnd developer",
    },
    {
      id: 9,
      lastName: "Babaei",
      firstName: "Mahnaz",
      skill: "Strong",
      position: "Supervisor",
    },
  ];


  return (
    <div className="d-grid gap-2 col-10 mx-auto">
      <hr />

      <div className=" border m-2 p-2 bg-purple-700/30 border-gray-300 shadow-lg rounded-lg ">
        <div>
          <Table columns={columns} data={data} />
        </div>

        <div className=" m-2 text-center flex-row ">
          <h2 className="font-bold text-xl">Add a task </h2>
          <form>
            <input
              type="number"
              
              className="border-transparent rounded-full m-2 p-2"
              name="number"
              required="required"
              placeholder="Enter the number "
            />
            <input
              type="text"
              
              className="border-transparent rounded-full m-2 p-2"
              name="name"
              required="required"
              placeholder="Enter the Name"
            />
            <input
              type="text"
              
              className="border-transparent rounded-full m-2 p-2"
              name="deadline"
              required="required"
              placeholder="Enter the Deadline"
            />
            <input
              type="text"
              
              className="border-transparent rounded-full m-2 p-2"
              name="task"
              required="required"
              placeholder="Enter the Task"
            />
            <br />
            <button
              type="submit"
              className=" border shadow-xl bg-purple-900 text-white rounded-lg px-5 "
            >
              Add
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;