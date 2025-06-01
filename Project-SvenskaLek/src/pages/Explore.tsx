import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Volume2, Plus, Camera, RefreshCw } from 'lucide-react';
import WordDisplay from '../components/WordDisplay';
import { motion } from 'framer-motion';

// Mock data for demonstration
const randomWords = [
  {
    word: 'kaffe',
    translation: 'coffee',
    exampleSentence: 'Jag dricker kaffe på morgonen.',
    exampleTranslation: 'I drink coffee in the morning.',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    word: 'hund',
    translation: 'dog',
    exampleSentence: 'Min hund är mycket snäll.',
    exampleTranslation: 'My dog is very kind.',
    imageUrl: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    word: 'bok',
    translation: 'book',
    exampleSentence: 'Jag läser en intressant bok.',
    exampleTranslation: 'I am reading an interesting book.',
    imageUrl: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    word: 'strand',
    translation: 'beach',
    exampleSentence: 'Vi går till stranden idag.',
    exampleTranslation: 'We are going to the beach today.',
    imageUrl: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    word: 'cykel',
    translation: 'bicycle',
    exampleSentence: 'Han cyklar till jobbet.',
    exampleTranslation: 'He cycles to work.',
    imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'random'>('random');
  const [wordData, setWordData] = useState(randomWords[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setWordData(randomWords[1]);
    }, 1500);
  };

  const getRandomImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      setWordData(randomWords[randomIndex]);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-primary-700">Image to Word</h1>
      
      <div className="flex mb-6 bg-neutral-100 rounded-lg p-1">
        <button
          className={`flex-1 py-2 rounded-md text-center transition-colors ${
            activeTab === 'upload' 
              ? 'bg-white shadow-sm text-primary-700' 
              : 'text-neutral-500'
          }`}
          onClick={() => setActiveTab('upload')}
        >
          Upload Image
        </button>
        <button
          className={`flex-1 py-2 rounded-md text-center transition-colors ${
            activeTab === 'random' 
              ? 'bg-white shadow-sm text-primary-700' 
              : 'text-neutral-500'
          }`}
          onClick={() => setActiveTab('random')}
        >
          Random Image
        </button>
      </div>
      
      {activeTab === 'upload' && (
        <div className="mb-6">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 rounded-lg p-8 bg-neutral-50">
            <div className="mb-4 bg-primary-100 p-3 rounded-full">
              <Upload className="text-primary-500" size={24} />
            </div>
            <p className="text-neutral-600 text-center mb-4">
              Upload an image to learn its Swedish name
            </p>
            <div className="flex space-x-4">
              <label className="btn-primary flex items-center cursor-pointer">
                <Upload size={16} className="mr-2" />
                <span>Browse Files</span>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <button className="btn-outline flex items-center">
                <Camera size={16} className="mr-2" />
                <span>Take Photo</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'random' && (
        <div className="mb-6">
          <button 
            className="btn-secondary w-full flex items-center justify-center"
            onClick={getRandomImage}
            disabled={isLoading}
          >
            <RefreshCw size={18} className="mr-2" />
            <span>{isLoading ? 'Loading...' : 'Show Random Image'}</span>
          </button>
        </div>
      )}
      
      {wordData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <WordDisplay wordData={wordData} isLoading={isLoading} />
        </motion.div>
      )}
    </div>
  );
};

export default Explore;