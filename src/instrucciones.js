import Card from 'react-bootstrap/Card';
import "./App.css"
import Button from 'react-bootstrap/Button';

export const Instrucciones = ({juegando}) => {
    return <div className="Instrucciones">
        <Card className='tarjeta'>
            <Card.Header>Instrucciones</Card.Header>
            <Card.Body>Tienes que dar click en los desechos reciclables para sumar el score, si te equivocas perderas una vida.</Card.Body>
            <Button variant="success" onClick={()=>{juegando(true)}}>Jugar</Button>
        </Card>
    </div>
}