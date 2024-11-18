import { useNavigate } from 'react-router-dom';

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
      marginBottom: '10px',
    },
    subtitle: {
      color: '#666',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 30px',
      backgroundColor: '#e0e0e0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };
  
  const Home = () => {
    const navigate = useNavigate();

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Inkspire</h1>
        <p style={styles.subtitle}>Ink your thoughts, inspire your world—welcome to Inkspire.</p>
        <button style={styles.button} onClick={() => navigate('/login')}>로그인</button>
      </div>
    );
  };
  
  export default Home;