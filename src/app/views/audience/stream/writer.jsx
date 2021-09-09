import React from 'react'
import axios from 'axios'

const Writer = ({ models }) => {
    let logs = 'No data found...'
    if (models) {
        logs = models.map((model, index) => {
            const { id, title, description, src } = model

            return (
                <div key={`row-${id}`} className="row mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img
                                                    width="300"
                                                    height="auto"
                                                    src={`${axios.defaults.baseURL}storage/outreach/${src}`}
                                                    alt=""
                                                    srcset=""
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <h3>{title}</h3>
                                                <strong>{description}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return <div className="container-fluid">{logs}</div>
}

export default Writer
