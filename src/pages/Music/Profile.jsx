import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/footer';
import SearchAndFilter from '../../components/SearchAndFilter';
import ProfileCard from '../../components/ProfileCard';
import ProfileModal from '../../components/ProfileModal';

const profiles = [
  { id: 1, title: 'ZPrime', artist: 'Producer', price: 10, type: 'music', previewUrl: 'profile1.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/mp2.jpg', description: 'Zama Protus, AKA ZPRIM...', description2: 'Zama Protus, aka Z_Prime, CEO of Multi_Prime Entertainment, was born on April 16, 1996, in Cameroon. From a young age, Zama displayed a profound passion for entertainment, drawing inspiration from his cultural roots and the vibrant arts scene in his community.' },
  { id: 2, title: 'Kelly', artist: 'Model', price: 15, type: 'beats', previewUrl: 'profile2.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/p4.jpg', description: 'Kelly, one of our fine...', description2: 'Wenjim Kelly Eyah was born on August 11, 2004, in Batibo, Cameroon, to Afuh Kalista E and Afuh Simon W. From a young age, Wenjim demonstrated a unique blend of creativity and determination that would later shape her career path. Standing at a height of 1.66 meters and possessing a striking Umber skin tone, Wenjim has become a captivating presence in the modeling world.' },
  { id: 3, title: 'Mel Vimin', artist: 'Artist', price: 20, type: 'instrumentals', previewUrl: 'profile3.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/m4.jpg', description: 'No info to show...', description2: 'No info to show...' },

  // Add more profiles as needed
];

function Profiles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedprofile, setSelectedprofile] = useState(null);

  const filteredprofiles = profiles.filter(profile => {
    const matchesSearch =
      searchTerm === '' ||
      profile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === '' || profile.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen text-gray-900 bg-white dark:bg-dark-body dark:text-gray-100">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="justify-center p-4 px-8 mx-auto md:w-4/5 pt-28 font-inter md:px-0">
       
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredprofiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} onClick={setSelectedprofile} />
          ))}
        </div>
      </div>

      <ProfileModal
        profile={selectedprofile}
        isOpen={!!selectedprofile}
        onClose={() => setSelectedprofile(null)}
      />

      <Footer />
    </div>
  );
}

export default Profiles;
