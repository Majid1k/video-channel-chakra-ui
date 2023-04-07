import { Box,Button,Heading,HStack,Input,Stack,Text, VStack} from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai';


const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={'40'} p='16' color={'white'}>
<Stack direction={['column', 'row']} >
<VStack alignItems={'stretch'} width={'full'} px={'4'}> 
<Heading size='md' textTransform={'uppercase'}>Subscribe to get updates</Heading>

<HStack borderBottom={'2px solid white'} py='2'>
 <Input Placeholder= "Enter Email Here..." border={'none'} borderRadius="none"
  outline={'none'} focusBorderColor="none" />
  <Button p={0} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
  <AiOutlineSend size={20} />     {/*send Icon button */}
  </Button>
</HStack>
</VStack>

<VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}  
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO Channel
          </Heading>
          <Text>All rights reserved @ Dev</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com">
              Github
            </a>
          </Button>
        </VStack>


</Stack>
</Box>
}

export default Footer