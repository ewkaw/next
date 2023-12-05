import { completeTaskAction } from "./completeTaskAction";

export const CompleteButton = ({ taskId }) => {
    return (
        // Aby przekazac dane o zadaniu do ukonczenia musimy zastosowac metode .bind()
        <form action={completeTaskAction.bind(null, taskId)} className="inline-flex items-center pr-4">
            <button className="w-5 h-5 rounded-full border-gray-400 border-2"></button>
        </form>
    );
}