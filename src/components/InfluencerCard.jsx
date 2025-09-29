import { ExternalLink, Users, TrendingUp } from 'lucide-react';

const InfluencerCard = ({ influencer, onClick }) => {
  return (
    <div
      onClick={() => onClick(influencer)}
      className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer"
    >
      <div className="flex items-start space-x-3">
        <img
          src={influencer.avatar}
          alt={influencer.name}
          className="w-25 h-25 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white truncate">{influencer.name}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">#{influencer.rank}</span>
            </div>
            <a
              href={influencer.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mb-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {influencer.specialty}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">{influencer.bio}</p>

          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <Users className="w-3.5 h-3.5 mr-1" />
              {influencer.followers}
            </span>
            <span className="flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              {influencer.engagement}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;