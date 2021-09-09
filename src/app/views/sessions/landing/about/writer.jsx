import React from 'react'

const About = ({ title, description, src, posted }) => {
    return (
        <div className="card shadow-sm">
            <div className="d-flex align-self-center">
                <img width="200" height="auto" src={src} alt="about"/>
            </div>

            <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
