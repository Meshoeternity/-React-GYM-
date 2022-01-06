import { useContext } from "react"
import { Col, Form, Button, Row, Modal } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function SubClass(props) {
  const { subscribeClass } = useContext(SportsContext)
  const { show, handleClose, sport } = props
  console.log(sport)

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={subscribeClass}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to Class</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Col md="8">
            {sport.classes.map(classs => (
              <Row>
                <Col>
                  <Form.Check type="radio" name="classes" value={classs._id} label={classs.time} />
                </Col>
              </Row>
            ))}
          </Col>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" type="submit" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default SubClass
