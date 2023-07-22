import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




//create your first component
const Home = ({uno, diez, cien, mil}) => {
	return (
		<div className="text-center d-flex justify-content-center  m-4">
			<div className=" bg-dark d-flex p-3 rounded" >
			
			<p className="d-flex align-items-center"><span><i className="bi bi-clock" style={{color: "white", fontSize:"80px", display:"flex", alignItems:"center"}}></i></span><span>{cien}</span><span>{diez}</span><span>{uno}</span></p>
		</div>
		</div>
	);
};

export default Home;
