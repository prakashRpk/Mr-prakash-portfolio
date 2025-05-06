import {Card,Button} from 'react-bootstrap';
import './Skills.css'
import SkillsList from './Skills.json'
import Certificate from './certificate.json'
export default function Skills(){
    return(<>
    <div id='layout'>
   <div id='Skills'>
    <h1>Skills</h1>
        <div>
        {SkillsList.map((item)=><span>{item['Skills']}</span>)}
        </div>
   </div>
   <div id='certificate'>
    <h1>certificate</h1>

        {Certificate.map((item)=>
        <Card id='card'>
        <Card.Img variant="top" src={item['certificate-img']} />
        <Card.Body>
          <Card.Title>{item['certificate-name']}</Card.Title>
        </Card.Body>
      </Card>)}
   </div>
   </div>
    </>)
}