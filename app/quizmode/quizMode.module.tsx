.app {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    background: #f7f9fb;
    color: #172033;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  
  /* =========================================
     SIDEBAR
  ========================================= */
  
  .sidebar {
    width: 224px;
    min-height: 100vh;
    background: #ffffff;
    border-right: 1px solid #e4e8ee;
    padding: 30px 22px 22px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  
  .logoSection {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 38px;
    padding-left: 1px;
  }
  
  .logo {
    width: 30px;
    height: 30px;
    border-radius: 7px;
    background: #006b52;
    color: #ffffff;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    font-weight: 700;
  }
  
  .logoText {
    color: #172033;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 19px;
    font-weight: 700;
  }
  
  .navigation {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  
  .navItem {
    min-height: 36px;
    padding: 0 11px;
    border-radius: 8px;
  
    display: flex;
    align-items: center;
    gap: 12px;
  
    color: #46546c;
    font-size: 13px;
    font-weight: 500;
  
    cursor: pointer;
  }
  
  .activeNavItem {
    background: #e9faf3;
    color: #006b52;
    font-weight: 600;
  }
  
  .navIcon {
    width: 17px;
    text-align: center;
    font-size: 18px;
    line-height: 1;
  }
  
  .dailyChallenge {
    margin-top: auto;
    padding: 16px 14px;
    border-radius: 11px;
    background: #e9faf3;
  }
  
  .dailyChallenge h3 {
    margin: 0 0 9px;
    color: #006b52;
    font-size: 12px;
    font-weight: 700;
  }
  
  .dailyChallenge p {
    margin: 0;
    color: #53677a;
    font-size: 11px;
    line-height: 1.5;
  }
  
  
  /* =========================================
     MAIN CONTENT
  ========================================= */
  
  .mainContent {
    flex: 1;
    min-width: 0;
    padding: 22px 38px;
    box-sizing: border-box;
  }
  
  
  /* =========================================
     HEADER
  ========================================= */
  
  .header {
    min-height: 76px;
  
    border: 1px solid #e3e8ef;
    background: #f9fafb;
  
    padding: 0 26px;
    box-sizing: border-box;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .headingSection h1 {
    margin: 0 0 4px;
  
    color: #10192d;
  
    font-family: Georgia, "Times New Roman", serif;
    font-size: 27px;
    line-height: 1.1;
    font-weight: 700;
  }
  
  .headingSection p {
    margin: 0;
    color: #506078;
    font-size: 13px;
  }
  
  .headerRight {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .searchBox {
    width: 225px;
    height: 32px;
  
    border: 1px solid #dce3ec;
    border-radius: 8px;
  
    background: #ffffff;
  
    display: flex;
    align-items: center;
  
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  .searchIcon {
    margin-right: 6px;
    color: #8ca0b7;
    font-size: 18px;
  }
  
  .searchBox input {
    width: 100%;
    min-width: 0;
  
    border: 0;
    outline: 0;
  
    background: transparent;
  
    color: #34445c;
    font-size: 11px;
  }
  
  .searchBox input::placeholder {
    color: #9eacbe;
  }
  
  .profile {
    display: flex;
    align-items: center;
    gap: 7px;
  
    white-space: nowrap;
  
    color: #172033;
    font-size: 12px;
    font-weight: 600;
  }
  
  .profileImage {
    width: 32px;
    height: 32px;
  
    border-radius: 50%;
  
    background: #e6ddd4;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    font-size: 18px;
  }
  
  
  /* =========================================
     QUIZ CARD
  ========================================= */
  
  .quizCard {
    width: 100%;
  
    margin-top: 22px;
  
    padding: 34px 29px 29px;
  
    box-sizing: border-box;
  
    border: 1px solid #dfe6ee;
    border-radius: 15px;
  
    background: #ffffff;
  }
  
  
  /* =========================================
     QUIZ META
  ========================================= */
  
  .quizMeta {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .quizInfo {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .questionNumber {
    color: #006b52;
    font-size: 12px;
    font-weight: 700;
  }
  
  .streak {
    padding: 5px 8px;
  
    border-radius: 4px;
  
    background: #e9faf3;
  
    color: #006b52;
    font-size: 10px;
    font-weight: 700;
  }
  
  .timer {
    display: flex;
    align-items: center;
    gap: 7px;
  
    color: #d87500;
  
    font-size: 11px;
    font-weight: 600;
  }
  
  .timerIcon {
    font-size: 16px;
  }
  
  
  /* =========================================
     QUESTION
  ========================================= */
  
  .questionSection {
    margin-top: 29px;
  }
  
  .questionLabel {
    color: #526078;
    font-size: 12px;
    font-weight: 700;
  }
  
  .questionSection h2 {
    margin: 12px 0 0;
  
    color: #10182b;
  
    font-family: Georgia, "Times New Roman", serif;
    font-size: 33px;
    line-height: 1;
    font-weight: 700;
  }
  
  
  /* =========================================
     ANSWERS
  ========================================= */
  
  .answers {
    margin-top: 25px;
  
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
  
  .answerOption {
    width: 100%;
    min-height: 53px;
  
    padding: 0 14px;
  
    border: 1px solid #dfe6ee;
    border-radius: 7px;
  
    background: #f8fafc;
  
    display: flex;
    align-items: center;
  
    text-align: left;
  
    cursor: pointer;
  
    color: #172033;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .answerOption:hover {
    background: #f3f7f8;
  }
  
  .answerLetter {
    width: 25px;
    height: 25px;
  
    flex: 0 0 25px;
  
    border-radius: 50%;
  
    background: #ffffff;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    color: #172033;
    font-size: 11px;
    font-weight: 700;
  }
  
  .answerText {
    margin-left: 15px;
  
    color: #172033;
  
    font-size: 12px;
    line-height: 1.4;
  }
  
  .correctAnswer {
    border: 2px solid #008060;
    background: #effcf6;
  }
  
  .correctLetter {
    background: #006b52;
    color: #ffffff;
  }
  
  .correctIcon {
    margin-left: auto;
  
    color: #007c5d;
  
    font-size: 20px;
    font-weight: 700;
  }
  
  
  /* =========================================
     TABLET
  ========================================= */
  
  @media (max-width: 1000px) {
    .sidebar {
      width: 200px;
    }
  
    .mainContent {
      padding: 20px 25px;
    }
  
    .header {
      padding: 0 18px;
    }
  
    .headingSection h1 {
      font-size: 23px;
    }
  
    .searchBox {
      width: 180px;
    }
  
    .quizCard {
      padding: 30px 24px 25px;
    }
  }
  
  
  /* =====================================================
     MOBILE
     Optimized for iPhone 15
     393px × 852px
  ===================================================== */
  
  @media (max-width: 600px) {
  
    html,
    body {
      width: 100%;
      min-width: 0;
      overflow-x: hidden;
    }
  
  
    /* -----------------------------------------
       APP
    ----------------------------------------- */
  
    .app {
      width: 100%;
      min-height: 100dvh;
  
      display: flex;
      flex-direction: column;
    }
  
  
    /* -----------------------------------------
       MOBILE SIDEBAR
    ----------------------------------------- */
  
    .sidebar {
      width: 100%;
      min-height: auto;
  
      padding:
        12px
        12px
        calc(10px + env(safe-area-inset-bottom));
  
      border-right: 0;
      border-bottom: 1px solid #e4e8ee;
  
      display: block;
    }
  
    .logoSection {
      margin: 0 0 12px;
      padding: 0;
    }
  
    .logo {
      width: 29px;
      height: 29px;
      font-size: 17px;
    }
  
    .logoText {
      font-size: 18px;
    }
  
    .navigation {
      width: 100%;
  
      display: flex;
      flex-direction: row;
  
      gap: 5px;
  
      overflow-x: auto;
  
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }
  
    .navigation::-webkit-scrollbar {
      display: none;
    }
  
    .navItem {
      flex: 0 0 auto;
  
      min-height: 34px;
  
      padding: 0 9px;
  
      gap: 6px;
  
      border-radius: 7px;
  
      font-size: 10px;
    }
  
    .navIcon {
      width: auto;
      font-size: 15px;
    }
  
    .dailyChallenge {
      display: none;
    }
  
  
    /* -----------------------------------------
       MAIN
    ----------------------------------------- */
  
    .mainContent {
      width: 100%;
  
      padding:
        10px
        10px
        calc(20px + env(safe-area-inset-bottom));
  
      box-sizing: border-box;
    }
  
  
    /* -----------------------------------------
       HEADER
    ----------------------------------------- */
  
    .header {
      width: 100%;
  
      min-height: auto;
  
      padding: 15px 14px;
  
      border-radius: 10px;
  
      display: flex;
      flex-direction: column;
  
      align-items: stretch;
  
      gap: 14px;
    }
  
    .headingSection {
      width: 100%;
    }
  
    .headingSection h1 {
      margin-bottom: 5px;
  
      font-size: 21px;
      line-height: 1.15;
    }
  
    .headingSection p {
      font-size: 11px;
      line-height: 1.4;
    }
  
    .headerRight {
      width: 100%;
  
      display: flex;
      align-items: center;
  
      gap: 9px;
    }
  
    .searchBox {
      flex: 1;
  
      width: auto;
      height: 34px;
  
      min-width: 0;
    }
  
    .searchBox input {
      font-size: 11px;
    }
  
    .profile {
      flex: 0 0 auto;
  
      gap: 5px;
  
      font-size: 10px;
    }
  
    .profileImage {
      width: 30px;
      height: 30px;
  
      font-size: 16px;
    }
  
  
    /* -----------------------------------------
       QUIZ CARD
    ----------------------------------------- */
  
    .quizCard {
      width: 100%;
  
      margin-top: 12px;
  
      padding:
        18px
        14px
        18px;
  
      border-radius: 14px;
    }
  
  
    /* -----------------------------------------
       QUIZ META
    ----------------------------------------- */
  
    .quizMeta {
      align-items: flex-start;
      gap: 10px;
    }
  
    .quizInfo {
      flex-wrap: wrap;
      gap: 7px;
    }
  
    .questionNumber {
      font-size: 10px;
    }
  
    .streak {
      padding: 5px 7px;
      font-size: 9px;
    }
  
    .timer {
      flex: 0 0 auto;
  
      gap: 5px;
  
      font-size: 9px;
  
      white-space: nowrap;
    }
  
    .timerIcon {
      font-size: 14px;
    }
  
  
    /* -----------------------------------------
       QUESTION
    ----------------------------------------- */
  
    .questionSection {
      margin-top: 25px;
    }
  
    .questionLabel {
      font-size: 10px;
      line-height: 1.4;
    }
  
    .questionSection h2 {
      margin-top: 10px;
  
      font-size: 34px;
      line-height: 1;
    }
  
  
    /* -----------------------------------------
       ANSWERS
    ----------------------------------------- */
  
    .answers {
      margin-top: 22px;
  
      gap: 9px;
    }
  
    .answerOption {
      min-height: 58px;
  
      padding:
        9px
        10px;
  
      border-radius: 8px;
    }
  
    .answerLetter {
      width: 27px;
      height: 27px;
  
      flex: 0 0 27px;
  
      font-size: 10px;
    }
  
    .answerText {
      margin-left: 11px;
  
      font-size: 11px;
      line-height: 1.4;
    }
  
    .correctIcon {
      margin-left: 7px;
  
      flex: 0 0 auto;
  
      font-size: 18px;
    }
  }
  
  
  /* =====================================================
     SMALL MOBILE
  ===================================================== */
  
  @media (max-width: 375px) {
  
    .mainContent {
      padding-left: 8px;
      padding-right: 8px;
    }
  
    .header {
      padding: 13px 12px;
    }
  
    .headingSection h1 {
      font-size: 19px;
    }
  
    .quizCard {
      padding-left: 12px;
      padding-right: 12px;
    }
  
    .questionSection h2 {
      font-size: 31px;
    }
  
    .answerText {
      font-size: 10px;
    }
  
    .answerOption {
      min-height: 56px;
    }
  
    .timer {
      font-size: 8px;
    }
  }
  
  
  /* =====================================================
     LANDSCAPE PHONE
  ===================================================== */
  
  @media (max-width: 900px) and (orientation: landscape) {
  
    .sidebar {
      padding: 8px 12px;
    }
  
    .logoSection {
      margin-bottom: 7px;
    }
  
    .mainContent {
      padding: 10px 14px;
    }
  
    .quizCard {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  
    .questionSection {
      margin-top: 18px;
    }
  
    .answers {
      margin-top: 15px;
    }
  }