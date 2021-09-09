import React from "react"
import Newsfeed from './newsfeed'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Somefeed from './somefeed.jsx';

const Index = ({news}) =>{
    return (
        <div style={{marginTop:'30px'}}>
            <Newsfeed news={news}/>
            {/* <Somefeed news={news}/>  */}
        </div>
    )
}

export default Index;