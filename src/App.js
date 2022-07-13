import {Students} from "./components/Students"
import './App.css';
import {useState} from "react"

function App() {
  var studentsPerPage = 25; 
  
  const [students, setStudents] = useState([...Array(studentsPerPage).keys()]); 
  
  var studentsNumber = studentsPerPage; 
  console.log(students)
  function handleScroll() { 
    
   
    console.log(document.documentElement.scrollHeight,document.documentElement.scrollTop,document.documentElement.clientHeight);
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight) { 
      studentsNumber += studentsPerPage; 
      console.log(studentsNumber);
      setStudents([...Array(studentsNumber).keys()]);
      
    } 
    
  } 
  console.log(studentsNumber, studentsPerPage);
   window.addEventListener("scroll", handleScroll);
  return (
    <div className="App">
          
          {students.map((item, i) => ( 
        <Students title={"Masai Students" + (i + 1)}/> 
      ))} 
      
    </div>
  );
}

export default App;
