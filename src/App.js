import logo from './logo.svg';
import './App.scss';
import ListItem from './ListItem';
import List from './List';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import GroupList from './GroupList';

function App() {
  return (
    <div className="App">
        <GroupList />
    </div>
  );
}

export default App;
