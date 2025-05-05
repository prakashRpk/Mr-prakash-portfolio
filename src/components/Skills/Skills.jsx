import './Skills.css'
import SkillsList from './Skills.json'
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
   </div>
   </div>
    </>)
}