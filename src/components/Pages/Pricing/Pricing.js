import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Pricing = () => {
    return (
        <div className="m-5 rounded-3 row">
            <Card className="col">
                <h1 className="bg-success bg-opacity-75 p-3 my-3 rounded-3">Individual</h1>
                <Card.Body>
                    <h2>$150</h2>
                    <span>Per 2 hour session</span>
                    <Card.Text>
                        <ul className="m-4">
                            <li>Pay Per Session</li>
                            <li>Expandable upto 3 hours</li>
                            <li>Online Sessions Available</li>
                        </ul>
                    </Card.Text>
                    <Button variant="dark">Get Started</Button>
                </Card.Body>
            </Card>

            <Card className="col mx-4 bg-success bg-opacity-10">
                <h1 className="bg-success text-white p-3 my-3 rounded-3">Couple</h1>
                <Card.Body>
                    <h2>$200</h2>
                    <span>Per 2 hour session</span>
                    <Card.Text>
                        <ul className="m-4">
                            <li>Pay Per Session</li>
                            <li>Expandable upto 3 hours</li>
                            <li>Online Sessions Available</li>
                        </ul>
                    </Card.Text>
                    <Button variant="dark">Get Started</Button>
                </Card.Body>
            </Card>

            <Card className="col">
                <h1 className="bg-success bg-opacity-75 p-3 my-3 rounded-3">Business</h1>
                <Card.Body>
                    <h2>$300</h2>
                    <span>Per 2 hour session</span>
                    <Card.Text>
                        <ul className="m-4">
                            <li>Pay Per Session</li>
                            <li>Expandable upto 3 hours</li>
                            <li>Online Sessions Available</li>
                        </ul>
                    </Card.Text>
                    <Button variant="dark">Get Started</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Pricing;