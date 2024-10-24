'use client'
import UKHSATest from "@/app/UKHSATest";
import {Layout, Card, Space, Row, Col, Avatar, Button, Badge} from "antd";
import {
    DownloadOutlined,
    FilterOutlined,
    UnorderedListOutlined, CommentOutlined, HeartOutlined
} from "@ant-design/icons";
import React, {Suspense} from "react";
import Page, { PageHeader } from "@/common/components/Page";
import FavoriteButton from "@/app/FavoriteButton";

enum ChartId {
    COVID_19_ADMISSION_BY_DAY = 'COVID_19_ADMISSION_BY_DAY',
    COVID_19_DEATHS_BY_DAY = 'COVID_19_DEATHS_BY_DAY'
}

export default function Home() {
  return (
      <Layout className="flex flex-col min-h-screen">
          <Layout.Header className="text-white sticky top-0 z-40">
              MSD Visualization Tools
          </Layout.Header>

          <Layout.Content className="relative grow">
              <Page>
                  <PageHeader>
                      <h1 className="text-2xl font-bold">COVID-19 in England</h1>


                      <Space>
                          <Button disabled iconPosition="end" icon={<DownloadOutlined />}>Export PDF</Button>
                          <Button disabled iconPosition="end" icon={<UnorderedListOutlined />}>Notes</Button>
                          <Button disabled iconPosition="end" icon={<FilterOutlined />}>
                              Filter
                              <span className="bg-gray-100 text-sm rounded-full w-5 h-5">
                                0
                              </span>
                          </Button>
                      </Space>
                  </PageHeader>
                  <Row gutter={[32,32]}>
                      <Col xs={24} xl={12}>
                          <Card title="Deaths"
                                actions={[
                                    <Avatar key="avatar" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />,
                                    <FavoriteButton chartId={ChartId.COVID_19_DEATHS_BY_DAY}/>,
                                    <CommentOutlined className="" key="comment" />,
                                    <Button type="link" size="small" icon={
                                        <CommentOutlined className="" key="comment" />
                                    }
                                            iconPosition="end"
                                    >
                                        3
                                    </Button>

                                ]}
                          >
                              <Suspense fallback={<h1 className="text-8xl">Loading</h1>}>
                                  <UKHSATest/>
                              </Suspense>
                          </Card>
                      </Col>

                      <Col xs={24} xl={12}>
                          <Card title="Patients Admitted to Hospital"
                                actions={[
                                    <Avatar key="avatar" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />,
                                    <FavoriteButton chartId={ChartId.COVID_19_ADMISSION_BY_DAY} />,
                                    <Button type="link" size="small" icon={
                                        <CommentOutlined className="" key="comment" />
                                    }
                                            iconPosition="end"
                                    >
                                        3
                                    </Button>
                                ]}
                          >
                              <Suspense fallback={<h1 className="text-8xl">Loading</h1>}>
                                  <UKHSATest/>
                              </Suspense>
                          </Card>
                      </Col>
                  </Row>
              </Page>
          </Layout.Content>
          <Layout.Footer className="sticky top-0">Ahoj</Layout.Footer>
      </Layout>
  );
}
