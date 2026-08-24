import Style from "./dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={Style.appContainer}>
            {/* <!-- Sidebar --> */}
            <aside className={Style.sidebar}>
                <div className={Style.sidebarTop}>
                    <div className={Style.brand}>
                        <div className={Style.brandLogo}>L</div>
                        <span className={Style.brandName}>Lexicon</span>
                    </div>
                    <nav className={Style.navMenu}>
                        {/* <a href="#" className="navItem active"> */}
                        <a href="#" className={Style.navItem}>
                            <i data-lucide="home"></i>
                            <span>Dashboard</span>
                        </a>
                        <a href="#" className={Style.navItem}>
                            <i data-lucide="book-open"></i>
                            <span>Word Library</span>
                        </a>
                        <a href="#" className={Style.navItem}>
                            <i data-lucide="plus-circle"></i>
                            <span>Add Word</span>
                        </a>
                        <a href="#" className={Style.navItem}>
                            <i data-lucide="rotate-cw"></i>
                            <span>Study Room</span>
                        </a>
                        <a href="#" className={Style.navItem}>
                            <i data-lucide="help-circle"></i>
                            <span>Quiz Mode</span>
                        </a>
                        <a href="#" className={Style.navItem}>
                            <i data-lucide="bar-chart-2"></i>
                            <span>Progress & Stats</span>
                        </a>
                    </nav>
                </div>

                <div className={Style.sidebarBottom}>
                    <div className={Style.challengeCard}>
                        <h4>Daily Challenge</h4>
                        <p>Learn 5 new academic words today to secure your streak multiplier.</p>
                    </div>
                </div>
            </aside>

            {/* <!-- Main Content Area --> */}
            <main className={Style.mainContent}>
                {/* <!-- Top Header --> */}
                <header className={Style.topHeader}>
                    <div className={Style.welcomeText}>
                        <h1>Vade Mecum</h1>
                        <p>Welcome back, Julian. Your lexicon is expanding.</p>
                    </div>
                    <div className={Style.headerRight}>
                        <div className={Style.searchBar}>
                            <i data-lucide="search"></i>
                            <input type="text" placeholder="Quick lookup..." />
                        </div>
                        <div className={Style.userProfile}>
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Dr. Clara" className="avatar" />
                            <span className={Style.userName}>Dr. Clara</span>
                        </div>
                    </div>
                </header>

                {/* <!-- Metrics Row --> */}
                <section className={Style.metricsGrid}>
                    {/* <!-- Streak Card --> */}
                    <div className={`${Style.card} ${Style.cardDard}`}>
                        <div className={Style.cardHeader}>
                            <span className={Style.cardLabel}>STREAK STATUS</span>
                            <i data-lucide="flame" className={Style.icon}></i>
                        </div>
                        <div className={Style.cardMetric}>12 Days Active</div>
                        <p className={Style.cardFooter}>Keep practicing daily to secure your Master Scholar title.</p>
                    </div>

                    {/* <!-- Vocabulary Size Card --> */}
                    <div className={`${Style.card} ${Style.cardWhite}`}>
                        <div className={Style.cardHeader}>
                            <span className={Style.cardLabel}>VOCABULARY SIZE</span>
                            <i data-lucide="bookmark" className={Style.icon}></i>
                        </div>
                        <div className={Style.cardMetric}>342 Learned</div>
                        <p className={Style.cardFooter}>+24 words added in the last 7 days.</p>
                    </div>

                    {/* <!-- Quick Actions Card --> */}
                    <div className={`${Style.card} ${Style.cardWhite}`}>
                        <div className={Style.cardHeader}>
                            <span className={Style.cardLabel}>QUICK ACTIONS</span>
                        </div>
                        <div className={Style.actionButtons}>
                            <button className={`${Style.btn} ${Style.btnPrimary}`}>+ Add Word</button>
                            <button className={`${Style.btn} ${Style.btnSecondary}`}>Start Revision</button>
                            <button className={`${Style.btn} ${Style.btnLight}`}>Quiz</button>
                        </div>
                    </div>
                </section>

                {/* <!-- Content Grid --> */}
                <section className={Style.contentGrid}>
                    {/* <!-- Recent Additions Card --> */}
                    <div className={`${Style.card} ${Style.cardWhite} ${Style.contentCard}`}>
                        <div className={`${Style.cardTitleBar}`}>
                            <h3>Recent Additions</h3>
                            <a href="#" className={Style.viewAll}>View All</a>
                        </div>
                        <div className={Style.wordList}>
                            <div className={Style.wordItem}>
                                <div className={Style.wordInfo}>
                                    <div className={Style.wordHead}>
                                        <span className={Style.wordTitle}>Chimerical</span>
                                        <span className={`${Style.badge} ${Style.badgeYellow}`}>ADJECTIVE</span>
                                    </div>
                                    <p className={Style.wordDef}>Merely imaginary; fanciful; highly unrealistic</p>
                                </div>
                                <div className={Style.statusIndicator}>
                                    <span className={`${Style.dot} ${Style.dotGold}`}></span>
                                    <span>Gold</span>
                                </div>
                            </div>

                            <div className={Style.wordItem}>
                                <div className={Style.wordInfo}>
                                    <div className={Style.wordHead}>
                                        <span className={Style.wordTitle}>Obfuscate</span>
                                        <span className={`${Style.badge} ${Style.badgeGreen}`}>VERB</span>
                                    </div>
                                    <p className={Style.wordDef}>To render obscure, unclear, or unintelligible</p>
                                </div>
                                <div className={Style.statusIndicator}>
                                    <span className={`${Style.dot} ${Style.dotSilver}`}></span>
                                    <span>Silver</span>
                                </div>
                            </div>

                            <div className={Style.wordItem}>
                                <div className={Style.wordInfo}>
                                    <div className={Style.wordHead}>
                                        <span className={Style.wordTitle}>Epistemic</span>
                                        <span className={`${Style.badge} ${Style.badgeYellow}`}>ADJECTIVE</span>
                                    </div>
                                    <p className={Style.wordDef}>Relating to knowledge or the degree of its validation</p>
                                </div>
                                <div className={Style.statusIndicator}>
                                    <span className={`${Style.dot} ${Style.dotBronze}`}></span>
                                    <span>Bronze</span>
                                </div>
                            </div>

                            <div className={Style.wordItem}>
                                <div className={Style.wordInfo}>
                                    <div className={Style.wordHead}>
                                        <span className={Style.wordTitle}>Ebullient</span>
                                        <span className={`${Style.badge} ${Style.badgeYellow}`}>ADJECTIVE</span>
                                    </div>
                                    <p className={Style.wordDef}>Cheerful and full of energy; overflowing</p>
                                </div>
                                <div className={Style.statusIndicator}>
                                    <span className={`${Style.dot} ${Style.dotSilver}`}></span>
                                    <span>Silver</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Weekly Progress Card --> */}
                    <div className={`${Style.card} ${Style.cardWhite} ${Style.contentCard}`}>
                        <div className={`${Style.cardTitleBar} ${Style.chartHeader}`}>
                            <h3>Weekly Progress</h3>
                            <p>New words categorized and mastered per day</p>
                        </div>
                        <div className={Style.chartContainer}>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>8</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 45%;"></div> */}
                                <span className={Style.barLabel}>Mon</span>
                            </div>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>12</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 65%;"></div> */}
                                <span className={Style.barLabel}>Tue</span>
                            </div>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>5</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 30%;"></div> */}
                                <span className={Style.barLabel}>Wed</span>
                            </div>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>15</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 80%;"></div> */}
                                <span className={Style.barLabel}>Thu</span>
                            </div>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>10</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 55%;"></div> */}
                                <span className={Style.barLabel}>Fri</span>
                            </div>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>18</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 95%;"></div> */}
                                <span className={Style.barLabel}>Sat</span>
                            </div>
                            <div className={Style.chartBarGroup}>
                                <span className={Style.barValue}>14</span>
                                <div className={Style.bar}></div>
                                {/* <div className="bar" style="height: 75%;"></div> */}
                                <span className={Style.barLabel}>Sun</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}