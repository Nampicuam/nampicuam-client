import React from 'react'
import {  Avatar } from '@material-ui/core'
import axios from 'axios'

const Newsfeed = ({ model }) => {
    const {id, title, description, src, creator, profile, profileimg, posted } = model;                                                
    return (
        <div className="row news-card p-3 bg-white " key={id}>
             <div className="col-md-4 ">
                <div className="feed-image carouselItemsHome">
                    <img
                        src={`${axios.defaults.baseURL}storage/newsfeeds/${src}`}
                        alt="newsfeed"
                        className="news-feed-image  img-fluid img-responsive"
                        width="100%"
                        height="100%"
                        id="mainImg"
                    />
                </div>
            </div>
            <div className="col-md-8" style={{ position: 'relative' }}>
                <div className="news-feed-text">
                    <h2>{title}</h2>
                    <span>{description}</span>
                    <div
                        style={{ position: 'absolute', bottom: 0 }}
                        className="d-flex flex-row justify-content-between align-items-center mt-2"
                    >
                        <div className="d-flex creator-profile">
                            <Avatar
                             className="cursor-pointer"
                                        src={
                                            profile
                                                ? `${axios.defaults.baseURL}storage/users/${profileimg}`
                                                : null
                                        }
                            />
                            <div className="d-flex flex-column ml-2">
                                <h6 className="username">{creator}</h6>
                                <span className="date">{posted} 'Jan 20,2020'</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
        
    )
}

export default Newsfeed
