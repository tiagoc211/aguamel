'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const products = [
  { id: 'coco', name: 'Coco', number: '01' },
  { id: 'chocolate', name: 'Chocolate', number: '02' },
  { id: 'noz', name: 'Noz', number: '03' },
  { id: 'figo', name: 'Figo', number: '04' },
  { id: 'amendoa', name: 'Amêndoa', number: '05' },
  { id: 'alfarroba', name: 'Alfarroba', number: '06' },
] as const;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function Queijinhos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const sectionTop = section.getBoundingClientRect().top;
      const animationDistance = Math.max(window.innerHeight * 0.5, 360);
      const split = clamp(-sectionTop / animationDistance);
      const labelProgress = clamp((split - 0.58) / 0.28);
      const wide = window.innerWidth >= 760;
      const startX = wide ? 92 : 58;
      const startY = wide ? 155 : 112;
      const endX = Math.max(wide ? 180 : 112, window.innerWidth / 2 - (wide ? 112 : 54));
      const endY = Math.min(wide ? 235 : 210, window.innerHeight * (wide ? 0.27 : 0.25));

      section.querySelectorAll<HTMLElement>('.cheese-piece').forEach((piece, index) => {
        const side = index % 2 === 0 ? -1 : 1;
        const row = Math.floor(index / 2) - 1;
        const x = side * (startX + (endX - startX) * split);
        const y = row * (startY + (endY - startY) * split);
        const scale = 0.78 + split * 0.22;

        piece.style.opacity = split.toFixed(4);
        piece.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        piece.style.setProperty('--label-progress', labelProgress.toFixed(4));
      });

      const together = section.querySelector<HTMLElement>('.cheeses-together');
      if (together) {
        together.style.opacity = (1 - split).toFixed(4);
        together.style.transform = `translate(-50%, -50%) scale(${(1 - split * 0.08).toFixed(4)})`;
      }

      const center = section.querySelector<HTMLElement>('.cheeses-center');
      if (center) {
        center.style.opacity = labelProgress.toFixed(4);
        center.style.transform = `translate(-50%, -50%) scaleX(${(0.72 + labelProgress * 0.28).toFixed(4)}) scaleY(${(0.9 + labelProgress * 0.1).toFixed(4)})`;
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="cheeses" id="queijinhos" ref={sectionRef} aria-labelledby="cheeses-title">
      <div className="cheeses-scene">
        <div className="cheeses-heading">
          <p className="section-number">03 · Os queijinhos</p>
          <h2 id="cheeses-title">Seis pequenos<br />sabores.</h2>
        </div>

        <figure className="cheeses-together">
          <Image
            src="/images/queijinhos/todos.webp"
            alt="Seis queijinhos da Água Mel apresentados numa ardósia"
            width={800}
            height={1067}
            sizes="(min-width: 760px) 400px, 68vw"
          />
          <figcaption>Desça para os descobrir</figcaption>
        </figure>

        <div className="cheeses-center">
          <span className="cheeses-center-kicker">Pastelaria · Alte</span>
          <strong>Água Mel</strong>
          <p>A adoçar momentos<br />desde 1997.</p>
          <span className="cheeses-center-note">Doçaria tradicional</span>
        </div>

        <div className="cheeses-orbit">
          {products.map((product) => (
            <div className={`cheese-piece cheese-${product.id}`} key={product.id}>
              <Image
                src={`/images/queijinhos/${product.id}.webp`}
                alt=""
                width={640}
                height={640}
                sizes="(min-width: 760px) 160px, 100px"
                unoptimized
              />
              <p className="cheese-label">
                <span>{product.number} · Queijinho de</span>
                <strong>{product.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
