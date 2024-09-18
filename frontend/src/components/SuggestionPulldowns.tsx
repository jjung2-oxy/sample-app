import React, { useState } from 'react';
import { SuggestionItem, suggestionData } from '../suggestionData';
import styles from './SuggestionPulldowns.module.css';

interface SuggestionPulldownsProps {
  onSuggestionSelected: (item: SuggestionItem) => void;
}

export const SuggestionPulldowns: React.FC<SuggestionPulldownsProps> = ({ onSuggestionSelected }) => {
  const [level1Selection, setLevel1Selection] = useState<SuggestionItem | null>(null);

  const handleLevel1Selection = (item: SuggestionItem) => {
    setLevel1Selection(item);
  };

  const handleLevel2Selection = (item: SuggestionItem) => {
    onSuggestionSelected(item);
  };

  return (
    <div className={styles.suggestionContainer}>
      <select 
        onChange={(e) => handleLevel1Selection(suggestionData[parseInt(e.target.value)])}
        className={styles.suggestionSelect}
      >
        <option value="">Select a topic</option>
        {suggestionData.map((item, index) => (
          <option key={index} value={index}>{item.text}</option>
        ))}
      </select>
      
      {level1Selection && (
        <select 
          onChange={(e) => handleLevel2Selection(level1Selection.children![parseInt(e.target.value)])}
          className={styles.suggestionSelect}
        >
          <option value="">Select a subtopic</option>
          {level1Selection.children?.map((item, index) => (
            <option key={index} value={index}>{item.text}</option>
          ))}
        </select>
      )}
    </div>
  );
};