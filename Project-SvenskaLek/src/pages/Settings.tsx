import React, { useState } from 'react';
import { Volume2, Moon, Bell, Trash2, InfoIcon, LogOut } from 'lucide-react';

const Settings: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-primary-700">Settings</h1>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200">
          <h2 className="font-semibold">App Settings</h2>
        </div>
        
        <div className="divide-y divide-neutral-200">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <Volume2 size={20} className="text-primary-500" />
              </div>
              <div>
                <p className="font-medium">Sound Effects</p>
                <p className="text-sm text-neutral-500">Enable sound effects in the app</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={soundEnabled}
                onChange={() => setSoundEnabled(!soundEnabled)}
              />
              <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <Moon size={20} className="text-primary-500" />
              </div>
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-neutral-500">Change app appearance</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={darkModeEnabled}
                onChange={() => setDarkModeEnabled(!darkModeEnabled)}
              />
              <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <Bell size={20} className="text-primary-500" />
              </div>
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-neutral-500">Receive daily reminders</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200">
          <h2 className="font-semibold">Data</h2>
        </div>
        
        <button className="p-4 w-full flex items-center text-left text-error-600 hover:bg-neutral-50">
          <div className="bg-error-100 p-2 rounded-full mr-3">
            <Trash2 size={20} className="text-error-500" />
          </div>
          <div>
            <p className="font-medium">Reset Progress</p>
            <p className="text-sm text-neutral-500">Clear all your learning data</p>
          </div>
        </button>
      </div>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200">
          <h2 className="font-semibold">About</h2>
        </div>
        
        <button className="p-4 w-full flex items-center text-left hover:bg-neutral-50">
          <div className="bg-primary-100 p-2 rounded-full mr-3">
            <InfoIcon size={20} className="text-primary-500" />
          </div>
          <div>
            <p className="font-medium">About SvenskaLek</p>
            <p className="text-sm text-neutral-500">Version 1.0.0</p>
          </div>
        </button>
      </div>
      
      <button className="w-full p-4 flex items-center justify-center text-error-600 hover:bg-error-50 rounded-lg transition-colors">
        <LogOut size={20} className="mr-2" />
        <span className="font-medium">Sign Out</span>
      </button>
    </div>
  );
};

export default Settings;