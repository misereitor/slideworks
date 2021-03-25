import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import addListAction from '../../Services/controllers/addListController'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            descricao: '',
            estadoCivil: '',
            cargo: '',
            habididades: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit (event) {
        addListAction(this.state)
        event.preventDefault()
    }

    render () {
        return (
            <div className="register">
                <Header />
                <div className="register-page">
                    <div className="register-header">
                        <h2>Faça sua candidatura</h2>
                    </div>
                    <div className="register-body">
                        <div className="register-form">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Nome:
                                <input
                                        type="text"
                                        name="nome"
                                        required
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    E-mail:
                                <input
                                        type="email"
                                        name="email"
                                        required
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Descrição:
                                <textarea
                                        name="descricao"
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Estado civil:
                                <input
                                        type="text"
                                        name="estadoCivil"
                                        required
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Cargos:
                                <input
                                        type="text"
                                        name="cargo"
                                        required
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Habididades:
                                <input
                                        type="text"
                                        name="habididades"
                                        required
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    <input type="submit" value="Enviar" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register