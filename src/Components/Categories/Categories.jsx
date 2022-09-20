import styled from 'styled-components';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';
// import CategoryItem from '../CategoryItem/CategoryItem';
// import CategoryItem from '..';

const Container = styled.div`
  display: flex;
  padding: 20px;
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
