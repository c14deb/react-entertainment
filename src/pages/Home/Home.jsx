import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Card from '../../componenets/Card';
import Pagination from '../../componenets/Pagination';

const Home = () => {

   const[content, setContent] = useState([])
   const [pageNo, setPageNo] = useState(1)
   const [paginationNo, setPaginationNo] = useState(0)

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

  const getDataTrending = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageNo}`)
    //set Data
    setContent(data.results)
    setPaginationNo(data.total_pages)
    // console.log('data', data)
  }
    useEffect(()=>{
      // console.log('Trending Component did mount');
        getDataTrending();
    },[])



    const handleClick = (number)=>{
      setPageNo(number);
  }
  useEffect(()=>{
      // console.log('Trending Component didupdate mount');
      getDataTrending();
  }, [pageNo])




  return (
    <main className='homePage'>
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h1 className='txtCenter'>Top Trending</h1>
              <h1 className='txtCenter'>Tv and Movie For You</h1>
            </section>
          </Col>

          {
            content && content.length > 0 ? content.map((item)=>{
            return (<Card key={item.id} data={item} mediaType="tv" />)
             }) : 'Loading ....'
          }
          {
            paginationNo && paginationNo > 1 ? <Pagination maxnum={paginationNo} activenum={pageNo} handleClick={handleClick}/> : ''
          }

        </Row>
      </Container>
    </main>
  )
}

export default Home

