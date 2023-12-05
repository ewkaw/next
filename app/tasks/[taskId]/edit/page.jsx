import { H1 } from "@/app/components/H1";

// W next.js definiujemy dynamiczne parametry nazywajac katalog z wykorzystaniem nawiasow kwadratowych: [taskId] <- bedziemy mieli parametr dynamiczny taskId
export default function EditTaskPage(props) {
    // Logi zobaczymy w git bash, a nie w konsoli przegladarkowej -> Next.js ten kawalek kodu wykonuje po stronie serwera
    console.log(props);
    // W ten sposob mozemy otrzymac wartosc dynamicznego parametru taskId
    const taskId = props.params.taskId;

    return (
        <>
            <H1>Edytuj zadanie o ID: {taskId}</H1>
        </>
    )
}