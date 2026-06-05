export function header(){

    const tasks = 8
    const doneTasks = 2

    return(
        
        <>
        <header>
        <h1>Team Task Board</h1>
        <h5>Hier kannst du Aufgaben für dein Team verwalten.</h5>

        <div>
            <p>{taks}</p>
            <p>{doneTasks}</p>
            
        </div>
        </header>
        </>
    )
}