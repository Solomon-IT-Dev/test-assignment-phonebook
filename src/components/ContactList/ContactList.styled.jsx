import styled from '@emotion/styled';

export const TotalContactsText = styled.p`
  margin: 0 auto;
  color: #626365;
  font-size: 18px;
`;

export const TotalContactsNum = styled.span`
  margin-left: 4px;
  color: #0000ff;
`;

export const PhonebookList = styled.ul`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListElement = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LoaderItem = styled.p`
  margin: 20px auto;
  text-align: center;
  font-size: 24px;
  letter-spacing: 2px;
  color: #626365;
`;

export const NoMatchesText = styled.p`
  margin: 20px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const NoContactsText = styled.p`
  margin: 20px auto;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const FetchErrorText = styled.p`
  margin: 50px auto 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ff3939;
`;

export const RefetchBtn = styled.button`
  padding: 0;
  color: #3498db;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;
