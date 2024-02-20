import { useState } from "react";

function Header() {

  const [quantite, setQuantite] = useState(55);

  const handleClick = () => {
    setQuantite(quantite-1);
  }

  const handleClick2 = () => {
    setQuantite(quantite+1);
  }
  
  return (
      <div id="toto">
        <h1 className="entete" >
          Panier ({quantite})
        </h1>
        <button onClick={handleClick}>---</button>
        <button onClick={handleClick2}>+++</button>
      </div>
    );
}

export default Header;
