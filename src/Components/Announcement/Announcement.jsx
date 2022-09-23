import styled from 'styled-components';
import { mobile } from '../../Responsive';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 14px,
  font-weight: 500
  ${mobile({ fontSize: '10px' })}

`;
const Announcement = () => {
  return <Container>Super deal! Free shipping for orders above 150$</Container>;
};

export default Announcement;
