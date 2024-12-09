import React, { useState } from 'react';
import Header from '../../components/Header';
import Pricing from '../../components/Pricing';
import Footer from '../../components/footer';
import MusicCard from '../../components/MusicCard';
import SearchAndFilter from '../../components/SearchAndFilter';
import MusicPlayerModal from '../../components/MusicPlayerModal';

const tracks = [
  { id: 1, title: 'Trickstar', artist: 'Prime', price: 10, type: 'music', previewUrl: 'track1.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/trickstar.png', description: 'Trickstar" blends old-school beats with modern production, featuring hard-hitting drums, catchy bass, and intricate urban melodies.', description2: 'Hip Hop' },
  { id: 2, title: 'Hard drill', artist: 'Prime', price: 15, type: 'beats', previewUrl: 'track2.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/hard_drille.png', description: '"Hard Drill" features deep 808s, sharp hi-hats, punchy snares, and dark melodies, creating intense, gritty drill energy.', description2: 'Drill' },
  { id: 3, title: 'Time no dey', artist: 'Prime', price: 20, type: 'instrumentals', previewUrl: 'track3.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/time_no_dey.png', description: '"TND" combines Afrobeat rhythms with Amapiano grooves, featuring rolling basslines, syncopated percussion, and lush, airy keys.', description2: 'Afrobeat' },

  // Add more tracks as needed
];

function Releases() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(null);

  const filteredTracks = tracks.filter(track => {
    const matchesSearch =
      searchTerm === '' ||
      track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === '' || track.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen text-gray-900 bg-white dark:bg-dark-body dark:text-gray-100">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="justify-center p-4 px-8 mx-auto md:w-4/5 pt-28 font-inter md:px-0">
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTracks.map(track => (
            <MusicCard key={track.id} track={track} onClick={setSelectedTrack} />
          ))}
        </div>
      </div>

      <MusicPlayerModal
        track={selectedTrack}
        isOpen={!!selectedTrack}
        onClose={() => setSelectedTrack(null)}
      />

      <Footer />
    </div>
  );
}

export default Releases;
