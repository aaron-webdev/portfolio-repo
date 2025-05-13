import HeadShot from './../assets/headshot.jpg';
import Card from 'react-bootstrap/Card';




export default function PortfolioHeading()
{



    return(
        <>
        <div className='flex-column d-flex align-items-center justify-content-center text-center'>
            <Card className='align-items-center'>
                <Card.Img className='p-2' variant="top" src={HeadShot} style={{height: '75%', width: '75%', maxHeight: '450px', maxWidth: '450px', borderRadius: '20px'}} />  
                <Card.Body>
                    <Card.Title><h2>Aaron Clure</h2></Card.Title>
                    <Card.Subtitle className="mb-2"><h4>Seeking a job as a web developer</h4></Card.Subtitle>
                    <Card.Text>
                        Short Bio Here
                    </Card.Text>
                </Card.Body>
                <br/>
            </Card>
        </div>        
        </>
    )
}