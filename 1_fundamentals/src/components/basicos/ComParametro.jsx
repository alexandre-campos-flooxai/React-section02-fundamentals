import React from "react";

export default function ComParametro(props){
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado" ;
    const notaInt = Math.ceil(props.nota);
    console.log(notaInt)

    return(
        <div>
            <h2><strong>{props.title}</strong></h2>
            <p>{props.aluno} tem nota <strong>{props.nota}</strong> esta <strong>{status}</strong>!</p>
        </div>
    )
}