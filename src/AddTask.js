import { useState } from "react"

const AddTask=(props)=>{
const[input,setInput]=useState('');
const submitHandler=(e)=>
{
e.preventDefault();
//console.log(input);
props.onSaveData(input);

}
    return(
        <div>
            <form>
                <label>Enter Todo</label>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
                <button type="submit" onClick={submitHandler}>AddTask</button>
            </form>
        </div>
    )
}
export default AddTask;