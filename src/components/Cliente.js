import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ClienteSalvar from './cliente_components/ClienteSalvar';

export default class Cliente extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
      
      <p>Clientes:</p>
    
			<ul>
				<li><Link to="/cliente/salvar">Cadastrar Cliente</Link></li>
				<li><Link to="/cliente/salvar">Alterar Cliente</Link></li>
        <li><Link to="/cliente/buscar-por-nome">Alterar Cliente</Link></li>
      </ul>
			<div>
        <Route exact path="/cliente/salvar" component={ClienteSalvar} />
			</div>
		</BrowserRouter>

    );
  }
}			

/*
<div>

<Route exact path="/cliente/salvar/:id?" component={ClienteEditar} />
<Route exact path="/cliente/buscar-por-nome/:nome?" component={ClienteBuscarNome} />
</div>
*/