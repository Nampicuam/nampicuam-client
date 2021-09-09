import React from 'react'

const Gallery = ({ src, title }) => {
    return (
        <div className="card shadow-sm mb-3">
            <div className="d-flex align-self-center">
                <img
                    className="mx-auto"
                    width="100%"
                    height="auto"
                    src={src}
                    alt={title}
                />
            </div>
        </div>
    )
}

export default Gallery
