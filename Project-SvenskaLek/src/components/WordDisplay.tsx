import React from 'react';
import { Volume2, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface WordData {
  word: string;
  translation: string;
  exampleSentence: string;
  exampleTranslation: string;
  imageUrl: string;
}

interface WordDisplayProps {
  wordData: WordData;
  isLoading: boolean;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ wordData, isLoading }) => {
  const playPronunciation = () => {
    // In a real app, this would play audio pronunciation
    console.log('Playing pronunciation for:', wordData.word);
  };

  const saveToVocabulary = () => {
    // In a real app, this would save the word to user's vocabulary
    console.log('Saving to vocabulary:', wordData.word);
  };

  if (isLoading) {
    return (
      <div className="card p-4 animate-pulse">
        <div className="bg-neutral-200 h-48 rounded-lg mb-4"></div>
        <div className="bg-neutral-200 h-8 w-1/3 rounded mb-2"></div>
        <div className="bg-neutral-200 h-4 w-1/2 rounded mb-4"></div>
        <div className="bg-neutral-200 h-4 w-3/4 rounded mb-2"></div>
        <div className="bg-neutral-200 h-4 w-2/3 rounded mb-4"></div>
        <div className="bg-neutral-200 h-10 rounded"></div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <img 
        src={wordData.imageUrl} 
        alt={wordData.translation} 
        className="w-full h-56 object-cover"
      />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-primary-700">{wordData.word}</h2>
          <button 
            onClick={playPronunciation}
            className="p-2 bg-primary-100 rounded-full hover:bg-primary-200 transition-colors"
          >
            <Volume2 size={20} className="text-primary-600" />
          </button>
        </div>
        
        <p className="text-neutral-500 mb-4">{wordData.translation}</p>
        
        <div className="bg-neutral-50 p-3 rounded-lg mb-4 border border-neutral-200">
          <p className="text-primary-700 font-medium">{wordData.exampleSentence}</p>
          <p className="text-neutral-500 text-sm mt-1">{wordData.exampleTranslation}</p>
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={saveToVocabulary}
            className="btn-outline flex-1 flex items-center justify-center"
          >
            <Plus size={18} className="mr-2" />
            <span>Add to My Words</span>
          </button>
          
          <button className="btn-primary flex items-center justify-center">
            <span>Next</span>
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordDisplay;