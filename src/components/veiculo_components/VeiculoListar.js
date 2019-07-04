import React, {Component} from 'react';
import axios from 'axios';


class VeiculoListar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            veiculos: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/atividade/veiculo/listar-todos")
            .then(response => {
                this.setState({veiculos: response.data});
            });
    }

    render() {
        return(
            <table border="1">
                <thead>
                    <tr>
                        <th>Marca:</th>
                        <th>Modelo:</th>
                        <th>Ano:</th>
                        <th>Cor:</th>
                        <th>Placa:</th>
                        <th>KMs:</th>
                        <th>Combustivel:</th>
                        <th>Valor Diária:</th>
                        <th>Tipo:</th>    
                    </tr>
                </thead>
                <tbody>
                    {this.state.veiculos.map(veiculo => 
                        <tr key={veiculo.idVeiculo}>
                            <td>{veiculo.marca}</td>
                            <td>{veiculo.modelo}</td>
                            <td>{veiculo.ano}</td>
                            <td>{veiculo.cor}</td>
                            <td>{veiculo.placa}</td>
                            <td>{veiculo.quilometragem}</td>
                            <td>{veiculo.combustivel}</td>
                            <td>{veiculo.valorDiaria}</td>
                            <td>{veiculo.tipo}</td>
                        </tr>
                    )}   
                </tbody>                
            </table>
        )
    }


}

export default VeiculoListar;