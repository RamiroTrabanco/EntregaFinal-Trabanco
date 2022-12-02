import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartContext';
import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function CartWidget () { 
    const { totalCartQty } = useContext(CartContext)
    const { cartList } = useContext(CartContext)

    return(<>
        <Button variant="primary">
        <FontAwesomeIcon icon={ faCartShopping } style={{"width": "27px", "height": "27px"}}/>
        {cartList.length === 0 || <Badge bg="danger">{totalCartQty()}</Badge>}
        </Button>
        </>
    )
}

export default CartWidget