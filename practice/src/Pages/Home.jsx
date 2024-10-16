import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

const Home = () => {
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
		<>
			<Navbar/>

			<div className="count-container">

				<div className='count-text'>
					COUNT
				</div>

				<div className="count-number">{count}</div>
				<button className='count-handle-button' onClick={handleIncrement}>Increment</button>
				<button className='count-handle-button' onClick={handleDecrement}>Decrement</button>
			</div>
		</>
    )
}

export default Home
