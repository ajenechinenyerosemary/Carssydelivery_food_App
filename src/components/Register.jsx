// // Register.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('/api/register/', { username, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
