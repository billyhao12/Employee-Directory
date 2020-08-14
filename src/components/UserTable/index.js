import React from "react";
import { Table } from "react-bootstrap";

function UserTable( props ) {

    // props.users
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
        </Table>
        
    )

}

export default UserTable;