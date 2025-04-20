import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./store/ThemeContext";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import "./App.css";

const getNextRoute = (current, direction, routes) => {
  const index = routes.indexOf(current);
  if (direction === 'down' && index < routes.length - 1) {
    return routes[index + 1];
  } else if (direction === 'up' && index > 0) {
    return routes[index - 1];
  }
  return current;
};

const ScrollWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeout = useRef(null);
  const scrollDirectionRef = useRef('down'); // Store last scroll direction

  const routes = ['/', '/about', '/skills', '/portfolio', '/contact'];

  // Navigation handler
  useEffect(() => {
    let startY = 0;
  
    const handleWheel = (e) => {
      if (scrollTimeout.current) return;
  
      const direction = e.deltaY > 0 ? 'down' : 'up';
      scrollDirectionRef.current = direction;
  
      checkAndNavigate(direction);
    };
  
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
  
    const handleTouchEnd = (e) => {
      if (scrollTimeout.current) return;
  
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      const direction = deltaY > 0 ? 'down' : 'up';
      scrollDirectionRef.current = direction;
  
      checkAndNavigate(direction);
    };
  
    const checkAndNavigate = (direction) => {
      const scrollElement = document.documentElement || document.body;
      const scrollTop = scrollElement.scrollTop;
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;
  
      const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
      const atTop = scrollTop <= 5;
  
      const shouldNavigate =
        (direction === 'down' && atBottom) || (direction === 'up' && atTop);
  
      if (shouldNavigate) {
        const nextRoute = getNextRoute(location.pathname, direction, routes);
        if (nextRoute !== location.pathname) {
          navigate(nextRoute);
          scrollTimeout.current = setTimeout(() => {
            scrollTimeout.current = null;
          }, 1000);
        }
      }
    };
  
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  useEffect(() => {
    const direction = scrollDirectionRef.current;
    if (direction === 'down') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (direction === 'up') {
      setTimeout(() => {
        const scrollElement = document.documentElement || document.body;
        const scrollHeight = scrollElement.scrollHeight;
        const clientHeight = scrollElement.clientHeight;
        const scrollTop = scrollHeight - clientHeight;
        window.scrollTo({ top: scrollTop, behavior: 'auto' });
      }, 0);
    }
  }, [location.pathname]);

  return children;
};

const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <ScrollWrapper>
        <div className="dashboard">
          <Sidebar />
          <div className={`dashboard--content ${theme}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      </ScrollWrapper>
    </Router>
  );
};

export default App;
