import { useState } from "react";
import "./App.css";

function App() {
  const tasks = [
    { id: 1, status: "erledigt" },

    { id: 2, status: "offen" },

    { id: 3, status: "erledigt" },
  ];

  const totalTasks = tasks.length;

  const doneTasks = tasks.filter((task) => task.status === "erledigt").length;

  return (
    <main className="max-w-5xl mx-auto p-6">
      <Header totalTasks={totalTasks} doneTasks={doneTasks} />

      {/* Neue Aufgaben hinzufpgen */}

      {/* .... */}
    </main>
  );
}

export default App;


