import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux'
import "../App.css"
import Footer from './Footer'
import FormContact from './FormContact'


export class Home extends Component {
  render() {
    return (
      <div>
        <Carousel className='carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.create.vista.com/api/media/small/211766596/stock-photo-young-smiling-business-woman-eyeglasses"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.kaspersky.com/content/en-global/images/repository/isc/2020/what-is-an-ip-address1.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.create.vista.com/api/media/small/212127514/stock-photo-young-multiethnic-businesspeople-sitting-table"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <FormContact/>
        <Footer/>
        </div>
    )
    
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)