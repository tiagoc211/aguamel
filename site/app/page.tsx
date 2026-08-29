import Image from "next/image";
import Queijinhos from "./Queijinhos";

const archiveImages = [
  { id: 1177, width: 1449, height: 1086 },
  { id: 1178, width: 1122, height: 1402 },
  { id: 1179, width: 1023, height: 1537 },
  { id: 1180, width: 1533, height: 1026 },
  { id: 1181, width: 1536, height: 1024 },
  { id: 1182, width: 1536, height: 1024 },
  { id: 1184, width: 1547, height: 1016 },
  { id: 1185, width: 1600, height: 938 },
  { id: 1186, width: 1506, height: 1045 },
  { id: 1187, width: 1555, height: 1012 },
  { id: 1188, width: 1529, height: 1029 },
  { id: 1189, width: 1518, height: 1036 },
  { id: 1190, width: 1536, height: 1024 },
  { id: 1191, width: 1495, height: 1052 },
  { id: 1192, width: 1494, height: 1052 },
  { id: 1193, width: 1536, height: 1024 },
  { id: 1194, width: 1530, height: 1028 },
  { id: 1195, width: 1459, height: 1078 },
] as const;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#historia">Saltar para o conteúdo</a>

      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-background"
          src="/images/hero-family-illustrated.webp"
          alt="Família Água Mel à porta da pastelaria, numa composição expandida a partir da fotografia original"
          fill
          priority
          sizes="100vw"
        />

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Água Mel — início">Água Mel</a>
          <p className="location">Alte · Algarve</p>
          <a className="visit-link" href="#visitar">Visitar</a>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow">Doçaria tradicional · desde 1997</p>
          <h1 id="hero-title">Uma casa<br />com história.</h1>
          <p className="intro">Sabores com lugar, feitos entre os quatro cerros que guardam a aldeia.</p>
          <a className="enter-button" href="#historia">
            <span>Entre</span><span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="wood-horizon" aria-hidden="true">
          <Image
            className="wood-art"
            src="/images/wood-alte.webp"
            alt=""
            width={2090}
            height={305}
            sizes="100vw"
          />
        </div>

      </section>

      <section className="cerros" id="historia" aria-labelledby="cerros-title">
        <div className="cerros-heading">
          <p className="section-number">01 · A casa e o lugar</p>
          <h2 id="cerros-title">Alte, guardada<br />por quatro cerros.</h2>
          <p className="cerros-intro">Galvana, Francelheira, Castelo e Rocha Maior formam o horizonte da nossa história.</p>
        </div>

        <div className="cerros-map">
          <div className="bakery-marker" aria-label="Água Mel no centro dos quatro cerros">
            <div className="bakery-icon" aria-hidden="true">
              <span className="bakery-awning" />
              <span className="bakery-door" />
              <span className="bakery-window" />
            </div>
            <strong>Água Mel</strong>
            <small>No coração de Alte</small>
          </div>

          <ol className="cerro-list" aria-label="Os quatro cerros que rodeiam a Água Mel">
            <li className="cerro-card">
              <p className="cerro-number">01</p>
              <h3>Galvana</h3>
            </li>
            <li className="cerro-card">
              <p className="cerro-number">02</p>
              <h3>Francelheira</h3>
            </li>
            <li className="cerro-card">
              <p className="cerro-number">03</p>
              <h3>Castelo</h3>
            </li>
            <li className="cerro-card">
              <p className="cerro-number">04</p>
              <h3>Rocha Maior</h3>
            </li>
          </ol>
        </div>
      </section>

      <section className="memories" id="memorias" aria-labelledby="memories-title">
        <div className="memories-copy">
          <p className="section-number">02 · Memórias</p>
          <h2 id="memories-title">Madeira, retratos,<br />lugares.</h2>
          <p>A peça e as fotografias guardam imagens de Alte e memórias da casa.</p>
        </div>

        <div className="memories-gallery">
          <figure className="memory-image memory-image-main">
            <div className="memory-frame">
              <Image
                src="/images/paisagem.webp"
                alt="Vista de Alte e dos cerros a partir da Água Mel"
                width={2400}
                height={1800}
              />
            </div>
            <figcaption>Vista de Alte</figcaption>
          </figure>
          <figure className="memory-image memory-image-detail">
            <div className="memory-frame">
              <Image
                src="/images/history-photos.webp"
                alt="Quatro fotografias antigas de Alte emolduradas na parede da Água Mel"
                width={1000}
                height={1778}
              />
            </div>
            <figcaption>Retratos de Alte</figcaption>
          </figure>
        </div>
      </section>

      <section className="pastries-feature" aria-label="Pastéis da Água Mel">
        <div className="pastries-pair">
          <figure className="pastry-display pastry-display-nata">
            <Image
              className="pastry-image"
              src="/images/pastel-nata-top.webp"
              alt="Pastel de nata da Água Mel visto de cima"
              width={1024}
              height={1024}
              sizes="(min-width: 760px) 28vw, 210px"
            />
            <figcaption>Pastel de nata</figcaption>
          </figure>

          <figure className="pastry-display pastry-display-almond">
            <Image
              className="pastry-image"
              src="/images/pastel-amendoa-top.webp"
              alt="Pastel de amêndoa da Água Mel visto de cima"
              width={1024}
              height={1024}
              sizes="(min-width: 760px) 28vw, 210px"
            />
            <figcaption>Pastel de amêndoa</figcaption>
          </figure>
        </div>

        <div className="pastries-seal" aria-hidden="true">
          <span>Água Mel</span>
          <small>Alte · 1997</small>
        </div>
      </section>

      <section className="archive" aria-labelledby="archive-title">
        <div className="archive-heading">
          <p className="section-number">03 · Arquivo de Alte</p>
          <h2 id="archive-title">Alte, noutro<br />tempo.</h2>
          <p>Ruas, casas e pessoas da aldeia, vistas agora sem as molduras.</p>
        </div>

        <div className="archive-grid">
          {archiveImages.map((photo, index) => (
            <figure className="archive-photo" key={photo.id}>
              <Image
                src={`/images/arquivo-alte/retrato-${photo.id}.webp`}
                alt={`Fotografia antiga de Alte, arquivo ${String(index + 1).padStart(2, "0")}`}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1100px) 31vw, (min-width: 760px) 43vw, 100vw"
              />
              <figcaption>Arquivo {String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Queijinhos />

      <section className="visit" id="visitar" aria-labelledby="visit-title">
        <div className="visit-heading">
          <p className="section-number">05 · Visite-nos</p>
          <h2 id="visit-title">A porta está<br />em Alte.</h2>
          <p>Encontre-nos no Largo José Cavaco Vieira, no coração de Alte.</p>
        </div>

        <div className="visit-card">
          <div className="visit-address">
            <p className="visit-label">Onde estamos</p>
            <address>
              <strong>Água Mel</strong><br />
              Largo José Cavaco Vieira<br />
              Alte · Algarve
            </address>
            <a
              className="map-link"
              href="https://www.google.com/maps/search/?api=1&amp;query=%C3%81gua%20Mel%20Largo%20Jos%C3%A9%20Cavaco%20Vieira%20Alte"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir a localização da Água Mel no mapa, numa nova janela"
            >
              <span>Abrir no mapa</span><span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="visit-details">
            <div><dt>Horário</dt><dd>09:00–17:00</dd></div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href="https://www.instagram.com/agua_mel97/" target="_blank" rel="noreferrer">
                  @agua_mel97 <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <footer className="site-footer">
          <p>Água Mel · Alte</p>
          <p>Uma casa com história. Sabores com lugar.</p>
          <a href="#top">Voltar ao início ↑</a>
        </footer>
      </section>
    </main>
  );
}
