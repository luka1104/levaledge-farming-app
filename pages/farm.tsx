import type { NextPage } from 'next'
import Sidebar from '../src/components/sidebar/sidebar'
import Navbar from '../src/components/navbar'
import Main from '../src/components/farm/main'
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
        gridTemplateColumns={'280px 1fr'}
        h='100vh'
        gap='1%'
        color='blackAlpha.700'
        fontWeight='bold'
        bgGradient='linear(to-br, #601D4C, #206549)'
      >
        <GridItem pl='2' area={'header'}>
          <Navbar />
        </GridItem>
        <GridItem pl='2' area={'nav'} padding='0'>
          <Sidebar />
        </GridItem>
        <GridItem pl='2' area={'main'}>
          <Main />
        </GridItem>
      </Grid>
    </>
  )
}

export default Farm
