import React from 'react';
import './App.css';
import './components/Checkout';
import Checkout from './components/Checkout';
import StickyFooter from './components/Footer';
function App() {
	return (
		<div className="App">
			<Checkout />
			<StickyFooter />
		</div>
	);
}

export default App;
