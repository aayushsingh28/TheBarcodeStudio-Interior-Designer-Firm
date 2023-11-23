import React from 'react'

import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/core'

const OurProject: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="24">
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Gallery
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/grid/01_01.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/grid/01_02t.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/grid/01_02.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/grid/01_03.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/grid/hgrt56.jpg"
          gridColumn={['1 / 2', '1 / 3', 'auto', 'auto', 'auto']}
        />
        <Image
          src="/grid/study wash.jpg"
          gridColumn={['1 / 2', '2 / 4', 'auto', 'auto', 'auto']}
        />
      </Grid>
    </Flex>
  )
}

export default OurProject
