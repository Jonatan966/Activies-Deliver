import { useState } from "react";

export function App() {
  const [ typeStudent, setTypeStudent ] = useState(() => {
    const type = localStorage.getItem("@list:typeStudent");
    if(!type){
      return "";
    }
    return type;
  });

  function handleSetTypeStudent(type: string){
    setTypeStudent(type);

    localStorage.setItem("@list:typeStudent", JSON.stringify(type));
  }

    return (
      <>
        <h1>Você é:</h1>
        { typeStudent.trim() ? (
           typeStudent !== "student" ? (
             <p>Monitor</p>
            ) : (
            <p>Estudante</p>
           )
        ) : (
          <button onClick={() => handleSetTypeStudent("student")}>Estudante</button>
        )}
      </>
    );
}

export default App
