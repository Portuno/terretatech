import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Pillars } from './components/Pillars';
import { Actions } from './components/Actions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MembershipModal } from './components/MembershipModal';
import { VibeHackModal } from './components/VibeHackModal';

function App() {
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isVibeHackModalOpen, setIsVibeHackModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenMembershipModal={() => setIsMembershipModalOpen(true)} />
      <Hero
        onOpenMembershipModal={() => setIsMembershipModalOpen(true)}
        onOpenVibeHackModal={() => setIsVibeHackModalOpen(true)}
      />
      <Mission />
      <Pillars />
      <Actions />
      <Contact />
      <Footer />
      <MembershipModal
        isOpen={isMembershipModalOpen}
        onClose={() => setIsMembershipModalOpen(false)}
      />
      <VibeHackModal
        isOpen={isVibeHackModalOpen}
        onClose={() => setIsVibeHackModalOpen(false)}
      />
    </div>
  );
}

export default App;
