import { createTaskAction } from './createTaskAction';

export const CreateTaskForm = () => {
    return (
        <form action={createTaskAction} className="px-6 mt-10">
            <label htmlFor="title" className="block mb-2">Co trzeba zrobic?</label>
            <input
                id="title"
                type="text"
                name="title"
                className="border border-gray-400 p-3 w-full mb-6"
                placeholder="Co trzeba zrobic?"
            />

            <label htmlFor="dueDate" className="block mb-2">Do kiedy trzeba zrobic?</label>
            <input
                id="dueDate"
                type="date"
                name="dueDate"
                className="border border-gray-400 p-3 w-full mb-6"
                placeholder="Do kiedy trzeba zrobic?"
            />

            <div className="text-center">
                <button className="bg-indigo-600 text-white text-lg px-4 py-2">Dodaj zadanie</button>
            </div>
        </form>
    );
}