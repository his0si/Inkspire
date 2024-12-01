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

const SearchButton = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  font-weight: normal;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 40px;
`;

const NeighborsPage = () => {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`); // 포스트 상세 페이지로 이동
  };

  return (
    <Container>
      <Sidebar>
        <MenuItem>로고</MenuItem>
        <MenuItem onClick={() => navigate('/write')}>글쓰기</MenuItem>
        <MenuItem onClick={() => navigate('/main')}>탐색하기</MenuItem>
        <MenuItem onClick={() => navigate('/neighbors')}>이웃들</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>내 프로필</MenuItem>
      </Sidebar>
      
      <Content>
        <Title>이웃들의 글</Title>
        <Subtitle>이웃 목록</Subtitle>
        
        <SearchContainer>
          <div style={{ height: '100%' }}>이웃 목록</div>
          <SearchButton onClick={() => {/* Add search functionality here */}}>필명 검색</SearchButton>
        </SearchContainer>
        
        <PostList>
          <Post onClick={() => handlePostClick(1)}>
            <PostTitle>불꽃놀이</PostTitle>
            <PostTime>17:13</PostTime>
            <PostContent>저녁에 하는 태양의 이들이...</PostContent>
            <PostAuthor>by 하현실</PostAuthor>
          </Post>
          <Post onClick={() => handlePostClick(2)}>
            <PostTitle>가을밤</PostTitle>
            <PostTime>2023-07-01</PostTime>
            <PostContent>반은~~~~~~</PostContent>
            <PostAuthor>by 오렌지</PostAuthor>
          </Post>
          <Post onClick={() => handlePostClick(3)}>
            <PostTitle>제목</PostTitle>
            <PostTime>2023-06-29</PostTime>
            <PostContent>반은~~~~~~</PostContent>
            <PostAuthor>by 수박</PostAuthor>
          </Post>
          {/* 추가 글들 ... */}
        </PostList>
      </Content>
    </Container>
  );
};

export default NeighborsPage;