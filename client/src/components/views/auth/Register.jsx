import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    maxWidth: '300px',
  },
  inputGroup: {
    display: 'flex',
    gap: '5px',
  },
  input: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  checkButton: {
    padding: '8px 12px',
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  }
};

const Register = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Inkspire 회원가입</h1>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <input style={styles.input} type="text" placeholder="아이디" />
          <button style={styles.checkButton} type="button">중복확인</button>
        </div>
        <input style={styles.input} type="password" placeholder="비밀번호" />
        <input style={styles.input} type="password" placeholder="비밀번호 재입력" />
        <div style={styles.inputGroup}>
          <input style={styles.input} type="text" placeholder="사용할 필명 입력" />
          <button style={styles.checkButton} type="button">중복확인</button>
        </div>
        <button style={styles.submitButton} type="submit">계정 만들기</button>
      </form>
    </div>
  );
};

export default Register;