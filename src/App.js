import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

// normally this goes in seperate file

const BaseTheme = {
  color: '#222',
  background: '#fff',
};

const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };
  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <Container>
        <h1>hello :)</h1>
        <button className='btn' onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
