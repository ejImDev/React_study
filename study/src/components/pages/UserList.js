import React from 'react';

const UserList = ({users}) => {
    console.log(users)
    return (
        <div>
            {users.map(user => { {/*map을 이용하여 반복 출력*/}
                return(<div key={user.id}> /*map을 사용할때는 key를 작성해야함*/
                    {user.name}
                </div>);
            })}
        </div>
    );
}

export default UserList;