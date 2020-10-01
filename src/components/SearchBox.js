import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchChange} 
			/>
		</div>
	);
}


// ALSO:
// class SearchBox extends React.Component {
// 	constructor ({ searchfield, searchChange }) {
// 		super();
// 		this.searchfield = searchfield;
// 		this.searchChange = searchChange;
// 	}

// 	render () {
// 		return (
// 			<div className='pa2'>
// 				<input
// 					className='pa3 ba b--green bg-lightest-blue'
// 					type='search' 
// 					placeholder='search robots'
// 					onChange={this.searchChange} 
// 				/>
// 			</div>
// 		);	
// 	}
//  }

export default SearchBox;