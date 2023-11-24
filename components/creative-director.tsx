import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const CreativeDirector: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="left"
        
        paddingX={['8', '8', '8', '24', '24']}
        // marginX="auto"
        maxW="950px"
        
        mt='2.5em'
        ml='.5em'
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          Founder
        </Heading>
        <Text width={'130%'} fontSize="lg" mb="20px" alignSelf="flex-start" textAlign="left">
        Manish Gupta is the Founder and Principal Architect at The BarCode Studio. 
        Born in Delhi, he studied at the renowned University School of Architecture
         and Planning, IPU Delhi. After graduating, he worked with Anagram Architects 
         for a brief stint before founding The BarCode Studio. Manish’s passion for 
         stretching the conceptual possibilities of a project right down to its last
          detail is reflected in his diverse repertoire. With a keen interest in practising
           in a wide variety and scales of projects, his approach takes into account the 
           spatial experience of the user before delving into the details. He practices the
            philosophy of less is more, and firmly believes that design is a collaborative
             effort. 
        </Text>
        {/* <Button>Learn More</Button> */}
      </Flex>
      <Box
          position="relative"
          gridColumn={['1/ 7', '2 / 7', '3/7', '5/7', '5/7']}
        >
          <Image 
          style={{pointerEvents:'none'}}
          alignItems="center"
            justifyContent="center" height="420px" src="/directors/founder1.JPG" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="40%"
            backgroundColor="white"
            borderColor="#A9957B"
            borderWidth="6px"
          >
            <Text alignItems="center" textAlign='center' textTransform="uppercase" fontWeight="medium" fontSize="22px">
              Manish Gupta
            </Text>
            <Text textTransform="uppercase" textAlign='center' fontWeight="bold" color="#A9957B">
              Principal Architect
            </Text>
          </Flex>
        </Box>
    </Grid>
  )
}

export default CreativeDirector
