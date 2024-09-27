import Image1 from '../assets/album_beatles.jpg';
import Image2 from '../assets/album_cold_play.jpg';
import Image3 from '../assets/album_matue.jpg';
import Image4 from '../assets/matue_perfil.jpg';
import Image5 from '../assets/ariana_perfil.jpg';
import Image6 from '../assets/luisa_perfil.jpg';
import Image7 from '../assets/anitta_perfil.jpg';
import '../css/base.css';
import "../css/estilos.css";

const Home=()=>{
    return(
        <>
        <img src='/src/assets/banner1.jpg' id='banner'/>
        <h1>Álbuns em destaque</h1>
        <div className='cards'>
            <img src={Image1}/>
            <img src={Image2}/>
            <img src={Image3}/>
        </div>

        <h1>Mais acessadas</h1>
        <div id='grid'>
        <div class="grid-item">
            1. Crack com mussilon
        </div>
        <div class="grid-item">5. Saveiro</div>
        <div class="grid-item"><img src={Image4}/><span> Matuê</span></div>
        <div class="grid-item">2. Die with a smile</div>
        <div class="grid-item">6. Imagina esse cenário</div>
        <div class="grid-item"><img src={Image5}/><span> Ariana Grande</span></div>
        <div class="grid-item">3. Xonei</div>
        <div class="grid-item">7. Coração Partido</div>
        <div class="grid-item"><img src={Image6}/><span> Luisa Sonza</span></div>
        <div class="grid-item">4. The emptiness machine</div>
        <div class="grid-item">8. Depois do rodeio</div>
        <div class="grid-item"><img src={Image7}/><span> Anitta</span></div>
        </div>
        </>

    )
}
export default Home