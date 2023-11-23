import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const CreativeDirector: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={['24', '24', '24', '24', '64']}
    >
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Principal Architect
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <Grid
        gridTemplateColumns="repeat(1, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image height="420px" src="/directors/mani.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.600"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Manish Gupta
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              Architect
            </Text>
          </Flex>
        </Box>

        {/* <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
          mt={['16', '16', '0', '0', '0']}
        >
          <Image src="/directors/2.png" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Marie smith
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              Director
            </Text>
          </Flex>
        </Box>

        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
          mt={['12', '12', '0', '0', '0']}
        >
          <Image src="/directors/3.png" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Barbara Jones
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              Director
            </Text>
          </Flex>
        </Box> */}
      </Grid>
    </Flex>
  )
}

export default CreativeDirector
