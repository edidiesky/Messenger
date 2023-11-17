import styled from "styled-components";

export const MessageListStyles = styled.div`
  height: 100%;
  .chatList {
    padding-top: 4rem;
    padding-right: 2rem;
  }
  .revieverWrapper {
    justify-content: flex-end;
    gap: 1.2rem;
    align-self: flex-end;
    position: relative;
  }
  .recieverChat {
    background-color: var(--light-grey);
    border-radius: 30px;
  }
  .SenderChat {
    border-radius: 24px;
    border-bottom-right-radius: 4px;
    background-color: var(--primary);
    color: #fff;
  }
  .SenderChat,
  .recieverChat {
    padding: 1rem 1.5rem;
    width: fit-content;
    max-width: 300px;
    @media (max-width: 980px) {
      background-color: #fff;
      padding: 2rem 4rem;
      max-width: 280px;
    }
  }
  .chatCard {
    display: flex;
    display: flex;
    align-items: flex-start;
  }
`;
