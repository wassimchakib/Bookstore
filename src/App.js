import './App.css';
import AddBook from './components/AddBook';
import BookCards from './components/BookCards';
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
      <Header />
      <BookCards books={books} />
      <AddBook />
    </>
  );
}

export default App;
