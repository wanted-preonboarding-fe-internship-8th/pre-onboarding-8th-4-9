import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FETCH_COMMENTS_OPTIONS } from '../enums';

type TotalCountType = {
  totalCount: number;
};

function PageList(totalCount: TotalCountType) {
  const { id } = useParams();
  const navigate = useNavigate();

  const onMovePage = (page: number) => {
    navigate(`/${page}`);
  };

  return (
    <PageListStyle>
      {totalCount.totalCount < FETCH_COMMENTS_OPTIONS.LIMIT && <Page>1</Page>}
      {id &&
        totalCount.totalCount &&
        Array(Math.ceil(totalCount.totalCount / FETCH_COMMENTS_OPTIONS.LIMIT))
          .fill(null)
          .map((count, idx: number) => (
            <Page
              key={idx}
              onClick={() => onMovePage(idx + 1)}
              active={Number(id) === idx + 1}
            >
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

const Page = styled.button<{ active?: boolean }>`
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
