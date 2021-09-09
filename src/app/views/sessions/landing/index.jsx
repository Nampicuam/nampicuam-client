import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Newsfeed from './newsfeed'
import Gallery from './gallery'
import About from './about'
import Event from './events'
import Login from '../login'
import Newsfeed from './newsfeed2'
import './index.css'
import { newsfeed, gallery, event } from '../../../redux/Landing/actions'

import 'pure-react-carousel/dist/react-carousel.es.css'

class Index extends Component {
    componentDidMount() {
        this.props.newsfeed()
        this.props.gallery()
        this.props.event()
    }

    render() {
        return (
            <div className="row">
                <div className="container-fluid mt-2 mb-2">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">
                        <button
                            className="navbar-toggler float-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav ml-auto">
                                <a className="nav-item nav-link" href="#home">
                                    Home
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    href="#gallery"
                                >
                                    Gallery
                                </a>
                                <a className="nav-item nav-link" href="#about">
                                    About
                                </a>
                                <a className="nav-item nav-link" href="#events">
                                    Events
                                </a>
                                <a className="nav-item nav-link" href="#church">
                                    Come, Build My Church
                                </a>
                            </div>
                        </div>
                    </nav>

                    <div id="home" className="row vh-100">
                        <Newsfeed news={this.props.news} />
                    </div>
                    <div id="gallery" className="row vh-100 bg-light">
                        <Gallery galleries={this.props.galleries} />
                    </div>
                    <div id="about" className="row vh-100 bg-info">
                        <About />
                    </div>
                    <div id="events" className="row vh-100">
                        <Event events={this.props.events} />
                    </div>
                    <div id="church" className="row vh-100 bg-dark">
                        <Login />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { news, galleries, events } = state.landing
    return { news, galleries, events }
}

export default connect(mapStateToProps, { newsfeed, gallery, event })(Index)
