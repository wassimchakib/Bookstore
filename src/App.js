import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

const books = [
  {
    id: 1,
    name: 'The Hunger Games',
    categorie: 'Action',
    author: 'Suzanne Collins',
    completionStatus: 75,
    currentChapter: 'Chapter 17',
  },
  {
    id: 2,
    name: 'Dune',
    categorie: 'Science Fiction',
    author: 'Frank Herbert',
    completionStatus: 50,
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    name: 'Capital in the Twenty-First Century',
    categorie: 'Economy',
    author: 'Suzanne Collins',
    completionStatus: 0,
    currentChapter: 'Introduction',
  },
];
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books books={books} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
