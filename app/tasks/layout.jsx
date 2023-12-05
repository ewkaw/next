// Ten layout bedzie dostepny dla strony /tasks i wszystkich podstron 
// Na stronie / nie zobaczymy tej nawigacji
export default function TasksLayout({ children }) {
    return (
        <>
            <nav className="text-xs text-center mb-4">
                <a href="/">Start</a> / <a href="/tasks">Zadania</a>
            </nav>

            {children}
        </>
    );
}