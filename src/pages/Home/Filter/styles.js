import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  margin-top: 15px;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    margin: 0;
    border-radius: 3px;
    background: #fff;

    > div,
    .right {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      justify-content: flex-end;
    }

    @media (max-width: 768px) {
      > div,
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .right {
        margin-top: 10px;
      }
    }
  }

  span {
    margin-right: 15px;
  }

  .Dropdown-root {
    width: 225px;
    font-size: 14px;
  }
`;
