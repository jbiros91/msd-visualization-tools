import { Skeleton } from 'antd'
import Layout from '@/common/components/Layout'
import Page from '@/common/components/Page'

// Why client, because skeletons depends on react context :(
const Loading = () => {
    return (
        <Layout>
            <Page>
                <Skeleton paragraph={{ rows: 16 }} />
            </Page>
        </Layout>
    )
}

export default Loading
