import React from "react";

const Greeting = ({ user, email, verificationToken }) => {
  return (
    <div>
      Hello, {user}! The {verificationToken} token has been sent to {email}.
    </div>
  );
};

export default Greeting;
