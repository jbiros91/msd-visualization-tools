import {Flex, type FlexProps} from 'antd'
import  {PropsWithChildren} from "react";

type Props = {
    justify?: FlexProps['justify']
}

const PageHeader = ({
                        children,
                        justify = 'space-between'
}: PropsWithChildren<Props>) => {
    return (
        <Flex className="pb-8" justify={justify}>
            {children}
        </Flex>
    )
}

export default PageHeader
