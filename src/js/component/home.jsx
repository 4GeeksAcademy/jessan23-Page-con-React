import React from "react";
import Navbar from "./navbar";
import Card from "./card";
//create your first component

const Home = () => {
	const datos = [{
	titulo:"esto es un texto",
	image:"https://picsum.photos/200/200"
	},



]
	return (
		<>
           <Navbar/>
	<div className="d-flex justify-content-center">
         {datos.map((item,index)=>(<Card key={index} texto={item.titulo}/>))}
		 </div>	
		</>
	);
	
	
};


export default Home;
