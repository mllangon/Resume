import { VStack } from '@chakra-ui/react'
import ScrollText from './ScrollText'

const AnimatedTextSection = () => {
  return (
    <VStack spacing={4} align="center" justify="center" h="100vh">
      <ScrollText 
        text="Computer Engineer Student"
        fontSize="3rem"
        delay={0}
      />
      <ScrollText 
        text="Searching for a new challenge"
        fontSize="2rem"
        delay={0.5}
      />
      <ScrollText 
        text="With a passion for learning and a desire to grow"
        fontSize="2rem"
        delay={1}
      />
    </VStack>
  )
}

export default AnimatedTextSection 