import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState();

  useEffect(() => {
    console.log("Searching up items...");

    setItems(getItems);
  }, [getItems]);

  return <div>{items && items.map((item) => <p key={item}>{item}</p>)}</div>;
};

export default List;
