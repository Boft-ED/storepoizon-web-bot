import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './components/Routes/Routes';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './features/categories/categoriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
