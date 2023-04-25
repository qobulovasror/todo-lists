import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Todo = lazy(()=>import('./todo/todo'));


function App() {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
