import React from 'react';
import { Col } from 'react-bootstrap';
import './AllEvent.css'

const AllEvent = (props) => {
    const {title,img}=props.event
    return (
        <Col className="mt-3">
          <div className="card-style">
              <img src={img} className="img" alt="" />
              <button className="btn btn-warning w-100 text-white">{title}</button>
          </div>
        
        </Col>
    );
};

export default AllEvent;