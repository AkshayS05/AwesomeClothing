import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
