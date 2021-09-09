import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browse, destroy } from '../../../redux/BREAD/actions'
import { Breadcrumb } from 'app/components'
import Card from './card'
import { Dummy } from './dummy'
import Writer from './writer'
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'users/members',
            model: Dummy,
            visible: false,
        }
    }
    async componentDidMount() {
        this.onSearch()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.searchKey !== this.props.searchKey) {
            this.onSearch(this.props.searchKey)
        }
    }
    onSearch = async (key) => await this.props.browse(this.state.url, key)
    exhibit = (i) => {
        const model = this.props.models[--i]
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
    // Callback function
    closeModal = () => this.toggle()
    handlesDestroy = (pkey) => this.props.destroy(this.state.url, pkey)

    render() {
        const { model, visible } = this.state
        const { models } = this.props
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'User', path: '/users' },
                            { name: 'Officers' },
                        ]}
                    />
                </div>
                <Writer
                    models={models}
                    exhibit={this.exhibit}
                    destroy={this.handlesDestroy}
                />
                <Card
                    model={model}
                    visible={visible}
                    onClose={this.closeModal}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { models, key } = state.query
    return { models, searchKey: key }
}

export default connect(mapStateToProps, { browse, destroy })(Index)
