import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Item = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const AccountManagement = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
      <Title>계정 관리</Title>
      <Item>필명</Item>
      <Item>자기소개</Item>
      <Item>이메일</Item>
      <Item>비밀번호</Item>
      <Item>로그아웃</Item>
      <Item>계정 탈퇴</Item>
    </Container>
  );
};

export default AccountManagement;