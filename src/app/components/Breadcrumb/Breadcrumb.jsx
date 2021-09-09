import React from 'react'
import { Icon } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons'

const Breadcrumb = ({ routeSegments, toggle }) => {
    return (
        <div className="mb-sm-30">
            <div className="flex flex-wrap items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-16">
                                {routeSegments[routeSegments.length - 1].name}
                            </strong>
                            <span className="m-0 pb-3px ml-2 h4 text-hint">
                                |
                            </span>
                            <NavLink to="/">
                                <Icon
                                    className="align-middle ml-2 mb-1"
                                    color="primary"
                                >
                                    home
                                </Icon>
                            </NavLink>
                            {routeSegments.map((route, index) => {
                                const { path, name } = route
                                return (
                                    <span key={`breadcrumb-${index}`}>
                                        <FontAwesomeIcon
                                            className="text-hint m-0 h6 pb-3px ml-2 mr-2"
                                            icon={faCaretRight}
                                        />
                                        {path ? (
                                            <NavLink to={path}>
                                                <span
                                                    key={`breadcrumb-${index}`}
                                                    className="text-muted h6"
                                                >
                                                    {name}
                                                </span>
                                            </NavLink>
                                        ) : (
                                            <span
                                                key={`breadcrumb-${index}`}
                                                className="text-muted h6"
                                            >
                                                {name}
                                            </span>
                                        )}
                                    </span>
                                )
                            })}
                        </div>
                        {toggle && (
                            <div className="col-md-6 text-right">
                                <div className="btn-group float-right">
                                    <button
                                        className="btn shadow rounded-circle"
                                        onClick={toggle}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
