import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = (props) => {

let initialUserForm = {
  username:'',
  password:''
}
const [userForm, setUserForm] = useState(initialUserForm)

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
    console.log('handleSubmit login userForm', userForm)
		props.handleSubmit(userForm); // Submit to Parents desired function
		// props.history.push('/'); //Push back to display page
	};
	const handleChange = (event) => {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	};
	return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control name="username" type="username" placeholder="Enter username" value={userForm.username} onChange={handleChange}/>
      <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" onChange={handleChange} value={userForm.password} name="password"/>
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
	);
};
export default Login;
