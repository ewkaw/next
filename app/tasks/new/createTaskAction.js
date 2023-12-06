'use server'

import { redirect } from 'next/navigation';

// DTO - Data Transfer Object
const createTask = dto => fetch('http://localhost:3003/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dto)
});

// formData to dane z naszego formularza
// definicja akcji, ktora ma sie wykonac po stronie serwera w momencie zatwierdzenia formularza. Aby akcja zostala wykonana, ta funkcja musi byc przekazana do atrybutu `action` w danym formularzu
// Teraz jako pierwszy argument otrzymujemy poprzedni stan formularza, a jako drugi, formData
export const createTaskAction = async (prevState, formData) => {
    //  Tak nie zadziala <- funkcja redirect podnosi blad, ktory nastepnie jest obslugiwany przez next.js i dopiero nastepuje przekierowanie. W tym przypadku przechwytujemy ten "nextowy" blad w catch i dlatego przekierowanie nie wystepuje
    // try {
    //     await createTask({
    //         title: formData.get('title'),
    //         dueDate: formData.get('dueDate'),
    //     });

    //     redirect('/tasks');
    // } catch(err) {
    //     console.error(err);
    // }

    const title = formData.get('title');
    const dueDate = formData.get('dueDate');

    // Walidacja -> Mozemy zwrocic nowy stan formularza, w tym wypadku stan z informacja o bledach
    if (!title) {
        return {
            errorMessage: 'Nazwa zadania nie moze byc pusta!'
        };
    }
    if (!dueDate) {
        return {
            errorMessage: 'Termin wykonania zadania nie moze byc pusty!'
        };
    }

    await createTask({
        title,
        dueDate,
    });

    // przekieruj na strone /tasks
    redirect('/tasks');
};