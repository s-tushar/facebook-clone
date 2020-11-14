import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_body'>
        <Sidebar />
        <Feed />
        {/* header */}
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </div>


    </div>
  );
}

export default App;
