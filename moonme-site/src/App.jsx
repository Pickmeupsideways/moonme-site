
import React, { useState } from 'react'
import { Rocket, Copy, Check, Twitter, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from './assets/logo.png'

// Replace these after you mint
const CONTRACT_ADDRESS = "So1anaM00M00M00M00M00M00M00M00M00M000000"
const PUMPFUN_URL = "https://pump.fun/coin/REPLACE_WITH_YOUR_TOKEN"
const TELEGRAM_URL = "https://t.me/moonme" // optional
const TWITTER_URL = "https://x.com/moonmecoin" // optional

export default function App(){
  const [copied,setCopied] = useState(false)
  const copyIt = async () => {
    try{
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(()=>setCopied(false),1500)
    }catch(e){ console.error(e) }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MOONME" className="h-9 w-9 rounded-xl ring-1 ring-white/10 object-cover" />
            <span className="font-bold tracking-wide">MOONME <span className="opacity-70">(MOO)</span></span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm opacity-90">
            <a href="#how-to-buy" className="hover:opacity-100">How to Buy</a>
            <a href="#tokenomics" className="hover:opacity-100">Tokenomics</a>
            <a href="#roadmap" className="hover:opacity-100">Roadmap</a>
          </nav>
          <div className="flex items-center gap-2">
            {TWITTER_URL && <a href={TWITTER_URL} target="_blank" className="p-2 rounded-xl bg-white/10 hover:bg-white/20" aria-label="Twitter"><Twitter className="h-4 w-4"/></a>}
            {TELEGRAM_URL && <a href={TELEGRAM_URL} target="_blank" className="p-2 rounded-xl bg-white/10 hover:bg-white/20" aria-label="Telegram"><MessageCircle className="h-4 w-4"/></a>}
            <a href={PUMPFUN_URL} target="_blank" className="px-3 py-2 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-slate-100">Buy on Pump.fun</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              We don’t bark — we <span className="text-indigo-400">MOO</span> to the <span className="text-indigo-300">Moon</span> 🐄🚀
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-prose">
              MOONME (MOO) is the internet’s cow‑fueled mission to the moon. Low fees, high memes, and a fearless Cowmunity.
              Strap in — every buy adds rocket fuel.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={PUMPFUN_URL} target="_blank" className="px-4 py-3 rounded-2xl bg-white text-slate-900 font-semibold inline-flex items-center gap-2">
                <Rocket className="h-4 w-4"/> Buy on Pump.fun
              </a>
              <button onClick={copyIt} className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 inline-flex items-center gap-2">
                {copied ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>} {copied? 'Copied!' : 'Copy Contract'}
              </button>
            </div>
            <p id="contract" className="mt-3 text-xs break-all opacity-70">{CONTRACT_ADDRESS}</p>
          </motion.div>

          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{duration:0.6, delay:0.1}}>
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl shadow-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Mission MOO 🌕</h3>
                <ul className="space-y-3 text-slate-200">
                  <li>• Fair launch. Community powered. 100% memes.</li>
                  <li>• Fully community-driven. Builders, shillers, and grillers welcome.</li>
                  <li>• Transparent contract & revoked mint (post‑launch best practice).</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section id="how-to-buy" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">How to Buy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {step:'1', title:'Get Phantom', text:'Install Phantom wallet and create a Solana address.'},
            {step:'2', title:'Fund with SOL', text:'Buy or transfer a little SOL for gas and your first MOO.'},
            {step:'3', title:'Ape on Pump.fun', text:'Open our Pump.fun page and smash Buy. Welcome to the Cowmunity.'},
          ].map(s => (
            <div key={s.step} className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="flex items-center gap-3 text-lg font-semibold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-bold">{s.step}</span>
                {s.title}
              </h3>
              <p className="mt-2 text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href={PUMPFUN_URL} target="_blank" className="px-4 py-3 rounded-2xl bg-white text-slate-900 font-semibold">Go to Pump.fun</a>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Tokenomics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Total Supply</h3>
            <p className="text-2xl font-extrabold">1,000,000,000 MOO</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Taxes</h3>
            <p className="text-2xl font-extrabold">0% buy / 0% sell</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Liquidity</h3>
            <p className="text-2xl font-extrabold">Bonding curve via Pump.fun</p>
          </div>
        </div>
        <p className="mt-4 text-slate-400 text-sm">
          * Update these figures after your actual launch. Consider revoking mint/freeze authority post‑launch to boost community trust.
        </p>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Phase 1 — Liftoff</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Launch on Pump.fun & secure ticker MOO</li>
              <li>• Spin up Twitter + Telegram (Cowmunity)</li>
              <li>• Meme contests & sticker packs</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Phase 2 — Orbit</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• PumpSwap graduation</li>
              <li>• Influencer collabs & mini‑airdrops</li>
              <li>• CEX outreach</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Phase 3 — Moonwalk</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Charity tie‑in (e.g., animal rescues)</li>
              <li>• Merch drop: space‑cow tees</li>
              <li>• Community tools & dashboards</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Phase 4 — Beyond</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• TBD by the Cowmunity</li>
              <li>• Build what the herd wants</li>
              <li>• Keep it fun, stay transparent</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm opacity-70">© {new Date().getFullYear()} MOONME (MOO). This site is for entertainment; nothing here is financial advice.</p>
            <p className="text-sm opacity-70 mt-2">Contract: <span className="break-all">{CONTRACT_ADDRESS}</span></p>
          </div>
          <div className="md:justify-self-end flex gap-2">
            {TWITTER_URL && <a href={TWITTER_URL} target="_blank" className="p-2 rounded-xl bg-white/10 hover:bg-white/20" aria-label="Twitter"><Twitter className="h-4 w-4"/></a>}
            {TELEGRAM_URL && <a href={TELEGRAM_URL} target="_blank" className="p-2 rounded-xl bg-white/10 hover:bg-white/20" aria-label="Telegram"><MessageCircle className="h-4 w-4"/></a>}
            <a href={PUMPFUN_URL} target="_blank" className="p-2 rounded-xl bg-white/10 hover:bg-white/20" aria-label="Pump.fun"><Rocket className="h-4 w-4"/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
