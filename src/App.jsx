// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import StudentDetail from './Components/StudentDetail'

// import StudentInfo from './Components/StudentInfo'

import StudentData from './StudentData'

function App() {
 let Students=[
  
  {
    id:1,
  sname:"Kohli",
  age:25,
  imageUrl:"https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
 },

 
 {
  id:2,
  sname:"Emperor",
  age:26,
  imageUrl:"https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
 },
  
 {
  id:3,
  sname:"King",
  age:27,
  imageUrl:"https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
 },
  
 {
  id:4,
  sname:"Cheeku",
  age:28,
  imageUrl:"https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
 },


 
 {
  id:5,  
  sname:"Virat Kohli",
  age:26,
  imageUrl:"https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
 },

 
]

  return (
    <>

{/* {Students.map((student)=>{
  return <StudentInfo  key={student.id} name={student.sname}  age={student.age}/>
})} */}
{Students.map((student)=>{
  return <StudentData   key={student.id}   name={student.sname} age={student.age}  image={student.imageUrl}/>
})}
      
    </>
  )
}

export default App
