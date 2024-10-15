import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

	const handleIncrement = () => {
		setCount(prev => prev + 1);
	}
	
	const handleDecrement = () => {
		if(count !== 0){
			setCount(prev => prev - 1);
		}
	}

    return (
		<div className="count-container">

			<div className='count-text'>
				COUNT
			</div>

			<div className="count-number">{count}</div>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
    )
}

export default App
