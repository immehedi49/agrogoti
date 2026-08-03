function Project5Page({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-rose-700 mb-4">FSTIP</h1>
        <p className="text-2xl text-gray-600 mb-8">Working</p>
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-emerald-300 bg-white px-6 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Project5Page;
