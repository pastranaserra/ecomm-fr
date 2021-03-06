import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import NavBar from './components/NavBar';
import { AuthProvider } from './context/auth';
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Suspense fallback={<LoadingPagePlaceholder />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/me" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </div>
  );
}

function LoadingPagePlaceholder() {
  return (
    <Typography textAlign="center" variant="h3" component="h1" gutterBottom>
      Loading...
    </Typography>
  );
}

export default App;
