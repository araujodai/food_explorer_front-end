import styled from "styled-components";
 
export const Container = styled.section`
  margin: 0 0 2.4rem 2.4rem;
  position: relative;
  
  > h2 {
    font: 500 1.8rem/140% "Poppins", sans-serif;
    margin-bottom: 2.4rem;

    @media(min-width: 1024px) {
      font-size: 3.2rem;
    }
  }

  @media(min-width: 720px) {
    margin: 0 0 4.7rem;
  }
`;