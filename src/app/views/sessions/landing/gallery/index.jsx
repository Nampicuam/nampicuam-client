import React from 'react'
import Writer from './writer'

const Index = ({ galleries }) => {
    return (
        <div style={{ marginTop: '6%' }}>
            <div className="container-fluid">
                <h1 className="text-muted">Photo Gallery</h1>
                <hr />
                <div className="row">
                    {galleries.map((model, index) => {
                        const { title, description, src } = model
                        return (
                            <div key={`gallery-${index}`} className="col-md-3">
                                <Writer
                                    src={src}
                                    title={title}
                                    description={description}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Index
