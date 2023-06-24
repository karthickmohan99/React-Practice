import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, serAlertVibility] = useState(false);
  let items = ["New York", "san Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleOnClicked = () => {
    serAlertVibility(true);
  };
  return (
    <div>
      <h1>hfhdkhfd</h1>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      {alertVisible && (
        <Alert onClose={() => serAlertVibility(false)}>
          <h1>My Alert</h1>
        </Alert>
      )}
      <Button color="danger" onClicked={handleOnClicked}>
        My buttom
      </Button>
    </div>
  );
}
export default App;
