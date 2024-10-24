import { Flex, type FlexProps } from 'antd'
import type { PropsWithChildren } from 'react'

type Props = {
    justify?: FlexProps['justify']
}

const PageHeader = ({
    children,
    justify = 'space-between',
}: PropsWithChildren<Props>) => {
    return (
        <Flex
            gap={8}
            className='pb-8'
            justify={justify}
            wrap
        >
            {children}
        </Flex>
    )
}

export default PageHeader
