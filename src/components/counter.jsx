import React, {Component} from 'react';

class Counter extends Component{
	//used for optimization
	componentDidUpdate(prevProps, prevState){
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
		if(prevProps.counter.value !== this.props.counter.value){
			//ajax call and get new data from the server
		}
	}

	//garbage collection last phase when app closes
	componentWillUnmount(){
		console.log('Counter unmount')
	}
/*	state = {
		value: this.props.counter.value,
	};*/

	styles = {
		fontSize:50,
		fontWeight:'bold',
	};

/*	binds event handlers

	constructor(){
		super();
		this.handleIncrement = this.handleIncrement.bind(this);
	}*/

/*	eventhandleIncrement=(product)=>{
		this.setState({value:this.state.value + 1});
	};

	eventhandleDecrement=()=>{
		this.setState({value:this.state.value - 1});
	};*/
 
	render(){
		//everything has props used to identify the properties of a component
		//console.log('props', this.props);
		console.log('counter - rendered');
		return (
			<div className="counter-element">

				{/*<h4>{this.props.id}</h4> props is read only	or */}{this.props.children}
				<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<br/>
				<button onClick={()=>this.props.onIncrement(this.props.counter)/*()=>this.eventhandleIncrement(product)*/} className="butt">Increment</button>
				<br />
				<button onClick={()=>this.props.onDecrement(this.props.counter)/*this.eventhandleDecrement*/} className="butt">Decrement</button>
				<br />
				<button onClick={()=>this.props.onDelete(this.props.counter.id)} className="butt">Delete</button>
			</div>
		);
	}

	getBadgeClasses(){
		let classes = 'answer-';
		classes += (this.props.counter.value === 0) ? 'bad' : 'good';
		return classes;
	}

	formatCount(){
		const {value} = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}


export default Counter;














/*class Counter2 extends Component{
	state = {
		value: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

	renderTags(){
		if(this.state.tags.length == 0){
			return <p>There are no tags</p>;
		} else{
			return 	<ul className="list">
						{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
					</ul>
		}
	}

	render(){
		return (
			<React.Fragment>
				{this.state.tags.length === 0 && <p>Please create a new tag</p>}
				{this.renderTags()}
			</React.Fragment>
		);
	}
}*/

