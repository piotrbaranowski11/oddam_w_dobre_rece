import React,{useEffect} from "react";

import { useHistory } from 'react-router-dom'

function Thx() {

  const history = useHistory();
    useEffect(() => {
        const timeout = setTimeout(() => {
            history.push("/")
        }, 3000)
        return () => clearTimeout(timeout)
    })

  return(
    <div className="Thx">
            <div className="Thx__div">
                <h1>Dziękujemy za przesłanie formularza.<br/>Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                <img src={require("./../../assets/Decoration.svg")} />
            </div>
        </div>


  )
}

export default Thx;
