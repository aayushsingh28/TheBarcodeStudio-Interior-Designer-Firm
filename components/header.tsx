import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/core'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Box from '@chakra-ui/core'


const Header: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <Grid
      data-aos="fade-right"
      data-aos-easing="ease-out"
     data-aos-duration="1000"
      backgroundImage="url(/images/tyuii.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={['100vh', '100vh', '100vh', '100vh']}
      templateRows="1fr 1fr 1fr"
    >
      <Flex
        flexDirection="column"
        gridRow="2 / 4"
        paddingX={['1.5em', '1.5em', '1.5em', '9%']}
      > 
      {/* <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles} backdropFilter='invert(100%)'> */}
        <Heading
          as="h3"
          fontSize={['4xl', '5xl', '6xl', '6xl', '6xl']}
          fontFamily={'Gill Sans'}
          color="rgb(250,230,170)"
          bg=""
          mb="2"
          width="fit-content"
          paddingX={['4px', '12px', '12px', '16px', '16px']}
          paddingY={['4px', '4px', '12px', '12px', '16px']}
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="250"
          textTransform={'uppercase'}

        >
          Your Space is Our Canvas.
        </Heading>
        {/* </Box>
      </Box> */}
        <Heading
          as="h3"
          fontSize={['lg', 'lg', '2xl', '2xl', '2xl']}
          fontFamily={'Gill Sans'}
          textTransform="uppercase"
          color="261F1A"
          bg="rgb(220,210,198)"
          width="fit-content"
          paddingX={['24px', '24px', '30px', '30px', '30px']}
          paddingY={['8px', '8px', '14px', '14px', '14px']}
          data-aos="zoom-left"
          data-aos-easing="ease-in-out"
          data-aos-delay="550"
        >
          Creating Interiors that Reflect You
        </Heading>
      </Flex>
    </Grid>
  )
}

export default Header
