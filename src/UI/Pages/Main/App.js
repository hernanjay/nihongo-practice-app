import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, AbsoluteCenter, Spinner } from '@chakra-ui/react'
import Swal from 'sweetalert2'

function App() {
  Swal.fire({
    title: 'Hi!',
    text: 'Site is still Under Constrution, please comeback next time',
    icon: 'info',
    confirmButtonText: 'Cool'
  })
  return (
    <ChakraProvider>
      <Box position='relative' h='100vh'>
        <AbsoluteCenter p='4' color='white' axis='both'>
          <Spinner size='xl' color='blue.500' />
        </AbsoluteCenter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
