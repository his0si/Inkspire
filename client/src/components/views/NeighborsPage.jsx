import React, { useState } from 'react';
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

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 400px;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 16px; // 둥글게 만들기

  h2 {
    font-size: 16px; // 글씨 크기 조정
    margin-bottom: 15px; // 아래 여백 추가
  }
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const NeighborsPage = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNeighborsPopupOpen, setIsNeighborsPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const neighbors = [
    { name: '하현실', id: 1 },
    { name: '오렌지', id: 2 },
    { name: '수박', id: 3 },
  ];

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`); // 포스트 상세 페이지로 이동
  };

  const handleNeighborsClick = () => {
    setIsNeighborsPopupOpen(true);
  };

  const handleSearchClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCloseNeighborsPopup = () => {
    setIsNeighborsPopupOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    handleClosePopup();
  };

  const handleNeighborClick = (neighborId) => {
    navigate(`/user-posts/${neighborId}`);
    handleCloseNeighborsPopup();
  };

  return (
    <Container>
      <Sidebar>
        <MenuItem>로고</MenuItem>
        <MenuItem onClick={() => navigate('/write')}>글쓰기</MenuItem>
        <MenuItem onClick={() => navigate('/main')}>탐색하기</MenuItem>
        <MenuItem onClick={handleNeighborsClick}>이웃들</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>내 프로필</MenuItem>
      </Sidebar>
      
      <Content>
        <Title>이웃들의 글</Title>
        <Subtitle>이웃 목록</Subtitle>
        
        <SearchContainer>
          <MenuItem onClick={handleNeighborsClick}>이웃 목록</MenuItem>
          <SearchButton onClick={handleSearchClick}>필명 검색</SearchButton>
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

        {/* 필명 검색 팝업 */}
        {isPopupOpen && (
          <>
            <Overlay onClick={handleClosePopup} />
            <Popup>
              <h2>필명 검색</h2>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="필명을 입력하세요"
                />
                <button type="submit">검색</button>
                <button type="button" onClick={handleClosePopup}>닫기</button>
              </form>
            </Popup>
          </>
        )}

        {/* 이웃 목록 팝업 */}
        {isNeighborsPopupOpen && (
          <>
            <Overlay onClick={handleCloseNeighborsPopup} />
            <Popup>
              <h2>이웃 목록</h2>
              <ul>
                {neighbors.map((neighbor) => (
                  <li key={neighbor.id} onClick={() => handleNeighborClick(neighbor.id)}>
                    {neighbor.name}
                  </li>
                ))}
              </ul>
              <CloseButtonContainer>
                <button type="button" onClick={handleCloseNeighborsPopup}>닫기</button>
              </CloseButtonContainer>
            </Popup>
          </>
        )}
      </Content>
    </Container>
  );
};

export default NeighborsPage;