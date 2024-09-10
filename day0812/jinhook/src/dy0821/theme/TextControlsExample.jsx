import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function TextControlsExample() {
function handleSubmit(e){
e.preventDefault()
let f = e.target;
let em=f.em.value;
let pw=f.pw.value;
let ch0=f.ch[0].checked;
let ch1=f.ch[1].checked;
console.log(em,pw,ch0,ch1)
}
return (
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control name="em" type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control name="pw" type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check name="ch" type="checkbox" label="Check me out" />
<Form.Check name="ch" type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
);
}
export default TextControlsExample;