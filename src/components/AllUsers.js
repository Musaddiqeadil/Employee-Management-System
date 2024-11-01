import React from 'react';
import User from './User';

function AllUsers(props) {
    const allusers = props.data;
    let element;

    const dlt = (id) => {
      props.setData(prev => prev.filter((_, i) => i !== id));
    }

    if (allusers.length === 0) {
        element = <h1>No users found</h1>;
    } else {
        element = allusers.map((item, index) => (
            <User key={index} id={index} dlt={dlt} data={item} />
        ));
    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allusers.length === 0 ? (
                        <tr>
                            <td colSpan="7">No users found</td>
                        </tr>
                    ) : (
                        element
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AllUsers;
