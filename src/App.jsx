import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (<>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <hero/>
      <Header />
      <main className="flex-grow mt-16 p-4">
        {/* Your main content goes here */}
        <h1 className="text-center text-6xl font-extrabold text-pink-500 bg-gray-900 p-4 rounded-lg shadow-lg">Welcome to VictorGym</h1>
        <p className="text-center text-lg mt-4 font-semibold">The best gym in the world!</p>
        <div/>      
        </main>
      <Footer />
    </div>
    </>
  );
}


export default App; 