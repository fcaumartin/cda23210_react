import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function List() {

  const columns = [
    {
      name: <b>Libelle</b>,
      selector: (row) => row.libelle,
      sortable: true,
    },
    {
      name: <b>Description</b>,
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: <b>Prix</b>,
      selector: (row) => row.prix,
      sortable: true,
    }
  ];

  const [liste, setListe] = useState([]);


  useEffect(()=>{
    console.log("Démarrage de l'application...")
    axios("http://127.0.0.1:8000/api/produits", 
      {
        headers: { "Accept": "application/json"}
      }
    ).then(
      (reponse)=>{
        console.log(reponse.data);
        setListe(reponse.data);
      }
    )
  }, [])

  return (
    <div>
      <h1>Liste</h1>
      <hr />
      <DataTable
          columns={columns}
          data={liste}
          defaultSortFieldId={1}
      />
      
    </div>
  );
}

export default List;
