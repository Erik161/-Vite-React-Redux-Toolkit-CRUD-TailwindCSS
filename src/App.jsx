import './App.css';
import { useSelector } from 'react-redux';

// useDispatch = is to do something | It will do the functions that we want to call in order to update the state.
// useSelector = it is to select or bring something | the way in which we are going to be able to bring the data that is within the state.

function App() {

  const taskState = useSelector(state => state.tasks);
  console.log(taskState)



  return (
    <div className="App">
      Hello World
    </div>
  )
}

export default App
