import React, { useEffect, useState } from 'react'
import './style.css'

export default function Loadmore(url) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [count, setCount] = useState(0);
    const[disabeButton,setDisabeButton]=useState(false)



    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();


            if (data && data.products && data.products.length) {
                setProducts(products.concat(data.products))
                setLoading(false)
                
                console.log(data.products);
            }



        } catch (e) {
            console.log(e)
            setErrorMsg(e.message)
            setLoading(false)

        } finally {
            setLoading(false)
        }

    };

    useEffect(() => {
        fetchProducts(url)
        console.log(count)

    }, [count]);
    useEffect(() => {
        if (products && products.length === 100) {
            setDisabeButton(true);
        } else {

            setDisabeButton(false);
        }
    }, [products]);
    function handleLoadMore(){
        setCount(count+1)  

    }
    // if(count=>6){
    //     return (<div>No More Products</div>)
    // }
    if(products.length ===120){
        setDisabeButton(true)
    }


    if (loading) {
        return (<div className='loading'>products is loading</div>)
    }
    if (errorMsg !== null) {
        return <div className="errormsg">Error occured {errorMsg}</div>
    }
    return (
        <div className="wrapper">
            <div className="container">
                <div className="products">
                    {
                        products && products.length ? (products.map((product,index) => (
                            
                            <div className="product-card" key={`${product.id}-${index}`}>
                                <img src={product.thumbnail} alt={product.description} />
                                <div className='product-details'>
                                    <div>
                                        <h3>{product.title}</h3>
                                        <p>{product.brand}</p>
                                        <p>Price $ {product.price}</p>
                                    </div>


                                    <button>buy now</button>
                                </div>
                            </div>
                            
                        ))) : null
                    }
                    
                    <button className='load-more'onClick={handleLoadMore} disabled={disabeButton}>load more</button>
                    {disabeButton?<p>you have reached to 100 products</p>:null}
                </div>
            </div>
        </div>
    )
}
