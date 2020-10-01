import React, { Component } from 'react';

// class Card extends Component {

// }

// const Card = (props) => {
const Card = ({id, name, email}) => {	
	// const {id, name, email} = props;
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
 			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
 			<div>
 				<h2>{name}</h2>
 				<p>{email}</p>
 			</div>
 		</div>
	);
}

// class Card extends Component {
// 	render() {
// 		return(
// 			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 	 			<img alt='robots' src={'https://robohash.org/${props.id}?200x200'} />
// 	 			<div>
// 	 				<h2>{props.name}</h2>
// 	 				<p>{props.email}</p>
// 	 			</div>
// 	 		</div>
// 	 	)
// 	}
// }

export default Card;