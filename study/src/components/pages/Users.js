import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from "./UserList";

const Users = () => {
    const [users, setUsers] = new useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data); /*axios를 통해서 응답값을 받고 그 데이터를 setUser로 반영*/
            });
    }, []);


    useEffect(() => {
    }, [users]); /*users 상태가 변경될때마다 반영 */

    return (
        <>
            <h1>Users</h1>
            <UserList users={users}/>
        </>
  );
};

export default Users;