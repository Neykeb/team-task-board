export function FilterBar({ filter, setFilter }) {
  return (
    <>
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
        type="button"
      >
        all
      </button>
      <button
        onClick={() => setFilter("open")}
        className={filter === "open" ? "active" : ""}
        type="button"
      >
        open
      </button>
      <button
        onClick={() => setFilter("in-progress")}
        className={filter === "in-progress" ? "active" : ""}
        type="button"
      >
        in-progress
      </button>
      <button
        onClick={() => setFilter("done")}
        className={filter === "done" ? "active" : ""}
        type="button"
      >
        done
      </button>
    </>
  );
}

{
  /*
  Importieren: 
  import { FilterBar } from "./components/FilterBar/FilterBar";
  const [filter, setFilter] = useState("all");
  <FilterBar filter={filter} setFilter={setFilter} />
  */
}
