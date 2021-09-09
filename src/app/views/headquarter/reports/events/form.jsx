import React, { useState } from 'react'

function getStatus(status) {
    switch (status) {
        case 'done':
            return 'bg-success'

        case 'future':
            return 'bg-warning'

        default:
            return 'bg-primary'
    }
}

const Future = ({ model }) => {
    const [read, setRead] = useState(true)
    const {
        id,
        title,
        description,
        src,
        need_donor,
        need_volunteer,
        crew,
        volunteers,
        investment,
        donors,
        fundraising,
        status,
    } = model
    return (
        <div className="container" style={{ position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    height: 125,
                    width: 15,
                    left: 0,
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                }}
                className={getStatus(status)}
            ></div>
            <div className="row" style={{ height: read ? '125px' : 'auto' }}>
                <div className="col-md-2 d-flex align-self-center">
                    <img
                        className="mx-auto"
                        height="125px"
                        width="auto"
                        src={src}
                        alt="events"
                    />
                </div>
                <div className="col-md-8">
                    <div className="row border-bottom">
                        <h5>{title}</h5>
                    </div>
                    <div
                        className="row"
                        style={{ position: 'relative', height: '80%' }}
                    >
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
                        <div
                            className="col-md-12 border-top"
                            style={{ position: 'absolute', bottom: 0 }}
                        >
                            <div className="row">
                                <div className="col-md-2">
                                    Crew: {volunteers}/{crew}
                                </div>
                                <div className="col-md-2">Donors: {donors}</div>
                                <div className="col-md-5">
                                    Fundraising: {fundraising}/{investment}
                                </div>
                                <div className="col-md-3">Status: {status}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-self-center">
                    <div className="container-fluid mx-auto">
                        <div className="row">
                            <div className="col-md-12 mb-3 d-flex align-self-center">
                                <div className="btn-group mx-auto">
                                    {need_donor && (
                                        <button className="btn btn-primary btn-sm">
                                            Need more donation
                                        </button>
                                    )}
                                    {need_volunteer && (
                                        <button className="btn btn-secondary btn-sm">
                                            Need more volunteer
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-12 d-flex align-self-center">
                                <div className="btn-group mx-auto">
                                    <button className="btn btn-info btn-sm">
                                        Edit{id}
                                    </button>
                                    <button className="btn btn-warning btn-sm">
                                        Archive
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Future
