import React from 'react';
import { Card } from 'react-bootstrap';
export default function Player({info:{name,team,nationality,jerseyNumber,age,imageURL}}) {
    return (
        <Card style={{ width: '18rem' }} className='m-3'>
                <Card.Img variant="top" src={imageURL} width={"350px"}  height={"400px"}/>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start">
                        <strong>age : </strong>{age}
                        <br/>
                        <strong>team : </strong>{team}
                        <br/>
                        <strong>nationality : </strong>{nationality}
                        <br/>
                        <strong>jerseyNumber : </strong>{jerseyNumber}
                        <br/>
                    </Card.Text>
                </Card.Body>
        </Card>
    )
}
Player.defaultProps ={
    info:{
    name: "Unknown",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber:"Unknown",
    age: "Unknown",
    imageURL: "assets/default-image.png",
    }
}
