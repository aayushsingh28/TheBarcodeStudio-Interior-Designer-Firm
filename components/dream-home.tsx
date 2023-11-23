import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/core'
import Button from './button'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const DreamHome: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="24">
      <Heading
        as="h3"
        mb="20"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"

      >
        All the more reasons to get your dream home interiors now
      </Heading>
      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
          
        >
          <Image
            src="/icon/video-call.png"
            alt="Power Icon"
            width="50px"
            height="50px"
            mr="18px"
            data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold"data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="150">Free online consultation</Text>
            <Text fontSize="sm"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="190">
              Talk to our designers online and start planning your interiors
              from the comfort of your home.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Image
            src="/icon/wallet.png"
            alt="Man with a rocket"
            width="50px"
            height="50px"
            mr="18px"data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold"data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="340">Pay just 10% to book</Text>
            <Text fontSize="sm" data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400">
              We’ve dropped our booking fees. Now book your projects by paying
              just 10% instead 20%.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Image
            src="/icon/power-icon.png"
            alt="Power Icon"
            width="50px"
            height="50px"
            mr="18px"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="450"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold" data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500">Hassle-free cancellation</Text>
            <Text fontSize="sm"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500">
              Get 100% refund on cancellations done within 15 days of booking.
              
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button>Consult online now</Button>
    </Flex>
  )
}
export default DreamHome
