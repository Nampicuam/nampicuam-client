import React from 'react'
import { Icon } from '@material-ui/core'

const Writer = ({ models, exhibit }) => {
    let logs = 'No data found...'
    if (models) {
        logs = models.map((model, index) => {
            const {
                id,
                amount,
                created_at,
                preparedname,
                remarks,
            } = model
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
                                    <div
                                        className="row"
                                        style={{ height: 'auto' }}
                                    >
                                        
                                        <div className="col-md-10 border-end border-start">
                                            <div className="row">
                                                <div className="col-md-6 border-bottom">
                                                    <strong>{created_at}</strong>
                                                </div>
                                                <div className="col-md-6 border-bottom">
                                                    <strong>&#8369; {amount}</strong>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 ">
                                                    <span>Prepared By : {preparedname}</span>
                                                </div>
                                                <div className="col-md-6 ">
                                                    <span>{remarks}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <div
                                                className="btn-group"
                                                role="group"
                                            >
                                                <button
                                                    onClick={()=>exhibit(id)}
                                                    className="btn btn-outline-info d-flex align-self-center"
                                                >
                                                    <Icon className="mx-auto">
                                                        search
                                                    </Icon>
                                                </button>
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
