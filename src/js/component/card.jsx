import React from "react"
const card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
      {props.titulo && <h5 className="card-title" style={{ textAlign: "center" }}>{props.titulo}</h5>}
        <img src={props.image||"https://picsum.photos/200/200"} className="card-img-top" alt="img rota" />
        <div className="card-body">
          <p classNameName="card-text">{props.texto}</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
         <a href="#"class="btn btn-primary">{props.boton}</a>
         </div>
        </div>
      </div>


    </>
  )
}

export default card