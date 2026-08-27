'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-section.getBoundingClientRect().top / travel);
      const split = clamp((progress - 0.05) / 0.2);
      const copy = clamp((progress - 0.22) / 0.1);
      const productProgress = clamp((progress - 0.27) / 0.65);
      const nextProduct = Math.min(products.length - 1, Math.floor(productProgress * products.length));
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
      });

      const together = section.querySelector<HTMLElement>('.cheeses-together');
      const heading = section.querySelector<HTMLElement>('.cheeses-heading');
      if (together) {
        together.style.opacity = (1 - split).toFixed(4);
        together.style.transform = `translate(-50%, -50%) scale(${(1 - split * 0.08).toFixed(4)})`;
      }
      if (heading) heading.style.opacity = (1 - split).toFixed(4);

      section.style.setProperty('--cheese-progress', progress.toFixed(4));
      section.style.setProperty('--cheese-copy', copy.toFixed(4));
      setActiveProduct((current) => current === nextProduct ? current : nextProduct);
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

        <div className="cheeses-orbit" aria-hidden="true">
          {products.map((product, index) => (
            <div className={`cheese-piece cheese-${product.id}${index === activeProduct ? ' is-featured' : ''}`} key={product.id}>
              <Image
                src={`/images/queijinhos/${product.id}.webp`}
                alt=""
                width={640}
                height={640}
                sizes="(min-width: 760px) 160px, 100px"
              />
            </div>
          ))}
        </div>

        <div className="cheeses-copy" style={{ opacity: 'var(--cheese-copy)' }}>
          <p className="cheeses-kicker">Queijinho de</p>
          <ol className="cheeses-list">
            {products.map((product, index) => (
              <li className={index === activeProduct ? 'is-active' : ''} key={product.id}>
                <span>{product.number}</span>
                <strong>{product.name}</strong>
                <small>Especialidade da Água Mel</small>
              </li>
            ))}
          </ol>
          <p className="cheeses-count" aria-hidden="true">{products[activeProduct].number} / 06</p>
        </div>
      </div>
    </section>
  );
}
