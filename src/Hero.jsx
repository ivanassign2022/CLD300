import './css/Hero.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Hero() {
  let img = '/assets/hero.jpg';
  let title = 'Hero Banner';
  return (
    <Container maxWidth={false}  disableGutters>
      <CssBaseline />
          <img
          srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${img}?w=164&h=164&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
        />
    </Container>
  );
}

