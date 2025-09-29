import { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, TrendingUp, BookOpen, Moon, Sun } from 'lucide-react';
import { influencers, specialties } from './data/influencerData';
import InfluencerCard from './components/InfluencerCard';
import InfluencerDetail from './components/InfluencerDetail';
import JourneyGuide from './components/JourneyGuide';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [showJourneyGuide, setShowJourneyGuide] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      if (!savedTheme) localStorage.setItem('theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      if (!savedTheme) localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const filteredInfluencers = useMemo(() => {
    let filtered = influencers;

    if (selectedSpecialty !== 'All') {
      filtered = filtered.filter(inf => inf.specialty === selectedSpecialty);
    }

    if (searchTerm) {
      filtered = filtered.filter(inf =>
        inf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inf.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inf.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort((a, b) => a.rank - b.rank).slice(0, 100);
  }, [searchTerm, selectedSpecialty]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-gray-900 dark:text-white" />
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Influencer 100</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-8 h-8 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setShowJourneyGuide(true)}
                className="flex items-center space-x-2 px-4 py-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Journey Guide</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="space-y-3">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search influencers..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-600 transition-colors text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedSpecialty('All')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  selectedSpecialty === 'All'
                    ? 'bg-gray-900 dark:bg-gray-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                All
              </button>
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                    selectedSpecialty === specialty
                      ? 'bg-gray-900 dark:bg-gray-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Top 100 Influencers</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedSpecialty === 'All' ? 'All specialties' : selectedSpecialty} • {filteredInfluencers.length} found
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">Trending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Influencer Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        {filteredInfluencers.length > 0 ? (
          <div className="space-y-3">
            {filteredInfluencers.map((influencer) => (
              <InfluencerCard
                key={influencer.id}
                influencer={influencer}
                onClick={setSelectedInfluencer}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Search className="w-8 h-8 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No influencers found</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedInfluencer && (
        <InfluencerDetail
          influencer={selectedInfluencer}
          onClose={() => setSelectedInfluencer(null)}
        />
      )}

      {showJourneyGuide && (
        <JourneyGuide
          specialty={selectedSpecialty === 'All' ? 'Tech' : selectedSpecialty}
          onClose={() => setShowJourneyGuide(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 py-6 mt-12 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} <a href="https://rosephdarl.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Roseph Darl</a>
            . Built using{' '}
            <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              Vite
            </a>
            {' + '}
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              Tailwind CSS
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
