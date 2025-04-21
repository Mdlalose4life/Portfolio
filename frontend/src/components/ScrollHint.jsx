import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <div style={styles.finger}>
      <FaArrowCircleUp />
      </div>
      <div style={styles.text}>Scroll up</div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: '30px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.5s ease-in-out',
  },
  finger: {
    fontSize: '2rem',
    animation: 'bounce 1s infinite',
  },
  text: {
    marginTop: '0.3rem',
    fontWeight: 'bold',
    color: '#444',
    fontSize: '1rem',
  },
};
