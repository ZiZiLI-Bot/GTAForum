import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import LOGO_RG from '../../asset/logo-rg.png';
import silde2 from '../../asset/slide1.jpg';
import silde1 from '../../asset/slide2.jpg';
import styles from './Home.module.css';
import { BsDiscord, BsFacebook, BsFillXDiamondFill } from 'react-icons/bs';

const slideContainer = [
  { key: 'slide1', image: silde1, title: 'Chào mừng tới với thế giới GTA' },
  { key: 'slide2', image: silde2, title: 'Sự kiện trung thu rực lửa' },
];

const IconHref = [
  { key: 'icon1', icon: <BsDiscord fontSize={50} className='icons' />, link: 'https://discord.com/' },
  { key: 'icon2', icon: <BsFacebook fontSize={50} className='icons' />, link: 'https://facebook.com/' },
];

const overViewProject = [
  { key: 'item1', title: 'Chào mừng các bạn đến với thế giới ảo RGAME Việt Nam' },
  {
    key: 'item2',
    title:
      'RGAME là 1 dự án SA:MP ( San Andreas Multiplayer ) cho phép mọi người chơi cùng trong trò chơi Grand Theft Auto San Andreas',
  },
  {
    key: 'item3',
    title:
      'RGAME được thành lập vào ngày 20/3/2013 và Hiện tại dư án đang được điều hành và hỗ trợ bởi RGAME Team và HorizonZ Team',
  },
  { key: 'item4', title: 'Mọi bản quyền trò chơi đều thuộc về RockstarGame' },
];

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 810px)');
  return (
    <Container maxW='container.xl' position='relative'>
      <Center>
        <Image src={LOGO_RG} mt='20%' />
      </Center>
      <Center flexDirection='column'>
        <Box className={styles.RunText}>
          <marquee maxWidth='576px' direction='left' scrollamount='12'>
            <Text mt={3} color='red'>
              Chào mừng đến với thế giới GTA
            </Text>
          </marquee>
        </Box>
        {!isMobile && (
          <Box className={styles.slideFrame}>
            <Box mx={7} my={6} color='white'>
              <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className='mySwiper'
              >
                {slideContainer.map((e) => (
                  <SwiperSlide key={e.key}>
                    <SlideTemplate image={e.image} title={e.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        )}
      </Center>
      <HStack mt={10} spacing={7} justifyContent='center'>
        {IconHref.map((elm) => (
          <a key={elm.key} href={elm.link} target='_blank'>
            {elm.icon}
          </a>
        ))}
      </HStack>
      <Divider mt={10} color='#888' />
      <Box mt={8} display='flex' flexDirection='column' alignItems='center'>
        <Heading color='#E0BF5E' textAlign='center'>
          Giới thiệu về dự án
        </Heading>
        <List spacing={3} mt={5}>
          {overViewProject.map((elm) => (
            <ListItem key={elm.key} color='white'>
              <ListIcon as={BsFillXDiamondFill} color='green.500' />
              {elm.title}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

const SlideTemplate = ({ image, title }) => {
  return (
    <Box position='relative'>
      <Image src={image} objectFit='contain' />
      <Box
        position='absolute'
        bottom={0}
        bgColor='#e0bf5e73'
        h='100px'
        w='full'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Heading>{title}</Heading>
      </Box>
    </Box>
  );
};
