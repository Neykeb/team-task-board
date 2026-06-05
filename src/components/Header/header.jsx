export function Header(){

    const tasks = 8
    const doneTasks = 2

    return (
      <>
        <header className="">

          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
              alt="Paris"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40"></div>
            <h3 className="z-10 mt-3  text-2xl font-bold text-white">
              Team Task Board
              <p className="text-xl font-normal mt-3">Aufgaben: {tasks}</p>
            </h3>
            <h3 className="z-10 mt-3 text-2xl font-bold text-white">
              <p className="text-xl font-normal">Erleigte Aufgaben: {doneTasks}</p>
            </h3>
          </article>
        </header>
      </>
    );
}