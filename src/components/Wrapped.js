import React from 'react'
import TopStoresData from "./TopStores.json";
import { Stack, Box, Heading, Text } from '@chakra-ui/react'
import TopStores from './TopStores';
import {data} from './WrappedData.js'
import TotalScore from './TotalScore'
import "./Wrapped.css";


const Wrapped = () => {

    return (
      <div>
        {/* <TotalScore/> */}
        <div>
          <Heading marginTop={10} marginBottom={3} color="#D22E1E"> Your saved money </Heading>
          <Text fontSize={18}> You met?/? of your budget goals </Text>
          <Text marginTop={1} fontSize={18}> Any other info we want to display </Text>
        </div>

        {data.map((category) => (
          <Stack marginTop={4} spacing={8} backgroundColor="#FBEAE9">
            <Feature
              title={category.Category}
              spent={category.Spent} 
              goal={category.Goal}
              desc={category.Description}
            />
          </Stack>
        ))}

      <div className='store-list'>
        <TopStores TopStoresData={TopStoresData} />
      </div>
    </div>
    );



}


function Feature({ title, goal, spent, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>Spent: {spent}</Text>
        <Text mt={1}>Goal: {goal} </Text>
        <Text mt={1}>Goal: {desc} </Text>
      </Box>
    )
    }

export default Wrapped;
