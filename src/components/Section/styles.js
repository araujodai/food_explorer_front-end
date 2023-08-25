import styled from "styled-components";

export const Container = styled.section`
  margin: 0 0 2.4rem 2.4rem;
  
  > h2 {
    font: 500 1.8rem/140% "Poppins", sans-serif;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

`;