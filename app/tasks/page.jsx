import { H1 } from "../components/H1";

const listTasks = () => fetch('http://localhost:3003/tasks')
    .then(res => res.json())

// Moge oznaczyc komponnet serwerowy jako async. Dzieki czemu w ramach renderowania tego komponentu, moge poczekac ( await ) na pobranie danych i dopiero na ich podstawie wyrenderowac HTML
export default async function TaskListPage() {
    const tasks = await listTasks();

    return (
        <>
            <H1>Lista Zadan</H1>

            {tasks.length === 0 && <p>Brak zadan do zrobienia :)</p>}

            {tasks.length > 0 && (
                <ul className="px-6 mt-8 space-y-2">
                    {tasks.map(task => (
                        <li key={task.id} className="border border-gray-400 p-4">
                            {task.title} <time className="text-xs italic">{task.dueDate}</time>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}