import { Box, Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../router';
import styles from './Footer.module.css';
import { FaDiscord, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const tabs = [
  { key: 'tab1', title: 'Trang chủ', link: ROUTER.HOME },
  { key: 'tab2', title: 'Nạp thẻ', link: ROUTER.NAP_THE },
];

const IconHref = [
  { key: 'icon1', icon: <FaDiscord fontSize={35} className='icons' />, link: 'https://discord.com/' },
  { key: 'icon2', icon: <FaFacebook fontSize={35} className='icons' />, link: 'https://facebook.com/' },
  { key: 'icon3', icon: <FaYoutube fontSize={35} className='icons' />, link: 'https://youtube.com/' },
  { key: 'icon4', icon: <FaTwitter fontSize={35} className='icons' />, link: 'https://twitter.com/' },
];

export default function Footer() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Box w='full' className={styles.Footer} color='gray.600' position='relative'>
      <Box className={styles.onTop} w='70px' h='70px' onClick={ScrollTop}></Box>
      <Container maxW='container.xl' py={36} display='flex' flexDirection='column' alignItems='center'>
        <HStack spacing={7}>
          {tabs.map((e) => (
            <Link to={e.link} key={e.key}>
              <Text color='gray.600'>{e.title}</Text>
            </Link>
          ))}
        </HStack>
        <HStack mt={5} spacing={7} color='gray'>
          {IconHref.map((e) => (
            <a href={e.link} target='_blank' key={e.key}>
              {e.icon}
            </a>
          ))}
        </HStack>
        <Text fontWeight='bold' mt={6}>
          @GTAVCL.NET
        </Text>
      </Container>
    </Box>
  );
}
