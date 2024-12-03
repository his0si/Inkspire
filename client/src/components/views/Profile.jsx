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

const ProfileHeader = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`;

const UserName = styled.h1`
  font-size: 24px;
  margin: 0 0 5px 0;
  font-weight: bold; 
`;

const UserInfo = styled.div`
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Post = styled.div`
  border: 1.5px solid #000;
  cursor: pointer;
`;

const PostTitle = styled.div`
  padding: 15px;
  border-bottom: ${props => props.hasBorder ? '1.5px solid #000' : 'none'};
`;

const PostContent = styled.div`
  padding: 15px;
  font-size: 14px;
`;

const PostDate = styled.div`
  text-align: right;
  font-size: 12px;
  padding: 0 15px 15px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;

  h1 {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Profile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isKeywordsModalOpen, setKeywordsModalOpen] = useState(false);

  const keywords = ['여름&불꽃'];

  return (
    <Container>
      <Sidebar>
        <MenuItem>
          <Logo src="/inkspire_logo.png" alt="Inkspire Logo" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/write')}>글쓰기</MenuItem>
        <MenuItem onClick={() => navigate('/main')}>탐색하기</MenuItem>
        <MenuItem onClick={() => navigate('/neighbors')}>이웃들</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>내 프로필</MenuItem>
      </Sidebar>

      <Content>
        <ProfileHeader>
          <UserName>오마이걸</UserName>
          <UserInfo>핫걸다~ 오마이걸!</UserInfo>
        </ProfileHeader>

        <ButtonGroup>
          <Button onClick={() => setModalOpen(true)}>계정 관리</Button>
          <Button onClick={() => setKeywordsModalOpen(true)}>수집 키워드</Button>
        </ButtonGroup>

        {isModalOpen && (
          <Modal>
            <ModalContent>
              <h1>계정 관리</h1>
              <div>필명</div>
              <div>자기소개</div>
              <div>이메일</div>
              <div>비밀번호</div>
              <div>로그아웃</div>
              <div>계정 탈퇴</div>
              <ButtonContainer>
                <Button onClick={() => setModalOpen(false)}>닫기</Button>
              </ButtonContainer>
            </ModalContent>
          </Modal>
        )}

        {isKeywordsModalOpen && (
          <Modal>
            <ModalContent>
              <h1>오마이걸의 수집 키워드</h1>
              {keywords.map((keyword, index) => (
                <div key={index}>• {keyword}</div>
              ))}
              <ButtonContainer>
                <Button onClick={() => setKeywordsModalOpen(false)}>닫기</Button>
              </ButtonContainer>
            </ModalContent>
          </Modal>
        )}

        <PostList>
          <Post onClick={() => navigate('/post/1')}>
            <PostTitle hasBorder>불꽃놀이</PostTitle>
            <PostContent>
              날 바라보던 너의 눈에 비친 내 모습이 참 많애 들었는데 나도 몰랐던 날 알게 해준 날 믿었던 그 한 마음이 참 yeah 다시 이런 우리는 믿을거야 난 좀 새치곤 벌써지...
            </PostContent>
            <PostDate>17:33</PostDate>
          </Post>

          <Post>
            <PostTitle>제목</PostTitle>
            <PostContent>본문~~~~~~~</PostContent>
            <PostDate>2023-07-01</PostDate>
          </Post>

          <Post>
            <PostTitle>제목</PostTitle>
            <PostContent>본문~~~~~~~</PostContent>
            <PostDate>2023-06-28</PostDate>
          </Post>
        </PostList>
      </Content>
    </Container>
  );
};

export default Profile;
