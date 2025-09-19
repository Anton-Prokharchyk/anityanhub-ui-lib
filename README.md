# anityanhub-ui-lib

## Installation

> `npm install anityanhub-ui-lib `

## Usage

Import style.css into **root** file of your project.

<sub>index.ts</sub>

```
import 'anityanhub-ui-lib/style.css';
```

<br/>
Import and use components.

<sub>App.ts</sub>

```
import React from 'react';
import {
  Button,
  Input,
  SearchBar,
  Typography,
  Textarea,
  Slider,
  ErrorMessage,
} from 'anityanhub-ui-lib';

function App() {
  return (
    <div>
      <Typography variant='h1'>
      Anityanhub UI Library Test
      </Typography>
      <Button appearance='primary'>Primary Button</Button>
      <Button appearance='dark'>
      Dark Button
      </Button>
      <Button appearance='bordered'>
      Bordered Button
      </Button>
      <Input placeholder='Input field' />
      <SearchBar placeholder='Search...' />
      <Textarea placeholder='Textarea' />
      <Slider min={0} max={100} />
      <ErrorMessage>
      Error message
      </ErrorMessage>
    </div>
  );
}

export default App;
```
