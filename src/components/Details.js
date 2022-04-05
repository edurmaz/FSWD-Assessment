import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import UserAction from '../actions/UserAction';
//import { Routes, Route } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserAction());
  }, []);
  const state = useSelector((state) => state);

  const { users } = state;
  console.log(users);

  return (
    <>
      <h3>CANDİDATE LİST</h3>

      <Table striped bordered hover size='sm' variant='dark'>
        <thead>
          <tr>
            <td>#</td>
            <td>NAME-SURNAME</td>
            <td>PHONE NUMBER</td>
            <td>ADDRESS</td>
            <td>COMPANY</td>
            <td>WEB SİTE</td>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((item) => item.id == params.id)
            .map((item) => (
              <tr key={item.id}>
                {item.id}
                <td>
                  {item.name}.{item.username}
                </td>
                <td>{item.phone}</td>
                <td>{item.address.street}</td>
                <td>{item.company.name}</td>
                <td>{item.website}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
export default Details;
