import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ScrollTextProps {
  text: string;
  fontSize?: string;
  delay?: number;
  fontWeight?: string;
  color?: string;
  textShadow?: string;
}

const ScrollText = ({ 
  text, 
  fontSize = '2rem', 
  delay = 0,
  fontWeight = 'bold',
  color = 'white',
  textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'
}: ScrollTextProps) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: '0.8', delay: delay.toString() }}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      textAlign="center"
      textShadow={textShadow}
    >
      {text}
    </Box>
  );
};

export default ScrollText; 