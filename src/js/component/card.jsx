import React from "react"
const card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image||"https://picsum.photos/200/200"} className="card-img-top" alt="img rota" />
        <div className="card-body">
          <p classNameName="card-text">{props.texto}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>

        </div>
      </div>


    </>
  )
}

export default card