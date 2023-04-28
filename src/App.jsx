import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => (
  <div>
    <MyAwesomeComponent />
  </div>
);

const Box = ({ size = 'medium', backgroundColor = '#ccc', children }) => {
  let width;
  let height;

  switch (size) 
  {
    case 'small':
    case 'sm':
    case 's':
      width = '200px';
      height = '200px';
      break;

    case 'medium':
    case 'md':
    case 'm':
      width = '400px';
      height = '400px';
      break;

    case 'large':
    case 'lg':
    case 'l':
      width = '600px';
      height = '600px';
      break;

    default:
      width = '300px';
      height = '300px';
  }

  return (
    <div style={{ width, height, backgroundColor }}>
      {children}
    </div>
  );
};

const Text = ({ size = 'medium', color = '#000', children }) => 
{
  let fontSize;

  switch (size) {
    case 'small':
    case 'sm':
      fontSize = '12px';
      break;

    case 'medium':
    case 'md':
      fontSize = '16px';
      break;

    case 'large':
    case 'lg':
      fontSize = '20px';
      break;

    default:
      fontSize = '16px';
  }

  return (
    <p style={{ fontSize, color }}>
      {children}
    </p>
  );
};

const Button = ({ color = '#ccc', onClick, children }) => (
  <button style={{ backgroundColor: color }} onClick={onClick}>
    {children}
  </button>
);

const MyAwesomeComponent = () => (
  <Box size="lg" backgroundColor="#fff">
    
    <Button color="black" onClick={() => alert('Congratulations!!')}>
      Click me
    </Button>

    <Text size="lg" color="#000">
      This text will get bigger or smaller!
    </Text>

  </Box>
);


export default App
