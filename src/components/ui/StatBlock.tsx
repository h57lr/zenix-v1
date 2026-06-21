interface Stat {
  value: string;
  label: string;
}

interface StatBlockProps {
  stats: Stat[];
}

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="flex flex-wrap gap-8 md:gap-12">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-2xl font-bold text-accent md:text-3xl">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
