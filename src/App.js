import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Homepage from './components/Homepage';
import StudentLogin from './components/StudentLogin';
import StudentSignUp from './components/StudentSignUp';
import { BrowserRouter as Router, Routes, 
  Route,} from "react-router-dom";


function App() {
  const mode="light"
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/signup" element={<StudentSignUp />} />
          <Route path="/registrationform" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      </div>
    
    

  );
}

export default App;
