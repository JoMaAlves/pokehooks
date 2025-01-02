import PageSelector from './components/PageSelector';
import PokeHooksProvider from './context/PokeHooksContext';
import FossilProvider from './context/FossilContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <PokeHooksProvider>
    <FossilProvider>
      <div className="w-100" data-bs-theme="dark">
        <PageSelector />
      </div>
    </FossilProvider>
  </PokeHooksProvider>
);

export default App;
