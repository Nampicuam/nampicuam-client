import React, { useState } from 'react'
import axios from 'axios'

const Event = ({ model }) => {
    const [read, setRead] = useState(true)
    const { title, description, src, need_donor, need_volunteer } = model
    return (
        <div className="card shadow-sm">
            <div className="row" style={{ height: read ? '125px' : 'auto' }}>
                <div className="col-md-2 d-flex align-self-center">
                    <img
                        className="mx-auto"
                        height="125px"
                        width="auto"
                        src={`${axios.defaults.baseURL}storage/outreach/${src}`}
                        alt="events"
                    />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                {description.length > 380 ? (
                                    read ? (
                                        <>
                                            {`${description.slice(0, 380)}...`}
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
                    </div>
                    <div className="row">
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '.5%',
                                right: '2.5%',
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
}

export default Event
