import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, TrendingUp, Search, Languages, Gamepad } from 'lucide-react';
import DailyMission from '../components/DailyMission';
import StreakCounter from '../components/StreakCounter';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(1); // Changed from 3 to 1
  const [wordsLearned, setWordsLearned] = useState(24);
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      <div className="flex items-center mb-6 px-4">
        <img 
          src="/SvenskaLek Logo.png" 
          alt="SvenskaLek Logo" 
          className="h-12 w-12 object-contain mr-2"
        />
        <h1 className="text-2xl font-bold text-zinc-900">SvenskaLek</h1>
      </div>
      
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4 px-4">
          <h2 className="text-xl font-semibold">Daily Mission</h2>
          <span className="text-sm text-primary-500 font-medium">1/3 completed</span>
        </div>
        <DailyMission />
      </section>
      
      <section className="mb-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <div className="card p-4 mb-4">
          <div className="flex items-center">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <Book className="text-primary-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Words Learned</p>
              <p className="text-xl font-bold">{wordsLearned}</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center">
            <div className="bg-secondary-100 p-3 rounded-full mr-4">
              <TrendingUp className="text-secondary-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Current Streak</p>
              <p className="text-xl font-bold">{streak} day</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="px-4">
        <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/explore')}
            className="card p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-primary-100 p-3 rounded-full mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <Search className="text-primary-500" size={24} />
            </div>
            <p className="font-medium">Explore Words</p>
          </button>
          
          <button
            onClick={() => navigate('/translate')}
            className="card p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-secondary-100 p-3 rounded-full mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <Languages className="text-secondary-600" size={24} />
            </div>
            <p className="font-medium">Translate</p>
          </button>
          
          <button
            onClick={() => navigate('/play')}
            className="card p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-accent-100 p-3 rounded-full mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <Gamepad className="text-accent-500" size={24} />
            </div>
            <p className="font-medium">Play Games</p>
          </button>
          
          <button
            className="card p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-success-100 p-3 rounded-full mx-auto mb-2 w-14 h-14 flex items-center justify-center">
              <Book className="text-success-500" size={24} />
            </div>
            <p className="font-medium">My Vocabulary</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;