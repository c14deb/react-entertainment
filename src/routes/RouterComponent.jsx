import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies'
import Search from '../pages/Search/Search'
import Contact from '../pages/Contact/Contact'
import TvSeries from '../pages/TvSeries/TvSeries'
import Details from '../pages/Details/Details'
import Header from '../componenets/Header'
import Footer from '../componenets/Footer'

const RouterComponent = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<TvSeries />} />
                <Route path='/search' element={<Search />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/details/:movieid/:mediatype' element={<Details />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>


  )
}

export default RouterComponent