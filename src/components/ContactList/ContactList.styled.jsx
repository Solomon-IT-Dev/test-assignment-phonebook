import styled from '@emotion/styled';

export const TotalContactsText = styled.p`
  margin: 0 auto;
  font-size: 18px;
`;

export const TotalContactsNum = styled.span`
  margin-left: 4px;
  color: #0000ff;
`;

export const PhonebookList = styled.ul`
  margin: 10px auto 0;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 2px;
`;

export const ListElement = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LoaderItem = styled.p`
  font-size: 24px;
  color: #a9a9a9;
`;

export const NoMatchesText = styled.p`
  margin: 20px 0;
  font-size: 18px;
`;

export const NoContactsText = styled.p`
  font-size: 18px;
`;

export const FetchErrorText = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

export const RefetchBtn = styled.button`
  padding: 0;
  margin-top: 20px;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;
