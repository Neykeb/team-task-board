import { useState } from "react";
import styles from "./TaskForm.module.css";

export default function TaskForm({ onAddTask }) {
// Отслеживаем через хуки "useState" четыре переменные состояния для полей формы: "title", "description", "assignee" и "status".
// Переменная title- название задачи
  const [title, setTitle] = useState("");
// Переменная  description - описание задачи
  const [description, setDescription] = useState("");
// Переменная  assignee - ответственный за задачу
  const [assignee, setAssignee] = useState("");
// Переменная  status - статус задачи (по умолчанию "open")
  const [status, setStatus] = useState("open");

// Функция "handleSubmit" вызывается при отправке формы, можно . Она принимает объект события "e" в качестве аргумента.
  const handleSubmit = (e) => {
// e.preventDefault()- не даёт перегрузить страницу при отправке формы
    e.preventDefault();
// Проверяем пробелы по краям строки, если будут пробелы или пустая строка 
    if (title.trim() === "") {
      alert("Bitte einen Titel eingeben!");
      return; 
    }

    // id: crypto.randomUUID() - генериреут уникальный ID
    // title, description, assignee и status присваиваются текущие значения из нашего состояния, что ввёл пользователь в форму.
    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      assignee: assignee,
      status: status,
    };

    // Читка формы после отправки данных
    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("open");
  };

// Чисто класический рутерн, стили подгонит наш прекрасный дизайнер, ЦСС создал для теста
return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Neue Aufgabe erstellen</h2>
      
      <div className={styles.formGroup}>
        <label>Titel *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="z.B. Komponenten planen"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Beschreibung</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Was ist zu tun?"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Verantwortlich</label>
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Name"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="open">Offen (Open)</option>
          <option value="in-progress">In Bearbeitung (In Progress)</option>
          <option value="done">Erledigt (Done)</option>
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Aufgabe hinzufügen
      </button>
    </form>
  );


}