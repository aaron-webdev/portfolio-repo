import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import xnk_preview from './../assets/xnk_preview.png';


export default function XnkCard()
{



    return(
        <>
            <Container className='flex-column d-flex nav align-items-center py-5'>
            <Card style={{width: '24rem'}}>
                <Card.Img variant="top" src={xnk_preview} />
                <Card.Body className='text-center'>
                <Card.Title>XNK Website</Card.Title>
                <Card.Subtitle>Artist/ Entertainer</Card.Subtitle>
                <Card.Text>
                Website designed to showcase artist's musical releases and personality
                </Card.Text>
                <Button variant='danger' target='_blank' href="https://aaron-webdev.github.io/xnk_repo/">View Website</Button>
            </Card.Body>
            </Card>
            </Container>
        </>
    )
}