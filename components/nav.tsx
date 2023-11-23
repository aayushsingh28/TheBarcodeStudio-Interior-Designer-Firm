import React from 'react'
import { Box, Flex, Link, Button, Stack, Scale } from '@chakra-ui/core'
import Logo from './logo'

// import Navbutton from './navbutton'
interface Navbutton {
  link?: string
}

const Navbutton: React.FC<Navbutton> = ({ children, link }) => (
  <Link
    href={link}
    mt={[4, 4, 0, 0]}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize="lg"
    _hover={{color:'#A9957B',transform: 'scale(1.2)'}}
  >
    {children}
  </Link>
)

const Nav = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="relative"
      top="0"
      zIndex="999"
      width="100%"
      align="top"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '3%']}
      paddingY=".5em"
      bg="rgba(255,255,255,1)"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        fontWeight='bold'
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['18px', '18px']}
        textAlign="center"
        alignItems="start"
      >
        
        <Navbutton >Home</Navbutton>
        <Navbutton>About</Navbutton>
        <Navbutton>Services</Navbutton>
        <Navbutton>Gallery</Navbutton>
        <Navbutton>Contact Us</Navbutton>
        {/* <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button> */}
        {/* <Stack spacing={0} direction="row" align="center" marginLeft={20} >
          <Button variantColor="yellow">Create an account</Button>
          <Button variantColor="yellow" variant="ghost">
            Sign In
          </Button>
        </Stack> */}
      </Box>
    </Flex>
  )
}

export default Nav
