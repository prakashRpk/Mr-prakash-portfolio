import {Card,Button} from 'react-bootstrap';
import './projects.css'
import programs from './ProjectOfLang.json'
import projects from './projects.json'
import { useState } from 'react';
// import img from '../img/cards/image1.png'

function GroupExample() {
    const [projectcard,setProjectcard]=useState(<div></div>)
    const [cardGroup,setCardGroup]=useState()
    const arr=[]

    const projectcardFun = (ProgramName) => {
      console.log(ProgramName)
      projects.map((item)=>{
        if(ProgramName === item['Program-name']){
          console.log(item['Project-Name'])
          arr.push(item)
        }
      })
      setProjectcard(
        <div id='projectCarts'>
        <h1>{ProgramName}  <span onClick={()=>setProjectcard(<div></div>)}><i class="fa-solid fa-xmark"></i></span></h1>
      <div id='cardGroup'>
      {arr.map((item,index)=>
      <Card id='card'>
      <Card.Img variant="top" src={item['output-img']} />
      <Card.Body>
        <Card.Title>{item['Project-Name']}</Card.Title>
        <a href={item['git-link']} target='_blank'>
        <Button variant="dark" onClick={()=>projectcardFun(item['program-name'])}> <i class="fa-solid fa-code-branch"></i> code</Button>
        </a>
        <a href={item['output']} target='_blank'>
        <Button variant="dark" onClick={()=>projectcardFun(item['program-name'])}> <i class="fa-solid fa-code"></i> Output</Button>
        </a>
      </Card.Body>
    </Card>
    )}
    </div>
    </div>
      )

    }

  return (<>
        <div id='programs'>
        <h1> <i class="fa-solid fa-diagram-project"></i> projects</h1>
      <div id='cardGroup'>
      {programs.map((item,index)=>
      <Card id='card'>
      <Card.Img variant="top" src={item['output-img']} />
      <Card.Body>
        <Card.Title>{item['program-name']}</Card.Title>
        <Button variant="dark" onClick={()=>projectcardFun(item['program-name'])}> <i class="fa-solid fa-diagram-project"></i> Projects</Button>
      </Card.Body>
    </Card>
    )}
    </div>
    </div>
        {projectcard}
 </> );
}

export default GroupExample;