import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/ItemDetail.css';
import { CartContext } from './CartContext';
import { useContext } from 'react';

function ItemDetail({item}) {
    const [itemCount, setItemCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const onAdd = (qty) => {
        alert(`"Seleccionaste ${qty} unidades"`)
        setItemCount(qty)
        addToCart(item, qty)
    } 

    return (
        <Container>
            <Card className="cardDetail">
                <Card.Header as="h2">{item.title}</Card.Header>
                <Card.Img className="imgStyle" variant="top" src={item.img} />
                <Card.Text className="description">{item.description}</Card.Text>
                <Card.Text className="price" as="h4">$ {item.price}</Card.Text>
                <Card.Text className="stock">{item.stock} unidades disponibles</Card.Text>
                { itemCount === 0 ? 
                <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                : <Link to="/cart" className="btnCheckout"><Button variant="danger">Ir a pagar</Button></Link>
            }
            </Card> 
        </Container>
    )

}

export default ItemDetail