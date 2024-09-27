import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import Image6 from '../assets/Image6.png';
import Image7 from '../assets/Image7.png';
import Image8 from '../assets/Image8.png';
import Image9 from '../assets/Image9.png';
import Image10 from '../assets/Image10.png';
import '../css/produtos.css';

const Produtos = () => {
    return (
        <>
            <header>
                <h1>Top Musicas</h1>
            </header>
            <main>
                <article className="produtos">
                    <section className="produto-item">
                        <img src={Image10} alt="imagem-10" />
                        <div>
                            <h3>thank u, next (Ariana Grande)</h3>
                            <p>30.123.456 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image9} alt="imagem-9" />
                        <div>
                            <h3>Future Nostalgia (Dua Lipa)</h3>
                            <p>25.654.879 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image7} alt="imagem-7" />
                        <div>
                            <h3>Bang (Anitta)</h3>
                            <p>18.450.754 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image6} alt="imagem-6" />
                        <div>
                            <h3>Chromatica (Lady Gaga)</h3>
                            <p>20.237.529 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image4} alt="imagem-4" />
                        <div>
                            <h3>Funk Generation (Anitta)</h3>
                            <p>10.783.158 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image3} alt="imagem-3" />
                        <div>
                            <h3>The Tortured Poets Department (Taylor Swift)</h3>
                            <p>11.836.644 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image8} alt="imagem-8" />
                        <div>
                            <h3>Reconstrução (Tiago Iorc)</h3>
                            <p>12.654.879 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image1} alt="imagem-1" />
                        <div>
                            <h3>333 (Matuê)</h3>
                            <p>16.018.541 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image2} alt="imagem-2" />
                        <div>
                            <h3>Escândalo Íntimo (Luisa Sonza)</h3>
                            <p>15.638.798 reproduções</p>
                        </div>
                    </section>

                    <section className="produto-item">
                        <img src={Image5} alt="imagem-5" />
                        <div>
                            <h3>Super (Jão)</h3>
                            <p>8.118.835 reproduções</p>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}

export default Produtos;