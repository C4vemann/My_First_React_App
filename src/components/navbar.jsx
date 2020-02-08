import React, {Component} from 'react';

//stateless functional component
//object destructoring
const NavBar = ({totalCounters}) => {
	console.log('Navbar - Rendered');
	return(
		<div style={{width:1920,height:100,backgroundColor:'grey',}} className="navbar">
			<h1 className="total">{totalCounters}</h1>
		</div>
	);
};

/* not needed if declaring a variable
class NavBar extends Component{

	render(){
	}
}*/

export default NavBar;