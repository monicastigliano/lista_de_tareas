
import './App.css';
import { AppProvider } from './AppProvider';
import ListaDeTareas from './components/lista_de_tareas/ListaDeTareas';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <ListaDeTareas></ListaDeTareas>
      </div>
    </AppProvider>
  );
}

export default App;
