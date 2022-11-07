import React from "react"

const ListOfUsers = (users) => {
    console.log(users.list)
  return (
    <div>
        <ul>
            <li>
                {users.list.name}
            </li>
        </ul>
    </div>
  )
}

export default ListOfUsers