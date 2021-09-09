import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import * as swal from 'sweetalert2'

const Writer = ({ models }) => {
    const showImage = (title, src) => {
        swal.fire({
            imageUrl: `${axios.defaults.baseURL}storage/services/${src}`,
            imageWidth: 1000,
            imageHeight: 'auto',
            imageAlt: title,
            showConfirmButton: false,
        })
    }
    let writer = models.map((model, index) => {
        const { title, description, price, src } = model
        return (
            <div className="col-md-3 mb-3">
                <div className="card">
                    <img
                        onClick={() => showImage(title, src)}
                        width="auto"
                        height="180px"
                        className="card-img-top"
                        src={`${axios.defaults.baseURL}storage/services/${src}`}
                        alt={title}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-24">{title}</h5>
                        <p className="card-text text-truncate">{description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <span title="Price" className="text-24">
                                    ₱
                                    {price &&
                                        price
                                            .toFixed(2)
                                            .replace(
                                                /\d(?=(\d{3})+\.)/g,
                                                '$&,'
                                            )}
                                </span>
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="btn-group">
                                    <button
                                        title="View all information"
                                        className="btn btn-info btn-sm text-light"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button
                                        title="Add to cart"
                                        className="btn btn-primary btn-sm"
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return <div className="row">{writer}</div>
}

export default Writer
