import React,{useEffect} from "react";
import { useHistory } from 'react-router-dom'

const GiveAwayThx = () => {

    const history = useHistory();
    useEffect(() => {
        const timeout = setTimeout(() => {
            history.push("/")
        }, 3000)
        return () => clearTimeout(timeout)
    })

    return (
        <div className="GiveAwayThx">
            <div className="GiveAwayThx__thanks">
                <h1>Dziękujemy za przesłanie formularza.<br/>Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                <img src={require("../../assets/Decoration.svg").default}/>
            </div>
        </div>
    )
}

export default GiveAwayThx
