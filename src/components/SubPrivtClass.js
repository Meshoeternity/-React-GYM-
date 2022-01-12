import { useContext } from "react"
import { Col, Form, Button, Row, Modal } from "react-bootstrap"
import SportsContext from "../utils/SportsContext"

function SubPrivtClass(props) {
  const { privtClass } = useContext(SportsContext)
  const { show, handleClose, coach } = props

  console.log("pr")

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={privtClass}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to PrivtClass</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {coach.privtclass.map(privtclass => (
            <Col md="8">
              {/* {coach.privtclass.map(privtclass => ( */}
              <Row>
                <Col>
                  <Form.Check type="radio" name="time" value={privtclass._id} label={privtclass.time} />
                </Col>
              </Row>
              {/* ))} */}
            </Col>
          ))}
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

export default SubPrivtClass
