import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h3>useImperativeHandle</h3>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
