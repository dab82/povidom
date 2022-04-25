import { Routes, Route } from 'react-router-dom';
import { Login } from 'components/Login/Login';
import { Register } from 'components/RegisterMail/Register';
import { Reset } from 'components/ResetPassword/Reset';

export const SignIn = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="reset" element={<Reset />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
