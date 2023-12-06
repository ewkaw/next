'use client' // Uzywamy hooka, takze musimy zmienic na komponent kliencki

import { createTaskAction } from './createTaskAction';
import { useFormState } from 'react-dom';

export const CreateTaskForm = () => {
    // korzystamy z react'owego hook'a useFormState(), aby pobrac informacje o stanie formularza ( wartosc zwracana przez nasza akcje serwerowa )
    // Jako drugi argument moge przekazac stan poczatkowy mojego formularza ( bedziemy mieli do niego dostep w akcji serwerowej )
    // UWAGA: Pamietamy, zeby podmienic akcje w propsie action w formularzu
    // UWAGA 2: Ten hook jest oznaczony jako funkcjonalnosc eksperymentalna przez tworcow reacta
    const [state, formAction] = useFormState(createTaskAction);

    return (
        <form action={formAction} className="px-6 mt-10">
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

                {/* Optional chaining: Zwroc undefined jesli state jest null'em lub undefined'em. W przeciwnym razie sprobuje dostac sie do pola errorMessage */}
                {state?.errorMessage && (
                    <p className="text-red-500 mt-2">
                        {/* Wyswietlanie komunikatu o bledzie */}
                        {state.errorMessage}
                    </p>
                )}
            </div>
        </form>
    );
}