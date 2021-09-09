import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Writer from './writer'

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel'

const Index = ({ news }) => {
    return (
        <div style={{ marginTop: '5%' }} >
             <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={50}
                            totalSlides={news.length}
                            isPlaying={true}
                        >
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-1 text-center d-flex align-self-center">
                                        <ButtonBack className="mx-auto btn btn-primary">
                                            &#x3c;
                                        </ButtonBack>
                                    </div>
                                    <div className="col-md-10 text-center">
                                        <Slider>
                                            {news.map((newsfeed, index) => {
                                                return (
                                                    <Slide
                                                        key={`newsfeed-${index}`}
                                                        index={index}
                                                    >
                                                        <Writer
                                                            id={index}
                                                            model={newsfeed}                                                           
                                                        />
                                                    </Slide>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                    <div className="col-md-1 text-center d-flex align-self-center">
                                        <ButtonNext className="mx-auto btn btn-primary">
                                            &#x3e;
                                        </ButtonNext>
                                    </div>
                                </div>
                            </div>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
            

           
        </div>
    )
}

export default Index
