import React from 'react';
import { GoogleLogin } from '@/lib/appwrite/authApi';

interface LoginWithGoogleProps {
    register: any;
}

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({ register }) => {

    function handleLogin() {
        GoogleLogin();
    }

    return (
            <button onClick={handleLogin}
  style={{
    backgroundColor: "#4285F4",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M12 11v2h5.1c-.2 1-.6 1.9-1.2 2.7v.1l3.2 2.5h.1c1.5-1.4 2.5-3.4 2.5-5.7 0-.8-.1-1.6-.3-2.3H12z" />
    <path
      d="M3.9 14.6c-.5-1-.9-2-.9-3.1s.3-2.1.8-3L.6 5C-.5 7 .1 10.4 0 12c0 1.6.5 3.2 1.3 4.6l2.6-2z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.1c1.4 0 2.7.5 3.7 1.3l2.8-2.8C16.9.9 14.6 0 12 0 7.4 0 3.4 2.7 1.3 6.7l2.7 2c1-3 3.9-4.6 8-4.6z"
      fill="#EA4335"
    />
    <path
      d="M12 19.9c-3.6 0-6.7-2.3-7.8-5.6l-2.7 2C3.4 21.3 7.4 24 12 24c2.8 0 5.2-.8 7.2-2.3l-2.7-2c-.9.5-2.1.7-3.5.7z"
      fill="#34A853"
    />
  </svg>
  Login with Google
</button>

    );
}

export default LoginWithGoogle;
