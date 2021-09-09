import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browse, destroy } from '../../../redux/BREAD/actions'
import { Breadcrumb } from 'app/components'
// import Card from './card'
import { Dummy } from './dummy'
import Writer from './writer'
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends Component {
    constructor(props) {
        super(props)
        let user = JSON.parse(localStorage.getItem('auth'))
        this.state = {
            url: `audiences/volunteers/${user.id}/sponsor`,
            model: Dummy,
            visible: false,
        }
    }
    componentDidMount() {
        this.onSearch()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.searchKey !== this.props.searchKey) {
            this.onSearch(this.props.searchKey)
        }
    }
    onSearch = async (key) => {
        await this.props.browse(this.state.url, key)
        console.log(this.props.models)
    }
    exhibit = (i) => {
        const model = this.props.models[i]
        this.setState({ model })
        this.toggle()
    }
    dummy = () => {
        this.setState({ model: Dummy })
        this.toggle()
    }
    toggle() {
        this.setState({ visible: !this.state.visible })
    }
    dummy = () => this.setState({ model: Dummy, visible: !this.state.visible })
    // Callback function
    closeModal = () => this.setState({ visible: !this.state.visible })
    handlesDestroy = (pkey) => this.props.destroy(this.state.url, pkey)

    render() {
        // const { model, visible } = this.state
        const { models } = this.props
        return (
            <div className="m-sm-30">
                <Breadcrumb
                    routeSegments={[
                        // { name: 'User', path: '/users' },
                        { name: 'Volunteers' },
                    ]}
                />
                <Writer
                    models={models}
                    exhibit={this.exhibit}
                    destroy={this.handlesDestroy}
                />
                {/* <Card
                    model={model}
                    visible={visible}
                    onClose={this.closeModal}
                /> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { models, key } = state.query
    return { models, searchKey: key }
}

export default connect(mapStateToProps, { browse, destroy })(Index)
