import React from 'react'
import Card from './card'
import Future from './future'

const Index = ({ events }) => {
    return (
        <div style={{ marginTop: '6%' }}>
            <div className="container-fluid">
                <h1>Outreach Program</h1>
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        {events
                            .filter((model) => model.status === 'ongoing')
                            .map((model, index) => {
                                return (
                                    <div
                                        key={`events-${index}`}
                                        className="card shadow-sm mb-2"
                                    >
                                        <Card model={model} />
                                    </div>
                                )
                            })}
                    </div>
                    <div className="col-md-4">
                        <h2>Upcoming projects</h2>
                        {events
                            .filter((model) => model.status === 'future')
                            .map((model, index) => {
                                return (
                                    <div
                                        key={`events-${index}`}
                                        className="card shadow-sm mb-2"
                                    >
                                        <Future model={model} index={index} />
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
