import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const DailyMission: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  
  const missions = [
    {
      imageUrl: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300',
      correctAnswer: 'äpple',
      hint: 'A round fruit that is often red or green'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=300',
      correctAnswer: 'bil',
      hint: 'A vehicle with four wheels'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=300',
      correctAnswer: 'flygplan',
      hint: 'A vehicle that flies in the sky'
    }
  ];
  
  const currentMission = missions[currentMissionIndex];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.toLowerCase().trim() === currentMission.correctAnswer) {
      setShowFeedback('correct');
      setTimeout(() => {
        if (currentMissionIndex < missions.length - 1) {
          setCurrentMissionIndex(prev => prev + 1);
          setUserInput('');
          setShowFeedback(null);
          setAttempts(0);
        }
      }, 1500);
    } else {
      setAttempts(prev => prev + 1);
      setShowFeedback('incorrect');
    }
  };

  const clearInput = () => {
    setUserInput('');
    setShowFeedback(null);
  };
  
  return (
    <div className="card overflow-hidden mx-4">
      <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
        <img 
          src={currentMission.imageUrl} 
          alt="Daily mission" 
          className="w-full h-56 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-medium mb-2">What's this in Swedish?</h3>
        
        <form onSubmit={handleSubmit} className="mb-2">
          <div className="relative">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="input pr-10"
              placeholder="Type your answer..."
              disabled={showFeedback === 'correct'}
            />
            {userInput && (
              <button
                type="button"
                onClick={clearInput}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                aria-label="Clear input"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {showFeedback === 'incorrect' && (
            <p className="text-sm text-error-500 mt-1">
              Try again! Hint: {currentMission.hint}
              {attempts >= 3 && (
                <span className="block mt-1">
                  The correct answer is "{currentMission.correctAnswer}"
                </span>
              )}
            </p>
          )}
          
          {showFeedback === 'correct' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-success-500 mt-1"
            >
              Correct! This is "{currentMission.correctAnswer}" in Swedish.
            </motion.p>
          )}
          
          <div className="mt-4">
            {showFeedback !== 'correct' && (
              <button type="submit\" className="btn-primary w-full">
                Check Answer
              </button>
            )}
            
            {showFeedback === 'correct' && currentMissionIndex < missions.length - 1 && (
              <p className="text-center text-sm text-neutral-500">
                Moving to next word...
              </p>
            )}
            
            {showFeedback === 'correct' && currentMissionIndex === missions.length - 1 && (
              <p className="text-center text-success-600 font-medium">
                Congratulations! You've completed all missions!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DailyMission;