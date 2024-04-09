import { useEffect } from 'react';
import './App.scss';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {

  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
      {/* <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes> */}
    </div>
  );
}

export default App;
