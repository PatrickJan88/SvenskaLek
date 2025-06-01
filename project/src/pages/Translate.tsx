import React, { useState } from 'react';
import { Volume2, Languages, ArrowRight } from 'lucide-react';
import CommonPhrases from '../components/CommonPhrases';

// Mock translation dictionary
const mockTranslations: Record<string, string> = {
  'hello': 'hej',
  'good morning': 'god morgon',
  'how are you': 'hur mår du',
  'thank you': 'tack',
  'goodbye': 'hej då',
  'yes': 'ja',
  'no': 'nej',
  'please': 'tack',
  'excuse me': 'ursäkta mig',
  'i don\'t understand': 'jag förstår inte',
  'help': 'hjälp',
  'water': 'vatten',
  'coffee': 'kaffe',
  'food': 'mat',
  'restaurant': 'restaurang',
  'bathroom': 'toalett',
  'train': 'tåg',
  'bus': 'buss',
  'airport': 'flygplats',
  'hotel': 'hotell'
};

const Translate: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [fromLanguage, setFromLanguage] = useState<'en' | 'sv'>('en');
  
  const handleTranslate = () => {
    if (!inputText.trim()) return;
    
    setIsTranslating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (fromLanguage === 'en') {
        const lowerInput = inputText.toLowerCase();
        setTranslatedText(mockTranslations[lowerInput] || 'Translation not available');
      } else {
        // Reverse lookup for Swedish to English
        const entry = Object.entries(mockTranslations)
          .find(([_, sv]) => sv.toLowerCase() === inputText.toLowerCase());
        setTranslatedText(entry ? entry[0] : 'Translation not available');
      }
      setIsTranslating(false);
    }, 500);
  };
  
  const swapLanguages = () => {
    setFromLanguage(prev => prev === 'en' ? 'sv' : 'en');
    setInputText(translatedText);
    setTranslatedText(inputText);
  };
  
  const playPronunciation = () => {
    // In a real app, this would play audio pronunciation
    console.log('Playing pronunciation for:', translatedText);
  };
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-primary-700">Translate</h1>
      
      <div className="card p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-neutral-500">
            {fromLanguage === 'en' ? 'English' : 'Swedish'}
          </span>
          <button 
            onClick={swapLanguages}
            className="text-primary-500 text-sm font-medium flex items-center hover:text-primary-600 transition-colors"
          >
            <Languages size={16} className="mr-1" />
            <span>Swap Languages</span>
          </button>
        </div>
        
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="input min-h-24 mb-4 resize-none"
          placeholder={`Enter text in ${fromLanguage === 'en' ? 'English' : 'Swedish'}...`}
        ></textarea>
        
        <button 
          onClick={handleTranslate}
          disabled={!inputText.trim() || isTranslating}
          className="btn-primary w-full flex items-center justify-center"
        >
          {isTranslating ? (
            <span>Translating...</span>
          ) : (
            <>
              <span>
                Translate to {fromLanguage === 'en' ? 'Swedish' : 'English'}
              </span>
              <ArrowRight size={18} className="ml-2" />
            </>
          )}
        </button>
      </div>
      
      {translatedText && (
        <div className="card p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-500">
              {fromLanguage === 'en' ? 'Swedish' : 'English'}
            </span>
            {fromLanguage === 'en' && (
              <button 
                onClick={playPronunciation}
                className="text-primary-500 text-sm font-medium flex items-center hover:text-primary-600 transition-colors"
              >
                <Volume2 size={16} className="mr-1" />
                <span>Listen</span>
              </button>
            )}
          </div>
          
          <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200">
            <p className="text-primary-700 font-medium">{translatedText}</p>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Common Phrases</h2>
        <CommonPhrases />
      </div>
    </div>
  );
};

export default Translate;