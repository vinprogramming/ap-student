import { Row, Col } from 'antd';
import { DashBoardCard } from '../../../components';
import { UpdateContainer } from '../../../containers';
import { ContainerOutlined } from '@ant-design/icons';
export default function SDashBoard() {
    const style = { padding: '8px 0' };
    const co = <ContainerOutlined style={{ fontSize: '2em' }} />;
    const data = [
        {
            key: '1',
            logo: co,
            number: '12',
            title: 'filled'
        },
        {
            key: '2',
            logo: co,
            number: '12',
            title: 'filled'
        },
        {
            key: '3',
            logo: co,
            number: '12',
            title: 'filled'
        },
    ];
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    data.map((item) => {
                        return (
                            <Col className="gutter-row" xs={24} md={12} xl={8} key={item.key} >
                                <div style={style}><DashBoardCard item={item} /></div>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" xs={0} md={8} xl={8}>
                    <div/>
                </Col>
                <Col className="gutter-row" xs={24} md={16} xl={16}>
                    <UpdateContainer />
                </Col>
            </Row>
        </div>
    )
}