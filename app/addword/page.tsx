import styles from "./addWord.module.css";

const navigationItems = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Word Library", icon: "▣" },
  { label: "Add Word", icon: "+" },
  { label: "Study Room", icon: "⟳" },
  { label: "Quiz Mode", icon: "?" },
  { label: "Progress & Stats", icon: "▥" },
];

function AddWord() {
  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>L</div>
          <span className={styles.logoText}>Lexicon</span>
        </div>

        {/* Navigation */}
        <nav className={styles.navigation}>
          {navigationItems.map((item) => {
            const isActive = item.label === "Add Word";

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

        {/* Daily Challenge */}
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

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Page Header */}
        <header className={styles.pageHeader}>
          <div className={styles.pageHeading}>
            <h1>Add New Vocabulary</h1>

            <p>
              Document a newly discovered word to integrate it
              into your active lexicon.
            </p>
          </div>

          <div className={styles.headerActions}>
            <div className={styles.quickSearch}>
              <span className={styles.searchIcon}>⌕</span>

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

        {/* Form */}
        <section className={styles.formCard}>
          <form>
            {/* First Row */}
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="vocabularyWord">
                  Vocabulary Word
                </label>

                <input
                  id="vocabularyWord"
                  type="text"
                  defaultValue="Solipsistic"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="partOfSpeech">
                  Part of Speech
                </label>

                <select
                  id="partOfSpeech"
                  defaultValue="Adjective"
                  className={styles.formInput}
                >
                  <option value="Noun">Noun</option>
                  <option value="Verb">Verb</option>
                  <option value="Adjective">
                    Adjective
                  </option>
                  <option value="Adverb">Adverb</option>
                  <option value="Pronoun">Pronoun</option>
                  <option value="Preposition">
                    Preposition
                  </option>
                  <option value="Conjunction">
                    Conjunction
                  </option>
                </select>
              </div>
            </div>

            {/* Definition */}
            <div className={styles.formGroup}>
              <label htmlFor="definition">
                Definition
              </label>

              <input
                id="definition"
                type="text"
                defaultValue="Theory holding that the self can know nothing but its own modifications and that only the self exists."
                className={styles.formInput}
              />
            </div>

            {/* Example Sentence */}
            <div className={styles.formGroup}>
              <label htmlFor="exampleSentence">
                Example Sentence
              </label>

              <input
                id="exampleSentence"
                type="text"
                defaultValue="His solipsistic worldview made it difficult for him to empathize with the struggles of his colleagues."
                className={styles.formInput}
              />
            </div>

            {/* Pronunciation + Tags */}
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="pronunciation">
                  Pronunciation Notes
                </label>

                <input
                  id="pronunciation"
                  type="text"
                  defaultValue="/ˌsɒlɪpˈsɪstɪk/"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="tags">
                  Tags (Comma Separated)
                </label>

                <input
                  id="tags"
                  type="text"
                  defaultValue="philosophy, academic"
                  className={styles.formInput}
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className={styles.formActions}>
              <button
                type="button"
                className={styles.cancelButton}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={styles.saveButton}
              >
                Save Word Entry
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddWord;