import { Box, Container, Heading, HStack, ScaleFade, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import VButton from '../../components/VQMM/VButton/VButton';
import { MdOutlinePeople } from 'react-icons/md';
import styles from './VQMM.module.css';

export default function VQMM() {
  const [DSTT, setDSTT] = useState(['Hello', 'World', 'from', 'to', 'moon']);
  const add = () => {
    setDSTT(['hello', ...DSTT]);
  };
  return (
    <Container color='white' maxW='container.xl'>
      <Heading textAlign='center' mt={10}>
        Vòng quay may mắn
      </Heading>
      <Box mt={28}>
        <Box display='flex' justifyContent='space-between'>
          <VButton type='view'>
            <Text display='flex' alignItems='center'>
              Đang tham gia: {DSTT.length}
              <MdOutlinePeople size={20} style={{ marginLeft: 5 }} />
            </Text>
          </VButton>
          <Box display='flex'>
            <VButton type='button' onClick={add}>
              <Text display='flex' alignItems='center'>
                Thể lệ
              </Text>
            </VButton>
            <VButton type='button'>
              <Text display='flex' alignItems='center'>
                Lịch sử
              </Text>
            </VButton>
          </Box>
        </Box>
      </Box>
      <Box>
        <VStack alignItems='flex-start' className={styles.ListPlayers}>
          {DSTT.map((players) => (
            <ScaleFade initialScale={0.9} in={true}>
              <Text>{players}</Text>
            </ScaleFade>
          ))}
        </VStack>
      </Box>
    </Container>
  );
}
