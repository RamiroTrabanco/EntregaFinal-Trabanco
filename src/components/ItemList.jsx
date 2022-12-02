import Item from './Item'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/esm/Row'


function ItemList({items}) {
    return(
        <Container>
            <Row>
            {
        
        items.length > 0 ? items.map (item => <Item key={item.id} id={item.id} title={item.title} img={item.img} price={item.price} stock={item.stock} />)
        : <p>Cargando...</p>
    }
            </Row>
        </Container>
        )
}

export default ItemList