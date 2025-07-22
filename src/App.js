import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import WeatherInput from './components/WeatherInput';



function App() {
  return (
    <div className="bg-pink-200 min-h-screen">
      <Header />
      <WeatherInput />
      <main className="flex items-center justify-center p-4">
        <WeatherCard city="Nairobi" />
      </main>

    </div>
  );
}

export default App;
