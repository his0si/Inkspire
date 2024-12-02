import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const KeywordItem = styled.div`
  margin-bottom: 10px;
`;

const KeywordList = () => {
  const keywords = ['여름과 불꽃']; // Example keywords

  return (
    <Container>
      <Title>오마이걸의 수집 키워드</Title>
      {keywords.map((keyword, index) => (
        <KeywordItem key={index}>• {keyword}</KeywordItem>
      ))}
    </Container>
  );
};

export default KeywordList;