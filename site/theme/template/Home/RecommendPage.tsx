import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { Row, Col, Typography } from 'antd';
import './RecommendPage.less';

const { Title, Paragraph } = Typography;

interface Recommend {
  title: string;
  img: string;
  href: string;
  popularize?: boolean;
  description: string;
}

const LIST_CN: Recommend[] = [
  {
    title: 'Ant Design 5.0，未来已来，邀你共建！',
    description: '欢迎加入，Ant Designers！',
    img: 'https://pic2.zhimg.com/v2-21b2b0e2c2edd128a99fea2cfeaddd51_b.gif',
    href: 'https://zhuanlan.zhihu.com/p/268168773',
    popularize: true,
  },
  {
    title: '在Ant Design 4.0里，我们如何追求快乐的工作？',
    description: '蚂蚁集团高级体验设计专家林外在上海外滩大会上分享 Ant Design4.0 背后的设计理念',
    img: 'https://gw.alipayobjects.com/mdn/rms_b56775/afts/img/A*psuyRqopCIEAAAAAAAAAAAAAARQnAQ',
    href: 'https://mp.weixin.qq.com/s/QUqy1-g0FElqOs9cQFFWHA',
  },
  {
    title: '第十五届 D2 前端技术论坛 - 无界',
    description:
      '前端热爱，技术无界，第十五届 D2 前端技术论坛，我们云端相聚！',
    img: 'https://pic1.zhimg.com/v2-03ecafd272dc5dc2d60e012f3908b3db_1440w.jpg',
    href: 'https://zhuanlan.zhihu.com/p/269789439',
  },
];

const LIST_EN: Recommend[] = [
  {
    title: 'These a few color knowledge of Ant Design, I guess you do not know!',
    description:
      '🎨 This time, we do not talk about theoretical knowledge, just a few color design skills of Ant Design',
    img: 'https://pic4.zhimg.com/v2-254eebfe6b092b0b9c1f8d17f3c64d3d_1440w.jpg?source=172ae18b',
    href: 'https://zhuanlan.zhihu.com/p/268168773',
    popularize: true,
  },
  {
    title: 'Next Generation of Component Library?',
    description:
      '😎 With the launch of React hooks and Vue composition API, perhaps we have met a new breakthrough point of component libraries.',
    img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*SU6hQ5jHVEsAAAAAAAAAAAAAARQnAQ',
    href: 'https://zhuanlan.zhihu.com/p/252824872',
  },
  {
    title: 'Stories about Ant Design 4.0: VirtualList',
    description:
      "🏃 In React, usually you don't need to focus on performance problems. However, as a component library, we have to think about it.",
    img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ULOBQroFRMQAAAAAAAAAAAAAARQnAQ',
    href: 'https://zhuanlan.zhihu.com/p/237996796',
  },
];

interface RecommendBlockProps extends Recommend {
  main?: boolean;
  img: string;
  href: string;
}

const RecommendBlock = ({
  main,
  title,
  popularize,
  description,
  img,
  href,
}: RecommendBlockProps) => {
  return (
    <a
      className={classNames('recommend-block', main && 'recommend-block-main')}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (window.gtag) {
          window.gtag('event', '点击', {
            event_category: '首页推广',
            event_label: href,
          });
        }
      }}
    >
      <img src={img} alt={title} />
      {popularize && (
        <span className="recommend-popularize">
          <FormattedMessage id="app.home.popularize" />
        </span>
      )}
      <div className="recommend-content">
        <Title level={4}>{title}</Title>
        <Paragraph style={{ fontSize: 13 }}>{description}</Paragraph>
      </div>
    </a>
  );
};

export default function RecommendPageo() {
  const { locale } = useIntl();
  const isZhCN = locale === 'zh-CN';
  const LIST = isZhCN ? LIST_CN : LIST_EN;
  return (
    <Row gutter={[24, 24]} style={{ marginBottom: -36 }}>
      <Col xs={24} sm={14}>
        <RecommendBlock {...LIST[0]} main />
      </Col>
      <Col xs={24} sm={10}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <RecommendBlock {...LIST[1]} />
          </Col>
          <Col span={24}>
            <RecommendBlock {...LIST[2]} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
