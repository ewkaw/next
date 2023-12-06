import { sql } from '@vercel/postgres';

// Obsluga zadan HTTP GET 
export async function GET() {
    const tasks = await sql`
        SELECT * FROM tasks;
    `
    .then(res => res.rows);

    // Zwrocenie odpowiedzi w formacie JSON
    return Response.json(tasks);
}

// Obsluga zadan HTTP POST 
export async function POST(request) {
    const task = await request.json();

    await sql`
        INSERT INTO tasks (title, due_date, completed)
        VALUES (${task.title}, ${task.dueDate}, false)
    `;

    // Zwrocenie odpowiedzi w formacie JSON
    return Response.json({
        created: true
    });
}