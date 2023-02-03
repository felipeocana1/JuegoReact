import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';

export const HeaderGame = ({ vidaPar, scorePar, juegoTerminado }) => {

    const [vida, setVida] = useState(vidaPar);
    const [score, setScore] = useState(scorePar);

    useEffect(() => {
        setVida(vidaPar)
        setScore(scorePar)
        if (vida < 1) {
            juegoTerminado(false)
            Swal.fire('Juego Teminado')

        }
    });

    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand>Vidas:{vida}</Navbar.Brand>
                    <Navbar.Brand>Socre:{score}</Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
    </>
}