import styled from 'styled-components';
import { categories } from '../../data';
import { mobile } from '../../Responsive';
import CategoryItem from '../CategoryItem/CategoryItem';
// import CategoryItem from '../CategoryItem/CategoryItem';
// import CategoryItem from '..';

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: 'column', padding: '0px' })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
