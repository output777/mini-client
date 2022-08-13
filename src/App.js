import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <LandingPage>
      <Layout>
        <Main />
      </Layout>
    </LandingPage>
  );
}

export default App;
