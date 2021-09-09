import React from 'react'
// import { Icon } from '@material-ui/core'
import axios from 'axios'

const Writer = ({ models }) => {
    let logs = 'No data found...'
    if (models) {
        logs = models.map((model, index) => {
            const { id, eventname, task, event } = model

            return (
                <div key={`row-${id}`} className="row mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img
                                                width="300"
                                                height="auto"
                                                src={
                                                    event &&
                                                    `${axios.defaults.baseURL}storage/outreach/${event.src}`
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <h3>{eventname}</h3>
                                            <strong>{event.description}</strong>
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
