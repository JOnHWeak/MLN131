import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [readingProgress, setReadingProgress] = useState(0);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      content: note.content,
      page: note.page,
      timestamp: new Date().toISOString(),
      ...note
    };
    setNotes(prev => [...prev, newNote]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes(prev => 
      prev.map(note => 
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const toggleBookmark = (pageId) => {
    setBookmarks(prev => {
      const isBookmarked = prev.includes(pageId);
      if (isBookmarked) {
        return prev.filter(id => id !== pageId);
      } else {
        return [...prev, pageId];
      }
    });
  };

  const isBookmarked = (pageId) => {
    return bookmarks.includes(pageId);
  };

  const updateReadingProgress = (progress) => {
    setReadingProgress(Math.min(100, Math.max(0, progress)));
  };

  const resetProgress = () => {
    setReadingProgress(0);
  };

  const value = {
    currentPage,
    setCurrentPage,
    readingProgress,
    updateReadingProgress,
    resetProgress,
    notes,
    addNote,
    updateNote,
    deleteNote,
    bookmarks,
    toggleBookmark,
    isBookmarked,
    searchQuery,
    setSearchQuery,
    sidebarOpen,
    setSidebarOpen
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
