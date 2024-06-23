import { useState } from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import FrontProduct from './FrontProduct.jsx'
import Faq from './Faq.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Container maxWidth={false}  disableGutters>
      <Header />
      <Hero />
      <FrontProduct />
      <Container maxWidth="xl"  disableGutters sx={{ mt: 4 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Faq /> 
        </Grid>
        <Grid item xs={4}>
          <Contact />
        </Grid>
      </Grid>
      </Container>
      <Footer />
    </Container>

    </>
  )
}

export default App
