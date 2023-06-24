import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  //state hook make data/state change over time
  //useSTate returns arrays one element contain variable second element updated function
  //Each component has its own state
  const [selectedIndex, setselectedIndex] = useState(-1);

  //items = [];

  //const getMessage = () => (items.length == 0 ? <p>No item found</p> : null);

  //Conditional Rendering
  //   if (items.length == 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //typescrite -TypeSafety ,Auto Completion ,Type Safety using this we refactor our code easily,ihelps to catch a error at compile time
  //Event Hnadler calling this function is done at run time .we just pass a reference on onClick Event
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //(<---breaks the mark up in to multiple lines
    // fragment it avoids additional element in dom
    //fragment is used to wrapup a multiple elements into single element parent element
    /*map iterate overe an array items and manipulate the data items
    condition specified in the callback function, It cretes the new array
    with modified items*/
    <>
      <h1>{heading}</h1>

      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
