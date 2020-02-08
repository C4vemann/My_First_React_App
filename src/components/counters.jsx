import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
	render(){
		console.log('Counter list - Rendered');
		//for deconstructing	
		const { onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

		return(
			<div>
				<button onClick={onReset} className="butt">Reset</button>
				<br />
				{
					counters.map(counter => 
						(
							<Counter 
								key={counter.id} 
								onDelete={onDelete} 
								onIncrement={onIncrement}
								onDecrement={onDecrement}
								counter={counter}
							>
								<h4>Counter #{counter.id}</h4>
							</Counter>
						)
					)
				}
			</div>
		);
	}


}

export default Counters;