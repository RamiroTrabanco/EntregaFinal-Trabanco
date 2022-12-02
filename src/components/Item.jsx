import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import "../styles/Item.css";

function Item({id, stock, title, price, img}) {
  return (
          <Card border="secondary" className="cardStyle" style={{ width: '18rem' , height: "30rem"}}>
            <Card.Img variant="top" src={img} height="60%" width="30%" />
            <Card.Body>
              <Card.Title className='itemTitle'>{title}</Card.Title>
              <Card.Text as="h5">
                $ {price}
              </Card.Text>
              <Card.Text className='itemStock'>
                {stock} unidades disponibles
              </Card.Text>
              <Card.Text>
              <Link to={`/item/${id}`}>
                <Button className="mb-2 linkStyle" id="toggle-check" type="checkbox" variant="outline-secondary">
                  Más detalles...
                </Button>
              </Link>
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

export default Item;