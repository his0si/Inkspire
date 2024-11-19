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

const ProfileHeader = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`;

const UserName = styled.h1`
  font-size: 24px;
  margin: 0 0 5px 0;
  font-weight: normal;
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

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar>
        <MenuItem>로고</MenuItem>
        <MenuItem onClick={() => navigate('/write')}>글쓰기</MenuItem>
        <MenuItem onClick={() => navigate('/main')}>탐색하기</MenuItem>
        <MenuItem>이웃들</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>내 프로필</MenuItem>
      </Sidebar>

      <Content>
        <ProfileHeader>
          <UserName>오마이걸</UserName>
          <UserInfo>핫걸다~ 오마이걸!</UserInfo>
        </ProfileHeader>

        <ButtonGroup>
          <Button>계정 관리</Button>
          <Button>수집 키워드</Button>
        </ButtonGroup>

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
