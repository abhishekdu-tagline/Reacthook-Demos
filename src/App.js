import logo from './logo.svg';
import './App.css';
import { UserForm } from './Components/UserForm';
import DisplayUsers from './Components/DisplayUsers';
import { Routing } from './Routing';
import { Form } from './Components/FormValidation/Form';
import { FormCom } from './Components/LocalStorageDemo/FormCom';
import ToDos from './Components/ToDos/ToDos';


function App() {
  return (
    <div className="App">
        {/* <UserForm /> */}
        {/* <FormCom /> */}
        {/* <Form /> */}
        <ToDos/>        
    </div>
  );
}

export default App;
