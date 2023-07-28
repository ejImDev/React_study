import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from "./UserList";
import Spinner from "../Spinner";

const Users = () => {
    const [users, setUsers] = new useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false); /*리스트를 셋팅할때 false로 바꿔줌. 다시말해 리스트가 없는 초기상태만 true*/
            });
    }, []);


    useEffect(() => {
    }, [users]); /*users 상태가 변경될때마다 반영 */

    return (
        <>
            <h1>Users</h1>
            {loading ? <Spinner /> : <UserList users={users}/> }
            {/*loading이 true일때 == 리스트배열을 아직 가져오기전에만 로딩이 뜨도록 함*/}
        </>
  );
};

export default Users;