import Header from './components/Header';
import WeatherInput from './components/WeatherInput';

function App() {
  return (
    <div className="bg-pink-200 min-h-screen">
      <Header />
      <main className="flex items-centre justify-center">
        <h2 className="text-2xl text-gray-700">
          Welcome to Weather App
        </h2>
        <WeatherInput />
      </main>
    </div>
  );
}

export default App;
