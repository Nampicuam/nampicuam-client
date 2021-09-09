import React, { useState } from 'react'
import axios from 'axios'

const Future = ({ model, index }) => {
    const [read, setRead] = useState(true)
    const { title, description, src, need_donor, need_volunteer } = model
    const first = (
        <div className="container">
            <div className="row">
                <div className="d-flex align-self-center">
                    <img
                        width="60%"
                        className="mx-auto"
                        height="auto"
                        src={`${axios.defaults.baseURL}storage/outreach/${src}`}
                        alt="events"
                    />
                </div>
                <div className="col-md-12">
                    <div className="row mt-2">
                        <h3>{title}</h3>
                    </div>
                    <div className="row">{description}</div>
                    <div className="row">
                        <div className="col-md-1 offset-9 mb-1">
                            <div className="btn-group">
                                {(need_donor || need_volunteer) && (
                                    <a href="#church">
                                        <button className="btn btn-primary btn-sm">
                                            Support
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    const base = (
        <div className="container">
            <div className="row" style={{ height: read ? '125px' : 'auto' }}>
                <div className="col-md-2 d-flex align-self-center">
                    <img
                        className="mx-auto"
                        height="auto"
                        width="125px"
                        src={`${axios.defaults.baseURL}storage/outreach/${src}`}
                        alt="events"
                    />
                </div>
                <div
                    className="col-md-7 offset-3"
                    style={{ position: 'relative' }}
                >
                    <div className="row">
                        <h5>{title}</h5>
                    </div>
                    <div className="row">
                        <p>
                            {description.length > 50 ? (
                                read ? (
                                    <>
                                        {`${description.slice(0, 50)}...`}
                                        <span
                                            onClick={() => setRead(false)}
                                            className="text-info"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Read More
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {`${description}...`}
                                        <span
                                            onClick={() => setRead(true)}
                                            className="text-info"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Read Less
                                        </span>
                                    </>
                                )
                            ) : (
                                description
                            )}
                        </p>
                    </div>
                    <div className="row">
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '1.5%',
                                right: '22.5%',
                            }}
                            className="col-md-1 offset-7 mb-1"
                        >
                            <div className="btn-group">
                                {(need_donor || need_volunteer) && (
                                    <a href="#church">
                                        <button className="btn btn-primary btn-sm">
                                            Support
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return index === 0 ? first : base
}

export default Future
