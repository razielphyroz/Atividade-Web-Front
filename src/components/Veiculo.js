import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import VeiculoSalvar from './veiculo_components/VeiculoSalvar';
import VeiculoExcluir from './veiculo_components/VeiculoExcluir';
import VeiculoListar from './veiculo_components/VeiculoListar';
import VeiculoListarEntre from './veiculo_components/VeiculoListarEntre';
import VeiculoPorPlaca from './veiculo_components/VeiculoPorPlaca';
export default class Veiculo extends Component {

  render() {
    return (
      <BrowserRouter>
      
      <p>Veículos:</p>
    
			<ul>
				<li><Link to="/veiculo/salvar">Cadastrar Veículo</Link></li>
				<li><Link to="/veiculo/salvar">Editar Veículo</Link></li>
        <li><Link to="/veiculo/remover-por-placa">Excluir Veículo</Link></li>
        <li><Link to="/veiculo/buscar-por-placa">Buscar Por Placa</Link></li>
        <li><Link to="/veiculo/listar-todos">Listar Todos</Link></li>
        <li><Link to="/veiculo/listar-por-valor-entre">Listar Entre Valores</Link></li>
      </ul>
			<div>
        <Route exact path="/veiculo/salvar" component={VeiculoSalvar} />
        <Route exact path="/veiculo/remover-por-placa/:placa?" component={VeiculoExcluir} />
        <Route exact path="/veiculo/listar-todos" component={VeiculoListar} />
        <Route exact path="/veiculo/listar-por-valor-entre/:valorMin?/:valorMax?" component={VeiculoListarEntre} />
        <Route exact path="/veiculo/buscar-por-placa/:placa?" component={VeiculoPorPlaca} />
			</div>
		</BrowserRouter>

    );
  }
}