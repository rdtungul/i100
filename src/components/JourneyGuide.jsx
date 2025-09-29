import { BookOpen, Target, Lightbulb, ChevronRight } from 'lucide-react';
import { journeyGuides } from '../data/influencerData';

const JourneyGuide = ({ specialty, onClose }) => {
  const guide = journeyGuides[specialty];

  if (!guide) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{guide.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Journey guide for {specialty}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 space-y-5">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Target className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Steps to Success</h3>
            </div>
            <div className="space-y-3">
              {guide.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Pro Tips</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <ul className="space-y-2">
                {guide.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Remember</h3>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Building influence takes time and consistency. Focus on providing value to your audience,
              stay authentic to your voice, and engage genuinely with your community. Success doesn't
              happen overnight, but with dedication and the right strategy, you can build a meaningful
              presence in the {specialty} space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyGuide;