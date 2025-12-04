import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Roth Business</h1>
          <p className="text-gray-600 text-sm">ជ្រើសរើសប្រភេទវិក័យប័ត្រ</p>
          <p className="text-xs text-gray-500">Select Invoice Type</p>
        </div>

        <div className="space-y-3">
          {/* Scrub Button */}
          <button
            onClick={() => navigate('/scrub')}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl p-4 shadow-lg transform transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center justify-center gap-3">
              <img src="/scrub.jpg" alt="Scrub" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow" />
              <div className="text-left">
                <h2 className="text-lg font-bold">🧴 Scrub</h2>
                <p className="text-emerald-100 text-xs">ស្រ្កាប់ផលិតផល (5 មុខ)</p>
              </div>
            </div>
          </button>

          {/* Sabo-Speii Button */}
          <button
            onClick={() => navigate('/sabo-speii')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 shadow-lg transform transition-all hover:scale-105 active:scale-95"
          >
            <div className="flex items-center justify-center gap-3">
              <img src="/sabo-speii.jpg" alt="Sabo Speii" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow" />
              <div className="text-left">
                <h2 className="text-lg font-bold">🧼 Sabo Speii</h2>
                <p className="text-blue-100 text-xs">សាប៊ូស្ពៃ ផលិតផល (12 មុខ)</p>
              </div>
            </div>
          </button>
        </div>

        <div className="text-center mt-6 text-gray-400 text-xs">
          <p>© 2024 Roth Business</p>
        </div>
      </div>
    </div>
  );
};
