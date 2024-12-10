import React, { useState } from 'react';
import Header from '../components/Header';
import Membership from '../components/Membership';
import Pricing from '../components/Pricing';
import Footer from '../components/footer';
import ProfileCard from '../components/ProfileCard';
import ProfileModal from '../components/ProfileModal';
import ContactModal from '../components/ContactModal';

const profiles = [
  { id: 2, title: 'Kelly', artist: 'Model', price: 15, type: 'beats', previewUrl: 'profile2.mp3', spotifyUrl: '#', youtubeUrl: '#', buyUrl: '#', imageUrl: '/images/p4.jpg', description: 'Kelly, one of our fine...', description2: 'Wenjim Kelly Eyah was born on August 11, 2004, in Batibo, Cameroon, to Afuh Kalista E and Afuh Simon W. From a young age, Wenjim demonstrated a unique blend of creativity and determination that would later shape her career path. Standing at a height of 1.66 meters and possessing a striking Umber skin tone, Wenjim has become a captivating presence in the modeling world.' },
];

function Modelling() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredProfiles = profiles.filter(profile => {
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
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="bg-white dark:bg-dark-body">
        <div className="justify-center p-4 px-8 mx-auto md:w-4/5 pt-28 font-inter md:px-0">
          <h1 className="mb-4 text-3xl font-medium text-[#FF5722] dark:text-slate-50">Meet our finest models...</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProfiles.map(profile => (
              <ProfileCard key={profile.id} profile={profile} onClick={setSelectedProfile} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-2 font-medium text-white bg-[#FF5722] rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5722] dark:bg-transparent dark:border dark:border-gray-800"
            >
              Model with us
            </button>
          </div>
        </div>

        <ProfileModal
          profile={selectedProfile}
          isOpen={!!selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>

      <div>
        <Membership />
      </div>

      <div>
        <Pricing />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Modelling;