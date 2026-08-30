import styles from "./progress.module.css";

type NavigationItem = {
  label: string;
  icon: string;
};

type Domain = {
  name: string;
  words: string;
  status: string;
};

const navigationItems: NavigationItem[] = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Word Library", icon: "▣" },
  { label: "Add Word", icon: "+" },
  { label: "Study Room", icon: "⟳" },
  { label: "Quiz Mode", icon: "?" },
  { label: "Progress & Stats", icon: "▥" },
];

const heatmap = [
  [1, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 0, 0, 1],
];

const domains: Domain[] = [
  {
    name: "Academic Prose",
    words: "142 words acquired",
    status: "Strongest",
  },
  {
    name: "Philosophy",
    words: "82 words acquired",
    status: "Stable",
  },
  {
    name: "Linguistics",
    words: "54 words acquired",
    status: "Review Needed",
  },
  {
    name: "Daily Idioms",
    words: "64 words acquired",
    status: "Mastered",
  },
];

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoIcon}>L</div>

      <span className={styles.logoText}>
        Lexicon
      </span>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />

      <nav className={styles.navigation}>
        {navigationItems.map((item) => {
          const isActive =
            item.label === "Progress & Stats";

          return (
            <a
              href="#"
              key={item.label}
              className={`${styles.navItem} ${
                isActive ? styles.activeNavItem : ""
              }`}
            >
              <span className={styles.navIcon}>
                {item.icon}
              </span>

              <span className={styles.navLabel}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      <div className={styles.dailyChallenge}>
        <h3 className={styles.challengeTitle}>
          Daily Challenge
        </h3>

        <p className={styles.challengeText}>
          Learn 5 new academic words today to secure your
          streak multiplier.
        </p>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.pageHeading}>
        <h1>Performance Analytics</h1>

        <p>
          Detailed metrics mapping out your psychological
          mastery curve.
        </p>
      </div>

      <div className={styles.headerActions}>
        <div className={styles.quickSearch}>
          <span className={styles.searchIcon}>
            ⌕
          </span>

          <input
            type="text"
            placeholder="Quick lookup..."
          />
        </div>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            C
          </div>

          <span className={styles.userName}>
            Dr. Clara
          </span>
        </div>
      </div>
    </header>
  );
}

function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <article className={styles.statCard}>
      <span className={styles.statLabel}>
        {label}
      </span>

      <strong className={styles.statValue}>
        {value}
      </strong>

      <p className={styles.statDescription}>
        {description}
      </p>
    </article>
  );
}

function Statistics() {
  return (
    <section className={styles.statistics}>
      <StatCard
        label="MASTERY RATE"
        value="84.2%"
        description="Across all evaluated categories"
      />

      <StatCard
        label="TOTAL WORDS LOGGED"
        value="342 Words"
        description="Over the last 6 months"
      />

      <StatCard
        label="STUDY SESSIONS"
        value="148 Runs"
        description="Daily active intervals"
      />
    </section>
  );
}

function RetentionHeatmap() {
  return (
    <section className={styles.retentionCard}>
      <h2>Retention Heatmap</h2>

      <p className={styles.cardDescription}>
        Daily repetition grid verifying active memory
        consolidation
      </p>

      <div className={styles.heatmap}>
        {heatmap.map((row, rowIndex) =>
          row.map((active, columnIndex) => (
            <span
              key={`${rowIndex}-${columnIndex}`}
              className={
                active
                  ? styles.heatmapActive
                  : styles.heatmapEmpty
              }
            />
          ))
        )}
      </div>
    </section>
  );
}

function DomainList() {
  return (
    <section className={styles.domainsCard}>
      <h2>Strongest Domains</h2>

      <div className={styles.domainList}>
        {domains.map((domain) => (
          <div
            className={styles.domainItem}
            key={domain.name}
          >
            <div className={styles.domainInfo}>
              <strong>{domain.name}</strong>

              <span>{domain.words}</span>
            </div>

            <span className={styles.domainStatus}>
              {domain.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnalyticsContent() {
  return (
    <>
      <Statistics />

      <div className={styles.analyticsGrid}>
        <RetentionHeatmap />

        <DomainList />
      </div>
    </>
  );
}

function ProgressStats() {
  return (
    <div className={styles.page}>
      <Sidebar />

      <main className={styles.mainContent}>
        <Header />

        <AnalyticsContent />
      </main>
    </div>
  );
}

export default ProgressStats;