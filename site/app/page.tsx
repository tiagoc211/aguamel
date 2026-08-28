import Image from "next/image";
import Queijinhos from "./Queijinhos";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#historia">Saltar para o conteúdo</a>

      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-background"
          src="/images/paisagem.webp"
          alt="Vista de Alte e dos cerros a partir da Água Mel"
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
          <div className="cerros-title-row">
            <h2 id="cerros-title">Alte, guardada<br />por quatro cerros.</h2>
            <div className="cerros-pastry" aria-hidden="true">
              <Image
                className="pastry-image"
                src="/images/pastel-nata-top.webp"
                alt=""
                width={1024}
                height={1024}
                sizes="(min-width: 760px) 28vw, 210px"
              />
            </div>
          </div>
          <p className="cerros-intro">Galvana, Francelheira, Castelo e Rocha Maior formam o horizonte da nossa história.</p>
        </div>

        <ol className="cerro-list" aria-label="Os quatro cerros de Alte" tabIndex={0}>
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
                src="/images/fundoaguamel.webp"
                alt="Fotografia original da família Água Mel à porta da pastelaria"
                width={1200}
                height={1708}
              />
            </div>
            <figcaption>À porta da Água Mel</figcaption>
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

      <Queijinhos />

      <section className="almond-feature" aria-labelledby="almond-title">
        <div className="almond-copy">
          <p className="section-number">Da nossa montra</p>
          <h2 id="almond-title">Pastel de<br />amêndoa.</h2>
          <p>Visto de cima, como um segundo sol da casa.</p>
        </div>

        <div className="almond-pastry">
          <Image
            className="pastry-image"
            src="/images/pastel-amendoa-top.webp"
            alt="Pastel de amêndoa da Água Mel visto de cima"
            width={1024}
            height={1024}
            sizes="(min-width: 760px) 28vw, 210px"
          />
        </div>
      </section>

      <section className="visit" id="visitar" aria-labelledby="visit-title">
        <div className="visit-heading">
          <p className="section-number">04 · Visite-nos</p>
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
