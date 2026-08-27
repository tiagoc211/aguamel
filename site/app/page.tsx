export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#historia">Saltar para o conteúdo</a>

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Água Mel — início">Água Mel</a>
          <p className="location">Alte · Algarve</p>
          <a className="visit-link" href="#visitar">Visitar</a>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow">Doçaria tradicional · desde Alte</p>
          <h1 id="hero-title">Uma casa<br />com história.</h1>
          <p className="intro">Sabores com lugar, feitos entre os quatro cerros que guardam a aldeia.</p>
          <a className="enter-button" href="#historia">
            <span>Entre</span><span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="sun-stage" aria-hidden="true">
          <div className="pastry-sun"><div className="pastry-custard" /></div>
        </div>

        <div className="wood-horizon" aria-hidden="true">
          <div className="hill hill-one" /><div className="hill hill-two" />
          <div className="hill hill-three" /><div className="hill hill-four" />
          <div className="village">
            <i className="house house-one" /><i className="church" />
            <i className="house house-two" /><i className="mill" />
            <i className="house house-three" />
          </div>
        </div>

        <p className="prototype-note">Silhueta provisória · peça original em preparação</p>
      </section>

      <section className="story-preview" id="historia" aria-labelledby="story-title">
        <p className="section-number">01 · A casa</p>
        <h2 id="story-title">Alte, guardada por quatro cerros.</h2>
        <p>Galvana, Francelheira, Castelo e Rocha Maior formam o horizonte da nossa história. Em breve, a peça original em madeira dará forma a este percurso.</p>
      </section>

      <section className="cerros" aria-labelledby="cerros-title">
        <div className="cerros-heading">
          <p className="section-number">02 · O lugar</p>
          <h2 id="cerros-title">Quatro cerros,<br />um lugar.</h2>
          <p className="cerros-intro">Cada nome será uma entrada para as histórias representadas na peça em madeira. Por agora, deixamos as perguntas certas — sem inventar respostas.</p>
        </div>

        <ol className="cerro-list" aria-label="Os quatro cerros de Alte" tabIndex={0}>
          <li className="cerro-card">
            <p className="cerro-number">01</p>
            <h3>Galvana</h3>
            <p>Que lugar ocupa este cerro na peça?</p>
            <span>História por confirmar</span>
          </li>
          <li className="cerro-card">
            <p className="cerro-number">02</p>
            <h3>Francelheira</h3>
            <p>Que histórias e caminhos lhe estão ligados?</p>
            <span>História por confirmar</span>
          </li>
          <li className="cerro-card">
            <p className="cerro-number">03</p>
            <h3>Castelo</h3>
            <p>Que referências da aldeia aparecem deste lado?</p>
            <span>História por confirmar</span>
          </li>
          <li className="cerro-card">
            <p className="cerro-number">04</p>
            <h3>Rocha Maior</h3>
            <p>Que memória fecha o horizonte de Alte?</p>
            <span>História por confirmar</span>
          </li>
        </ol>
      </section>

      <section className="visit-preview" id="visitar" aria-label="Visitar Água Mel">
        <p>Água Mel · Largo José Cavaco Vieira · Alte</p>
      </section>
    </main>
  );
}
