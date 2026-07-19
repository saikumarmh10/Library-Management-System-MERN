import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://picsum.photos/1300/1200?random=1" alt="" />
                <img src="https://picsum.photos/1300/1200?random=2" alt="" />
                <img src="https://picsum.photos/1300/1200?random=3" alt="" />
                <img src="https://picsum.photos/1300/1200?random=4" alt="" />
                <img src="https://picsum.photos/1300/1200?random=5" alt="" />
                <img src="https://picsum.photos/1300/1200?random=6" alt="" />
                <img src="https://picsum.photos/1300/1200?random=7" alt="" />
                <img src="https://picsum.photos/1300/1200?random=8" alt="" />
                <img src="https://picsum.photos/1300/1200?random=9" alt="" />
                <img src="https://picsum.photos/1300/1200?random=10" alt="" />
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{ fontSize: 20 }} /></button>
        </div>
    )
}

export default PhotoGallery