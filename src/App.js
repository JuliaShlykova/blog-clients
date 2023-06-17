import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Post from './routes/Post';

function App() {
  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postid" element={<Post />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
