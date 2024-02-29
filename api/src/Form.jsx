import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {

  const [libelle, setLibelle] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  const navigate = useNavigate();

  function handleChangeLibelle(evt) {
    setLibelle(evt.target.value)
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value)
  }

  function handleChangePrix(evt) {
    setPrix(evt.target.value)
  }


  function handleClickValider() {

    axios.post("http://127.0.0.1:8000/api/produits", 
      {
        libelle: libelle,
        description: description,
        prix: prix,
        image: "",
        sousCategorie: "/api/sous_categories/1"
      }
    ).then(()=>{

      navigate("/list", { replace: true });
    })
  }

  function handleClickAnnuler() {

    navigate("/list", { replace: true });
  }

  useEffect(()=>{
    
  }, [])

  return (
    <div>
      <h1>Formulaire</h1>
      <hr />
      
      <input onChange={handleChangeLibelle} value={libelle} type="text" placeholder="libelle"/><br/>
      <input onChange={handleChangeDescription} value={description} type="text" placeholder="description"/><br/>
      <input onChange={handleChangePrix} value={prix} type="text" placeholder="prix"/><br/>

      <button onClick={handleClickValider}>Valider</button>
      <button onClick={handleClickAnnuler}>Annuler</button>
    </div>
  );
}

export default Form;
