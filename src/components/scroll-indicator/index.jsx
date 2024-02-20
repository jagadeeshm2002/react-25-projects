import React, { useEffect, useState } from 'react';
import './style.css';

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const[scrollPercentage,setScrollPercentage]= useState(0)


    async function fetchData(geturl) {

        try {
            setLoading(true)
            const res = await fetch(geturl);
            const result = await res.json()

            if (data !== '') {
                setData(result.products)
                // console.log(data)
                setLoading(false)
            }

        } catch (e) {
            setLoading(false)
            setErrorMsg(e.message)
            // console.log(e.message)


            if (errorMsg) {
                return <div className="errormsg">error occoured {errorMsg}</div>
            }


        }

    }
    function handleScrollPercentage(){
        // console.log(document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight)

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled/height)*100)
        console.log(scrollPercentage)
        


    }

    useEffect(() => {
        fetchData(url)
    }, [url]);

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercentage);
        return ()=> {
            window.removeEventListener('scroll',()=> {})
        }

    },[scrollPercentage]  )


    if (loading) {
        return <div className="loading">wait for sec loading...</div>
    }
    


    return (
        <div className="container">
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{width:`${scrollPercentage}%`}}></div>
            </div>
            <h1>custom scroll indicator</h1>
            <div className="data-container">
                {data && data.length ? data.map((dataItem) => 

                    <div className="product" key={dataItem.id}><h2>{dataItem.title }</h2></div>
                ) : null}
            </div>
        </div>
    )
}
