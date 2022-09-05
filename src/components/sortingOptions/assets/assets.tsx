import React from 'react'
import {
    Text,
    Flex,
    Center,
    Box,
    Button,
    Image,
} from '@chakra-ui/react';
import AssetButton from './assetButton'
// import { globalValue }  from '../../data'

const Assets = () => {
    return (
        <>
            <Flex>
                <Text color='white'>Assets:</Text>
                <Button ml='15px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    All
                </Button>
                <AssetButton name="BTC" img="https://bitcoin.org/img/icons/opengraph.png?1656252469" />
                <AssetButton name="ETH" img="data:image/png;base64,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" />
                <AssetButton name="SOL" img="https://uploads-ssl.webflow.com/61596bfe0d5930582df2d25b/6162fa4c39a719563ab7e5d3_solana-sol-logo.png" />
                <AssetButton name="stSOL" img="https://assets.coingecko.com/coins/images/18369/large/logo_-_2021-09-15T100934.765.png?1631671781" />
                <AssetButton name="mSOL" img="https://s2.coinmarketcap.com/static/img/coins/200x200/11461.png" />
                <AssetButton name="USDC" img="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" />
                <AssetButton name="USDT" img="https://s2.coinmarketcap.com/static/img/coins/200x200/825.png" />
                <AssetButton name="ORCA" img="https://s2.coinmarketcap.com/static/img/coins/200x200/11165.png" />
                <AssetButton name="SRM" img="https://s2.coinmarketcap.com/static/img/coins/200x200/6187.png" />
                <AssetButton name="RAY" img="https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png" />
                {/* <AssetButton {...globalValue.TMP} /> */}
            </Flex>
        </>
    )
}

export default Assets
