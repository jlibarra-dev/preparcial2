import { Card, Col } from 'react-bootstrap';
function MovieDetail(props) {
    if (!props['displayMovie']) {
        return null;
    }
    return (<Col xs={4}>
        <Card>
            <Card.Img variant="top" src={props['imagen']} />
            <Card.Body>
                <Card.Title>{props['name']}</Card.Title>
                <Card.Text>
                    {props['desc']}
                </Card.Text>
                <Card.Text>
                    <strong>Cast: {props['cast']}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>)
}

export default MovieDetail;