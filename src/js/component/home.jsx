import React from "react";
import Navbar from "./navbar";
import Card from "./card";
//create your first component

const Home = () => {
	const datos = [{
	texto:"esto es un texto"	
	},
	{texto:"esto es otro texto"

	},

	]
	return (
		<>
           <Navbar/>
         {datos.map((item,index)=>(<Card key={index} texto={item.texto}/>))}
			
		</>
	);
	
	
};


export default Home;
