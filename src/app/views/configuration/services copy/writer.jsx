import React from 'react'
import { Icon } from '@material-ui/core'
import MalePic from '/img/gender/Male.jpg'
import FemalePic from '/img/gender/Female.jpg'
import axios from 'axios'

const Writer = ({ models, exhibit, destroy }) => {
    let logs = 'No data found...'
    if (models) {
        logs = models.map((model, index) => {
            // console.log(model)
            const {
                id,
                title,
                description,
                price,
                size,
                color,
                src,
                category
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
                                        <div className="col-md-2 d-flex align-self-center">
                                            <img
                                                className="mx-auto rounded-circle"
                                                height="auto"
                                                width="75px"
                                                src={`${axios.defaults.baseURL}storage/services/${src}`}
                                                alt="events"
                                                // onError={(event) =>
                                                //     (event.target.src = !is_male
                                                //         ? MalePic
                                                //         : FemalePic)
                                                // }
                                            />
                                        </div>
                                        {/* <div className="col-md-10 border-end border-start"> */}

                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-6 border-bottom">
                                                    <strong>{title}</strong>
                                                </div>
                                                <div className="col-md-6 border-bottom">
                                                    <strong><span>&#8369; </span>{price}</strong>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {description}
                                                </div>
                                                <div className="col-md-6">

                                                    {(size && color) && <>{ size } | { color }</>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <div
                                                className="btn-group"
                                                role="group"
                                            >
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
                                                    onClick={destroy.bind(
                                                        this,
                                                        id
                                                    )}
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
                </div>
            )
        })
    }
    return <div className="container-fluid">{logs}</div>
}

export default Writer
