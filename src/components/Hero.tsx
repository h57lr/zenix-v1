"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ParticleGrid } from "@/components/effects/ParticleGrid";
import { heroContent } from "@/lib/constants";

const dashboardModes = {
  marketing: {
    label: "Marketing",
    title: "Marketing Performance",
    subtitle: "Campaign lift across paid channels",
    chart:
      "M0 128 C42 112 54 78 92 86 C130 94 130 44 170 52 C212 60 216 18 252 28 C284 36 292 18 320 22",
    kpis: [
      { key: "revenue", label: "Revenue", value: "$428K", delta: "+32%", icon: TrendingUp, insight: "Revenue is up $104K after shifting budget into the highest-margin product sets." },
      { key: "roas", label: "ROAS", value: "5.8x", delta: "+18%", icon: BarChart3, insight: "ROAS improved after pausing weak creatives and raising bids on returning customer audiences." },
      { key: "spend", label: "Ad Spend", value: "$74K", delta: "Live", icon: Activity, insight: "Spend is pacing 6% under target while revenue is pacing ahead of forecast." },
    ],
    bars: [
      { key: "meta", name: "Meta Ads", value: 86, color: "bg-accent", insight: "Meta is driving the strongest blended lift with 41% of attributed revenue." },
      { key: "google", name: "Google", value: 72, color: "bg-blue-500", insight: "Google is capturing high-intent demand with strong branded and shopping performance." },
      { key: "tiktok", name: "TikTok", value: 58, color: "bg-cyan-300", insight: "TikTok is contributing upper-funnel lift and feeding retargeting audiences." },
    ],
    statuses: [
      { key: "creative", label: "Winning Creatives", status: "12 Active", icon: Zap, insight: "12 active creatives are above the account CPA benchmark." },
      { key: "budget", label: "Budget Shifts", status: "+18%", icon: TrendingUp, insight: "Budget automatically moved toward campaigns with stable conversion quality." },
      { key: "guardrail", label: "CPA Guardrail", status: "On", icon: Activity, insight: "CPA guardrails are preventing overspend during low-quality traffic spikes." },
    ],
  },
  tracking: {
    label: "Tracking",
    title: "Tracking Infrastructure",
    subtitle: "Clean events from browser to server",
    chart:
      "M0 118 C36 118 48 98 82 94 C126 88 136 72 168 76 C204 80 216 50 248 48 C284 46 292 40 320 34",
    kpis: [
      { key: "events", label: "Events", value: "1.8M", delta: "Clean", icon: Activity, insight: "1.8M events passed validation with duplicate purchase events filtered out." },
      { key: "capi", label: "CAPI Match", value: "94%", delta: "+11%", icon: Database, insight: "CAPI match quality improved after server-side enrichment and hashed identifiers." },
      { key: "latency", label: "Latency", value: "82ms", delta: "Fast", icon: Zap, insight: "Server events are landing quickly enough for near-real-time optimization." },
    ],
    bars: [
      { key: "ga4", name: "GA4", value: 91, color: "bg-accent", insight: "GA4 event coverage is strong across checkout, purchase, and lead actions." },
      { key: "server", name: "Server Events", value: 84, color: "bg-blue-500", insight: "Server-side events are reducing browser loss from ad blockers and consent gaps." },
      { key: "feed", name: "Catalog Feed", value: 76, color: "bg-cyan-300", insight: "Catalog feed quality is improving, with remaining gaps in optional product attributes." },
    ],
    statuses: [
      { key: "ga4-live", label: "GA4 Events", status: "Live", icon: Activity, insight: "GA4 is receiving ecommerce events and custom funnel milestones." },
      { key: "sgtm", label: "Server GTM", status: "Healthy", icon: Database, insight: "Server GTM is healthy and passing enriched events downstream." },
      { key: "pixel", label: "Pixel Quality", status: "8.7/10", icon: BarChart3, insight: "Pixel quality is above benchmark, with one warning left on content views." },
    ],
  },
  automation: {
    label: "AI Automation",
    title: "Automation Control Layer",
    subtitle: "Rules, alerts, and AI-assisted optimization",
    chart:
      "M0 132 C38 124 52 126 84 104 C120 78 138 96 166 70 C196 42 222 58 252 32 C282 12 298 24 320 14",
    kpis: [
      { key: "hours", label: "Saved Hours", value: "146", delta: "AI", icon: Bot, insight: "Automation saved 146 manual reporting and optimization hours this month." },
      { key: "rules", label: "Rules", value: "23", delta: "Active", icon: Zap, insight: "23 rules are monitoring bids, budgets, creative fatigue, and CPA spikes." },
      { key: "alerts", label: "Alerts", value: "9", delta: "Solved", icon: Activity, insight: "9 anomalies were detected and resolved before they became budget problems." },
    ],
    bars: [
      { key: "bid-rules", name: "Bid Rules", value: 88, color: "bg-accent", insight: "Bid rules are making controlled increases only when conversion quality holds." },
      { key: "creative-tests", name: "Creative Tests", value: 64, color: "bg-blue-500", insight: "Creative testing is active, with two new concepts ready for scaling." },
      { key: "anomaly", name: "Anomaly Checks", value: 93, color: "bg-cyan-300", insight: "Anomaly checks are covering spend, CPA, conversion rate, and tracking drops." },
    ],
    statuses: [
      { key: "cpa", label: "CPA Spike", status: "Prevented", icon: Activity, insight: "A CPA spike was caught early and budget was capped automatically." },
      { key: "rotation", label: "Creative Rotation", status: "Auto", icon: Bot, insight: "Creative rotation is automatically reducing fatigue in high-frequency audiences." },
      { key: "budget-rules", label: "Budget Rules", status: "23 Active", icon: Zap, insight: "Budget rules are active across campaign, ad set, and product segments." },
    ],
  },
  reporting: {
    label: "Reporting",
    title: "Executive Reporting Hub",
    subtitle: "One source of truth for growth decisions",
    chart:
      "M0 120 C28 96 62 116 94 86 C124 58 146 78 174 58 C208 34 228 52 256 30 C286 8 302 26 320 18",
    kpis: [
      { key: "dashboards", label: "Dashboards", value: "7", delta: "Synced", icon: BarChart3, insight: "7 dashboards are synced for marketing, finance, operations, and leadership." },
      { key: "sources", label: "Sources", value: "14", delta: "Unified", icon: Database, insight: "14 data sources are normalized into one reporting layer." },
      { key: "coverage", label: "Coverage", value: "97%", delta: "+9%", icon: TrendingUp, insight: "Reporting coverage now captures 97% of revenue-driving events." },
    ],
    bars: [
      { key: "looker", name: "Looker", value: 82, color: "bg-accent", insight: "Looker is handling daily channel and funnel performance reporting." },
      { key: "powerbi", name: "Power BI", value: 74, color: "bg-blue-500", insight: "Power BI is consolidating finance and operational growth metrics." },
      { key: "attribution", name: "Attribution", value: 89, color: "bg-cyan-300", insight: "Attribution coverage is strong enough to guide budget allocation decisions." },
    ],
    statuses: [
      { key: "refresh", label: "Refresh Cadence", status: "Hourly", icon: Activity, insight: "Reports refresh hourly so teams do not wait for end-of-day updates." },
      { key: "data", label: "Data Sources", status: "14 Live", icon: Database, insight: "All 14 reporting sources are live with no failed syncs." },
      { key: "decision", label: "Decision Alerts", status: "On", icon: Zap, insight: "Decision alerts are enabled for spend, stock, margin, and conversion anomalies." },
    ],
  },
};

type DashboardMode = keyof typeof dashboardModes;
type SelectableItem = {
  key: string;
  label?: string;
  name?: string;
  value?: string | number;
  delta?: string;
  status?: string;
  insight: string;
};

function getModeItems(mode: DashboardMode): SelectableItem[] {
  const dashboard = dashboardModes[mode];
  return [...dashboard.kpis, ...dashboard.bars, ...dashboard.statuses];
}

function HeroDashboard() {
  const [activeMode, setActiveMode] = useState<DashboardMode>("marketing");
  const [selectedKey, setSelectedKey] = useState("revenue");
  const activeDashboard = dashboardModes[activeMode];
  const selectedItem: SelectableItem =
    getModeItems(activeMode).find((item) => item.key === selectedKey) ??
    activeDashboard.kpis[0];

  const selectMode = (mode: DashboardMode) => {
    setActiveMode(mode);
    setSelectedKey(dashboardModes[mode].kpis[0].key);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto mt-12 w-full max-w-xl lg:mt-0"
    >
      <div className="absolute -top-12 -right-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-10 -left-8 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-secondary/85 p-3 shadow-[0_30px_100px_-40px_rgba(0,229,255,0.45)] backdrop-blur-xl sm:p-4 md:p-5"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="flex flex-col gap-3 border-b border-white/5 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent sm:tracking-[0.3em]">
              Live Performance
            </p>
            <h2 className="mt-2 text-base font-semibold text-text-primary sm:text-lg md:text-xl">
              {activeDashboard.title}
            </h2>
            <p className="mt-1 text-xs text-text-secondary">{activeDashboard.subtitle}</p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--theme-accent)]" />
            Click any metric
          </div>
        </div>

        <div className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1 sm:grid sm:grid-cols-4 sm:overflow-visible">
          {(Object.keys(dashboardModes) as DashboardMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => selectMode(mode)}
              className={`min-w-max rounded-xl border px-3 py-2 text-xs font-semibold transition-all duration-300 sm:min-w-0 ${
                activeMode === mode
                  ? "border-accent/60 bg-accent/15 text-accent shadow-[0_0_24px_-12px_var(--theme-accent)]"
                  : "border-white/5 bg-bg-tertiary/60 text-text-secondary hover:border-accent/30 hover:text-text-primary"
              }`}
            >
              {dashboardModes[mode].label}
            </button>
          ))}
        </div>

        <motion.div
          key={`${activeMode}-${selectedItem.key}-insight`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Selected Insight
              </p>
              <p className="mt-2 text-sm font-semibold text-text-primary">
                {selectedItem.label ?? selectedItem.name}: {selectedItem.value ?? selectedItem.status}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary sm:text-sm">
                {selectedItem.insight}
              </p>
            </div>
            <div className="shrink-0 rounded-xl bg-bg-tertiary px-3 py-2 text-right">
              <div className="text-lg font-bold text-accent">{selectedItem.delta ?? selectedItem.value ?? selectedItem.status}</div>
              <div className="text-[10px] uppercase tracking-widest text-text-secondary">Live</div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {activeDashboard.kpis.map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedItem.key === item.key;
            return (
              <motion.button
                type="button"
                key={`${activeMode}-${item.label}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedKey(item.key)}
                className={`rounded-2xl border bg-bg-tertiary/80 p-3 text-left ${
                  isActive ? "border-accent/60 shadow-[0_0_30px_-18px_var(--theme-accent)]" : "border-white/5 hover:border-accent/30"
                }`}
              >
                <div className="mb-3 flex items-center justify-between text-text-secondary">
                  <Icon size={16} className="text-accent" />
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                    {item.delta}
                  </span>
                </div>
                <div className="text-xl font-bold text-text-primary md:text-2xl">{item.value}</div>
                <div className="mt-1 text-[11px] text-text-secondary md:text-xs">{item.label}</div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[1.25fr_0.95fr]">
          <button
            type="button"
            onClick={() => setSelectedKey(activeDashboard.kpis[0].key)}
            className="rounded-2xl border border-white/5 bg-bg-tertiary/70 p-4 text-left hover:border-accent/30"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-text-primary">Live Performance Curve</p>
                <p className="text-xs text-text-secondary">Updates with every dashboard view</p>
              </div>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                {selectedItem.delta ?? selectedItem.status ?? selectedItem.value}
              </span>
            </div>
            <svg viewBox="0 0 320 150" className="h-32 w-full overflow-visible sm:h-36">
              <defs>
                <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--theme-accent)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[35, 70, 105, 140].map((y) => (
                <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="currentColor" className="text-text-secondary/15" strokeDasharray="4 8" />
              ))}
              <motion.path
                key={`${activeMode}-fill`}
                d={`${activeDashboard.chart} L320 150 L0 150 Z`}
                fill="url(#hero-chart-fill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              />
              <motion.path
                key={`${activeMode}-line`}
                d={activeDashboard.chart}
                fill="none"
                stroke="var(--theme-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </svg>
          </button>

          <div className="rounded-2xl border border-white/5 bg-bg-tertiary/70 p-4">
            <p className="text-sm font-medium text-text-primary">Clickable Breakdown</p>
            <div className="mt-5 space-y-4">
              {activeDashboard.bars.map((channel, index) => {
                const isActive = selectedItem.key === channel.key;
                return (
                  <button
                    type="button"
                    key={channel.name}
                    onClick={() => setSelectedKey(channel.key)}
                    className={`block w-full rounded-xl border p-2 text-left transition-all ${
                      isActive ? "border-accent/50 bg-accent/10" : "border-transparent hover:border-accent/30"
                    }`}
                  >
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-text-secondary">{channel.name}</span>
                      <span className="font-medium text-text-primary">{channel.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-bg-secondary">
                      <motion.div
                        key={`${activeMode}-${channel.key}`}
                        className={`h-full rounded-full ${channel.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${channel.value}%` }}
                        transition={{ duration: 0.55, delay: index * 0.08 }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {activeDashboard.statuses.map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedItem.key === item.key;
            return (
              <motion.button
                type="button"
                key={`${activeMode}-${item.label}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedKey(item.key)}
                className={`rounded-2xl border bg-bg-tertiary/70 p-3 text-left ${
                  isActive ? "border-accent/60 shadow-[0_0_28px_-18px_var(--theme-accent)]" : "border-white/5 hover:border-accent/30"
                }`}
              >
                <Icon size={16} className="text-accent" />
                <div className="mt-3 text-xs text-text-secondary">{item.label}</div>
                <div className="mt-1 text-sm font-semibold text-text-primary">{item.status}</div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [-2, 1, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-24 hidden rounded-2xl border border-white/10 bg-bg-tertiary/90 px-4 py-3 shadow-2xl backdrop-blur-xl md:block lg:-right-8"
      >
        <p className="text-xs text-text-secondary">Live action</p>
        <p className="mt-1 text-sm font-semibold text-text-primary">Click metrics</p>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <ParticleGrid />

      <div className="container-section relative z-10 w-full pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge className="mb-6">{heroContent.badge}</Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {heroContent.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
              {heroContent.body}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" className="px-8 py-3.5 text-base" href="#contact">
                {heroContent.cta}
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" className="px-8 py-3.5 text-base" href="#services">
                View Services
              </Button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 text-center sm:text-left">
              {[
                ["Tracking", "Clean events"],
                ["Automation", "Always on"],
                ["Reporting", "One source"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/5 bg-white/5 p-3 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-text-primary">{label}</div>
                  <div className="mt-1 text-xs text-text-secondary">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <HeroDashboard />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
