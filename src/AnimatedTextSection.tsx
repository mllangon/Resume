import { Box, VStack } from '@chakra-ui/react';
import ScrollText from './components/ScrollText';

const AnimatedTextSection = () => {
  // Aquí puedes modificar los textos a tu gusto
  const textItems = [
    {
      text: "Mario Llansó", // Cambia esto por tu nombre
      fontSize: "4xl",
      fontWeight: "bold",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      delay: 0.2
    },
    {
      text: "computer engeniering student in the Alfonso X El Sabio University", // Cambia esto por tu título o profesión
      fontSize: "2xl",
      color: "white",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      delay: 0.4
    },
    {
      text: "Second year student", // Cambia esto por tu especialidad
      fontSize: "xl",
      color: "white",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      delay: 0.6
    },
    {
      text: "I'm a second year computer engeniering student in the Alfonso X El Sabio University and I´m looking to gain some experience in my job field, I’m passionate about technology, problem-solving, and continuous learning, and I'm eager to apply my academic knowledge in real-world environments. I’m particularly interested in areas like software development, systems architecture, and emerging technologies such as artificial intelligence and cybersecurity. I’m a fast learner, enjoy working in teams, and am highly motivated to grow both personally and professionally by contributing to meaningful projects.", // Cambia esto por tu filosofía
      fontSize: "2xl",
      color: "white",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      delay: 0.8
    },
    {
      text: "My professional objective is to gain hands-on experience in real-world technological environments where I can apply the knowledge acquired during my Computer Engineering studies. I aim to develop both my technical and interpersonal skills by contributing to meaningful projects and collaborating with multidisciplinary teams. My vision is to grow into a well-rounded engineer capable of leading innovative solutions from concept to deployment, while continuing to learn about emerging fields such as artificial intelligence, cybersecurity, and cloud computing. I aspire to create technologies that improve people’s lives and add value to businesses, with the long-term goal of taking on leadership roles in the tech industry.", // Cambia esto por tu objetivo
      fontSize: "xl",
      color: "white",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      delay: 1.0
    }
  ];

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      zIndex={1}
    >
      <VStack spacing={8} maxW="container.xl" mx="auto" px={4}>
        {textItems.map((item, index) => (
          <ScrollText
            key={index}
            text={item.text}
            fontSize={item.fontSize}
            fontWeight={item.fontWeight}
            color={item.color}
            textShadow={item.textShadow}
            delay={item.delay}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default AnimatedTextSection; 