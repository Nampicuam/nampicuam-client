import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browse } from '../../../../redux/BREAD/actions'
import { Breadcrumb } from 'app/components'
import { Dummy } from './dummy'
import Writer from './writer'
import 'bootstrap/dist/css/bootstrap.min.css'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: `orders/details/2/items`,
            model: Dummy,
            visible: false,
        }
    }
    componentDidMount() {
        this.onSearch()
    }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.searchKey !== this.props.searchKey) {
    //         this.onSearch(this.props.searchKey)
    //     }
    // }
    onSearch = async (key) => await this.props.browse(this.state.url, key)

    // Callback function

    render() {
        // const { model, visible } = this.state
        const { models } = this.props
        return (
            <div className="m-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Shopping Cart', path: '/ecommerce/cart' },
                        { name: 'Items' },
                    ]}
                />
                <Writer models={models} exhibit={this.exhibit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { models } = state.query
    return { models }
}

export default connect(mapStateToProps, { browse })(Index)
