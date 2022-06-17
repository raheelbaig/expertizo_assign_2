import './App.css';
import { Form, Button } from 'react-bootstrap'


function App() {


  return (
    <div className="App">
      <div className="main_container">
        <h1>Todo App</h1><br />
        <Form.Control size="lg" type="text" placeholder="Add Items" className='input'  />
        <Button variant="primary" className='add-btn'>Add</Button>{' '}
        <ul>
          <br/><li></li>
        </ul>
      
      </div>
    </div>
  );
}

export default App;
