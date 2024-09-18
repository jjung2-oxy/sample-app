import React from 'react';

interface PromptSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="mt-2 p-2 bg-gray-100 rounded-md">
      <p className="text-sm font-semibold mb-2">Suggested prompts:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;