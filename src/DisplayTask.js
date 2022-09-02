const DisplayTask=(props)=>{
    return(
        <div>
            <table>
                <tr>tasks</tr>
                <tr>Actions</tr>
                {props.todo.map((task)=>
                <td>{task.task}</td>
                )}
            </table>
        </div>
    )
}
export default DisplayTask;