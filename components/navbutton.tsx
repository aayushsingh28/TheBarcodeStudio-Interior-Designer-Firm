import React from 'react'
import { Button as ChakraButton, Scale } from '@chakra-ui/core'


const navbutton: React.FC = ({ children }) => {
  return (
    <ChakraButton
      variantColor="white"
      color="black"
      textTransform="uppercase"
      width="fit-content"
     
    >
      {children}
    </ChakraButton>
  )
}
export default navbutton
