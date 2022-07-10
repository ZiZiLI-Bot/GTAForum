import {
  Box,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ROUTER } from '../../router';
import ThuongNap from '../../container/ThuongNap/ThuongNap';
import { HiMenu } from 'react-icons/hi';
import logo from '../../asset/logo-rg.png';

const tabs = [
  { key: 'HOME', type: 'link', title: 'Trang chủ', router: ROUTER.HOME },
  { key: 'TMN', type: 'button', title: 'Thưởng mốc nạp', router: ROUTER.THUONG_NAP },
  { key: 'VQMM', type: 'link', title: 'Vòng quay may mắn', router: ROUTER.VQMM },
  { key: 'NAP', type: 'link', title: 'Nạp thẻ', router: ROUTER.NAP_THE },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 810px)');
  const [open, setOpen] = useState(false);
  const MobileOpen = (type) => {
    if (type == 'button') {
      onOpen();
      setOpen(false);
    } else {
    }
  };
  return (
    <Container maxW='container.xl'>
      <Box className={styles.navbar}>
        {!isMobile ? (
          <Center>
            <Box position='relative' top={6} display='flex'>
              {tabs.map((e) => {
                if (e.type == 'link') {
                  return (
                    <Link key={e.key} to={e.router}>
                      <Text className={styles.Text} fontSize='2xl'>
                        {e.title}
                      </Text>
                    </Link>
                  );
                } else {
                  return (
                    <Text key={e.key} className={styles.Text} fontSize='2xl' onClick={onOpen}>
                      {e.title}
                    </Text>
                  );
                }
              })}
            </Box>
          </Center>
        ) : (
          <Box>
            <Box className={styles.OpenDrawer} onClick={() => setOpen(true)}>
              <HiMenu size='35px' />
            </Box>
            <Drawer placement='left' onClose={() => setOpen(false)} isOpen={open}>
              <DrawerOverlay />
              <DrawerContent className={styles.drawerMobile}>
                <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                {tabs.map((e) => {
                  if (e.type == 'link') {
                    return (
                      <Link key={e.key} to={e.router} className={styles.mobileTab}>
                        <Text fontWeight='bold' onClick={() => setOpen(false)}>
                          {e.title}
                        </Text>
                      </Link>
                    );
                  } else {
                    return (
                      <Text
                        className={styles.mobileTab}
                        key={e.key}
                        onClick={() => MobileOpen(e.type)}
                        cursor='pointer'
                        fontWeight='bold'
                      >
                        {e.title}
                      </Text>
                    );
                  }
                })}
              </DrawerContent>
            </Drawer>
            <Image src={logo} w='60px' position='absolute' right={10} top='50%' transform='translateY(-50%)' />
          </Box>
        )}
      </Box>
      <ThuongNap onClose={onClose} isOpen={isOpen} />
    </Container>
  );
}
