import { useState, useMemo } from 'react';

export const useSearch = (data, searchFields) => {
  const [query, setQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!query.trim()) return data;

    return data.filter(item => {
      return searchFields.some(field => {
        const fieldValue = item[field];
        if (typeof fieldValue === 'string') {
          return fieldValue.toLowerCase().includes(query.toLowerCase());
        }
        if (Array.isArray(fieldValue)) {
          return fieldValue.some(value => 
            typeof value === 'string' && 
            value.toLowerCase().includes(query.toLowerCase())
          );
        }
        return false;
      });
    });
  }, [data, query, searchFields]);

  return {
    query,
    setQuery,
    filteredData,
    isSearching: query.trim().length > 0
  };
};
