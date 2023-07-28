import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from "./UserList";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom"; /*url에서 param값을 추출할수있음*/

const User = () => {
    const [user, setUser] = new useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams(); /*이때 변수의 이름은 Route파일에서 지정한 :매개변수명과 같아야 함*/
    console.log(user)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(response => {
                setUser(response.data);
                setLoading(false); /*리스트를 셋팅할때 false로 바꿔줌. 다시말해 리스트가 없는 초기상태만 true*/
            });
    }, []);

    const userDetail = loading ? <Spinner /> :
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>

    return (
        <>
            <h1>Users 정보</h1>
            {userDetail}
        </>
    );
};

export default User;