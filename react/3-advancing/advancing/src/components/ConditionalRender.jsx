import React from "react";

const ConditionalRender = () => {
  const isUserAuthenticated = false;
  const name = "Markiplier";
  return (
    <div>
      <h5>This will be rendered?</h5>
      {isUserAuthenticated ? (
        <p>If the user is authenticated, yes</p>
      ) : (
        <p>If the user is not authenticated, no</p>
      )}
      <h5>Is your name Markiplier?</h5>
      {name === "Markiplier" && <p>Yes</p>}
    </div>
  );
};

export default ConditionalRender;
