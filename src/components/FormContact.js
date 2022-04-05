import React, { Component } from 'react'
import { Form,Button } from "react-bootstrap"
export default class FormContact extends Component {
  render() {
    return (
      <div>
        <Form className=' form ' >          
          <Form.Group  >
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Please write name" />
          </Form.Group>
          <Form.Group  >
            <Form.Label>Surname</Form.Label>
            <Form.Control type="email" placeholder="Please write surname" />
          </Form.Group>
          <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group  controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Form>
        <Button onClick={() => { alert("Message send") }} variant='primary' type='submit'>Submit</Button>
      </div>
    )
  }
}
