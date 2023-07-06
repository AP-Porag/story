import { Button, Flex,HStack,Image } from '@chakra-ui/react'
import React from 'react'
import loginBg from '../assets/images/login_bg.jpg'
import {FcGoogle} from 'react-icons/fc'
import { loginWithGoogle } from "../services/auth-service";

const Login = () => {
    const login = async(authProvider)=>{
        if(authProvider =='google'){
            loginWithGoogle()
        }else{
            console.log('provider not not found');
        }
        
    }
  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'} position={'relative'}>
        <Image src={loginBg} objectFit={'cover'} width={'full'} height={'full'}/>
        <Flex position={'absolute'} width={'100vw'} height={'100vh'} bg={'blackAlpha.600'} top={'0'}left={'0'} justifyContent={'center'}alignItems={'center'}>
            <HStack>
                <Button 
                leftIcon={<FcGoogle fontSize={25} />} 
                colorScheme={'whiteAlpha'} 
                shadow={'lg'}
                onClick={()=>login('google')}
                >Sign in with Google</Button>
            </HStack>
        </Flex>
    </Flex>
  )
}

export default Login
