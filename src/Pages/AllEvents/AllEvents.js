import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllEvent from '../AllEvent/AllEvent';
import './AllEvents.css'

const AllEvents = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    }, [])
    return (
        <Container fluid className="pt-5 events-container pb-5">
            <div>
                <Row xs={1} md={3}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h2>Become a Volunteer in Our Community</h2>
                        <input type="text" placeholder=" Search what you need to find" className="input mt-3" /> <button className="search-button">Search</button>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
            <div className="mt-5">
                <Row xs={1} md={3}>
                    {
                        events.map(event => <AllEvent
                            key={event.key}
                            event={event}

                        ></AllEvent>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default AllEvents;