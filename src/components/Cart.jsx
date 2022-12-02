import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/esm/Button';
import "../styles/Cart.css"
import { increment, serverTimestamp } from 'firebase/firestore';
import { doc, collection, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../utils/firebaseConfig';

const Cart = () => {
    const { cartList } = useContext(CartContext)
    const { clear } = useContext(CartContext)
    const { deleteItem } = useContext(CartContext)
    const { totalCart } = useContext(CartContext)
    const { totalPerItem } = useContext(CartContext)
    const test = useContext(CartContext)

    const createOrder = () => {
        let order = {
            buyer: {
                name: "ramiro",
                email: "trabancoram@gmail.com",
                phone: "123456"
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                price: item.priceItem,
                title: item.titleItem,
                qty: item.qtyItem
            })),
            total: test.totalCart()
        }

        const createOrder = async () => {
        const newOrder = doc(collection(db, "orders"))
        await setDoc(newOrder, order);
        return newOrder
        }
        
        createOrder()
        .then(response => {alert(
            `"Order ID = ${response.id}"`)
            test.cartList.forEach(async(item) => {
                const itemRef = doc (db, "prods", item.idItem)
                await updateDoc(itemRef,{
                    stock: increment(-item.qtyItem)
                })
            })
            test.clear()})
        .catch(err => console.log(err))
    }
    
    if (cartList.length === 0) return (
        <>
            <h2 className='cartTitle'>El carrito está vacio</h2>
            <Link to="/" className='btnEmptyCart'><Button size="lg" variant="secondary" active>Seguir navegando</Button></Link>
        </>
        )
        else return (
        <>
        <h2 className='cartTitle'>Tu carrito</h2>
        <Link to="/" className="btnAddItem"><Button size="sm" variant="secondary">Agregar productos</Button></Link>
        <Button onClick={clear} size="sm" variant="secondary">Vaciar carrito</Button>
            {cartList.map( item => 
                <>
                    <Container>
                        <Card className="cartContainer">
                            <Card.Text as="h5" className="titleItemCart">{item.titleItem}</Card.Text>
                            <Card.Img className="imgItemCart" variant="top" src={item.imgItem} />
                            <Card.Text className="priceItemCart">$ {item.priceItem}</Card.Text>
                            <Card.Text className="priceItemCart">x {item.qtyItem} </Card.Text>
                            <Card.Text className="subItemCart" as="h4"> $ { totalPerItem(item.idItem) }</Card.Text>
                            <Button className="btnDeleteItem" variant="danger" size="sm" onClick={() => deleteItem(item.idItem)}>X</Button>
                        </Card>
                    </Container>
                </>
                
        )}
        <Container className="totalOrder">
            <Card.Text as="h4">Total de la orden</Card.Text>
            <Card.Text as="h3" className="totalPriceOrder">$ { totalCart() }</Card.Text>
            <Button variant="primary" onClick={createOrder}>COMPRAR</Button>
        </Container>
        </>)
}


export default Cart;