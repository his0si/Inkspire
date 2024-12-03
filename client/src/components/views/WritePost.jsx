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

const PostBox = styled.div`
  border: 1.5px solid #000;
  width: 100%;
  margin-bottom: 15px;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1.5px solid #000;
  padding: 15px;
  font-size: 18px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  height: 400px;
  border: none;
  resize: none;
  outline: none;
  line-height: 1.8;
  padding: 20px;
  box-sizing: border-box;
  
  &::-webkit-scrollbar {
    width: 15px;
  }
  
  &::-webkit-scrollbar-track {
    background: #fff;
    border-left: 1.5px solid #000;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #888;
  font-size: 13px;
  margin-bottom: 5px;
`;

const VisibilityButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
`;

const CharCount = styled.span`
  color: #888;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 5px 15px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
`;


const WritePost = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const toggleVisibility = () => {
    setIsPublic(!isPublic);
  };

  const handleSubmit = () => {
    // TODO: 실제 글 저장 로직
    navigate('/post-complete');
  };

  return (
    <Container>
      <Sidebar>
        <MenuItem>로고</MenuItem>
        <MenuItem>글쓰기</MenuItem>
        <MenuItem onClick={() => navigate('/main')}>탐색하기</MenuItem>
        <MenuItem onClick={() => navigate('/neighbors')}>이웃들</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>내 프로필</MenuItem>
      </Sidebar>
      
      <Content>
        <Title>오늘의 키워드:</Title>
        <Subtitle>여름 & 불꽃</Subtitle>
        
        <PostBox>
          <TitleInput placeholder="제목을 입력하세요" />
          <ContentTextarea 
            placeholder="내용을 입력하세요" 
            value={content}
            onChange={handleContentChange}
          />
        </PostBox>
        <Footer>
          <StatusBar>
            <VisibilityButton onClick={toggleVisibility}>
              {isPublic ? '공개' : '비공개'}
            </VisibilityButton>
            <CharCount>{content.length}/1000</CharCount>
          </StatusBar>
          <SubmitButton onClick={handleSubmit}>작성완료</SubmitButton>
        </Footer>
      </Content>
    </Container>
  );
};

export default WritePost;