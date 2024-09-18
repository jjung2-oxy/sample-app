export interface SuggestionItem {
  text: string;
  children?: SuggestionItem[];
  question?: string;
  context?: string;
}

export const suggestionData: SuggestionItem[] = [
  {
    text: "Would you like to chat with Jordan's Senior Project",
    children: [
      {
        text: "Would you like to know more about Jordan's research paper",
        question: "What are the results of Jordan's TFT assistant user testing?",
        context: "You are a knowledgeable academic advisor familiar with Jordan's senior project on a TFT (Teamfight Tactics) Assistant. The project involves both the development of an AI assistant for the game Teamfight Tactics and a research paper analyzing its performance and implications."
      },
      {
        text: "Would you like to know more about the project's program",
        question: "What model of computer vision does Jordan use in his Senior Project?",
        context: "You are an experienced computer vision engineer who has closely followed Jordan's senior project on image recognition systems. The project involves the implementation of a state-of-the-art computer vision model and a comprehensive analysis of its performance in various applications."
      }
    ]
  },
  {
    text: "Would you like to chat with CCO's Company Policy",
    children: [
      {
        text: "Would you like to know more about CCO's Healthcare Benefits",
        question: "What are CCO's providers for Healthcare",
        context: "You are a knowledgeable HR representative familiar with CCO's company policies and employee benefits. You have extensive knowledge about CCO's healthcare offerings and the various providers associated with their plans."
      },
      {
        text: "Would you like to know more about CCO's Time Off Policy",
        question: "How many vacation days do CCO employees have?",
        context: "You are a knowledgeable HR representative familiar with CCO's company policies and employee benefits. You have extensive experience explaining CCO's Time Off Policy to employees and addressing their questions about vacation days and other forms of leave."
      }
    ]
  }
];