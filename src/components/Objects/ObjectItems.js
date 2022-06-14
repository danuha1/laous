import "./ObjectItems.css";
import { Card, Row, Col } from "antd";
const ObjectItems = (props) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <Card
          onClick={() => props.onCheckDetails(props.type2)}
          hoverable
          style={{ width: 380 }}
          cover={<img className="img" alt="example" src={props.picture} />}
        >
          <Card.Meta title={props.name} description={props.description} />
        </Card>
      </Col>
    </Row>
  );
};
export default ObjectItems;
