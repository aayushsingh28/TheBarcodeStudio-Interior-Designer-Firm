import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="justify">
        Welcome to "The Barcode Studio," a dynamic and youthful architecture and interior design firm at the forefront of creative innovation. Established in 2022, our studio is driven by a passion for crafting spaces that seamlessly blend functionality, aesthetics, and sustainability.
Our team brings a fresh perspective to each project, combining innovative thinking with a deep understanding of the latest design trends. We believe in pushing boundaries and challenging the status quo, creating spaces that not only meet the needs of our clients but exceed their expectations.
At The Barcode studio, we pride ourselves on our collaborative approach. We understand that the best designs emerge from a fusion of diverse ideas and perspectives. Our team works closely with clients to understand their vision, goals, and unique requirements. Through a process of active communication and collaboration, we ensure that every project reflects the client's personality, values, and aspirations.
In terms of our design philosophy, we embrace a holistic approach that considers both the exterior architecture and interior spaces as integral parts of a unified whole. We believe that a well-designed space should not only be visually appealing but also enhance the overall well-being of its occupants. Sustainability is a core value for us, and we strive to incorporate eco-friendly practices and materials in our designs whenever possible.
Technology plays a crucial role in our design process. Our team leverages cutting-edge 3D modeling and visualization tools to bring concepts to life, allowing clients to experience their future spaces in a virtual environment before construction begins. This not only enhances the design process but also ensures that clients have a clear understanding of the final result.
The Barcode Studio is not just a design firm; it's a creative hub where ideas flourish, and innovation thrives. We approach each project with enthusiasm, dedication, and a commitment to excellence. Whether it's a residential masterpiece, a commercial space, or a community development project, we bring a fresh perspective, creative flair, and a passion for design that sets us apart.
Step into a world where imagination knows no bounds, and let The Barcode Studio redefine your living and working experience through innovative, functional, and aesthetically pleasing design.
        </Text>
        {/* <Button>Learn More</Button> */}
      </Flex>
      <Box gridColumn="4 / 7">
        <Image
          src="/about-us2.jpg"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
        />
      </Box>
    </Grid>
  )
}

export default About
