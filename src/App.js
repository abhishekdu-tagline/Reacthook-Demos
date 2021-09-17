import logo from './logo.svg';
import './App.css';
import { UserForm } from './Components/UserForm';
import DisplayUsers from './Components/DisplayUsers';
import { Routing } from './Routing';
import { Form } from './Components/FormValidation/Form';

function App() {
  return (
    <div className="App">
        {/* <UserForm /> */}
        <Form />
        
    </div>
  );
}

export default App;
