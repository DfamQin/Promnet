import './App.css';

import pfpceunah from './assets/ppakjgo.jpg';
import musicImg from './assets/musikceunah.png';
import gameImg from './assets/gamingcenah.png';
import tiktokImg from './assets/tiktokceunah.png';

function App() {
  return (
    <>
      <h1>About Me!!!</h1>

      <div className="imgcontainer">
        <img src={pfpceunah} alt="Foto Profil" className="profile-img" />
      </div>
      
      <h2>alow everyone!! here's some information about me</h2>
      <div className="data">
        <p>Nama : Daffa Muttaqin</p>
        <p>NIM : 2504148</p>
        <p>Prodi : Pendidikan Ilmu Komputer</p>
        <p>Kelas : 3B</p>
        <p>TTL : Bandung, 23 Juli 2007</p>
        <p>Alamat : Jl.Raya Soreang Banjaran Kp.Citaliktik No.92</p>
      </div>

      <h2>Interest</h2>
      <div className="interest">
        <div className="interest-card">
          <img src={musicImg} alt="Playlist" className="interest-img" />
          <div className="interest-info">
            <h3>🎵 Music & Playlist</h3>
            <p>K-Pop / KR Playlist (aespa, Hearts2Hearts, dll.)</p>
          </div>
        </div>

        <div className="interest-card">
          <img src={gameImg} alt="Roblox Game" className="interest-img" />
          <div className="interest-info">
            <h3>🎮 Gaming</h3>
            <p>Roblox (Blade Ball, Item Duels & Trading)</p>
          </div>
        </div>

        <div className="interest-card">
          <img src={tiktokImg} alt="TikTok Profile" className="interest-img" />
          <div className="interest-info">
            <h3>🎬 Content Creation</h3>
            <p>TikTok Video Creator (@shikimizuuu / m1ju)</p>
          </div>
        </div>
      </div>

      <h2>Contact</h2>
      <div className="contact"> 
        <p>Telepon: 085720125974</p>
        <p>Email: shikimizuu@gmail.com</p>
      </div>

      <h2>Social</h2>
      <a href="https://www.instagram.com/dfamqin/">Insta</a>
      <a href="https://www.tiktok.com/@shikimizuuu">Tiktok</a>
      <a href="https://www.facebook.com/profile.php?id=100021882160758">Facebook</a>
      <a href="https://guns.lol/1tsm1ju./">One For All</a>
    </>
  );
}

export default App;