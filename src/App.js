import React from 'react';
//browserRouter: /about. HashRouter: /#about 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconlink from './components/AboutIconlink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  
  return (
    <FeedbackProvider>
      <Router>
          <Header name="Feedback UI"></Header>
          <div className="container">
              <Routes>
                <Route exact path='/' element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }></Route>
                <Route path='/about' element={<AboutPage />}></Route>
              </Routes>
              <AboutIconlink />
          </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
