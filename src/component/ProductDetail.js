import React, { useEffect } from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import ProductCard from './ProductCard'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {

  let [product,Setproduct] = useState(null)
  let {id}=useParams()
  const getproductDetail =async()=>{
    let url =`https://my-json-server.typicode.com/react-hnm/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    Setproduct(data)
  }

  useEffect(()=>{
    getproductDetail()
  },[])

  return (
    <div>
        <Container>
          <Row>
            <Col className='detail-img'>
              <img src={product?.img}/>
            </Col>
            <Col>
              <div>{product?.title}</div>
              <div>{product?.price}</div>
              <div>{product?.choice?"conscious choice":''}</div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  사이즈선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">s</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">m</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">l</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className='buttonDetail'>추가</button>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default ProductDetail