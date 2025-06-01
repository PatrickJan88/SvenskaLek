import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageIcon, Volume2, AlignLeft, Book } from 'lucide-react';
import QuizCard from '../components/QuizCard';

// Mock data for vocabulary
const myVocabulary = [
  { 
    id: 1, 
    word: 'äpple', 
    translation: 'apple',
    imageUrl: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  { 
    id: 2, 
    word: 'hund', 
    translation: 'dog',
    imageUrl: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  { 
    id: 3, 
    word: 'bok', 
    translation: 'book',
    imageUrl: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  { 
    id: 4, 
    word: 'kaffe', 
    translation: 'coffee',
    imageUrl: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const Play: React.FC = () => {
  const navigate = useNavigate();
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  
  const quizTypes = [
    { 
      id: 'image-word', 
      title: 'Image to Word', 
      description: 'Match images with their Swedish words',
      icon: <ImageIcon size={24} className="text-primary-500" />
    },
    { 
      id: 'listen-word', 
      title: 'Listen and Choose', 
      description: 'Select the word you hear',
      icon: <Volume2 size={24} className="text-secondary-600" />
    },
    { 
      id: 'sentence', 
      title: 'Complete the Sentence', 
      description: 'Fill in the missing word',
      icon: <AlignLeft size={24} className="text-accent-500" />
    }
  ];
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-primary-700">Play & Practice</h1>
      
      {!activeQuiz ? (
        <>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Games</h2>
            <div className="space-y-3">
              {quizTypes.map(quiz => (
                <button
                  key={quiz.id}
                  className="card p-4 w-full flex items-center hover:shadow-md transition-shadow"
                  onClick={() => setActiveQuiz(quiz.id)}
                >
                  <div className="bg-neutral-100 p-3 rounded-full mr-4">
                    {quiz.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">{quiz.title}</h3>
                    <p className="text-sm text-neutral-500">{quiz.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">My Vocabulary</h2>
              <button className="text-sm text-primary-500 font-medium">View All</button>
            </div>
            
            <div className="card p-4">
              <div className="flex items-center mb-4">
                <div className="bg-success-100 p-3 rounded-full mr-4">
                  <Book className="text-success-500" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Review Words</h3>
                  <p className="text-sm text-neutral-500">{myVocabulary.length} words saved</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {myVocabulary.slice(0, 4).map(word => (
                  <div key={word.id} className="px-3 py-1 bg-neutral-100 rounded-full text-sm">
                    {word.word}
                  </div>
                ))}
                {myVocabulary.length > 4 && (
                  <div className="px-3 py-1 bg-neutral-100 rounded-full text-sm">
                    +{myVocabulary.length - 4} more
                  </div>
                )}
              </div>
              
              <button className="btn-primary w-full">Start Practice</button>
            </div>
          </section>
        </>
      ) : (
        <QuizCard
          quizType={activeQuiz}
          onClose={() => setActiveQuiz(null)}
        />
      )}
    </div>
  );
};

export default Play;