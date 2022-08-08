import React from 'react'
import {
    Link,
    Icon,
} from '@chakra-ui/react'

const SnsLink = (props: any) => {
    return (
        <Link href={props.snsLink}>
            <Icon m='5px' mt='15px' as={props.snsIcon} />
        </Link>
    )
}

export default SnsLink
