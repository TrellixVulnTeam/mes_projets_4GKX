import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            token: null
        }
    }

    logout = () => {
        localStorage.setItem('token', '')
        localStorage.clear()
        this.setState({token : null})
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/">Inst'Axel</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            {
                                localStorage.getItem('token')
                                ?
                                    <>
                                        <li class="nav-item active">
                                            <Link class="nav-link" to="/picture/new">Poster une photo</Link>
                                        </li>
                                        <li class="nav-item">
                                            <button class="btn" onClick={() => this.logout()}>Déconnexion</button>
                                        </li>
                                    </>
                                :
                                    <>
                                        <li class="nav-item active">
                                            <Link class="nav-link"  to="/login">Connexion</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/register">Inscription</Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar