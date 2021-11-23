import styled from 'styled-components';
import StyledTitle from './Components/StyledTitle';
import { StyledButton, StyledExtendButton } from './Components/StyledButton';
import { Button } from '@material-ui/core';
import ComplexTitle from './Components/ComplexTitle';

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`;

function App() {
  return (
    <div>
      {/* <StyledTitle special>Styled Component</StyledTitle>
      <StyledTitle>Styled Component</StyledTitle>
      <StyledButton>Click Me!</StyledButton>
      <StyledExtendButton>Ext Btn</StyledExtendButton> */}
      {/* <h1>Material UI</h1>
      <Button color='primary' variant='contained'>
        Click Me!
      </Button>
      <StyledBtn color='primary' variant='contained'>
        Click Me!
      </StyledBtn> */}
      <ComplexTitle title='More Complex Title' />
    </div>
  );
}

export default App;
