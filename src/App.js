import { Fragment } from 'react'
import "font-awesome/css/font-awesome.min.css"
import Header from './components/header'
import Home from './components/Home'
import Banner from './components/banner'
import Footer from './components/footer'
import { Box } from '@mui/material'
import styled from '@emotion/styled'


const Components = styled(Box)`
    padding: 10px 10px
`

const App = ()=>{
  return (
    <Fragment>
      <Header />
      <Home />
      <Components>
      <Banner />
      </Components>
      <Footer />
    </Fragment>
  )
}

export default App