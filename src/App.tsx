import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Catalog } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" Component={Catalog} />
      </Routes>
    </Router>
  );
}

export default App;
