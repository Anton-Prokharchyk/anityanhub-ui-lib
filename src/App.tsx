import React from "react";
import {
  Button,
  Input,
  SearchBar,
  Typography,
  Textarea,
  Slider,
  ErrorMessage,
} from "../components";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h1">AnityaHub UI Library Test</Typography>
      <br />
      <Button appearance="primary">Primary Button</Button>
      <br />
      <Button appearance="dark">Dark Button</Button>
      <br />
      <Button appearance="bordered">Bordered Button</Button>
      <br />
      <Input placeholder="Input field" />
      <br />
      <SearchBar placeholder="Search..." />
      <br />
      <Textarea placeholder="Textarea" />
      <br />
      <Slider min={0} max={100} />
      <br />
      <ErrorMessage>Error message</ErrorMessage>
    </div>
  );
}

export default App;
