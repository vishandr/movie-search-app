// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails';
import Layout from './Components/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<SearchPage />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
export default App;
