    // src/App.js
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { useEffect } from 'react';
    import Lenis from 'lenis';
    import Layout from './components/Layout/Layout';
    import Home from './pages/Home';
    
    function App() {
      useEffect(() => {
        const lenis = new Lenis({
          autoRaf: true,
          smoothWheel: true,
          lerp: 0.1,
        });
        return () => {
          lenis.destroy();
        };
      }, []);
      
      return (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      );
    }
    export default App;