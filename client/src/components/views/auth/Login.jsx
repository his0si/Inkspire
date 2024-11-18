import { Link, useNavigate } from 'react-router-dom';

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
    input: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#e0e0e0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    signupText: {
      fontSize: '14px',
      textAlign: 'center',
      marginTop: '10px',
    },
    link: {
      color: '#666',
      textDecoration: 'none',
    }
  };
  
  const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: 실제 로그인 로직을 여기에 구현
      navigate('/main');  // 메인 페이지로 이동
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Inkspire</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input style={styles.input} type="text" placeholder="아이디" />
          <input style={styles.input} type="password" placeholder="비밀번호" />
          <button style={styles.button} type="submit">로그인</button>
          <div style={styles.signupText}>
            <span>계정이 없으신가요? </span>
            <Link style={styles.link} to="/register">회원가입</Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;