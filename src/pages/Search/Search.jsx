import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Card from '../../componenets/Card';
import Pagination from '../../componenets/Pagination';
import SearchBox from '../../componenets/SearchBox';

const  Search = ()=>{
  const [content, setContent] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [paginationNo, setPaginationNo] = useState(0)

    const [searchValue, setSearchValue] = useState('all');
    const [typeValue, setTypeValue] = useState('movie');
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

    
    
    const getDataTrending = async ()=>{
        
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${typeValue}?api_key=${API_KEY}&page=${pageNo}&language=en-US&&query=${searchValue}&page=1&include_adult=false`)
        setContent(data.results);
        setPaginationNo(data.total_pages);
    }

    useEffect(()=>{
        console.log('Trending Component did mount');
        getDataTrending();
    }, [])

    const fetchDataQuery = ()=>{
        // 
        getDataTrending()
    }
    
    const handleClick = (number)=>{
      setPageNo(number);
    }
    useEffect(()=>{
        console.log('Trending Component didupdate mount');
        getDataTrending();
       
    }, [pageNo])
    return (
        <main className='homePage'>
            <Container>
                <Row>
                    <Col className='col-12'>
                        <section>
                            <h1 className='txtCenter'>Search Movies /  TV Series</h1>
                            <h3 className='txtCenter'> For You</h3>
                            <SearchBox
                                searchValue={searchValue}
                                setSearchValue={(value)=>{setSearchValue(value)}}
                                typeValue={typeValue}
                                setTypeValue={(value)=>{setTypeValue(value)}}
                                filterData={fetchDataQuery} />
                        </section>
                    </Col>
                </Row>
                <Row>
                    
                    <Col className='col-12'>
                        <Row>
                                {
                                    content && content.length > 0 ? content.map((item, index)=>{
                                        return (<Card key={index} data={item} mediaType={typeValue}/>)
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

export default Search;