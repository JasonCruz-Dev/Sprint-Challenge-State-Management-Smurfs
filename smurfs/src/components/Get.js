import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Alert, Button, Card, Row, Col } from "reactstrap";

export default Get = () => {
  const start = useSelector((state) => state.start);
  const success = useSelector((state) => state.success);
  const failed = useSelector((state) => state.failed);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Button>Loading Smurfs. . . </Button>
      </div>

      <div>
        {error && <Alert color='danger'>{error}</Alert>}

        <Row>
          {success.map((param) => (
            <Col lg='2'>
              <Card style={card} id={param.id}>
                <div className='cardtext'>
                  <h3>Name:{param.name}</h3>
                  <div>
                    <ul>
                      <li>Age:{param.age}</li>
                      <li>Height:{param.height}</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
