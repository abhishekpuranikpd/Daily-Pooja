import React from 'react';
import './App.css';

class App extends React.Component {
  playSound = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  createFlower = () => {
    const flowerImages = [
      'https://drive.google.com/uc?id=1fVO0LMIxRcnldaIv5wwr8AFpYEdDUsJ9',
      'https://drive.google.com/uc?id=1f5hlG3C_kf2ADfEBAwW2ZOy39UPP_3bd',
      'https://drive.google.com/uc?id=1f7rDodAVJoMFST-FmW4_ed6eUvpljBeH',
      'https://drive.google.com/uc?id=1fBh60n6BfSQVEqvHC9dofZzGFfZ7VGzg',
      'https://drive.google.com/uc?id=1fY-0xuvLDbQyTUIo-4J3ZpCbOe3eDhHK',
      'https://drive.google.com/uc?id=1fgRBelxl2YZTyCYety_nlHulfSXL7Y09',
    ];

    const flowerIndex = Math.floor(Math.random() * flowerImages.length);
    const flowerSrc = flowerImages[flowerIndex];

    const flower = document.createElement('img');
    flower.classList.add('flower-image');
    flower.src = flowerSrc;
    document.body.appendChild(flower);
  };

  render() {
    return (
      <div className="image-list-container">
        <div className="image-list">
          <a href="#" className="active"></a>
          <a href="#" className="active"></a>
          <a href="#" className="active"></a>
          <a href="#" className="active"></a>
          <a href="#" className="active"></a>
          <a href="#" className="active"></a>
          <a href="#" className="active"></a>
        </div>
        <img
          id="overlay-image"
          src="https://drive.google.com/uc?id=1e7ausKjuqBEVuKWmtXk75beRNjghm9su"
        />
        <img
          id="left-image"
          src="https://drive.google.com/uc?id=1ewKN1l0uIU2btzkRXQ1BQblKMJ4NrTj_"
          onClick={() =>
            this.playSound('https://drive.google.com/uc?id=1dvfNBHSTKLNzlIPo3LTKgNfAMyAfW2Ks')
          }
        />
        <img
          id="right-image"
          src="https://drive.google.com/uc?id=1eqkHDSf1yJZ8okTzXW1eKevL1CsZVfwb"
          onClick={() =>
            this.playSound('https://drive.google.com/uc?id=1e-ggwhSbYp85KFJB04iPIvyJecF1UgqY')
          }
        />
        <img
          id="left1-image"
          src="https://drive.google.com/uc?id=1fu2IfEFw1h-97e_FtLOyigyT8UpQmkLH"
          onClick={() =>
            this.playSound('https://drive.google.com/uc?id=1fx6OykqT-MYpHKIvnGVlYQZeonxYO-0X')
          }
        />
        <img
          id="bottom-left-image"
          src="https://drive.google.com/uc?id=1fVO0LMIxRcnldaIv5wwr8AFpYEdDUsJ9"
          onClick={this.createFlower}
        />
      </div>
    );
  }
}

export default App;

