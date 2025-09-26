import {
  Button,
  Input,
  SearchBar,
  Typography,
  Textarea,
  Slider,
  ErrorMessage,
} from '../lib/components';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant='h1'>Anityanhub UI Library Test</Typography>
      <br />
      <Button appearance='primary'>Primary Button</Button>
      <br />
      <Button appearance='dark'>Dark Button</Button>
      <br />
      <Button appearance='bordered'>Bordered Button</Button>
      <br />
      <Input placeholder='Input field' />
      <br />
      <SearchBar placeholder='Search...' />
      <br />
      <Textarea placeholder='Textarea' />
      <br />
      <Slider type='mini'>
        <div
          style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
        ></div>
      </Slider>
      <br />
      <ErrorMessage>Error message</ErrorMessage>
    </div>
  );
}

export default App;
