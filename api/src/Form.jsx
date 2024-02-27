import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();


  function handleClick() {

    navigate("/list", { replace: true });
  }

  useEffect(()=>{
    
  }, [])

  return (
    <div>
      <h1>Formulaire</h1>
      <hr />
      
      <button onClick={handleClick}>Valider</button>
    </div>
  );
}

export default Form;
