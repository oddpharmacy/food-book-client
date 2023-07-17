import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 2rem;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CardLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const CardRight = styled.div`
  flex: 3;
  padding: 1rem;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  padding: 1.5rem;

  @media (min-width: 769px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const RestaurantName = styled.p`
  font-size: 2rem;
`;
