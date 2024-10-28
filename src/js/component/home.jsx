import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotrom from "./jumbotrom";
//create your first component

const Home = () => {
	const datos = [{
		titulo: "Buen Dia",
		image: "https://picsum.photos/200/201",
		texto: "La mañana es la primera parte del dia que comienza con el amanecer y termina a las doce del medio dia.",
		boton: "dirigete aqui"
	},

	{
		titulo: "Buena Tarde",
		image: "https://picsum.photos/200/202",
		texto: "La tarde es  la segunda parte de las dos en que se divide el dia, y finaliza con el atardecer.",
		boton:"sigue este link"
	},

	{
		titulo: "Buena Noche",
		image: "https://picsum.photos/200/203",
		texto: "La noche comienza al ocultarce el sol y se entiende que es a partir de las 7:00pm en adelante. ",
		boton: "ven por aqui"
	},
	{
		titulo: "Buena Madrugada",
		image: "https://picsum.photos/200/204",
		texto: "La madrugada comienza a las 12:00am y dura hasta las 6:00am, de aqui comieza la madrugada.",
		boton: "sigueme"
	},





	]
	return (
		<>

			<Navbar />

			<Jumbotrom />
			<div className="container-fluid mt-4">
				<div className="row">
					{datos.map((item, index) => (
						<div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
							<Card titulo={item.titulo} image={item.image} texto={item.texto} boton={item.boton}/>
						</div>
					))}
				</div>
			</div>
		</>
	);


};


export default Home;
