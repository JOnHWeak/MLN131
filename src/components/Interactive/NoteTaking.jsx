import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiEdit3, FiTrash2, FiSave, FiX, FiBookmark, FiClock } from 'react-icons/fi';
import { useApp } from '../../contexts/AppContext';

const NoteTaking = ({ pageId, pageTitle }) => {
  const { notes, addNote, updateNote, deleteNote } = useApp();
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  // Filter notes for current page
  const pageNotes = notes.filter(note => note.pageId === pageId);

  const handleAddNote = () => {
    if (noteContent.trim()) {
      addNote({
        pageId,
        pageTitle,
        title: noteTitle.trim() || 'Ghi chú mới',
        content: noteContent.trim(),
        timestamp: new Date().toISOString()
      });
      setNoteContent('');
      setNoteTitle('');
      setIsAddingNote(false);
    }
  };

  const handleEditNote = (note) => {
    setEditingNote(note.id);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  const handleUpdateNote = () => {
    if (noteContent.trim()) {
      updateNote(editingNote, {
        title: noteTitle.trim() || 'Ghi chú đã chỉnh sửa',
        content: noteContent.trim(),
        updatedAt: new Date().toISOString()
      });
      setEditingNote(null);
      setNoteContent('');
      setNoteTitle('');
    }
  };

  const handleDeleteNote = (noteId) => {
    if (window.confirm('Bạn có chắc muốn xóa ghi chú này?')) {
      deleteNote(noteId);
    }
  };

  const cancelEdit = () => {
    setEditingNote(null);
    setNoteContent('');
    setNoteTitle('');
    setIsAddingNote(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <FiBookmark className="mr-2 text-blue-500" size={20} />
          Ghi chú cá nhân
        </h3>
        <button
          onClick={() => setIsAddingNote(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <FiPlus className="mr-2" size={16} />
          Thêm ghi chú
        </button>
      </div>

      {/* Add/Edit Note Form */}
      <AnimatePresence>
        {(isAddingNote || editingNote) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tiêu đề ghi chú
                </label>
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="Nhập tiêu đề ghi chú..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nội dung ghi chú
                </label>
                <textarea
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="Nhập nội dung ghi chú..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <FiX className="mr-2 inline" size={16} />
                  Hủy
                </button>
                <button
                  onClick={editingNote ? handleUpdateNote : handleAddNote}
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <FiSave className="mr-2" size={16} />
                  {editingNote ? 'Cập nhật' : 'Lưu ghi chú'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notes List */}
      <div className="space-y-4">
        {pageNotes.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <FiBookmark className="mx-auto mb-4 text-gray-300 dark:text-gray-600" size={48} />
            <p>Chưa có ghi chú nào cho trang này</p>
            <p className="text-sm mt-1">Nhấn "Thêm ghi chú" để bắt đầu</p>
          </div>
        ) : (
          <AnimatePresence>
            {pageNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {note.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <FiClock className="mr-1" size={12} />
                      {formatDate(note.timestamp)}
                      {note.updatedAt && (
                        <span className="ml-2">(Đã chỉnh sửa: {formatDate(note.updatedAt)})</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 ml-4">
                    <button
                      onClick={() => handleEditNote(note)}
                      className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="Chỉnh sửa ghi chú"
                    >
                      <FiEdit3 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      title="Xóa ghi chú"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {note.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Stats */}
      {pageNotes.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Bạn có {pageNotes.length} ghi chú cho trang này
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteTaking;
