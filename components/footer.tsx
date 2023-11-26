import React from 'react'
import { Map } from './map'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Grid as="footer" templateColumns="repeat(9,1fr)" mt="16" mb="16">
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '20', '12']}
      >
        <Logo />
        <Text fontSize="sm" mt="2" textAlign="left" lineHeight="20px" width={200}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          mt="8"
        >
          <Box as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          <Box as={FaTwitter} size="22px" color="orange.500" mr="12px" />
          <Box as={FaGoogle} size="22px" color="orange.500" mr="12px" />
          <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          <Box as={FaYoutube} size="22px" color="orange.500" />
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX="4"
        mt={['12', '12', '12', '0', '']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Projects
        </Text>
        <Text mb="6px">Lorem</Text>
        <Text mb="6px">Lorem</Text>
        <Text mb="6px">Lorem</Text>
        <Text mb="6px">Lorem</Text>
        
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['8', '8', '8', '2', '0']}
        mt={['12', '12', '12', '0', '0']}
        ml={-4}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Contact Us
        </Text>
        <Text mb="6px">Address: Ground floor,F1-22, Kotla Rd, Pocket 1, Sector 11F, Rohini, Delhi, 110085</Text>
        <Text mb="6px">Phone: +91 8448023979</Text>
        <Text>Email: thebarcodestudioofficial@gmail.com</Text>
      </Flex>

      <Flex
    
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', '5 / 10']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Map/>
        {/* <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
        Website Designed by
        </Text>
        <Text fontWeight="bold" mb="6px">
          The BarCodeStudio
        </Text>
        <Text mb="6px">
        Copyright © 2023. All Rights Reserved
        </Text> */}
      </Flex>
    </Grid>
  )
}

export default Footer
