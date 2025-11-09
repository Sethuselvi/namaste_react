import {useState,useEffect}  from 'react';
const User = (props) =>{
    const[count,setcount] = useState(0);
    const[count2] = useState(1);
    // useEffect(() =>{
    //     setcount((count)=>count+1);
    // },[])
    return(<div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <button onClick ={() =>{
        setcount((count)=>count+1)
    }}>Increment</button>
        <h2>{props.name}</h2>
        <h3>Location:Chennai</h3>
        <h4>Contact:sethuselvi1206</h4>
        </div>)
}

export default User