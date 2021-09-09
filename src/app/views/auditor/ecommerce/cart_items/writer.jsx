import React from 'react'
import axios from 'axios'
import defaultProduct from 'images/defaultProduct.png'

const Writer = ({ models }) => {
    let logs = models.map((model, index) => {
        const { id, productname, amount, qnty, up, product } = model
        const { src, size, color } = product
        console.log(src)
        return (
            <div key={`cart_item-${id}`} className="col-md-8 offset-2 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img
                                    height="125px"
                                    width="auto"
                                    src={`${axios.defaults.baseURL}storage/services/${src}`}
                                    alt={productname}
                                    onError={(e) => {
                                        e.target.src = defaultProduct
                                    }}
                                />
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>{productname}</h3>
                                        <h5>{size}</h5>
                                        <h5>{color}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>&#8369;{amount}</h3>
                                        <h5>
                                            {qnty}pcs* &#8369;{up}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return <div className="row">{logs}</div>
}

export default Writer
