import React from 'react';
import players from '../Data/players';
import Player from './Player';
import { Container } from 'react-bootstrap';

export default function PlayersList() {
return (
        <>
        <h1>FIFA player cards</h1>
        <Container className='d-flex flex-wrap align-items-center justify-content-center'>
            <Player/>
        {players.map((player) => (
    <Player key={player.name} info={player} />
    ))}
    </Container>
    </>
)
}
