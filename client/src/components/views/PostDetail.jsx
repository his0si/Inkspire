import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const BackButton = styled.div`
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const PostContainer = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  padding: 30px;
  margin-top: 60px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
`;

const PostTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
`;

const PostContent = styled.div`
  line-height: 1.8;
  margin: 30px 0;
  white-space: pre-wrap;
`;

const PostFooter = styled.div`
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
`;

const Author = styled.div`
  text-align: right;
  color: #666;
  margin-bottom: 20px;
`;

const InteractionContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px 0;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff5d5d;
  font-size: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const CommentInput = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const PostDetail = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>←</BackButton>
      <PostContainer>
        <PostHeader>
          <span>KW: 여름, 불꽃</span>
          <span>2023-07-03</span>
        </PostHeader>
        <PostTitle>불꽃놀이</PostTitle>
        <PostContent>
          날 바라보던 너의 눈에 비친 내 모습이 참 많애 들었는데 나도 몰랐던 날 알게 해준 날 믿었던 건 참 행운인 걸 yeah 다시 이런 우연은 없을거란 넌 늘 새치도 말했지 겨울러 (yeah) 들려 왜박 돌아가도 결국 그 자리였어 (Oh) 돌아와도 빨라데 (oh) 왜 머릿속에 (Oh) 니가 눈이 무시게 띠져 disappear 사랑스런 그때의 너 우리의 기억이 아른거리고 조금 이른 사랑에긴 저 별들처럼 나를 비추고 높을 같으면 (remember me) 시작되는 magic (remember me) 처음이라서 (remember me) 마냥 좋았던 Do you remember 그때 불꽃놀이

          모래알 같은 기억들 속에서도 난 단순애 널 찾아낼 수 있어 너에겐 내가 어떻게 남았는지 궁금해졌어 난 어떻을까 yeah 사실 그때 나의 세상은 너와 난 밖에 없었서 언넝 (huh) 한동안 감기보다 더 아팠지 (Oh) 너를 그러보았네 (oh) 깨만 하늘애 (Oh) 다시 눈부시도록 활짝 disappear 사랑스런 그때의 너 러리 기억이 아른거리고 조금 이른 사랑에긴 저 별들처럼 나를 비추고 높을 같으면 (remember me) 시작되는 magic (remember me) 처음이라서 (remember me) 마냥 좋았던 Do you remember 그때 불꽃놀이 Remember me 그때 우리 불꽃놀이 같던 둘만의 이름될 앞으로도 쭉 ah ah no no 이주 더 오래 지니도
        </PostContent>
        
        <PostFooter>
          <Author>by 오마이걸</Author>
          
          <InteractionContainer>
            <LikeButton onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? '❤️' : '🤍'}
            </LikeButton>
          </InteractionContainer>

          <CommentInput>
            <Input placeholder="댓글을 입력하세요..." />
            <SubmitButton>등록</SubmitButton>
          </CommentInput>
        </PostFooter>
      </PostContainer>
    </Container>
  );
};

export default PostDetail;