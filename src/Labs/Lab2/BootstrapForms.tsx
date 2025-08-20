import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormSelect from "react-bootstrap/FormSelect";
import FormRange from "react-bootstrap/esm/FormRange";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Row } from "react-bootstrap";
export default function BootstrapForms() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Forms</h2>

      <FormGroup className="mb-3" controlId="wd-email">
        <FormLabel>Email address</FormLabel>
        <FormControl type="email" placeholder="name@example.com" />
      </FormGroup>

      <FormGroup className="mb-3" controlId="wd-textarea">
        <FormLabel>Example textarea</FormLabel>
        <FormControl as="textarea" rows={3} />
      </FormGroup>

      <div id="wd-css-styling-dropdowns" className="mb-3">
        <h3>Dropdowns</h3>
        <FormSelect defaultValue="">
          <option disabled value="">
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </div>
      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <Form.Check
          type="switch"
          id="wd-switch-1"
          label="Unchecked switch checkbox input"
          defaultChecked={false}
        />
        <Form.Check
          type="switch"
          id="wd-switch-2"
          label="Checked switch checkbox input"
          defaultChecked={true}
        />
        <Form.Check
          type="switch"
          id="wd-switch-3"
          label="Unchecked disabled switch checkbox input"
          defaultChecked={false}
          disabled
        />
        <Form.Check
          type="switch"
          id="wd-switch-4"
          label="Checked disabled switch checkbox input"
          defaultChecked={true}
          disabled
        />
      </div>
      <div id="wd-css-styling-range-and-sliders">
  <h3>Range</h3>
  <FormGroup controlId="wd-range1">
    <FormLabel>Example range</FormLabel>
    <FormRange min="0" max="5" step="0.5" />
  </FormGroup>
        </div>  
      <div id="wd-css-styling-addons">
  <h3>Addons</h3>
  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <FormControl />
  </InputGroup>
  <InputGroup>
    <FormControl />
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
  </InputGroup>
        </div>
      <div id="wd-css-responsive-forms-1">
  <h3>Responsive forms</h3>
  <Form.Group as={Row} className="mb-3" controlId="email1">
    <Form.Label column sm={2}>Email</Form.Label>
    <Col sm={10}>
      <Form.Control type="email" value="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="password1">
    <Form.Label column sm={2}>Password</Form.Label>
    <Col sm={10}>
      <Form.Control type="password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="textarea2">
    <Form.Label column sm={2}>Bio</Form.Label>
    <Col sm={10}>
      <Form.Control as="textarea" style={{ height: "100px" }} />
    </Col>
  </Form.Group>
        </div>
    </div>
  );
}
