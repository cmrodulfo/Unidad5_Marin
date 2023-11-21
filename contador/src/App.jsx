import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import { Contador } from './Components/Contador/Contador'


function App() {


  return (
    <>
      <ChakraProvider>
        <Header />
        <Contador />
      </ChakraProvider>

    </>
  )
}

export default App
