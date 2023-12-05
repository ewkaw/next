import { GeneratedAt } from "../components/GeneratedAt";
import { H1 } from "../components/H1";
import { StatCard } from "../components/StatCard";
import { sleep } from "../utils/sleep";

// Wymuszenie aby strona byla generowana na zadanie ( next.js domyslnie bedzie probowal wygenerowac strony statyczne )
export const dynamic = 'force-dynamic';

const listTasks = () => fetch('http://localhost:3003/tasks')
    .then(res => res.json());

const getTaskStats = () => {
    // Poczekaj 4s i po tym czasie zwroc obiekt ( Symulacja dlugiego generowania strony )
    return sleep(4_000, {
        completed: 1,
        todo: 2,
        overdue: 0
    });
}

// Moge oznaczyc komponnet serwerowy jako async. Dzieki czemu w ramach renderowania tego komponentu, moge poczekac ( await ) na pobranie danych i dopiero na ich podstawie wyrenderowac HTML
export default async function TaskListPage() {
    const tasks = await listTasks();
    const taskStats = await getTaskStats();

    return (
        <>
            <H1>Lista Zadan</H1>

            <GeneratedAt />

            <div className="flex justify-center text-center px-6 my-6">
                <StatCard title="Ukonczono" value={taskStats.completed} />

                <StatCard title="Do zrobienia" value={taskStats.todo} />

                <StatCard title="Zalegle" value={taskStats.overdue} />
            </div>

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