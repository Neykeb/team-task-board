export function Header({ totalTasks, doneTasks }) {
  return (
    <header className="bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-100 ">
      <h1 className="text-4xl font-bold text-gray-900">Team Task Board</h1>

      <p className="mt-2 text-gray-500">Verwalte Aufgaben für dein Team.</p>

      <div className="flex gap-6 mt-6 text-sm">
        <div className="bg-gray-100 px-4 py-2 rounded-xl">
          Aufgaben: <span className="font-semibold">{totalTasks}</span>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
          Erledigt: <span className="font-semibold">{doneTasks}</span>
        </div>
      </div>
    </header>
  );
}

 