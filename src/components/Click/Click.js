import React from 'react';
import './Click.css';

function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}


function Click(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}


export default Click