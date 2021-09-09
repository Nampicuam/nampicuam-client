import React from 'react'
import Form from './form'

const Writer = ({ models, exhibit, destroy }) => {
    let logs = 'No data found...'
    if (models) {
        logs = models.map((model, index) => {
            return (
                <div key={`row-${index}`} className="row card shadow-sm mb-2">
                    <Form model={model} />
                </div>
            )
        })
    }
    return <div className="container-fluid">{logs}</div>
}

export default Writer
