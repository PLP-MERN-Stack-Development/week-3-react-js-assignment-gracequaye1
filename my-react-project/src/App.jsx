import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/*  Navbar */}
      <Navbar />

      {/*  Page Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/*  Counter Section */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>

            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/*  Task Manager */}
        <TaskManager />

        {/*  Card with Buttons */}
        <div className="mt-8">
          <Card title="Welcome to the Dashboard">
            <p className="mb-4">This is a reusable Card component. You can put anything inside it.</p>
            <div className="flex gap-4">
              <Button variant="primary" size="md">Primary</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="danger" size="md">Delete</Button>
            </div>
          </Card>
        </div>

        {/*  Post List (API Integration) */}
        <div className="mt-8">
          <PostList />
        </div>
      </main>

      {/*  Footer */}
      <Footer />
    </div>
  );
}

export default App;
