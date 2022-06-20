import React from "react";
import "../stylesheets/Testimony.css"

const Testimony = (props) => {
	return (
		<div className="conteiner-testimony">
			<img src={require(`../images/img-freeccamp-${props.img}.png`)} alt="photo1" className="img-testimony" />
			<div className="conteiner-text-testimony">
				<p className="name-testimony"><strong>{props.name}</strong> in {props.country}</p>
				<p className="carge-testimony">{props.carge} at <strong>{props.company}</strong></p>
				<p className="text-testimony">"{props.testimony}"</p>
			</div>
		</div>
	);
}

export default Testimony;