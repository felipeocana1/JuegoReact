import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Juego = ({ establecerVida, establecerScore }) => {
    
    //1-reciclable
    //2-noreciclable
    const desechos = [
        {
            id: 1,
            nombre: "Botella plastica",
            tipo: 1,
            clase: "desecho-1"
        },
        {
            id: 2,
            nombre: "Papel Higenico",
            tipo: 2,
            clase: "desecho-2"
        },
    ]
    
    let numRandom=Math.floor(Math.random() * desechos.length);

    const obtenerNumRan =()=>{
        numRandom= Math.floor(Math.random() * desechos.length);
    }

    const verificacion =(tipo)=>{
        if(desechos[numRandom].tipo !== tipo){
            establecerVida()
            obtenerNumRan();
        }else{
            establecerScore()
            obtenerNumRan();
        }
    }

    return <div className='Juego'>


        <Row className='Desechos'>
            <span className={`Imagen  ${desechos[numRandom].clase}`}></span>
        </Row>
        <Row className='Botones'>
            <Button variant="success" onClick={() => { verificacion(1) }} className="boton">Reciclable</Button>
            <Button variant="danger" onClick={() => { verificacion(2) }} className="boton">No reciclable</Button>
        </Row>


    </div>
}