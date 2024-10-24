import React from "react"
const card =(props) => {
    return (
        <>
    <div className="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/200" className="card-img-top" alt="img rota"/>
  <div className="card-body">
    <p classNameName="card-text">{props.texto}</p>
  </div>
</div>


</>
)
}

export default card