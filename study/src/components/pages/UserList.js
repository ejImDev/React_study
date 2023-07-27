import React from 'react';

const UserList = ({users}) => {
    console.log(users)
    return (
        <div>

            {users.map(user => {
                return(<div className="card mb-2">
                    <div className="card-body p-3" key={user.id}>
                        {user.name}
                    </div>
                </div>);
            })}
        </div>
    );
}

export default UserList;