import React from 'react'
import { Stack, HStack, VStack, Box, Heading, Text } from '@chakra-ui/react'

const Wrapped = () => {
    return (
        <div>
            <Stack spacing={8}>
                <Feature
                title='Spending Category'
                desc='Budget, Description, etc.'
                />
            </Stack>
        </div>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

export default Wrapped
