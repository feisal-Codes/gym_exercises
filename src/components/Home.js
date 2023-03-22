import { Box } from '@mui/system'
import React from 'react'
import Exercises from './Exercises'
import HeroBanner from './HeroBanner'
import SearchExercises from './SearchExercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home