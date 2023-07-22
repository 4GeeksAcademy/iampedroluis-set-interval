//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application


let seg = 0;
setInterval(()=>{
    var digits = (""+seg).split("");
    console.log(digits)

    let cantidad = digits.length
    switch(cantidad){   
        case 1:
            ReactDOM.render(<Home cien={0}  diez={0} uno={digits[0]}  />, document.querySelector("#app"));
        break
        case 2:
            ReactDOM.render(<Home  cien={0} diez={digits[0]} uno={digits[1]} />, document.querySelector("#app"));
        break
        case 3:
            ReactDOM.render(<Home  cien={digits[0]} diez={digits[1]} uno={digits[2]} />, document.querySelector("#app")); 
        break 
        default:
            ReactDOM.render(<Home cien={0}  diez={0} uno={0}  />, document.querySelector("#app"));
           
    }
    seg ++
    
},1000)



