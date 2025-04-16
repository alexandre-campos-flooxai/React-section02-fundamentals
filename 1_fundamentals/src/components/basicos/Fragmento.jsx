import React from "react"
//Com React.Fragmento pode ter propriedades.
export default function Fragmento(props){
    return (
        <>
            <React.Fragment key="1">
                <h2>Fragmento</h2>
                <p>Cuidado com este erro!</p>
            </React.Fragment>
            <>
                <h2>Fragmento</h2>
                <p>Cuidado com este erro!</p>
            </>
        </>
    
        
    )
}