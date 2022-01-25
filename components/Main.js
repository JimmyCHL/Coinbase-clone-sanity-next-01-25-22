import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  height: 87vh;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`;
