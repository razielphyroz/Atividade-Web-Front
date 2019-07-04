import React, { Component } from 'react';
import axios from 'axios';

class ClienteSalvar extends Component {
  constructor(props) {
      super(props);

      this.state = {
        id : null,
        nome : "",
        cpf : "",
        rg : "",
        naturalidade : "",
        dataNascimento : "",
        cnh : "",
        validadeCnh : "",
        licencaCnh : "",
        endereco : "",
        telefone : "",
        email : "",
        profissao : "",
        mensagem : "Cadastre Um Cliente:"
      };

      this.salvar = this.salvar.bind(this);
  }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        console.log(id)
        if (id != null) {
            axios.get(`http://localhost:8080/atividade/cliente/buscar-por-id/${id}`)
            .then(res => {
                const cliente = res.data;
                this.setState({
                    id : cliente.idCliente,
                    nome : this.state.nome,
                    cpf : cliente.cpf,
                    rg : this.state.rg,
                    naturalidade : this.state.naturalidade,
                    dataNascimento : this.state.dataNascimento,
                    cnh : this.state.cnh,
                    validadeCnh : this.state.validadeCnh,
                    licencaCnh : this.state.licencaCnh,
                    endereco : this.state.endereco,
                    telefone : this.state.telefone,
                    email : this.state.email,
                    profissao : this.state.profissao
                })
            }).catch(res => {
                console.log(res);
            })
        }
    }


  salvar(e) {
      e.preventDefault();

      const cliente = {

        id : this.state.id,
        nome : this.state.nome,
        cpf : this.state.cpf,
        rg : this.state.rg,
        naturalidade : this.state.naturalidade,
        dataNascimento : this.state.dataNascimento,
        cnh : this.state.cnh,
        validadeCnh : this.state.validadeCnh,
        licencaCnh : this.state.licencaCnh,
        endereco : this.state.endereco,
        telefone : this.state.telefone,
        email : this.state.email,
        profissao : this.state.profissao

    }
      
      axios
        .post('http://localhost:8080/atividade/cliente/salvar', cliente)
        .then(res => {
            this.setState({
                id : null,
                nome : "",
                cpf : "",
                rg : "",
                naturalidade : "",
                dataNascimento : "",
                cnh : "",
                validadeCnh : "",
                licencaCnh : "",
                endereco : "",
                telefone : "",
                email : "",
                profissao : "",
                mensagem: "Sucesso!"
            });
        })
        .catch(error => {
            this.setState({
                mensagem: "[Erro]: Deu ruim..."
            });
        })
  }

  render() {
    return (
		<div>
            {this.state.mensagem && (
                <div><p>{this.state.mensagem}</p></div>
            )}

            <form onSubmit={this.salvar}>

                <label>Id Cliente (Para Alterar): </label>
                <input type="text" name="id" onChange={this.onChange} value={this.state.id}/>
                <br/>

                <label>Nome: </label>
                <input type="text" name="nome" onChange={this.onChange} value={this.state.nome} />
                <br/>

                <label>CPF: </label>
                <input type="text" name="cpf" onChange={this.onChange} value={this.state.cpf}/>
                <br/>

                <label>RG: </label>
                <input type="text" name="rg" onChange={this.onChange} value={this.state.rg}/>
                <br/>

                <label>Naturalidade: </label>
                <input type="text" name="naturalidade" onChange={this.onChange} value={this.state.naturalidade}/>
                <br/>

                <label>Data Nascimento: (dd/mm/aaaa) </label>
                <input type="text" name="dataNascimento" onChange={this.onChange} value={this.state.dataNascimento}/>
                <br/>

                <label>CNH: </label>
                <input type="text" name="cnh" onChange={this.onChange} value={this.state.cnh}/>
                <br/>

                <label>Validade da CNH: </label>
                <input type="text" name="validadeCnh" onChange={this.onChange} value={this.state.validadeCnh}/>
                <br/>

                <label>Tipo de Licença: </label>
                <input type="text" name="licencaCnh" onChange={this.onChange} value={this.state.licencaCnh}/>
                <br/>

                <label>Endereço: </label>
                <input type="text" name="endereco" onChange={this.onChange} value={this.state.endereco}/>
                <br/>

                <label>Telefone: </label>
                <input type="text" name="telefone" onChange={this.onChange} value={this.state.telefone}/>
                <br/>

                <label>E-mail: </label>
                <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
                <br/>

                <label>Profissao: </label>
                <input type="text" name="profissao" onChange={this.onChange} value={this.state.profissao}/>
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default ClienteSalvar;
