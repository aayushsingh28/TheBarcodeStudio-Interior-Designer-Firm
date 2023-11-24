import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" marginY="20" alignItems="center"  >
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="950px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="semi-bold"
          mb="10px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-end" textAlign="left">
        The Barcode Studio is a multidisciplinary architecture practice focussed 
        on delivering the highest quality architecture services to our clients. 
        We focus on crafting and delivering the perfect blend of our 3 main pillars: 
        sophistication, aesthetics and functionality. We offer unique innovative 
        solutions tailored to your specific needs and requirements. The outlook of
        the studio is to align your taste and preferences with our distinctive style
         to produce an output that best reflects your personality and helps you achieve 
         your dream. We at The Barcode Studio celebrate intricate craftsmanship, flawless 
         execution and an inclusive process. 
        </Text>
        {/* <Button>Learn More</Button> */}
      </Flex>
      <Box gridColumn="4 /6 "  marginY="5" >
        <Image
          width={['0%', '0%', '20%', '80%', '95%']}
          
          maxW="690px"
          // height={['30vh', '30vh', '40vh', '35vh']}
          src="ewrw.jpg"
          display={['none', 'none', 'none', 'block', 'block']}
          borderColor="#A9957B"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.8)"
        />
      </Box>
    </Grid>
  )
}

export default About
