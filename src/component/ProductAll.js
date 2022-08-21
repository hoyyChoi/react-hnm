import React ,{useEffect,useState} from 'react'
import ProductCard from './ProductCard'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';






const ProductAll = () => {
    
    const [query,SetQuery]=useSearchParams()
    const [product,Setproduct]=useState([])
    
    const getproducts = async() =>{
        let searchQuery = query.get('q') ||''
        let url = `http://localhost:3004/products/?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        Setproduct(data)
    }

    useEffect(()=>{
        getproducts()
    },[query])
    
    

    return (
    <div>
        <Container>
            <Row>
                {product.map((menu)=>
                    <Col>
                        <ProductCard item={menu} />
                    </Col>
            )}
                
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll