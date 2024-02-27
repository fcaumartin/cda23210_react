import { useEffect, useState } from "react";


function App2() {

  const [liste, setListe] = useState([
    {
      "libelle": "test1"
    },
    {
      "libelle": "test2"
    }
  ]);


  useEffect(()=>{
    console.log("Démarrage de l'application...")
    fetch("http://127.0.0.1:8000/api/produits", 
    {
      headers: {
        "Accept": "application/json"
      }
    }
    )
    .then((reponse)=> {return reponse.json()})
    .then(
      (data) => { 
        console.log(data)
        setListe(data)
      }
    )



  }, [])

  return (
    <div>
      <h1>Test Api</h1>
      <div>
        {
          liste.map((produit, index)=>(
            <div key={index}>
              {produit.id}:{produit.libelle} {produit.prix}
              <img src={produit.image} alt="" srcset="" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App2;
