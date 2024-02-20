import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsMenuButton } from 'react-icons/bs'
import "./style.css"

export default function ImageSlider({ url, limit }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length-1:currentSlide-1)
        console.log(currentSlide)

    }
    function handleNext(){
        setCurrentSlide(currentSlide === images.length-1 ? 0 :currentSlide+1)
    }

    async function fetchImages(getUrl) {

        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json()
            console.log(data)

            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);
    if (loading) {
        return <div className="loading-data">Loading data! Please Wait</div>
    }
    if (errorMsg !== null) {
        return <div className="errormsg">Error occured {errorMsg}</div>
    }
    return (
        <div className="wrapper">
            <div className="container">
                <BsArrowLeftCircleFill className='arrow arrow-left' onClick={()=>handlePrevious()}/>
                {
                    images && images.length ?
                        (images.map((imageItem,index) => (
                            <img src={imageItem.download_url} 
                            alt={imageItem.author} 
                            key={imageItem.id} 
                            className={currentSlide === index?"current-image":"current-image hide-current-image"} 
                            width='800px'
                            height='500px'
                        />
                        ))): null
                }

                <BsArrowRightCircleFill className='arrow arrow-right' onClick={()=>handleNext()}/>
                <span className="circle-indicators ">
                    {images&&images.length?
                    images.map((_,index)=> <button key={index} className={currentSlide ===index? "current-indicator":"current-indicator hide-current-indicator"} onClick={()=> setCurrentSlide(index) }></button>)
                    :null}
                </span>


            </div>
        </div>
    )
}
