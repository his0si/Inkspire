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
  padding-top: 80px;
`;

const MenuItem = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  max-width: 500px;
`;

const Title = styled.div`
  font-size: 14px;
  margin-top: 80px;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Post = styled.div`
  border: 1px solid black;
  padding: 15px;
  position: relative;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const PostTitle = styled.div`
  font-weight: normal;
  margin-bottom: 10px;
`;

const PostTime = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #888;
`;

const PostContent = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
`;

const PostAuthor = styled.div`
  color: #888;
  text-align: right;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Main = () => {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <Container>
      <Sidebar>
        <MenuItem>
          <Logo src="/inkspire_logo.png" alt="Inkspire Logo" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/write')}>글쓰기</MenuItem>
        <MenuItem>탐색하기</MenuItem>
        <MenuItem onClick={() => navigate('/neighbors')}>이웃들</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>내 프로필</MenuItem>
      </Sidebar>
      
      <Content>
        <Title>오늘의 키워드:</Title>
        <Subtitle>여름 & 물꽃</Subtitle>
        
        <PostList>
          <Post onClick={() => handlePostClick(1)}>
            <PostTitle>물꽃놀이</PostTitle>
            <PostTime>17:33</PostTime>
            <PostContent>
              날 바라보던 너의 눈에 비친 내 모습이 참 힘이 됐었는데 나도 몰랐던 날 알게 해준 날 믿었던 그 한 마음이 참 yearn 다시 이 런 우리는 물놀이가 난 참 새치곤 벌써가...
            </PostContent>
            <PostAuthor>by 오마이걸</PostAuthor>
          </Post>

          <Post onClick={() => handlePostClick(2)}>
            <PostTitle>물꽃놀이</PostTitle>
            <PostTime>17:15</PostTime>
            <PostContent>
              여름이라고 너의 눈동자 안에
              머물러가는 내 맘보다 깊이
              머물러가고 머물러있다가 날갯짓하여 사라져버릴까...
            </PostContent>
            <PostAuthor>by 허밍실</PostAuthor>
          </Post>

          <Post onClick={() => handlePostClick(3)}>
            <PostTitle>제목</PostTitle>
            <PostTime>17:00</PostTime>
            <PostContent>
              물놀~~~~~
            </PostContent>
            <PostAuthor>by 시크</PostAuthor>
          </Post>
        </PostList>
      </Content>
    </Container>
  );
};

export default Main;