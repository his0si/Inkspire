import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Sidebar = styled.div`
  width: 100px;
  margin-right: 20px;
`;

const MenuItem = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 14px;
  margin-top: 80px;
  margin-bottom: 5px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const Message = styled.div`
  margin-bottom: 20px;
  line-height: 1.6;
`;

const WriteMoreButton = styled.button`
  padding: 5px 15px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
`;

const PostComplete = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <MenuItem>로고</MenuItem>
        <MenuItem>글쓰기</MenuItem>
        <MenuItem onClick={() => navigate('/main')}>탐색하기</MenuItem>
        <MenuItem>이웃들</MenuItem>
        <MenuItem>내 프로필</MenuItem>
      </Sidebar>
      
      <Content>
        <Title>오늘의 키워드:</Title>
        <Subtitle>여름 & 불꽃</Subtitle>
        
        <Message>
          오늘의 키워드로 한 번<br />
          글 작성을 완료했어요!<br />
          하나 더 쓰고 싶나요?
        </Message>
        
        <WriteMoreButton onClick={() => navigate('/write')}>
          하나 더 쓰기
        </WriteMoreButton>
      </Content>
    </Container>
  );
};

export default PostComplete;