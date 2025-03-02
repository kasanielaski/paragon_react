import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CatalogPage, DetailsPage } from './pages';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="*" Component={CatalogPage} />
        <Route path="/details/" Component={DetailsPage} />
      </Routes>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
