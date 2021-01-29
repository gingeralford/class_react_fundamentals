
import './App.css';

import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';

const person1 = { name: "Jason Freeman", age: 35, school: "Hard Knocks", graduationYear: "2029"};

function App() {
  return (
    <div className="App">
      <NameProp name="Ginger" /> {/* Mounting Component */}
      <Contacts {...person1} />
      <p>----------------------------------</p>
      <State />
    </div>
  );
}

export default App;
