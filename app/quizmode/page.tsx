import Styles from "./quizMode.module.css";

const navigationItems = [
  { icon: "⌂", label: "Dashboard" },
  { icon: "▣", label: "Word Library" },
  { icon: "⊕", label: "Add Word" },
  { icon: "⟳", label: "Study Room" },
  { icon: "?", label: "Quiz Mode", active: true },
  { icon: "▥", label: "Progress & Stats" },
];

const answers = [
  {
    letter: "A",
    text: "To make something clear, transparent, and easy to analyze.",
  },
  {
    letter: "B",
    text: "To render obscure, unclear, or intentionally difficult to understand.",
    correct: true,
  },
  {
    letter: "C",
    text: "To destroy completely; eliminate all physical presence of a structure.",
  },
  {
    letter: "D",
    text: "To physically isolate a patient for health or quarantine purposes.",
  },
];

function QuizMode() {
  return (
    <div className={Styles.app}>
      {/* Sidebar */}
      <aside className={Styles.sidebar}>
        <div className={Styles.logoSection}>
          <div className={Styles.logo}>L</div>
          <span className={Styles.logoText}>Lexicon</span>
        </div>

        <nav className={Styles.navigation}>
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className={`${Styles.navItem} ${
                item.active ? Styles.activeNavItem : ""
              }`}
            >
              <span className={Styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div className={Styles.dailyChallenge}>
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

      {/* Main */}
      <main className={Styles.mainContent}>
        {/* Header */}
        <header className={Styles.header}>
          <div className={Styles.headingSection}>
            <h1>Academic Challenge</h1>
            <p>Confirm your neural pathways through quick retrieval tasks.</p>
          </div>

          <div className={Styles.headerRight}>
            <div className={Styles.searchBox}>
              <span className={Styles.searchIcon}>⌕</span>

              <input
                type="text"
                placeholder="Quick lookup..."
                aria-label="Quick lookup"
              />
            </div>

            <div className={Styles.profile}>
              <div className={Styles.profileImage}>👩🏻</div>
              <span>Dr. Clara</span>
            </div>
          </div>
        </header>

        {/* Quiz Card */}
        <section className={Styles.quizCard}>
          {/* Quiz Meta */}
          <div className={Styles.quizMeta}>
            <div className={Styles.quizInfo}>
              <span className={Styles.questionNumber}>
                QUESTION 3 OF 10
              </span>

              <span className={Styles.streak}>Streak: 5×</span>
            </div>

            <div className={Styles.timer}>
              <span className={Styles.timerIcon}>♧</span>
              <span>12s remaining</span>
            </div>
          </div>

          {/* Question */}
          <div className={Styles.questionSection}>
            <span className={Styles.questionLabel}>
              CHOOSE THE CORRECT DEFINITION OF:
            </span>

            <h2>Obfuscate</h2>
          </div>

          {/* Answers */}
          <div className={Styles.answers}>
            {answers.map((answer) => (
              <button
                key={answer.letter}
                className={`${Styles.answerOption} ${
                  answer.correct ? Styles.correctAnswer : ""
                }`}
              >
                <span
                  className={`${Styles.answerLetter} ${
                    answer.correct ? Styles.correctLetter : ""
                  }`}
                >
                  {answer.letter}
                </span>

                <span className={Styles.answerText}>{answer.text}</span>

                {answer.correct && (
                  <span className={Styles.correctIcon}>✓</span>
                )}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default QuizMode;