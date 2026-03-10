import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  playSFX: (type: 'click' | 'transition' | 'notification' | 'typing') => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ambient background music - using a royalty free piano track placeholder
    bgMusicRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.1;

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (bgMusicRef.current) {
      if (isPlaying) {
        bgMusicRef.current.pause();
      } else {
        bgMusicRef.current.play().catch(e => console.log("Audio play blocked by browser", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playSFX = (type: 'click' | 'transition' | 'notification' | 'typing') => {
    const sfxUrls = {
      click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
      transition: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
      notification: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
      typing: 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3'
    };
    
    const audio = new Audio(sfxUrls[type]);
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, playSFX }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within AudioProvider');
  return context;
};
