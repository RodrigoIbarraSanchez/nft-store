export const CardComponent = ({ image, title, children }) => {
  return (
    <Container>
      <img src={image} alt={title} />

      <Info>
        <div>{title}</div>

        <div>{children}</div>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: epx @px 20px -8px rgba (e, e, e, e.27);
  border-radius: 8px;
  width: 100%;
  max-width: 280px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
