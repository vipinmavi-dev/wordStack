import styles from "./studyRoom.module.css";

const navigationItems = [
  { icon: "⌂", label: "Dashboard" },
  { icon: "▣", label: "Word Library" },
  { icon: "⊕", label: "Add Word" },
  { icon: "⟳", label: "Study Room", active: true },
  { icon: "?", label: "Quiz Mode" },
  { icon: "▥", label: "Progress & Stats" },
];

function StudyRoom() {
  return (
    <div className={styles.app}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>L</div>
          <span className={styles.logoText}>Lexicon</span>
        </div>

        <nav className={styles.navigation}>
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className={`${styles.navItem} ${
                item.active ? styles.activeNavItem : ""
              }`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className={styles.dailyChallenge}>
          <h3>Daily Challenge</h3>

          <p>
            Learn 5 new academic
            <br />
            words today to secure your
            <br />
            streak multiplier.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headingSection}>
            <h1>Spaced Repetition Study</h1>
            <p>Active recall session optimized for neural retention.</p>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>⌕</span>
              <input
                type="text"
                placeholder="Quick lookup..."
                aria-label="Quick lookup"
              />
            </div>

            <div className={styles.profile}>
              <div className={styles.profileImage}>👩🏻</div>
              <span>Dr. Clara</span>
            </div>
          </div>
        </header>

        {/* Study Area */}
        <section className={styles.studyLayout}>
          {/* Flash Card */}
          <div className={styles.studyCard}>
            <div className={styles.cardContent}>
              <span className={styles.tier}>ACADEMIC TIER</span>

              <h2>Obfuscate</h2>

              <span className={styles.pronunciation}>
                /ˈɒb.fʌs.keɪt/
              </span>

              <button className={styles.revealButton}>
                Tap to reveal meaning
              </button>
            </div>
          </div>

          {/* Session Stats */}
          <aside className={styles.statsCard}>
            <h2>Session Stats</h2>

            <div className={styles.statList}>
              <div className={styles.statRow}>
                <span>Elapsed Time</span>
                <strong>04m 32s</strong>
              </div>

              <div className={styles.statRow}>
                <span>Success Rate</span>
                <strong className={styles.successRate}>82% Correct</strong>
              </div>

              <div className={styles.statRow}>
                <span>Focus Mode</span>
                <strong>Enabled</strong>
              </div>
            </div>

            <div className={styles.statsDivider}></div>

            <div className={styles.currentTopic}>
              <span>CURRENT TOPIC</span>
              <strong>Academic Prose &amp; GRE</strong>
            </div>
          </aside>
        </section>

        {/* Difficulty Buttons */}
        <section className={styles.difficultySection}>
          <div className={styles.difficultyButtons}>
            <button
              className={`${styles.difficultyButton} ${styles.hardButton}`}
            >
              Hard (Repeat)
            </button>

            <button
              className={`${styles.difficultyButton} ${styles.mediumButton}`}
            >
              Medium (Review)
            </button>

            <button
              className={`${styles.difficultyButton} ${styles.easyButton}`}
            >
              Easy (Mastered)
            </button>
          </div>

          {/* Card Navigation */}
          <div className={styles.cardNavigation}>
            <button className={styles.arrowButton} aria-label="Previous card">
              ←
            </button>

            <span>Card 5 of 20</span>

            <button className={styles.arrowButton} aria-label="Next card">
              →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StudyRoom;