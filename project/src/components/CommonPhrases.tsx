import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for phrases
const phrasesData = [
  {
    category: 'Greetings',
    phrases: [
      { swedish: 'Hej', english: 'Hello' },
      { swedish: 'God morgon', english: 'Good morning' },
      { swedish: 'God kväll', english: 'Good evening' },
      { swedish: 'Hej då', english: 'Goodbye' },
    ]
  },
  {
    category: 'Basics',
    phrases: [
      { swedish: 'Ja', english: 'Yes' },
      { swedish: 'Nej', english: 'No' },
      { swedish: 'Tack', english: 'Thank you/Please' },
      { swedish: 'Varsågod', english: 'You\'re welcome' },
    ]
  },
  {
    category: 'Eating',
    phrases: [
      { swedish: 'Jag är hungrig', english: 'I am hungry' },
      { swedish: 'Kan jag få menyn?', english: 'Can I get the menu?' },
      { swedish: 'Vatten, tack', english: 'Water, please' },
      { swedish: 'Det var läckert', english: 'That was delicious' },
    ]
  }
];

const CommonPhrases: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Greetings']);
  
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const playPronunciation = (phrase: string) => {
    // In a real app, this would play audio pronunciation
    console.log('Playing pronunciation for:', phrase);
  };
  
  return (
    <div>
      {phrasesData.map((category) => (
        <div key={category.category} className="card mb-2 overflow-hidden">
          <button
            className="w-full p-4 flex items-center justify-between font-medium text-left"
            onClick={() => toggleCategory(category.category)}
          >
            <span>{category.category}</span>
            {expandedCategories.includes(category.category) 
              ? <ChevronUp size={20} className="text-neutral-500" />
              : <ChevronDown size={20} className="text-neutral-500" />
            }
          </button>
          
          <AnimatePresence>
            {expandedCategories.includes(category.category) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-neutral-200"
              >
                {category.phrases.map((phrase, index) => (
                  <div 
                    key={index}
                    className={`p-3 flex items-center justify-between ${
                      index !== category.phrases.length - 1 ? 'border-b border-neutral-100' : ''
                    }`}
                  >
                    <div>
                      <p className="font-medium text-primary-700">{phrase.swedish}</p>
                      <p className="text-sm text-neutral-500">{phrase.english}</p>
                    </div>
                    <button
                      onClick={() => playPronunciation(phrase.swedish)}
                      className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                    >
                      <Volume2 size={18} className="text-primary-500" />
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default CommonPhrases;