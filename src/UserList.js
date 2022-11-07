import axios from "axios";
import { useEffect, useState } from "react";
import {ListGroup} from "react-bootstrap"
import ListOfUsers from "./ListOfUsers";


function UserList(){
    const [user, setUser]=useState([])
    useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then(Response=>{
        setUser(Response.data)})
    .catch(error=>(console.log(error)))
},[])

return(
    <div className="use">
      <ListGroup>
      <ListGroup.Item action variant="secondary">
    {user.map((users)=><ListOfUsers list={users} />)}
    </ListGroup.Item>
    </ListGroup>
    </div>
)}
export default  UserList;