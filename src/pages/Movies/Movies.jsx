import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import Card from '../../componenets/Card';
import Pagination from '../../componenets/Pagination';

import LeftFilter from '../../componenets/LeftFilter';
import useGenres from '../../hooks/useGenres';



const Movies = () => {

  const[content, setContent] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [paginationNo, setPaginationNo] = useState(0)

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;


  const genreforURL = useGenres(selectedGenres)

  const getDataTrending = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNo}&with_genres=&language=en-US&with_genres=${genreforURL}`)
    //set Data
    setContent(data.results)
    setPaginationNo(data.total_pages)
    // console.log('data', data)
  }
  useEffect(()=>{
    // console.log('Trending Component did mount');
      getDataTrending();
  },[])

  useEffect(()=>{
    getDataTrending();
  }, [pageNo, genreforURL])

  const handleClick = (number)=>{
    setPageNo(number);
}
  useEffect(()=>{
    getDataTrending();
  }, [pageNo])



  return (
    
    <main className='homePage'>
            <Container>
                <Row>
                    <Col className='col-12'>
                        <section>
                            <h1 className='txtCenter'>Top Trending Movies</h1>
                            <h3 className='txtCenter'> For You</h3>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-2'>
                        <LeftFilter genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}  setGenres={setGenres} type="movie" setPage={setPageNo}/> 
                    </Col>
                    <Col className='col-10'>
                        <Row>
                                {
                                    content && content.length > 0 ? content.map((item, index)=>{
                                        return (<Card key={index} data={item} mediaType="movie"/>)
                                    }) : 'Loading ....'
                                }

                            {
                                paginationNo && paginationNo > 1 ? <Pagination maxnum={paginationNo} activenum={pageNo} handleClick={handleClick}/> : ''
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>

  )
}

export default Movies