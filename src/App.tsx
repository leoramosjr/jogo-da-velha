import {
  Flex,
} from '@chakra-ui/react'

export default function App() {

  return (
    <Flex
      h="100vh"
      w="100vw"
      p="3rem"
      justifyContent="center"
      alignItems="center"
      background="linear-gradient(45deg, rgba(27,4,20,1) 25%, rgba(111,62,3,1) 100%)"
    >
      <Flex
        h="50rem"
        w="50rem"
        p="3rem"
        bgColor="#1212149A"
        border="solid 5px #20202450"
        borderRadius="0.5rem"
      >
        <Flex
          h="100%"
          w="100%"
          bgColor="#20202477"
          borderRadius="0.5rem"
        >

        </Flex>
      </Flex>
    </Flex>
  )
}
