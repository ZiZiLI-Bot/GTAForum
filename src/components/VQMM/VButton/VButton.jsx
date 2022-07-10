import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function VButton({ type, onClick, children }) {
  return (
    <Box
      border={type == 'view' ? '2px solid #1A8D44' : '2px solid #8C0707'}
      bgColor={type == 'view' ? '#064425' : '#430202'}
      color={type == 'view' ? '#60EA93' : '#D03439'}
      cursor={type == 'view' ? 'auto' : 'pointer'}
      m={1}
      w='max-content'
      onClick={onClick}
      userSelect='none'
    >
      <Text mx={3} fontWeight='semibold'>
        {children}
      </Text>
    </Box>
  );
}
