import { Flex } from '@chakra-ui/react'
import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '../../Modal/Auth/AuthModal'

type Props = {
  // user: any;
}

export default function RightContent({}: Props) {
  return (
    <>
    <AuthModal />
    <Flex justify='center' align='center'>
      <AuthButtons />
    </Flex>
    </>
  )
}