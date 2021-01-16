import './App.css';
import './components/header';
import Header from './components/header';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import { sizing } from '@material-ui/system';

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			<Header />

			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Sidebar />
				</Grid>
				<Grid item xs={9} sm={9}>
					<Switch>
						<Route path="/products/:id" component={ProductDetails} />
						<Route path="/products" component={Products} />
						<Route path="/not-found" component={NotFound} />
						<Route path="/" exact component={Home} />
						<Redirect to="/not-found" />
					</Switch>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
