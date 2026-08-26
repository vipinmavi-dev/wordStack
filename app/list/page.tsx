import React from "react";
import styles from "./listWord.module.css";

const navigationItems = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Word Library", icon: "▣", active: true },
  { label: "Add Word", icon: "+" },
  { label: "Study Room", icon: "⟳" },
  { label: "Quiz Mode", icon: "?" },
  { label: "Progress & Stats", icon: "▥" },
];

const collections = [
  {
    category: "CURATED",
    title: "GRE Academic Words",
    terms: "142 terms curated",
    mastery: 84,
    created: "Created 2 weeks ago",
  },
  {
    category: "WORKPLACE",
    title: "Business Negotiation",
    terms: "48 terms curated",
    mastery: 60,
    created: "Created Oct 10, 2024",
  },
  {
    category: "ACADEMIC",
    title: "Latinate Legal Terms",
    terms: "35 terms curated",
    mastery: 40,
    created: "Created Oct 02, 2024",
  },
  {
    category: "PERSONAL",
    title: "Philosophy & Episteme",
    terms: "82 terms curated",
    mastery: 92,
    created: "Created 1 month ago",
  },
  {
    category: "TECHNICAL",
    title: "Medical & Anatomical",
    terms: "54 terms curated",
    mastery: 25,
    created: "Created Sep 18, 2024",
  },
];

const sharedDecks = [
  {
    title: "Advanced Rhetoric & Sophistry",
    sharedBy: "Prof. Julian",
    words: "68 academic words",
    avatar: "J",
    avatarClass: styles.avatarOne,
  },
  {
    title: "Cognitive Psychology & Memory",
    sharedBy: "Dr. Clara",
    words: "45 academic words",
    avatar: "C",
    avatarClass: styles.avatarTwo,
  },
  {
    title: "Daily Idioms & Expressions",
    sharedBy: "Julian Harris",
    words: "120 academic words",
    avatar: "J",
    avatarClass: styles.avatarThree,
  },
];

function Brand() {
  return (
    <div className={styles.brand}>
      <div className={styles.brandMark}>L</div>

      <span className={styles.brandName}>Lexicon</span>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Brand />

      <nav className={styles.navigation}>
        {navigationItems.map((item) => (
          <a
            href="#"
            key={item.label}
            className={`${styles.navLink} ${
              item.active ? styles.active : ""
            }`}
          >
            <span className={styles.navIcon}>{item.icon}</span>

            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className={styles.challenge}>
        <strong>Daily Challenge</strong>

        <p>
          Learn 5 new academic words today to secure your
          streak multiplier.
        </p>
      </div>
    </aside>
  );
}

function Avatar({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  return (
    <div className={`${styles.avatar} ${className}`}>
      {value}
    </div>
  );
}

function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.headerText}>
        <h1>Collections & Sharing</h1>

        <p>
          Organize your expanding lexicon into modular lists
          and study groups.
        </p>
      </div>

      <div className={styles.profileArea}>
        <label className={styles.search}>
          <span className={styles.searchIcon}>⌕</span>

          <input
            type="search"
            placeholder="Quick lookup..."
          />
        </label>

        <div className={styles.profile}>
          <Avatar
            value="C"
            className={styles.avatarClara}
          />

          <strong>Dr. Clara</strong>
        </div>
      </div>
    </header>
  );
}

function Toolbar() {
  return (
    <section className={styles.toolbar}>
      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${styles.selected}`}
        >
          My Collections
        </button>

        <button
          type="button"
          className={styles.tab}
        >
          Community Shared (3)
        </button>
      </div>

      <button
        type="button"
        className={styles.primary}
      >
        ＋ Create Collection
      </button>
    </section>
  );
}

function CardActions() {
  return (
    <div className={styles.actions}>
      <button type="button" aria-label="Share collection">
        ♧
      </button>

      <button type="button" aria-label="Edit collection">
        ♢
      </button>

      <button type="button" aria-label="More options">
        ♜
      </button>
    </div>
  );
}

function CollectionCard({
  collection,
}: {
  collection: (typeof collections)[number];
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.tag}>
          {collection.category}
        </span>

        <CardActions />
      </div>

      <h2>{collection.title}</h2>

      <p className={styles.terms}>
        {collection.terms}
      </p>

      <div className={styles.goal}>
        <span>Mastery Goal</span>

        <strong>{collection.mastery}%</strong>
      </div>

      <div className={styles.progress}>
        <span
          className={styles.progressBar}
          style={{
            width: `${collection.mastery}%`,
          }}
        />
      </div>

      <div className={styles.cardFooter}>
        <span>{collection.created}</span>

        <a href="#">Study Deck →</a>
      </div>
    </article>
  );
}

function NewDeck() {
  return (
    <button
      type="button"
      className={styles.newDeck}
    >
      <span className={styles.plus}>＋</span>

      <strong>Add New Deck</strong>
    </button>
  );
}

function CollectionGrid() {
  return (
    <section className={styles.collectionGrid}>
      {collections.map((collection) => (
        <CollectionCard
          key={collection.title}
          collection={collection}
        />
      ))}

      <NewDeck />
    </section>
  );
}

function SharedDeckRow({
  item,
}: {
  item: (typeof sharedDecks)[number];
}) {
  return (
    <div className={styles.sharedRow}>
      <div className={styles.person}>
        <Avatar
          value={item.avatar}
          className={item.avatarClass}
        />

        <div className={styles.personInfo}>
          <strong>{item.title}</strong>

          <small>
            Shared by <b>{item.sharedBy}</b>
            {" · "}
            {item.words}
          </small>
        </div>
      </div>

      <div className={styles.rowActions}>
        <button
          type="button"
          className={styles.decline}
        >
          Decline
        </button>

        <button
          type="button"
          className={styles.import}
        >
          Import Deck
        </button>
      </div>
    </div>
  );
}

function SharedDecks() {
  return (
    <section className={styles.shared}>
      <div className={styles.sharedHeader}>
        <div>
          <h2>Shared Decks Waiting for Review</h2>

          <p>
            Incoming contributions from your network of
            peers.
          </p>
        </div>

        <span className={styles.pending}>
          3 Pending
        </span>
      </div>

      {sharedDecks.map((item) => (
        <SharedDeckRow
          key={item.title}
          item={item}
        />
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className={styles.appShell}>
      <Sidebar />

      <main className={styles.main}>
        <Header />

        <Toolbar />

        <CollectionGrid />

        <SharedDecks />
      </main>
    </div>
  );
}