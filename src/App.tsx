import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { CatalogPage, DetailsPage } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" Component={CatalogPage} />
        <Route path="/details/" Component={DetailsPage} />
      </Routes>
    </Router>
  );
};

export default App;
