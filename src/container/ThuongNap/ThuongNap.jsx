import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { FcList } from 'react-icons/fc';
import { GiAchievement } from 'react-icons/gi';
import items1 from '../../asset/item1.png';
import items2 from '../../asset/item2.png';
import items3 from '../../asset/item3.png';
import styles from './ThuongNap.module.css';

export default function ThuongNap({ onClose, isOpen }) {
  const [milestonesPoint, setMilestonePoint] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState({});
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  const handleDialog = (elm) => {
    setSelectedMilestone(elm);
    setOpenDialog(true);
  };

  const milestones = [
    {
      key: 'milestone1',
      point: 0,
      items: [
        { key: 'item1', images: items1, name: 'Súng' },
        { key: 'item2', images: items2, name: 'Ong' },
        { key: 'item3', images: items3, name: 'ASS' },
      ],
    },
    {
      key: 'milestone2',
      point: 0,
      items: [
        { key: 'item1', images: items2, name: 'MIL' },
        { key: 'item2', images: items3, name: 'HALS' },
        { key: 'item3', images: items1, name: 'Súng' },
      ],
    },
    {
      key: 'milestone3',
      point: 1,
      items: [
        { key: 'item1', images: items3, name: 'ASS' },
        { key: 'item2', images: items1, name: 'Súng' },
      ],
    },
    {
      key: 'milestone4',
      point: 1,
      items: [
        { key: 'item1', images: items3, name: 'ASS' },
        { key: 'item2', images: items1, name: 'Súng' },
        { key: 'item3', images: items1, name: 'Súng' },
      ],
    },
    {
      key: 'milestone5',
      point: 1,
      items: [
        { key: 'item1', images: items3, name: 'ASS' },
        { key: 'item2', images: items1, name: 'Súng' },
        { key: 'item3', images: items2, name: 'Súng' },
      ],
    },
    {
      key: 'milestone6',
      point: 1,
      items: [
        { key: 'item1', images: items3, name: 'ASS' },
        { key: 'item2', images: items1, name: 'Súng' },
      ],
    },
    {
      key: 'milestone8',
      point: 1,
      items: [
        { key: 'item1', images: items3, name: 'ASS' },
        { key: 'item2', images: items1, name: 'Súng' },
      ],
    },
  ];

  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom' size={'6xl'}>
      <ModalOverlay />
      <ModalContent className={styles.bgModal} color='white' h={700}>
        <ModalHeader>
          <Box w='98%' h='full' zIndex={-1}>
            <Heading lineHeight={1.5} textAlign='center'>
              Tích điểm nhận quà!!!
            </Heading>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            w='full'
            border='2px solid #89c5eab0'
            bgColor='whiteAlpha.600'
            box-shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
          >
            <Box m={3} fontSize={18}>
              <VStack spacing={4} alignItems='flex-start'>
                <Text display='flex' fontWeight='semibold' color='black'>
                  <FaRegClock size={25} color='#2196f3' style={{ marginRight: 10 }} /> Thời gian hoạt động:{' '}
                  <Text color='red.600' ml={2}>
                    {dayjs(new Date()).format('DD-MM-YYYY')} - {dayjs(new Date()).add(3, 'day').format('DD-MM-YYYY')}
                  </Text>
                </Text>
                <Text display='flex' fontWeight='semibold' color='black'>
                  <FcList size={25} color='#89c5ea' style={{ marginRight: 10 }} /> Chi tiết hoạt động: Trong thời gian
                  diễn ra sự kiện, hoàn thành các nhiệm vụ để nhận được điểm tích lũy
                </Text>
                <Text display='flex' fontWeight='semibold' color='black'>
                  <GiAchievement size={25} color='#2196f3' style={{ marginRight: 10 }} /> Điểm tích lũy của hiện tại
                  bạn: {milestonesPoint}
                </Text>
              </VStack>
            </Box>
          </Box>
          <Box overflow='auto' w='full' h={440} mt={2}>
            {milestones.map((elm) => (
              <Box key={elm.key} w='95%' h='80px' className={styles.ItemBox}>
                <HStack spacing={3} overflow='auto' w={isMobile ? 160 : 'auto'} className={styles.listItem}>
                  {elm.items.map((item) => (
                    <Tooltip key={item.key} label={item.name}>
                      <Image w={14} src={item.images} />
                    </Tooltip>
                  ))}
                </HStack>
                <VStack>
                  <Text>
                    Điểm tích lũy: {milestonesPoint}/{elm.point}
                  </Text>
                  <Button
                    colorScheme='blue'
                    size='sm'
                    onClick={() => handleDialog(elm)}
                    isDisabled={milestonesPoint >= elm.point ? false : true}
                  >
                    Nhận
                  </Button>
                </VStack>
              </Box>
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
      <AlertDialog isOpen={openDialog} onClose={() => setOpenDialog(false)}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Nhận thưởng thành công!
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text textAlign='center' fontSize='lg' fontWeight='bold'>
                Chúc mừng bạn nhận được:
              </Text>
              <Box display='flex' flexWrap='wrap'>
                {selectedMilestone.items?.map((item) => (
                  <Tooltip key={item.key} label={item.name}>
                    <Image src={item.images} mt={3} ml={2} />
                  </Tooltip>
                ))}
              </Box>
              <Text textAlign='center' fontSize='lg' fontWeight='bold' mt={3}>
                Phần thưởng sẽ được chuyển đến tài khoản của bạn trong ít phút.
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme='red' onClick={() => setOpenDialog(false)} ml={3}>
                Đóng
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Modal>
  );
}
