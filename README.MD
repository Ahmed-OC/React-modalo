# React-modalou

A modal is a dialog that overlays your application's content. It can be used to display information, collect user input, or perform other tasks.
## Installation

To install react-modalou, you can use the following command:
```
npm i react-modalou
```
This component has the following props:

- `children`: The content of the modal.
- `isOpen`: Whether or not the modal is open.
- `modalStyle`: Optional CSS styles for the modal container.
- `contentStyle`: Optional CSS styles for the modal content.
- `close`: A function that closes the modal.
- `title`: An optional title for the modal.

Here is an example of how to use this component:

```
import React from "react";
import { Modal } from "react-modalou";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open</button>
      <div>
        <Modal title="test" isOpen={isOpen} close={() => setIsOpen(false)}>
          <p>test react-modalou</p>
        </Modal>
      </div>
    </div>
  );
};


export default App;

```


| Prop | Type | Description |
|---|---|---|
| children | React.ReactNode | The content of the modal. |
| isOpen | boolean | Whether or not the modal is open. |
| modalStyle | React.CSSProperties | Optional CSS styles for the modal container. |
| contentStyle | React.CSSProperties | Optional CSS styles for the modal content. |
| close | () => void | A function that closes the modal. |
| title | string | An optional title for the modal. |