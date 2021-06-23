import './App.css';
import React, { useState } from 'react';
import Routes from "./routes/routes";
import { Layout } from './components/Layout/layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';
import { Loading } from './components/Loading/loading';
import { getNumber } from './lib/utils';

library.add(fab); 

const App: React.FC = () => {

  const [selected, setSelected] = useState<number>(getNumber(window.location.pathname));
  
  const [load, setLoad] = useState<boolean>(false);
  const history = useHistory();

  const show: (url: string) => void = (url) => {
      setLoad(true);
      setTimeout(() => setLoad(false), 1000);
      setTimeout(() => history.push(url), 1000);
  }

  return (
    <div className="app">
      <div className="row">
        <div className="column">
          <Layout selected={selected} setSelected={setSelected} setLoading={show}/>
        </div>
        <div className="column">
          <Routes />
        </div>
      </div>
      {load && <Loading />}
    </div>
  )
}


export default App;
