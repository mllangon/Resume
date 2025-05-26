import { ChakraProvider, Box, Heading, Text, SimpleGrid, VStack, HStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiTypescript, SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
import AnimatedTextSection from './AnimatedTextSection'
import backgroundImage from './assets/images/image.png'
import GitHubStats from './components/GitHubStats'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

const theme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
}

// Componentes de sección
const Header = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box as="header" p={8} textAlign="center">
        <MotionHeading
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          fontSize="3rem"
          mb="1rem"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          Mario Llansó
        </MotionHeading>
        <Text fontSize="xl" color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
          Computer Engineering Student
        </Text>
        <HStack gap={4} justifyContent="center" mt={4}>
          <Icon as={FaGithub} w={6} h={6} cursor="pointer" color="white" />
          <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" color="white" />
          <Icon as={FaTwitter} w={6} h={6} cursor="pointer" color="white" />
        </HStack>
      </Box>
    </MotionBox>
  )
}

const About = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4} color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">Sobre Mí</Heading>
        <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)" fontSize="lg">
          Soy un desarrollador apasionado por crear soluciones innovadoras y
          experiencias de usuario excepcionales. Con experiencia en desarrollo web
          full stack, me especializo en crear aplicaciones modernas y escalables.
        </Text>
      </Box>
    </MotionBox>
  )
}

const Skills = () => {
  const skills = [
    { name: 'React', icon: SiReact, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'JavaScript', icon: SiJavascript, level: 90 },
    { name: 'HTML5', icon: SiHtml5, level: 95 },
    { name: 'CSS3', icon: SiCss3, level: 90 },
  ]

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Box p={8}>
        <Heading as="h2" size="xl" mb={6} color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">Habilidades</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <Box>
            <Heading as="h3" size="lg" mb={4} color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Tecnologías</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {skills.map((skill, index) => (
                <MotionBox
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <VStack gap={2} alignItems="start">
                    <HStack>
                      <Icon as={skill.icon} w={6} h={6} color="white" />
                      <Text fontWeight="bold" color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">{skill.name}</Text>
                    </HStack>
                    <Box w="100%" h="2" bg="rgba(255, 255, 255, 0.2)" borderRadius="full">
                      <MotionBox
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        h="100%"
                        bg="white"
                        borderRadius="full"
                      />
                    </Box>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4} color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Estadísticas de GitHub</Heading>
            <GitHubStats />
          </Box>
        </SimpleGrid>
      </Box>
    </MotionBox>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      technologies: ['React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      technologies: ['Next.js', 'MongoDB', 'Express'],
    },
  ]

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Box p={8}>
        <Heading as="h2" size="xl" mb={6} color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">Proyectos</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Box p={4} borderWidth="1px" borderRadius="lg" borderColor="white" backdropFilter="blur(5px)">
                <Heading as="h3" size="md" mb={2} color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">{project.title}</Heading>
                <Text mb={4} color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">{project.description}</Text>
                <HStack gap={2}>
                  {project.technologies.map((tech) => (
                    <Text key={tech} fontSize="sm" color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
                      {tech}
                    </Text>
                  ))}
                </HStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </MotionBox>
  )
}

const Contact = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4} color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">Contacto</Heading>
        <VStack gap={4} alignItems="start">
          <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Email: tu.email@ejemplo.com</Text>
          <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Teléfono: +1234567890</Text>
          <Text color="white" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">Ubicación: Ciudad, País</Text>
        </VStack>
      </Box>
    </MotionBox>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Contenedor principal con posición relativa */}
      <Box 
        className="App" 
        position="relative"
        width="100%"
        height="100vh"
        overflow="hidden"
      >
        {/* Capa de fondo fija */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={`url(${backgroundImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          zIndex={0}
        />
        
        {/* Contenedor de scroll para el contenido */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          overflowY="auto"
          overflowX="hidden"
          zIndex={1}
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0, 0, 0, 0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '4px',
            },
          }}
        >
          <AnimatedTextSection />
          <Box px={4} py={8}>
            <VStack gap={8} maxW="100%">
              <Header />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </VStack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
