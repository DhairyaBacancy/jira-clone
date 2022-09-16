import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import ErrorBoundary from './component/ErrorBoundary';
import KanbanLayout from './layout/KanbanLayout';
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route index path="/" element={<Dashboard />} />
                <Route element={<KanbanLayout />}>
                  <Route path="/project/:slug" element={<ProjectDetail />} />
                </Route>
              </Routes>
            </Suspense>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
