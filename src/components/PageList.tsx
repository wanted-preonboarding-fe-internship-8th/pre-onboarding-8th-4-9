import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PageList(totalCount: any) {
  const navigate = useNavigate();

  const onMovePage = (page: number) => {
    navigate(`/${page}`);
  };

  return (
    <PageListStyle>
      {totalCount.totalCount < 5 && <Page>1</Page>}
      {totalCount.totalCount &&
        Array(Math.ceil(totalCount.totalCount / 5))
          .fill(null)
          .map((count, idx: number) => (
            <Page key={idx} onClick={() => onMovePage(idx + 1)}>
              {idx + 1}
            </Page>
          ))}
    </PageListStyle>
  );
}

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
  cursor: pointer;
`;

export default PageList;
