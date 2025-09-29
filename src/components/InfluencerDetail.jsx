import { X, ExternalLink, Users, TrendingUp, Sparkles } from 'lucide-react';

const InfluencerDetail = ({ influencer, onClose }) => {
  if (!influencer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-start space-x-3">
            <img
              src={influencer.avatar}
              alt={influencer.name}
              className="w-25 h-25 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{influencer.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">#{influencer.rank}</span>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {influencer.specialty}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Users className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{influencer.followers}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{influencer.engagement}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Engagement</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Sparkles className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{influencer.topContent.length}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Content</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">About</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{influencer.bio}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Top Content</h4>
            <div className="flex flex-wrap gap-2">
              {influencer.topContent.map((content, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {content}
                </span>
              ))}
            </div>
          </div>

          <a
            href={influencer.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-gray-900 dark:bg-gray-600 text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
          >
            <span className="font-medium text-sm">Visit Channel</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDetail;