'use client';
import React from 'react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};
type StatProps = { label: string; value: string | number };
type DonutDatum = { label: string; pct: number; color: string };
type DonutProps = { data: DonutDatum[] };

export default function Page() {
  const SETTINGS = {
    tokenName: 'SatoshiJr',
    ticker: 'SATJR',
    chain: 'BNB Smart Chain (BEP-20)',
    totalSupply: '21,000,000,000',
    contract: '0x1C4171fDCE7C9c8E1cBDe06C6d45747cB0Ef9b54',
    dexLink:
      'https://pancakeswap.finance/swap?outputCurrency=0xYOUR_CONTRACT_HERE',
    bscscanLink: 'https://bscscan.com/token/0xYOUR_CONTRACT_HERE',
    telegram: 'https://t.me/yourgroup',
    twitter: 'https://x.com/yourprofile',
    discord: 'https://discord.gg/yourinvite',
    whitepaper: '#',
    mascotUrl: '/mascot/mascot.png',
  };

  const tokenomics: DonutDatum[] = [
    { label: 'Liquidity', pct: 40, color: '#4F81BD' },
    { label: 'Marketing / Community', pct: 20, color: '#C0504D' },
    { label: 'Team / Dev', pct: 20, color: '#9BBB59' },
    { label: 'Rewards / Staking', pct: 10, color: '#8064A2' },
    { label: 'Reserve', pct: 10, color: '#F2B447' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-amber-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-amber-300 bg-white grid place-items-center">
              <img
                src={SETTINGS.mascotUrl}
                alt="SatoshiJr"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="font-black tracking-tight">
              {SETTINGS.tokenName}
            </span>
            <span className="ml-2 px-2 py-0.5 text-xs rounded bg-amber-200 text-amber-900">
              {SETTINGS.ticker}
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-amber-700">
              About
            </a>
            <a href="#tokenomics" className="hover:text-amber-700">
              Tokenomics
            </a>
            <a href="#howto" className="hover:text-amber-700">
              How to Buy
            </a>
            <a href="#roadmap" className="hover:text-amber-700">
              Roadmap
            </a>
          </nav>
          <div className="flex gap-2">
            <a
              href={SETTINGS.whitepaper}
              className="px-3 py-2 text-sm rounded-xl bg-gray-900 text-white hover:bg-black"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
            <a
              href={SETTINGS.dexLink}
              className="px-3 py-2 text-sm rounded-xl bg-amber-500 text-white hover:bg-amber-600"
              target="_blank"
              rel="noreferrer"
            >
              Buy {SETTINGS.ticker}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            {SETTINGS.tokenName} — The Meme Heir of Bitcoin
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Fixed supply of <strong>{SETTINGS.totalSupply}</strong> tokens (
            {SETTINGS.ticker}) on {SETTINGS.chain}. Accessible price, meme
            culture and full on-chain transparency.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SETTINGS.dexLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-amber-500 text-white font-semibold hover:bg-amber-600"
            >
              Buy on PancakeSwap
            </a>
            <a
              href={SETTINGS.bscscanLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-white border border-amber-200 hover:border-amber-400"
            >
              View on BscScan
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            <Stat label="Total Supply" value={SETTINGS.totalSupply} />
            <Stat label="Network" value="BNB" />
            <Stat label="No fees" value="✔" />
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 bg-amber-200 blur-2xl opacity-60 rounded-full" />
          <img
            src={SETTINGS.mascotUrl}
            alt="SatoshiJr mascot"
            className="relative rounded-3xl shadow-xl border-4 border-white bg-white"
            style={{ width: '400px', height: '400px', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon="🪙" title="Supply & Scarcity">
            Fixed total supply of <strong>21 billion</strong> — no future mint.
            Suggested initial circulating: 5–20%.
          </Feature>
          <Feature icon="⚡" title="Simple, trusted contract">
            No fees, no blacklist, no mint functions. OpenZeppelin-based code,
            verified on BscScan.
          </Feature>
          <Feature icon="🎯" title="Mission">
            Turn every holder into a “heir of Satoshi” with humor, community and
            future utility.
          </Feature>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black mb-6">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Donut data={tokenomics} />
          <ul className="space-y-3">
            {tokenomics.map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="inline-block w-3 h-3 rounded"
                  style={{ background: t.color }}
                />
                <span className="font-semibold w-56">{t.label}</span>
                <span className="text-gray-600">{t.pct}%</span>
              </li>
            ))}
            <li className="mt-4 text-sm text-gray-600">
              Contract:{' '}
              <span className="font-mono bg-amber-50 px-2 py-1 rounded border border-amber-200">
                {SETTINGS.contract}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section id="howto" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black mb-6">How to Buy</h2>
        <ol className="grid md:grid-cols-3 gap-6 list-decimal list-inside">
          <li className="bg-white/70 rounded-2xl p-5 border border-white/60">
            Install <strong>MetaMask</strong>, add the{' '}
            <strong>BNB Smart Chain</strong> network and load a bit of BNB.
          </li>
          <li className="bg-white/70 rounded-2xl p-5 border border-white/60">
            Open <strong>PancakeSwap</strong> and connect your wallet. Paste the{' '}
            {SETTINGS.ticker} contract address.
          </li>
          <li className="bg-white/70 rounded-2xl p-5 border border-white/60">
            Select the <strong>{SETTINGS.ticker}/BNB</strong> pair, set the
            amount and confirm the swap.
          </li>
        </ol>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black mb-6">Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: 'Phase 1',
              items: ['Contract deploy', 'PancakeSwap', 'Site + Whitepaper'],
            },
            {
              title: 'Phase 2',
              items: ['Community & Memes', 'Partnerships', 'Airdrops'],
            },
            {
              title: 'Phase 3',
              items: ['CoinGecko / CMC', 'Staking', 'Campaigns'],
            },
            {
              title: 'Phase 4',
              items: ['NFTs & Mini-games', 'DeFi integrations', 'Expansion'],
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 bg-white/70 border border-white/60"
            >
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {c.items.map((it, j) => (
                  <li key={j}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl p-6 bg-gradient-to-r from-amber-200 to-amber-300 border border-amber-400">
          <h3 className="text-2xl font-black">Join the community</h3>
          <p className="text-gray-800 mt-1">
            Jump in, make memes and become a heir of Satoshi 🚀
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="px-4 py-2 rounded-xl bg-black text-white"
              href={SETTINGS.twitter}
              target="_blank"
              rel="noreferrer"
            >
              Twitter/X
            </a>
            <a
              className="px-4 py-2 rounded-xl bg-black text-white"
              href={SETTINGS.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="px-4 py-2 rounded-xl bg-black text-white"
              href={SETTINGS.discord}
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {SETTINGS.tokenName}. “Satoshi’s heir
            is born — and it’s a meme!”
          </div>
          <div className="flex gap-4">
            <a
              href={SETTINGS.whitepaper}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-700"
            >
              Whitepaper
            </a>
            <a
              href={SETTINGS.bscscanLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-700"
            >
              BscScan
            </a>
            <a
              href={SETTINGS.dexLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-700"
            >
              PancakeSwap
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Components ---------- */

function Feature({ icon, title, children }: FeatureProps) {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-5 shadow-sm border border-white/60">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-gray-700 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white/70 rounded-xl border border-white/60">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs uppercase tracking-wide text-gray-600">
        {label}
      </div>
    </div>
  );
}

function Donut({ data }: DonutProps) {
  const total = data.reduce((a, b) => a + b.pct, 0);
  let cumulative = 0;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg viewBox="0 0 200 200" className="w-64 h-64">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="24"
      />
      {data.map((d, i) => {
        const fraction = d.pct / total;
        const dash = fraction * circumference;
        const gap = circumference - dash;
        const rotate = (cumulative / total) * 360;
        cumulative += d.pct;
        return (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={d.color}
            strokeWidth="24"
            strokeDasharray={`${dash} ${gap}`}
            transform={`rotate(${rotate} 100 100)`}
            strokeLinecap="butt"
          />
        );
      })}
      <circle cx="100" cy="100" r="56" fill="white" />
      <text
        x="100"
        y="98"
        textAnchor="middle"
        className="fill-gray-900 text-xl font-bold"
      >
        Tokenomics
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        className="fill-gray-600 text-sm"
      >
        40/20/20/10/10
      </text>
    </svg>
  );
}
