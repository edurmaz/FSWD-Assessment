import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBInput } from "mdbreact";

export default function UserList({ users }) {
  const [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/candidates/${id}`;
    navigate(path);
  };

  return (
    <>
      <MDBCol md="6">
        <MDBInput
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          hint="Search by Full Name"
          type="text"
          containerClass="active-pink active-pink-2 mt-0 mb-0"
        />
      </MDBCol>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .filter((user) => {
              if (searchTerm === '') {
                return user;
              } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return user;
              }
            })
            .map((user, id) => {
              return (
                <tr key={id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button onClick={() => {routeChange(user.id)}} variant="primary" size="sm">
                      Detail
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
