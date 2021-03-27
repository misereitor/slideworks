import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import addListAction from '../../Services/controllers/addListController'
import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            descricao: '',
            estadoCivil: '',
            cargo: '',
            habilidades: ''
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

    clear () {
        this.setState({
            nome: '',
            email: '',
            descricao: '',
            estadoCivil: '',
            cargo: '',
            habilidades: ''
        })
    }

    handleSubmit (event) {
        addListAction(this.state)
        this.clear()
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
                                    Nome
                                <input
                                        type="text"
                                        name="nome"
                                        required
                                        value={this.state.nome}
                                        checked={this.state.nome}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    E-mail
                                <input
                                        type="email"
                                        name="email"
                                        required
                                        value={this.state.email}
                                        checked={this.state.email}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Descrição
                                <textarea
                                        name="descricao"
                                        value={this.state.descricao}
                                        checked={this.state.descricao}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Estado civil
                                    <select name="estadoCivil" value={this.state.estadoCivil} onChange={this.handleInputChange} required>
                                        <option value="">__________________</option>
                                        <option value="solteiro">solteiro(a)</option>
                                        <option value="casado">casado(a)</option>
                                        <option value="Divorciado">Divorciado(a)</option>
                                        <option value="Viúvo">Viúvo(a)</option>
                                        <option value="Separado judicialmente">Viúvo(a)</option>
                                    </select>
                                </label>
                                <br />
                                <label>
                                    Cargo
                                    <select name="cargo" value={this.state.cargo} onChange={this.handleInputChange} required>
                                        <option value="">__________________</option>
                                        <option value="Desenvolvedor front-end">Desenvolvedor front-end</option>
                                        <option value="Desenvolvedor back-end">Desenvolvedor back-end</option>
                                        <option value="Desenvolvedor full stack">Desenvolvedor full stack</option>
                                    </select>
                                </label>
                                <br />
                                <label>
                                    Habilidades
                                    <input
                                        placeholder="Separar por virgula"
                                        label="Separe por virgula"
                                        type="text"
                                        name="habilidades"
                                        required
                                        value={this.state.habilidades}
                                        checked={this.state.habilidades}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label className="submit">
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