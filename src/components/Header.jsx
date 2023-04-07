import {                 
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'; //Drop down icon from react-icons


const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure(); 
  
  return (
<>
      <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme="purple" p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
      <BiMenuAltLeft size={'15'} />       {/*our button shold be placed on left side of page */}
      </Button>

   <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
   
   <DrawerOverlay /> 
   
   <DrawerContent>
   <DrawerCloseButton />
    <DrawerHeader>Video Channel</DrawerHeader>
   
     
    <DrawerBody>  
      <VStack alignItems={'flex-start'} >

      <Button varient={'ghost'} colorScheme={'purple'} onClick={onClose}>    
        <Link to={'/'}>Home</Link>
      </Button>
      
      <Button varient={'ghost'} colorScheme={'purple'} onClick={onClose}>
        <Link to={'/videos'}>Videos</Link>
      </Button>
      
      <Button varient={'ghost'} colorScheme={'purple'} onClick={onClose}>
        <Link to={'/videos?category=free'}>Free Videos</Link>
      </Button>
      
      <Button varient={'ghost'} colorScheme={'purple'} onClick={onClose}>
        <Link to={'/upload'}>Upload Videos</Link>
      </Button>
      </VStack>



      {/*Horizontal-stack places items Horizontaly (row) */}
     <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'}  justifyContent={'space-evenly'}>  
      <Button _hover={{ bg: "purple.500", color: " white" }}  _focus={{ boxShadow: "outline" }} onClick={onClose}>
        <Link to='/login'>Log In</Link>
      </Button>

      <Button  _hover={{ bg: "purple.500", color: " white" }} _focus={{ boxShadow: "outline" }} onClick={onClose} >
        <Link to='/signup'>Sign Up</Link>
      </Button>
     </HStack>

    </DrawerBody>
   </DrawerContent>
   </Drawer>


    </>
  )
}

export default Header