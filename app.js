import React, { useState } from 'react';
import SocialMediaLogin from './components/SocialMediaLogin';
import YouTubeLogin from './components/YouTubeLogin';
import FollowerForm from './components/FollowerForm';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SocialMediaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const App = () => {
  const [platform, setPlatform] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [followersGained, setFollowersGained] = useState('');

  const handleLogin = (platform, email, password) => {
    setPlatform(platform);
    setEmail(email);
    setPassword(password);
  };

  const handleFollowersGained = (platform, numFollowers) => {
    setFollowersGained(`Gained ${numFollowers} followers on ${platform}`);
  };

  return (
    <Container>
      <SocialMediaList>
        <SocialMediaLogin platform="Gmail" onLogin={handleLogin} />
        <SocialMediaLogin platform="Facebook" onLogin={handleLogin} />
        <SocialMediaLogin platform="Twitter" onLogin={handleLogin} />
        <SocialMediaLogin platform="TikTok" onLogin={handleLogin} />
        <SocialMediaLogin platform="Instagram" onLogin={handleLogin} />
        <SocialMediaLogin platform="Snapchat" onLogin={handleLogin} />
        <SocialMediaLogin platform="Telegram" onLogin={handleLogin} />
        <SocialMediaLogin platform="WhatsApp" onLogin={handleLogin} />
        <YouTubeLogin onLogin={handleLogin} />
      </SocialMediaList>
      {platform && (
        <FollowerForm
          platform={platform}
          email={email}
          password={password}
          onFollowersGained={handleFollowersGained}
        />
      )}
      {followersGained && <p>{followersGained}</p>}
    </Container>
  );
};

export default App;
