import { Hourglass } from 'react-loader-spinner';
import './App.css';

function App() {
  return (
    <>
      <Hourglass
        visible={true}
        height="200"
        width="200"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#ED7926', '#FFAE74']}
      />
      <h1>UNDER CONSTRUCTION</h1>
    </>
  );
}

export default App;
