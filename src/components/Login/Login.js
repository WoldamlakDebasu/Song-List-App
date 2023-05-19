// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Container, TextField, Button } from '@mui/material';
// import { login } from './authSlice';

// const Login = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Email"
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           fullWidth
//           margin="normal"
//         />
//         <Button variant="contained" color="primary" type="submit">
//           Login
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Login;
