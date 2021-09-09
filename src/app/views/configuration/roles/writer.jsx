import React from 'react'
import { Icon } from '@material-ui/core'

const Writer = ({ models, exhibit, destroy }) => {
    let logs = 'No data found...'
    if (models) {
        logs = models.map((model, index) => {
            const { id, name, display_name } = model

            return (
                <div key={`row-${id}`} className="row mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '35%',
                                            left: 0,
                                        }}
                                    >
                                        {++index}.
                                    </div>
                                    <div className="col-md-10 border-end border-start">
                                        <div className="row">
                                            <div className="col-md-12 border-bottom">
                                                <strong>{name}</strong>
                                            </div>
                                            <div className="col-md-12">
                                                {display_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <div className="btn-group" role="group">
                                            <button
                                                onClick={exhibit.bind(
                                                    this,
                                                    index
                                                )}
                                                className="btn btn-outline-info d-flex align-self-center"
                                            >
                                                <Icon className="mx-auto">
                                                    edit
                                                </Icon>
                                            </button>
                                            <button
                                                onClick={destroy.bind(this, id)}
                                                className="btn btn-outline-danger d-flex align-self-center"
                                            >
                                                <Icon className="mx-auto">
                                                    close
                                                </Icon>
                                            </button>
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
