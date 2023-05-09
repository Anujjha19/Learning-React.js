import React from 'react';

const UserData = ({ users }) => {
    return (
        <>
            {users.map((cuser) => {
                const { id, name, email, address } = cuser;

                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{address.city}</td>
                    </tr>
                );
            })}
            <style>{`
        tr:hover {
          background-color: #f5f5f5;
        }
      `}</style>
        </>
    );
};

export default UserData;
