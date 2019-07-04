import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LocacaoAtiva from './locacao_components/LocacaoAtiva';
import LocacaoListar from './locacao_components/LocacaoListar';
import LocacaoSalvar from './locacao_components/LocacaoSalvar';

export default class Locacao extends Component {

  render() {
    return (
      <BrowserRouter>
      
      <p>Locações:</p>
    
			<ul>
        <li><Link to="/locacao/salvar">Fazer Locação.</Link></li>
        <li><Link to="/locacao/listar-locacoes-ativas-projection">Locações Ativas (Data)</Link></li>
				<li><Link to="/locacao/listar-todas-locacoes">Todas Locações (All)</Link></li>
      </ul>
			<div>
        <Route exact path="/locacao/listar-locacoes-ativas-projection/:data?" component={LocacaoAtiva} />
        <Route exact path="/locacao/listar-todas-locacoes" component={LocacaoListar} />
        <Route exact path="/locacao/salvar" component={LocacaoSalvar} />
			</div>
		</BrowserRouter>

    );
  }
}