import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Veiculo from './components/Veiculo.js';
import Cliente from './components/Cliente.js';
import Locacao from './components/Locacao';

class App extends Component {
  render() {
	  return (

			<BrowserRouter>

				<p>Selecione a opção:</p>
			
				<ul>
					<li><Link to="/veiculo">Veículos</Link></li>
					<li><Link to="/cliente">Clientes</Link></li>
					<li><Link to="/locacao">Locações</Link></li>
				</ul>
				<div>
					<Route exact path="/veiculo" component={Veiculo} />
					<Route exact path="/cliente" component={Cliente} />
					<Route exact path="/locacao" component={Locacao} />
				</div>

		</BrowserRouter>
	  );
  }
}

export default App;
