import React from 'react'
// import { Icon } from '@material-ui/core'
import axios from 'axios'
import { Avatar } from '@material-ui/core'

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
                                        <div className="col-md-8 position-relative">
                                            <h3>{eventname}</h3>
                                            <strong>Task : {task}</strong><br />
                                            <span>{event.description}</span>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                }}
                                                className="flex relative face-group"
                                            >
                                                <Avatar
                                                    className="avatar"
                                                    src="/assets/images/face-4.jpg"
                                                />
                                                <Avatar
                                                    className="avatar"
                                                    src="/assets/images/face-2.jpg"
                                                />
                                                <Avatar
                                                    className="avatar"
                                                    src="/assets/images/face-1.jpg"
                                                />
                                                <Avatar className="text-14 avatar">
                                                    +12
                                                </Avatar>
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
