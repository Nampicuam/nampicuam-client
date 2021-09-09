import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel  from 'react-bootstrap/Carousel';
import axios from 'axios'

function Newsfeed({news}) {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);
  const viewer = news.map(newsfeed => {
    const {id, title, description, src } = newsfeed;
      return (
        <Carousel.Item>
          <div className="container"  key={id}>
              <div>
                <img
                  className="d-block"
                  src={`${axios.defaults.baseURL}storage/newsfeeds/${src}`}
                  alt={title}
                  height='500px'
                  width='100%'
                />
              </div>
          </div>
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description }</p>
          </Carousel.Caption>   
        </Carousel.Item>
        )
      })
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{marginTop:'3%', height:'500px'}}>
        {viewer}
      </Carousel>
    );
  }
  
  export default Newsfeed