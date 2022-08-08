import type { NextPage } from 'next'
import Sidebar from '../src/components/sidebar/sidebar'
import Navbar from '../src/components/navbar'
import FarmContainer from '../src/components/farm/farm'
import {
  Grid,
  GridItem,
} from '@chakra-ui/react'


const Farm: NextPage = () => {
  return (
    <>
      <Grid
          templateAreas={`
          "nav header"
          "nav main"
          `}
        gridTemplateRows={'80px 1fr'}
        gridTemplateColumns={'290px 1fr'}
        minHeight='100vh'
        color='blackAlpha.700'
        fontWeight='bold'
        bgGradient='linear(to-br, #601D4C, #214E6E, #206549)'
      >
        <GridItem pl='2' area={'header'}>
          <Navbar />
        </GridItem>
        <GridItem pl='2' area={'nav'} padding='0'>
          <Sidebar />
        </GridItem>
        <GridItem pl='2' area={'main'}>
          <FarmContainer />
        </GridItem>
      </Grid>
    </>
  )
}

export default Farm
