---
marp: true
theme: default
paginate: true
size: 16:9
math: mathjax
title: 민주주의의 수학적 불가능성
description: 2026 너드살롱 Vol.2 발표자료
style: |
  @font-face {
    font-family: Pretendard;
    src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/woff2/PretendardVariable.woff2") format("woff2");
    font-weight: 45 920;
    font-display: swap;
  }

  :root {
    --ink: #17151f;
    --ink-soft: #2b2835;
    --paper: #fbf7ef;
    --paper-deep: #f0e7d8;
    --line: #ded2bf;
    --muted: #756d62;
    --teal: #087f7b;
    --coral: #df4c35;
    --amber: #d89d1d;
    --green: #198754;
    --white: #fffdf8;
  }

  section {
    font-family: Pretendard, ui-sans-serif, system-ui, sans-serif;
    letter-spacing: 0;
    line-height: 1.34;
    color: var(--ink);
    background:
      linear-gradient(90deg, rgba(23, 21, 31, 0.055) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(23, 21, 31, 0.04) 0 1px, transparent 1px 100%),
      var(--paper);
    background-size: 46px 46px, 46px 46px, auto;
    padding: 54px 66px 52px;
    position: relative;
    overflow: hidden;
  }

  section::before {
    content: "";
    position: absolute;
    inset: 24px 28px;
    border: 1px solid rgba(23, 21, 31, 0.12);
    pointer-events: none;
  }

  section::after {
    color: rgba(23, 21, 31, 0.42);
    font-size: 18px;
    font-weight: 720;
    right: 36px;
    bottom: 24px;
  }

  section > * {
    position: relative;
    z-index: 1;
  }

  h1, h2, h3 {
    font-weight: 760;
    margin: 0;
  }

  h1 {
    color: var(--ink);
    font-size: 1.96em;
    line-height: 1.06;
    max-width: 1070px;
  }

  h2 {
    color: var(--ink-soft);
    font-size: 1.14em;
    line-height: 1.22;
    margin-top: 0.58em;
  }

  p, li {
    font-size: 0.96em;
  }

  table {
    display: table;
    width: min(100%, 1080px);
    max-width: 100%;
    border-collapse: separate;
    border-spacing: 0 8px;
    font-size: 0.74em;
    margin: 0.78em auto 0;
    overflow: visible;
    color: var(--ink);
  }

  table tr {
    background: transparent;
  }

  table tr:nth-child(2n) {
    background: transparent;
  }

  th, td {
    border: 1px solid rgba(23, 21, 31, 0.1);
    padding: 0.5em 0.7em;
    text-align: center;
    vertical-align: middle;
    color: var(--ink);
  }

  th {
    background: var(--ink);
    color: var(--white);
    font-size: 0.88em;
    font-weight: 700;
  }

  th:first-child {
    border-radius: 0;
  }

  th:last-child {
    border-radius: 0;
  }

  td {
    background: rgba(255, 253, 248, 0.9);
  }

  td:first-child {
    border-radius: 0;
  }

  td:last-child {
    border-radius: 0;
  }

  strong {
    color: var(--coral);
    font-weight: 760;
  }

  blockquote {
    margin: 0.88em 0 0;
    border-left: 0.28em solid var(--teal);
    background: rgba(8, 127, 123, 0.1);
    padding: 0.56em 0.82em;
    color: var(--ink-soft);
    font-weight: 700;
  }

  blockquote p {
    margin: 0.18em 0;
  }

  mjx-container {
    color: var(--ink);
  }

  section > mjx-container[display="true"],
  section > p > mjx-container[display="true"] {
    margin: 0.82em 0 !important;
  }

  ul, ol {
    padding-left: 1.18em;
  }

  li::marker {
    color: var(--coral);
    font-weight: 760;
  }

  section.lead,
  section.section-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 720px;
    color: var(--white);
    background:
      linear-gradient(90deg, rgba(255, 253, 248, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.06) 0 1px, transparent 1px 100%),
      var(--ink);
    background-size: 54px 54px, 54px 54px, auto;
  }

  section.lead::before,
  section.section-title::before {
    border-color: rgba(255, 253, 248, 0.2);
  }

  section.lead::after,
  section.section-title::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.lead h1,
  section.section-title h1 {
    color: var(--white);
    font-size: 3.0em;
    line-height: 0.98;
    max-width: 1040px;
  }

  section.lead h1::after,
  section.section-title h1::after {
    content: "";
    display: block;
    width: 152px;
    height: 8px;
    margin-top: 0.32em;
    background: var(--coral);
  }

  section.lead p,
  section.section-title p {
    color: rgba(255, 253, 248, 0.78);
    font-size: 1.04em;
    font-weight: 680;
    margin: 0.34em 0 0;
  }

  section.social-choice-welcome {
    display: grid;
    place-items: center;
    min-height: 720px;
    padding: 0 96px;
    text-align: center;
    color: var(--white);
    background:
      linear-gradient(180deg, rgba(10, 10, 14, 0.36), rgba(10, 10, 14, 0.66)),
      radial-gradient(circle at center, rgba(10, 10, 14, 0.12), rgba(10, 10, 14, 0.42)),
      url("/projects/nerdsalon-2026-vol2/assets/social-choice-welcome.jpg") center /
      cover no-repeat;
  }

  section.social-choice-welcome::before {
    inset: 0;
    border: 0;
    background:
      linear-gradient(90deg, rgba(255, 253, 248, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.06) 0 1px, transparent 1px 100%);
    background-size: 54px 54px;
  }

  section.social-choice-welcome::after {
    color: rgba(255, 253, 248, 0.6);
  }

  section.social-choice-welcome h1 {
    max-width: 1010px;
    color: var(--white);
    font-size: 3.08em;
    line-height: 1.06;
    text-wrap: balance;
    text-shadow: 0 3px 22px rgba(0, 0, 0, 0.5);
  }

  section.social-choice-welcome h1 strong {
    color: #ffd166;
    font-weight: 820;
  }

  section.spoiler-choice {
    display: grid;
    place-items: center;
    min-height: 720px;
    padding: 78px 96px 72px;
    text-align: center;
    color: var(--white);
    background:
      linear-gradient(180deg, rgba(8, 8, 14, 0.24), rgba(8, 8, 14, 0.62)),
      radial-gradient(circle at center, rgba(8, 8, 14, 0.3), rgba(8, 8, 14, 0.68)),
      url("/projects/nerdsalon-2026-vol2/assets/spoiler-choice-background.jpg")
      center / cover no-repeat;
  }

  section.spoiler-choice::before {
    inset: 0;
    border: 0;
    background:
      linear-gradient(90deg, rgba(255, 253, 248, 0.07) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.05) 0 1px, transparent 1px 100%);
    background-size: 54px 54px;
  }

  section.spoiler-choice::after {
    color: rgba(255, 253, 248, 0.62);
  }

  section.spoiler-choice h1 {
    color: var(--white);
    font-size: 2.7em;
    line-height: 1.05;
    max-width: 980px;
    text-shadow: 0 4px 24px rgba(0, 0, 0, 0.68);
  }

  section.spoiler-choice p {
    color: rgba(255, 253, 248, 0.82);
    font-size: 0.88em;
    font-weight: 700;
    margin: 1.15em 0 0;
    text-shadow: 0 3px 16px rgba(0, 0, 0, 0.72);
  }

  section.spoiler-choice h2 {
    color: var(--white);
    font-size: 1.58em;
    line-height: 1.08;
    margin-top: 0.42em;
    text-shadow: 0 4px 18px rgba(0, 0, 0, 0.72);
  }

  section.spoiler-choice h2 strong {
    color: #ffd166;
    font-weight: 820;
  }

  section.number {
    display: grid;
    grid-template-columns: 0.86fr 1fr;
    align-content: center;
    column-gap: 54px;
    color: var(--white);
    background: var(--ink);
  }

  section.number::before {
    border-color: rgba(255, 253, 248, 0.18);
  }

  section.number::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.number h1 {
    color: var(--coral);
    font-size: 6.55em;
    line-height: 0.86;
    margin: 0;
    align-self: center;
  }

  section.number h2 {
    color: var(--white);
    font-size: 1.36em;
    margin: 0;
    align-self: end;
  }

  section.number table {
    grid-column: 2;
    margin-top: 0.64em;
    color: var(--white);
  }

  section.number table tr {
    background: transparent;
  }

  section.number table tr:nth-child(2n) {
    background: transparent;
  }

  section.number td,
  section.number th {
    background: rgba(255, 253, 248, 0.08);
    color: var(--white);
    border: 1px solid rgba(255, 253, 248, 0.16);
  }

  section.election-case {
    display: grid;
    grid-template-columns: 0.82fr 1.18fr;
    align-items: center;
    gap: 42px;
    min-height: 720px;
    padding: 58px 66px 52px;
    color: var(--white);
    background:
      linear-gradient(90deg, rgba(255, 253, 248, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.06) 0 1px, transparent 1px 100%),
      var(--ink);
    background-size: 54px 54px, 54px 54px, auto;
  }

  section.election-case::before {
    inset: 24px 28px;
    border-color: rgba(255, 253, 248, 0.18);
  }

  section.election-case::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.election-case h1 {
    z-index: 2;
    color: var(--white);
    font-size: 4.82em;
    line-height: 0.88;
    max-width: 470px;
    white-space: nowrap;
  }

  section.election-nader h1 {
    font-size: 4.0em;
  }

  .case-pie {
    position: absolute;
    z-index: 0;
    left: -230px;
    top: 50%;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    transform: translateY(-50%);
    opacity: 0.72;
    border: 1px solid rgba(255, 253, 248, 0.2);
  }

  .case-pie::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background:
      radial-gradient(circle, transparent 0 55%, rgba(23, 21, 31, 0.18) 56% 100%),
      linear-gradient(90deg, rgba(23, 21, 31, 0.18), transparent 56%);
  }

  .florida-pie {
    background: conic-gradient(#d44b3d 0 50.0046%, #2f6fab 50.0046% 100%);
  }

  .nader-pie {
    background: conic-gradient(#d44b3d 0 49.1815%, #2f6fab 49.1815% 98.354%, #2f8f5b 98.354% 100%);
  }

  .case-copy {
    z-index: 2;
    display: grid;
    gap: 18px;
    min-width: 0;
  }

  .case-kicker {
    color: rgba(255, 253, 248, 0.68);
    font-size: 0.74em;
    font-weight: 680;
  }

  .case-headline {
    color: var(--white);
    font-size: 1.62em;
    font-weight: 760;
    line-height: 1.1;
  }

  .case-grid {
    display: grid;
    grid-template-columns: 1.06fr 0.94fr;
    gap: 16px;
    align-items: stretch;
  }

  .vote-ledger,
  .electoral-box {
    border: 1px solid rgba(255, 253, 248, 0.2);
    background: rgba(255, 253, 248, 0.075);
  }

  .ledger-row {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    min-height: 53px;
    padding: 0 16px;
    border-bottom: 1px solid rgba(255, 253, 248, 0.13);
    color: rgba(255, 253, 248, 0.92);
    font-size: 0.78em;
    font-weight: 640;
  }

  .ledger-row:last-child {
    border-bottom: 0;
  }

  .ledger-row.head {
    min-height: 42px;
    color: rgba(255, 253, 248, 0.72);
    font-size: 0.66em;
    font-weight: 680;
  }

  .ledger-row.bush {
    border-left: 5px solid #d44b3d;
  }

  .ledger-row.gore {
    border-left: 5px solid #2f6fab;
  }

  .ledger-row.nader {
    border-left: 5px solid #2f8f5b;
  }

  .ledger-row.diff {
    border-left: 5px solid var(--amber);
    color: var(--white);
  }

  .ledger-row strong {
    color: #ffd166;
    font-weight: 780;
  }

  .electoral-box {
    display: grid;
    align-content: start;
    gap: 10px;
    padding: 16px;
  }

  .electoral-label {
    color: rgba(255, 253, 248, 0.7);
    font-size: 0.68em;
    font-weight: 700;
  }

  .electoral-label span {
    color: rgba(255, 253, 248, 0.5);
    font-weight: 620;
  }

  .electoral-row,
  .fact-row {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: baseline;
    gap: 16px;
    padding: 9px 0;
    border-bottom: 1px solid rgba(255, 253, 248, 0.13);
    color: rgba(255, 253, 248, 0.88);
    font-size: 0.76em;
    font-weight: 650;
  }

  .electoral-row:last-of-type,
  .fact-row:last-of-type {
    border-bottom: 0;
  }

  .electoral-row .score,
  .fact-row .score {
    color: var(--white);
    font-size: 1.58em;
    font-weight: 780;
    line-height: 1;
  }

  .electoral-row.win .score,
  .fact-row.highlight .score {
    color: #ffd166;
  }

  .case-note {
    border-top: 1px solid rgba(255, 253, 248, 0.22);
    padding-top: 14px;
    color: rgba(255, 253, 248, 0.82);
    font-size: 0.78em;
    font-weight: 650;
    line-height: 1.32;
  }

  .case-note strong {
    color: #ffd166;
  }

  section.tight h1 {
    font-size: 1.72em;
  }

  section.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 720px;
  }

  section.center h1 {
    margin-left: auto;
    margin-right: auto;
  }

  section.center h2 {
    color: var(--teal);
    font-size: 1.72em;
    line-height: 1.18;
  }

  section.center blockquote {
    align-self: center;
    min-width: 760px;
    max-width: 980px;
    text-align: center;
    border-left: 0;
    border-top: 4px solid var(--teal);
  }

  section.center-list ol {
    display: grid;
    justify-items: center;
    gap: 0.42em;
    padding-left: 0;
    list-style-position: inside;
  }

  section.center-list li {
    text-align: center;
  }

  .small {
    color: var(--muted);
    font-size: 0.6em;
  }

  .muted {
    color: var(--muted);
  }

  ol {
    margin-top: 1.05em;
  }

  ol li {
    margin: 0.44em 0;
    font-size: 1.02em;
  }

  .result-list strong {
    display: inline-block;
    min-width: 12em;
  }

  section.candidates h1 {
    margin-left: auto;
    margin-right: auto;
    font-size: 2.1em;
  }

  section.candidates table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 14px 0;
    margin: 1.35em auto 0;
  }

  section.candidates th,
  section.candidates td {
    background: transparent;
    color: var(--ink);
    border: 0;
    padding: 0;
  }

  section.candidates table tr {
    background: transparent;
  }

  section.candidates table tr:nth-child(2n) {
    background: transparent;
  }

  section.candidates img {
    max-height: 205px;
    width: 100%;
    object-fit: contain;
    border: 1px solid rgba(23, 21, 31, 0.12);
    background: var(--white);
    padding: 10px;
  }

  .dense table {
    font-size: 0.62em;
    border-spacing: 0 6px;
  }

  .dense p,
  .dense li {
    font-size: 0.77em;
  }

  .dense h1 {
    font-size: 1.44em;
  }

  .dense h2 {
    font-size: 1.02em;
  }

  .dense blockquote {
    font-size: 0.84em;
  }

  .dense mjx-container {
    font-size: 94% !important;
  }

  .dense > mjx-container[display="true"],
  .dense > p > mjx-container[display="true"] {
    margin: 0.68em 0 !important;
  }

  .cols {
    display: grid;
    gap: 1.05em;
    align-items: start;
    margin-top: 0.55em;
  }

  .cols-2 {
    grid-template-columns: 1.18fr 0.82fr;
  }

  .cols-even {
    grid-template-columns: 1fr 1fr;
  }

  .cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .panel {
    border: 1px solid rgba(23, 21, 31, 0.12);
    padding: 0.62em 0.72em;
    background: rgba(255, 253, 248, 0.86);
  }

  .panel h2,
  .panel h3 {
    margin: 0 0 0.35em;
    font-size: 0.82em;
  }

  .panel table {
    margin: 0;
    font-size: 0.62em;
  }

  .choice-example {
    display: grid;
    grid-template-columns: 148px minmax(0, 1fr);
    margin-top: 0.82em;
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: rgba(255, 253, 248, 0.88);
    font-size: 0.82em;
  }

  .choice-label,
  .choice-value {
    min-height: 48px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(23, 21, 31, 0.1);
  }

  .choice-label {
    padding: 0 0.8em;
    border-right: 1px solid rgba(23, 21, 31, 0.1);
    color: var(--muted);
    font-weight: 680;
  }

  .choice-value {
    gap: 0.36em;
    padding: 0 0.9em;
    color: var(--ink);
    font-weight: 650;
  }

  .choice-label:nth-last-child(2),
  .choice-value:last-child {
    border-bottom: 0;
  }

  .choice-value.result {
    color: var(--green);
    font-weight: 760;
  }

  .choice-symbol {
    color: var(--muted);
    font-size: 0.78em;
    font-weight: 620;
  }

  .iia-example {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 0.7em;
  }

  .iia-profile {
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: rgba(255, 253, 248, 0.9);
  }

  .iia-profile-title {
    padding: 0.48em 0.72em;
    background: var(--ink);
    color: var(--white);
    font-size: 0.7em;
    font-weight: 700;
  }

  .iia-row {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    align-items: center;
    min-height: 42px;
    padding: 0 0.72em;
    border-top: 1px solid rgba(23, 21, 31, 0.1);
    color: var(--ink);
    font-size: 0.66em;
  }

  .iia-row.head {
    min-height: 34px;
    color: var(--muted);
    font-weight: 700;
    background: rgba(23, 21, 31, 0.05);
  }

  .iia-pref {
    display: flex;
    align-items: center;
    gap: 0.34em;
    min-width: 0;
    white-space: nowrap;
    font-weight: 650;
  }

  .iia-focus {
    border-bottom: 3px solid var(--teal);
    line-height: 1;
  }

  .iia-note {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 16px;
    margin-top: 0.64em;
    padding: 0.62em 0.78em;
    border: 1px solid rgba(8, 127, 123, 0.24);
    background: rgba(8, 127, 123, 0.1);
    color: var(--ink-soft);
    font-size: 0.72em;
    font-weight: 700;
    text-align: center;
  }

  .iia-note .arrow {
    color: var(--teal);
    font-size: 1.28em;
    line-height: 1;
  }

  .single-peak-visual {
    display: grid;
    grid-template-columns: minmax(0, 1.28fr) minmax(0, 0.72fr);
    gap: 34px;
    align-items: center;
    min-height: 480px;
    margin-top: 18px;
  }

  .peak-chart {
    position: relative;
    height: 430px;
    padding: 44px 40px 64px 78px;
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: rgba(255, 253, 248, 0.88);
  }

  .peak-axis-x,
  .peak-axis-y {
    position: absolute;
    background: rgba(23, 21, 31, 0.56);
  }

  .peak-axis-x {
    left: 78px;
    right: 40px;
    bottom: 64px;
    height: 2px;
  }

  .peak-axis-y {
    left: 78px;
    top: 44px;
    bottom: 64px;
    width: 2px;
  }

  .peak-y-label,
  .peak-x-label {
    position: absolute;
    color: var(--muted);
    font-size: 0.66em;
    font-weight: 680;
  }

  .peak-y-label {
    left: 96px;
    top: 52px;
  }

  .peak-x-label {
    right: 42px;
    bottom: 18px;
  }

  .peak-bars {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: end;
    gap: 24px;
    height: 100%;
  }

  .peak-col {
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: end;
    height: 100%;
    min-width: 0;
    text-align: center;
  }

  .peak-bar {
    justify-self: center;
    width: 70%;
    min-height: 30px;
    border-top: 5px solid rgba(23, 21, 31, 0.28);
    background: rgba(8, 127, 123, 0.22);
  }

  .peak-col.h10 .peak-bar,
  .peak-col.h50 .peak-bar {
    height: 28%;
  }

  .peak-col.h20 .peak-bar,
  .peak-col.h40 .peak-bar {
    height: 58%;
  }

  .peak-col.h30 .peak-bar {
    height: 96%;
    border-top-color: var(--coral);
    background: rgba(8, 127, 123, 0.58);
  }

  .peak-tick {
    margin-top: 12px;
    color: var(--ink);
    font-size: 0.76em;
    font-weight: 680;
  }

  .peak-col.h30 .peak-tick {
    color: var(--coral);
    font-weight: 780;
  }

  .peak-summary {
    display: grid;
    gap: 14px;
  }

  .peak-row {
    display: grid;
    grid-template-columns: 96px 1fr;
    align-items: center;
    min-height: 58px;
    border-bottom: 1px solid rgba(23, 21, 31, 0.14);
  }

  .peak-row span {
    color: var(--muted);
    font-size: 0.72em;
    font-weight: 680;
  }

  .peak-row strong {
    color: var(--ink);
    font-size: 0.94em;
    font-weight: 720;
  }

  .peak-takeaway {
    margin-top: 10px;
    padding: 0.68em 0.82em;
    border-left: 5px solid var(--teal);
    background: rgba(8, 127, 123, 0.1);
    color: var(--ink-soft);
    font-size: 0.82em;
    font-weight: 700;
    line-height: 1.3;
  }

  .median-axis {
    position: relative;
    height: 142px;
    margin: 0.74em auto 0.5em;
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: rgba(255, 253, 248, 0.86);
  }

  .median-track {
    position: absolute;
    left: 80px;
    right: 80px;
    top: 56px;
    height: 3px;
    background: rgba(23, 21, 31, 0.5);
  }

  .median-point {
    position: absolute;
    top: 32px;
    width: 58px;
    transform: translateX(-50%);
    text-align: center;
  }

  .median-point::before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    margin: 0 auto 8px;
    background: var(--ink);
  }

  .median-point.mid::before {
    background: var(--coral);
  }

  .median-point span {
    display: block;
    color: var(--muted);
    font-size: 0.56em;
    font-weight: 680;
    line-height: 1.16;
  }

  .median-point strong {
    display: block;
    color: var(--ink);
    font-size: 0.72em;
    font-weight: 760;
    line-height: 1.1;
  }

  .median-point.mid strong {
    color: var(--coral);
  }

  .median-point.p10 {
    left: 12%;
  }

  .median-point.p20 {
    left: 31%;
  }

  .median-point.p30 {
    left: 50%;
  }

  .median-point.p40 {
    left: 69%;
  }

  .median-point.p50 {
    left: 88%;
  }

  .domain-flow {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
    gap: 34px;
    align-items: stretch;
    min-height: 398px;
    margin-top: 14px;
  }

  .domain-set {
    position: relative;
    min-height: 398px;
    padding: 22px;
    border: 1px solid rgba(23, 21, 31, 0.18);
    background: rgba(255, 253, 248, 0.88);
  }

  .domain-inner {
    position: absolute;
    left: 62px;
    right: 62px;
    bottom: 38px;
    min-height: 150px;
    padding: 20px;
    border: 4px solid var(--teal);
    background: rgba(8, 127, 123, 0.1);
  }

  .domain-label {
    color: var(--muted);
    font-size: 0.72em;
    font-weight: 700;
  }

  .domain-formula {
    margin-top: 0.18em;
    color: var(--ink);
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif;
    font-size: 1.58em;
    font-weight: 700;
    line-height: 1.05;
  }

  .domain-formula sub,
  .domain-formula sup {
    font-size: 0.5em;
  }

  .domain-hint {
    margin-top: 0.48em;
    color: var(--ink-soft);
    font-size: 0.72em;
    font-weight: 650;
  }

  .domain-result {
    display: grid;
    align-content: center;
    gap: 14px;
  }

  .domain-step,
  .domain-outcome {
    min-height: 72px;
    display: grid;
    place-items: center;
    padding: 0 18px;
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: rgba(255, 253, 248, 0.9);
    color: var(--ink);
    font-size: 0.88em;
    font-weight: 700;
    text-align: center;
  }

  .domain-step {
    border-color: rgba(223, 76, 53, 0.42);
    background: rgba(223, 76, 53, 0.1);
    color: var(--coral);
  }

  .domain-arrow {
    color: var(--teal);
    font-size: 1.26em;
    font-weight: 760;
    text-align: center;
    line-height: 1;
  }

  .approval-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 30px;
    align-items: stretch;
    margin-top: 0.82em;
  }

  .approval-formulas,
  .approval-ballot {
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: rgba(255, 253, 248, 0.9);
  }

  .approval-formulas {
    display: grid;
    align-content: center;
    gap: 16px;
    min-height: 430px;
    padding: 26px 30px;
  }

  .approval-formula {
    color: var(--ink);
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif;
    font-size: 1.18em;
    font-weight: 650;
    line-height: 1.18;
    text-align: center;
  }

  .approval-formula .small-op {
    font-size: 0.82em;
    font-weight: 620;
  }

  .approval-ballot {
    align-self: center;
  }

  .approval-row {
    display: grid;
    grid-template-columns: 1fr 96px;
    align-items: center;
    min-height: 58px;
    border-top: 1px solid rgba(23, 21, 31, 0.12);
    color: var(--ink);
    font-size: 0.86em;
    font-weight: 660;
  }

  .approval-row.head {
    min-height: 48px;
    border-top: 0;
    background: var(--ink);
    color: var(--white);
    font-weight: 720;
  }

  .approval-row span {
    padding: 0 18px;
  }

  .approval-row span:last-child {
    border-left: 1px solid rgba(23, 21, 31, 0.12);
    text-align: center;
  }

  .approval-row.head span:last-child {
    border-left-color: rgba(255, 253, 248, 0.22);
  }

  .approval-check {
    color: var(--teal);
    font-size: 1.16em;
    font-weight: 760;
  }

  .support-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: stretch;
    margin-top: 0.78em;
  }

  .support-panel {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 428px;
    padding: 22px 24px;
    border: 1px solid rgba(23, 21, 31, 0.18);
    background: rgba(255, 253, 248, 0.9);
  }

  .support-title {
    color: var(--ink);
    font-size: 0.9em;
    font-weight: 730;
    line-height: 1.18;
  }

  .support-subtitle {
    margin-top: 0.24em;
    color: var(--muted);
    font-size: 0.68em;
    font-weight: 650;
  }

  .support-bars {
    display: grid;
    align-content: center;
    gap: 15px;
    min-height: 0;
    margin-top: 10px;
  }

  .support-row {
    display: grid;
    grid-template-columns: 74px minmax(0, 1fr) 58px;
    align-items: center;
    gap: 12px;
    min-height: 50px;
  }

  .support-name {
    color: var(--ink);
    font-size: 0.76em;
    font-weight: 680;
  }

  .support-row.win .support-name,
  .support-row.win .support-number {
    color: var(--coral);
    font-weight: 780;
  }

  .support-row.accept-win .support-name,
  .support-row.accept-win .support-number {
    color: var(--green);
    font-weight: 780;
  }

  .support-track {
    display: flex;
    height: 30px;
    border: 1px solid rgba(23, 21, 31, 0.18);
    background: rgba(23, 21, 31, 0.045);
  }

  .support-segment {
    height: 100%;
  }

  .support-segment.base {
    background: rgba(23, 21, 31, 0.78);
  }

  .support-segment.extra {
    background: rgba(8, 127, 123, 0.62);
  }

  .support-row.win .support-segment.base {
    background: var(--coral);
  }

  .support-row.accept-win .support-segment.base {
    background: rgba(23, 21, 31, 0.78);
  }

  .support-row.accept-win .support-segment.extra {
    background: var(--green);
  }

  .support-number {
    color: var(--ink);
    font-size: 0.76em;
    font-weight: 700;
    text-align: right;
    white-space: nowrap;
  }

  .w25 {
    width: 25%;
  }

  .w30 {
    width: 30%;
  }

  .w35 {
    width: 35%;
  }

  .w40 {
    width: 40%;
  }

  .w50 {
    width: 50%;
  }

  .support-result {
    min-height: 58px;
    display: grid;
    place-items: center;
    border-top: 1px solid rgba(23, 21, 31, 0.16);
    color: var(--ink);
    font-size: 0.88em;
    font-weight: 740;
    text-align: center;
  }

  .support-result strong {
    color: inherit;
    font-weight: 780;
  }

  .support-result.plurality {
    color: var(--coral);
  }

  .support-result.approval {
    color: var(--green);
  }

  .support-legend {
    display: flex;
    gap: 18px;
    align-items: center;
    margin-top: 8px;
    color: var(--muted);
    font-size: 0.58em;
    font-weight: 660;
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .legend-swatch {
    width: 18px;
    height: 10px;
    background: rgba(23, 21, 31, 0.78);
  }

  .legend-swatch.extra {
    background: rgba(8, 127, 123, 0.62);
  }

  section.field-experiment {
    min-height: 720px;
    padding: 44px 58px 42px;
    color: var(--white);
    background:
      linear-gradient(90deg, rgba(36, 77, 154, 0.28) 0 19%, transparent 19% 100%),
      linear-gradient(90deg, rgba(255, 253, 248, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.05) 0 1px, transparent 1px 100%),
      var(--ink);
    background-size: auto, 54px 54px, 54px 54px, auto;
  }

  section.field-experiment::before {
    border-color: rgba(255, 253, 248, 0.18);
  }

  section.field-experiment::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.field-experiment h1 {
    color: var(--white);
    font-size: 2.0em;
    line-height: 1.02;
    max-width: 1080px;
  }

  .field-deck {
    display: grid;
    grid-template-columns: 1.28fr 0.9fr;
    gap: 26px;
    align-items: stretch;
    margin-top: 18px;
  }

  .field-chart,
  .field-takeaways {
    display: grid;
    min-width: 0;
    border: 1px solid rgba(255, 253, 248, 0.2);
    background: rgba(255, 253, 248, 0.075);
  }

  .field-chart {
    padding: 18px 20px 16px;
  }

  .field-chart-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid rgba(255, 253, 248, 0.18);
    padding-bottom: 12px;
  }

  .field-eyebrow {
    color: rgba(255, 253, 248, 0.68);
    font-size: 0.54em;
    font-weight: 680;
  }

  .field-chart-title {
    margin-top: 3px;
    color: var(--white);
    font-size: 0.94em;
    font-weight: 740;
    line-height: 1.12;
  }

  .field-legend {
    display: flex;
    flex-shrink: 0;
    gap: 12px;
    color: rgba(255, 253, 248, 0.66);
    font-size: 0.48em;
    font-weight: 650;
    white-space: nowrap;
  }

  .field-legend span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .field-legend i {
    display: inline-block;
    width: 16px;
    height: 8px;
    background: var(--coral);
  }

  .field-legend i.approval {
    background: #4fd1a5;
  }

  .field-results {
    display: grid;
    gap: 8px;
    margin-top: 13px;
  }

  .field-result-row {
    display: grid;
    grid-template-columns: 118px minmax(0, 1fr);
    column-gap: 12px;
    align-items: center;
    min-height: 52px;
  }

  .field-candidate {
    grid-row: 1 / 3;
    color: rgba(255, 253, 248, 0.86);
    font-size: 0.62em;
    font-weight: 700;
  }

  .field-result-row.inclusive .field-candidate {
    color: #9ee6c4;
  }

  .field-result-row.exclusive .field-candidate {
    color: #ffb199;
  }

  .field-line {
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr) 56px;
    gap: 8px;
    align-items: center;
    min-height: 22px;
  }

  .field-line-label {
    color: rgba(255, 253, 248, 0.54);
    font-size: 0.46em;
    font-weight: 660;
    text-align: right;
  }

  .field-track {
    height: 10px;
    border: 1px solid rgba(255, 253, 248, 0.16);
    background: rgba(255, 253, 248, 0.08);
  }

  .field-bar {
    display: block;
    height: 100%;
    background: var(--coral);
  }

  .field-bar.approval {
    background: #4fd1a5;
  }

  .field-value {
    color: var(--white);
    font-size: 0.48em;
    font-weight: 680;
    text-align: right;
  }

  .field-takeaways {
    grid-template-rows: auto auto auto 1fr auto;
    gap: 12px;
    padding: 18px 20px 16px;
  }

  .field-thesis {
    border-left: 7px solid #4fd1a5;
    padding-left: 14px;
    color: #9ee6c4;
    font-size: 1.02em;
    font-weight: 760;
    line-height: 1.16;
  }

  .field-rule-card {
    border: 1px solid rgba(255, 253, 248, 0.16);
    padding: 13px 14px;
    background: rgba(23, 21, 31, 0.28);
  }

  .field-rule-card h2 {
    margin: 0;
    color: rgba(255, 253, 248, 0.64);
    font-size: 0.54em;
    font-weight: 700;
  }

  .field-rule-card strong {
    display: block;
    margin-top: 6px;
    color: var(--white);
    font-size: 0.78em;
    font-weight: 730;
    line-height: 1.18;
  }

  .field-rule-card p {
    margin: 6px 0 0;
    color: rgba(255, 253, 248, 0.7);
    font-size: 0.56em;
    font-weight: 600;
    line-height: 1.34;
  }

  .field-rule-card.official {
    border-left: 5px solid var(--coral);
  }

  .field-rule-card.evaluative {
    border-left: 5px solid #4fd1a5;
  }

  .field-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-self: end;
  }

  .field-metric {
    border-top: 1px solid rgba(255, 253, 248, 0.18);
    padding-top: 10px;
  }

  .field-metric span {
    display: block;
    color: rgba(255, 253, 248, 0.58);
    font-size: 0.46em;
    font-weight: 680;
  }

  .field-metric b {
    display: block;
    margin-top: 4px;
    color: var(--white);
    font-size: 1.02em;
    font-weight: 760;
    line-height: 1;
  }

  .field-metric.inclusive b {
    color: #9ee6c4;
  }

  .field-metric.exclusive b {
    color: #ffb199;
  }

  .field-metric em {
    display: block;
    margin-top: 6px;
    color: rgba(255, 253, 248, 0.62);
    font-size: 0.46em;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28;
  }

  .field-source {
    color: rgba(255, 253, 248, 0.52);
    font-size: 0.45em;
    font-weight: 600;
    line-height: 1.28;
  }

  section.scale-experiment {
    min-height: 720px;
    padding: 44px 58px 42px;
    color: var(--white);
    background:
      linear-gradient(90deg, rgba(8, 127, 123, 0.26) 0 22%, transparent 22% 100%),
      linear-gradient(90deg, rgba(255, 253, 248, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.05) 0 1px, transparent 1px 100%),
      var(--ink);
    background-size: auto, 54px 54px, 54px 54px, auto;
  }

  section.scale-experiment::before {
    border-color: rgba(255, 253, 248, 0.18);
  }

  section.scale-experiment::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.scale-experiment h1 {
    color: var(--white);
    font-size: 2.0em;
    line-height: 1.02;
    max-width: 1120px;
  }

  .scale-deck {
    display: grid;
    grid-template-columns: 1.14fr 0.96fr;
    gap: 26px;
    align-items: stretch;
    margin-top: 18px;
  }

  .scale-ranks,
  .scale-meaning {
    min-width: 0;
    border: 1px solid rgba(255, 253, 248, 0.2);
    background: rgba(255, 253, 248, 0.075);
  }

  .scale-ranks {
    padding: 18px 20px 16px;
  }

  .scale-eyebrow {
    color: rgba(255, 253, 248, 0.66);
    font-size: 0.54em;
    font-weight: 680;
  }

  .scale-panel-title {
    margin-top: 3px;
    color: var(--white);
    font-size: 0.96em;
    font-weight: 740;
    line-height: 1.12;
  }

  .scale-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 13px;
    padding-top: 13px;
    border-top: 1px solid rgba(255, 253, 248, 0.18);
  }

  .scale-column {
    display: grid;
    gap: 7px;
  }

  .scale-name {
    color: rgba(255, 253, 248, 0.64);
    font-size: 0.6em;
    font-weight: 700;
  }

  .scale-rank-row {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) 46px;
    align-items: center;
    gap: 9px;
    min-height: 38px;
    padding: 0 9px;
    border: 1px solid rgba(255, 253, 248, 0.13);
    background: rgba(23, 21, 31, 0.24);
  }

  .scale-rank-row.focus {
    border-color: rgba(223, 76, 53, 0.82);
    background: rgba(223, 76, 53, 0.14);
  }

  .scale-rank-row.lift {
    border-color: rgba(79, 209, 165, 0.7);
    background: rgba(79, 209, 165, 0.1);
  }

  .scale-rank {
    color: rgba(255, 253, 248, 0.62);
    font-size: 0.5em;
    font-weight: 700;
  }

  .scale-candidate {
    color: var(--white);
    font-size: 0.62em;
    font-weight: 700;
  }

  .scale-score {
    color: rgba(255, 253, 248, 0.58);
    font-size: 0.48em;
    font-weight: 650;
    text-align: right;
  }

  .scale-drop {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 12px;
    margin-top: 13px;
    padding: 12px 14px;
    border-left: 6px solid var(--coral);
    background: rgba(223, 76, 53, 0.14);
  }

  .scale-drop b {
    color: #ffb199;
    font-size: 1.08em;
    font-weight: 760;
  }

  .scale-drop span {
    color: rgba(255, 253, 248, 0.7);
    font-size: 0.54em;
    font-weight: 630;
    line-height: 1.24;
  }

  .scale-meaning {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    gap: 12px;
    padding: 18px 20px 16px;
  }

  .scale-thesis {
    border-left: 7px solid #ffd166;
    padding-left: 14px;
    color: #ffd166;
    font-size: 1.02em;
    font-weight: 760;
    line-height: 1.16;
  }

  .scale-map {
    display: grid;
    gap: 9px;
  }

  .scale-map-row {
    display: grid;
    grid-template-columns: 86px 1fr;
    align-items: center;
    gap: 12px;
  }

  .scale-map-name {
    color: rgba(255, 253, 248, 0.68);
    font-size: 0.55em;
    font-weight: 700;
  }

  .scale-ticks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }

  .scale-tick {
    display: grid;
    place-items: center;
    min-height: 34px;
    border: 1px solid rgba(255, 253, 248, 0.16);
    color: var(--white);
    font-size: 0.58em;
    font-weight: 720;
    background: rgba(23, 21, 31, 0.24);
  }

  .scale-tick.reject {
    background: rgba(223, 76, 53, 0.18);
  }

  .scale-tick.neutral {
    background: rgba(255, 209, 102, 0.16);
  }

  .scale-tick.support {
    background: rgba(79, 209, 165, 0.16);
  }

  .scale-notes {
    display: grid;
    gap: 10px;
  }

  .scale-note {
    border: 1px solid rgba(255, 253, 248, 0.15);
    padding: 11px 12px;
    background: rgba(23, 21, 31, 0.26);
  }

  .scale-note strong {
    display: block;
    color: var(--white);
    font-size: 0.66em;
    font-weight: 730;
    line-height: 1.18;
  }

  .scale-note p {
    margin: 5px 0 0;
    color: rgba(255, 253, 248, 0.68);
    font-size: 0.52em;
    font-weight: 600;
    line-height: 1.3;
  }

  .scale-symbolic {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 12px;
    border-top: 1px solid rgba(255, 253, 248, 0.18);
    padding-top: 11px;
  }

  .scale-symbolic b {
    color: #9ee6c4;
    font-size: 1.26em;
    font-weight: 760;
  }

  .scale-symbolic span {
    color: rgba(255, 253, 248, 0.68);
    font-size: 0.5em;
    font-weight: 630;
    line-height: 1.28;
  }

  section.mj-explainer {
    min-height: 720px;
    padding: 44px 58px 42px;
    color: var(--white);
    background:
      linear-gradient(90deg, rgba(223, 76, 53, 0.2) 0 20%, transparent 20% 100%),
      linear-gradient(90deg, rgba(255, 253, 248, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.05) 0 1px, transparent 1px 100%),
      var(--ink);
    background-size: auto, 54px 54px, 54px 54px, auto;
  }

  section.mj-explainer::before {
    border-color: rgba(255, 253, 248, 0.18);
  }

  section.mj-explainer::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.mj-explainer h1 {
    color: var(--white);
    font-size: 1.94em;
    line-height: 1.04;
    max-width: 1120px;
  }

  .mj-deck {
    display: grid;
    grid-template-columns: 1.16fr 0.94fr;
    gap: 26px;
    align-items: stretch;
    margin-top: 18px;
  }

  .mj-board,
  .mj-meaning {
    min-width: 0;
    border: 1px solid rgba(255, 253, 248, 0.2);
    background: rgba(255, 253, 248, 0.075);
  }

  .mj-board {
    padding: 18px 20px 16px;
  }

  .mj-eyebrow {
    color: rgba(255, 253, 248, 0.66);
    font-size: 0.54em;
    font-weight: 680;
  }

  .mj-panel-title {
    margin-top: 3px;
    color: var(--white);
    font-size: 0.96em;
    font-weight: 740;
    line-height: 1.12;
  }

  .mj-scale {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    margin-top: 13px;
    padding-top: 13px;
    border-top: 1px solid rgba(255, 253, 248, 0.18);
  }

  .mj-scale span {
    display: grid;
    place-items: center;
    min-height: 31px;
    border: 1px solid rgba(255, 253, 248, 0.16);
    color: rgba(255, 253, 248, 0.76);
    font-size: 0.48em;
    font-weight: 680;
    background: rgba(23, 21, 31, 0.24);
  }

  .mj-candidates {
    display: grid;
    gap: 10px;
    margin-top: 13px;
  }

  .mj-row {
    display: grid;
    grid-template-columns: 76px minmax(0, 1fr) 92px;
    align-items: center;
    gap: 11px;
    min-height: 70px;
    padding: 10px 12px;
    border: 1px solid rgba(255, 253, 248, 0.14);
    background: rgba(23, 21, 31, 0.25);
  }

  .mj-row.win {
    border-color: rgba(79, 209, 165, 0.72);
    background: rgba(79, 209, 165, 0.1);
  }

  .mj-name {
    color: var(--white);
    font-size: 0.68em;
    font-weight: 740;
  }

  .mj-grades {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
    min-width: 0;
  }

  .mj-grade {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 36px;
    border: 1px solid rgba(255, 253, 248, 0.16);
    color: rgba(255, 253, 248, 0.78);
    font-size: 0.5em;
    font-weight: 680;
    background: rgba(255, 253, 248, 0.08);
  }

  .mj-grade.high {
    background: rgba(79, 209, 165, 0.16);
  }

  .mj-grade.mid {
    background: rgba(255, 209, 102, 0.15);
  }

  .mj-grade.low {
    background: rgba(223, 76, 53, 0.16);
  }

  .mj-grade.median {
    color: var(--white);
    border-color: #ffd166;
    outline: 2px solid #ffd166;
    outline-offset: -2px;
    font-weight: 760;
  }

  .mj-result {
    display: grid;
    gap: 4px;
    color: rgba(255, 253, 248, 0.58);
    font-size: 0.46em;
    font-weight: 660;
    line-height: 1.15;
    text-align: right;
  }

  .mj-result b {
    color: #ffd166;
    font-size: 1.48em;
    font-weight: 760;
    line-height: 1;
  }

  .mj-row.win .mj-result b {
    color: #9ee6c4;
  }

  .mj-rule-line {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 12px;
    margin-top: 13px;
    padding: 12px 14px;
    border-left: 6px solid #ffd166;
    background: rgba(255, 209, 102, 0.12);
  }

  .mj-rule-line b {
    color: #ffd166;
    font-size: 1.02em;
    font-weight: 760;
  }

  .mj-rule-line span {
    color: rgba(255, 253, 248, 0.7);
    font-size: 0.54em;
    font-weight: 630;
    line-height: 1.28;
  }

  .mj-meaning {
    display: grid;
    grid-template-rows: auto auto auto auto 1fr;
    gap: 12px;
    padding: 18px 20px 16px;
  }

  .mj-thesis {
    border-left: 7px solid #4fd1a5;
    padding-left: 14px;
    color: #9ee6c4;
    font-size: 1.02em;
    font-weight: 760;
    line-height: 1.16;
  }

  .mj-card {
    border: 1px solid rgba(255, 253, 248, 0.15);
    padding: 12px 13px;
    background: rgba(23, 21, 31, 0.26);
  }

  .mj-card h2 {
    margin: 0;
    color: rgba(255, 253, 248, 0.62);
    font-size: 0.52em;
    font-weight: 700;
  }

  .mj-card strong {
    display: block;
    margin-top: 6px;
    color: var(--white);
    font-size: 0.72em;
    font-weight: 730;
    line-height: 1.2;
  }

  .mj-card p {
    margin: 5px 0 0;
    color: rgba(255, 253, 248, 0.68);
    font-size: 0.52em;
    font-weight: 600;
    line-height: 1.3;
  }

  .mj-source {
    align-self: end;
    color: rgba(255, 253, 248, 0.52);
    font-size: 0.45em;
    font-weight: 600;
    line-height: 1.28;
  }

  section.fargo-case,
  section.value-choice,
  section.error-ledger,
  section.math-possibility {
    min-height: 720px;
    padding: 50px 64px 46px;
    color: var(--white);
    background:
      linear-gradient(90deg, rgba(255, 253, 248, 0.07) 0 1px, transparent 1px 100%),
      linear-gradient(180deg, rgba(255, 253, 248, 0.05) 0 1px, transparent 1px 100%),
      var(--ink);
    background-size: 54px 54px, 54px 54px, auto;
  }

  section.fargo-case::before,
  section.value-choice::before,
  section.error-ledger::before,
  section.math-possibility::before {
    border-color: rgba(255, 253, 248, 0.18);
  }

  section.fargo-case::after,
  section.value-choice::after,
  section.error-ledger::after,
  section.math-possibility::after {
    color: rgba(255, 253, 248, 0.5);
  }

  section.fargo-case h1,
  section.value-choice h1,
  section.error-ledger h1,
  section.math-possibility h1 {
    color: var(--white);
    font-size: 1.94em;
    line-height: 1.04;
  }

  .fargo-grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 28px;
    margin-top: 22px;
  }

  .fargo-numbers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .fargo-number {
    min-height: 310px;
    display: grid;
    align-content: center;
    gap: 12px;
    border: 1px solid rgba(255, 253, 248, 0.18);
    padding: 20px;
    background: rgba(255, 253, 248, 0.075);
  }

  .fargo-number.mark {
    border-color: rgba(79, 209, 165, 0.6);
    background: rgba(79, 209, 165, 0.11);
  }

  .fargo-year {
    color: rgba(255, 253, 248, 0.58);
    font-size: 0.58em;
    font-weight: 680;
  }

  .fargo-value {
    color: var(--white);
    font-size: 1.74em;
    font-weight: 760;
    line-height: 0.95;
  }

  .fargo-number.mark .fargo-value {
    color: #9ee6c4;
  }

  .fargo-caption {
    color: rgba(255, 253, 248, 0.66);
    font-size: 0.58em;
    font-weight: 620;
    line-height: 1.28;
  }

  .fargo-timeline {
    display: grid;
    gap: 10px;
    align-content: start;
  }

  .fargo-event {
    display: grid;
    grid-template-columns: 78px 1fr;
    gap: 12px;
    border: 1px solid rgba(255, 253, 248, 0.16);
    padding: 12px 14px;
    background: rgba(255, 253, 248, 0.065);
  }

  .fargo-event b {
    color: #ffd166;
    font-size: 0.64em;
    font-weight: 760;
    white-space: nowrap;
  }

  .fargo-event span {
    color: rgba(255, 253, 248, 0.76);
    font-size: 0.58em;
    font-weight: 630;
    line-height: 1.28;
  }

  .fargo-source,
  .final-source {
    margin-top: 14px;
    color: rgba(255, 253, 248, 0.48);
    font-size: 0.46em;
    font-weight: 600;
  }

  .value-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 32px;
  }

  .value-panel {
    min-height: 310px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    border: 1px solid rgba(255, 253, 248, 0.18);
    padding: 24px;
    background: rgba(255, 253, 248, 0.075);
  }

  .value-panel.accept {
    border-color: rgba(79, 209, 165, 0.58);
  }

  .value-panel.force {
    border-color: rgba(223, 76, 53, 0.58);
  }

  .value-label {
    color: rgba(255, 253, 248, 0.58);
    font-size: 0.62em;
    font-weight: 700;
  }

  .value-panel strong {
    margin-top: 16px;
    color: var(--white);
    font-size: 1.18em;
    font-weight: 760;
    line-height: 1.16;
  }

  .value-panel.accept strong {
    color: #9ee6c4;
  }

  .value-panel.force strong {
    color: #ffb199;
  }

  .value-panel p {
    align-self: end;
    margin: 0;
    color: rgba(255, 253, 248, 0.66);
    font-size: 0.62em;
    font-weight: 620;
    line-height: 1.32;
  }

  .value-bottom {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    align-items: center;
    margin-top: 18px;
    border-left: 6px solid #ffd166;
    background: rgba(255, 209, 102, 0.12);
    padding: 14px 16px;
  }

  .value-bottom b {
    color: #ffd166;
    font-size: 0.88em;
    font-weight: 760;
  }

  .value-bottom span {
    color: rgba(255, 253, 248, 0.72);
    font-size: 0.6em;
    font-weight: 630;
    line-height: 1.28;
  }

  .error-table {
    display: grid;
    grid-template-columns: 0.82fr 1.02fr 1.16fr;
    margin-top: 28px;
    border: 1px solid rgba(255, 253, 248, 0.18);
    background: rgba(255, 253, 248, 0.06);
  }

  .error-cell {
    min-height: 70px;
    display: grid;
    align-content: center;
    border-right: 1px solid rgba(255, 253, 248, 0.14);
    border-bottom: 1px solid rgba(255, 253, 248, 0.14);
    padding: 12px 14px;
    color: rgba(255, 253, 248, 0.72);
    font-size: 0.58em;
    font-weight: 620;
    line-height: 1.28;
  }

  .error-cell:nth-child(3n) {
    border-right: 0;
  }

  .error-head {
    min-height: 46px;
    color: var(--white);
    background: rgba(255, 253, 248, 0.1);
    font-size: 0.56em;
    font-weight: 740;
  }

  .error-rule {
    color: #ffd166;
    font-weight: 740;
  }

  .possibility-main {
    display: grid;
    place-items: center;
    min-height: 390px;
    margin-top: 24px;
    border: 1px solid rgba(255, 253, 248, 0.18);
    background: rgba(255, 253, 248, 0.075);
    text-align: center;
  }

  .possibility-main strong {
    display: block;
    max-width: 980px;
    color: var(--white);
    font-size: 1.52em;
    font-weight: 760;
    line-height: 1.2;
  }

  .possibility-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 16px;
  }

  .possibility-step {
    border: 1px solid rgba(255, 253, 248, 0.16);
    padding: 14px 16px;
    color: rgba(255, 253, 248, 0.72);
    font-size: 0.6em;
    font-weight: 650;
    background: rgba(255, 253, 248, 0.06);
  }

  .possibility-step b {
    display: block;
    color: #9ee6c4;
    font-size: 1.15em;
    font-weight: 760;
    margin-bottom: 5px;
  }

  .panel p {
    margin: 0.3em 0 0;
    font-size: 0.75em;
  }

  .result {
    color: var(--teal);
    font-size: 1.14em;
    font-weight: 720;
    text-align: center;
  }

  .flow {
    text-align: center;
    font-size: 1.26em;
    font-weight: 720;
  }

  .callout {
    margin-top: 0.7em;
    border-left: 0.25em solid var(--coral);
    background: rgba(223, 76, 53, 0.1);
    padding: 0.4em 0.72em;
    font-size: 0.85em;
  }

  .mini {
    font-size: 0.78em;
  }

  .diagram {
    padding: 34px 48px 42px;
  }

  .diagram h1 {
    margin: 0 0 0.28em;
    font-size: 1.46em;
  }

  .diagram p {
    margin: 0;
  }

  .diagram img {
    display: block;
    width: 100%;
    max-height: 548px;
    object-fit: contain;
    margin: 0 auto;
    border: 1px solid rgba(23, 21, 31, 0.12);
    background: var(--white);
  }

  .diagram .small {
    margin-top: 0.15em;
    font-size: 0.58em;
  }

  .vote-diagram {
    display: grid;
    gap: 18px;
    margin-top: 14px;
    height: 540px;
    font-size: 20px;
  }

  .surface {
    background: rgba(255, 253, 248, 0.9);
    border: 1px solid rgba(23, 21, 31, 0.12);
    padding: 18px 20px;
  }

  .surface.dark {
    background: var(--ink);
    color: var(--white);
  }

  .surface.good {
    border-color: rgba(25, 135, 84, 0.32);
    background: rgba(25, 135, 84, 0.1);
  }

  .surface.bad {
    border-color: rgba(223, 76, 53, 0.3);
    background: rgba(223, 76, 53, 0.1);
  }

  .surface-title {
    color: var(--ink);
    font-size: 0.86em;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .surface.dark .surface-title {
    color: var(--white);
  }

  .mini-table {
    display: grid;
    gap: 8px;
  }

  .mini-row {
    display: grid;
    grid-template-columns: 72px 1fr;
    align-items: center;
    gap: 14px;
    min-height: 38px;
    padding: 9px 12px;
    background: rgba(23, 21, 31, 0.055);
  }

  .mini-row.vote-pref {
    grid-template-columns: 154px 1fr;
  }

  .mini-row.head {
    color: var(--white);
    background: var(--ink);
    font-size: 0.78em;
    font-weight: 700;
  }

  .mini-row.mark {
    background: rgba(223, 76, 53, 0.11);
    color: var(--coral);
    font-weight: 700;
  }

  .diagram-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    padding: 6px 14px;
    background: var(--ink);
    color: var(--white);
    font-size: 0.78em;
    font-weight: 700;
  }

  .diagram-badge.bad {
    background: var(--coral);
  }

  .diagram-badge.good {
    background: var(--green);
  }

  .movement {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    color: var(--coral);
    font-size: 0.88em;
    font-weight: 700;
    text-align: center;
  }

  .movement::before,
  .movement::after {
    content: "";
    flex: 1;
    height: 3px;
    max-width: 130px;
    margin: 0 16px;
    background: currentColor;
  }

  .big-result {
    color: var(--green);
    font-size: 1.7em;
    font-weight: 760;
    line-height: 1.05;
  }

  .bad-result {
    color: var(--coral);
  }

  .irv-first {
    grid-template-columns: 0.95fr 1.05fr;
    grid-template-rows: 1fr auto 0.72fr;
  }

  .irv-first .pref {
    grid-row: 1 / span 3;
  }

  .irv-first .movement {
    grid-column: 2;
  }

  .profile-compare {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 92px minmax(0, 1fr);
    gap: 18px;
    height: 540px;
    margin-top: 16px;
    font-size: 20px;
  }

  .profile-panel {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 0;
    padding: 24px;
    border: 1px solid rgba(23, 21, 31, 0.22);
    background: rgba(255, 253, 248, 0.92);
  }

  .profile-panel.final {
    grid-template-rows: auto auto 1fr;
    border-color: rgba(25, 135, 84, 0.55);
    background: rgba(25, 135, 84, 0.08);
  }

  .profile-panel.final .result-stamp {
    align-self: start;
    margin-top: 34px;
  }

  .profile-table {
    align-content: start;
    margin-top: 22px;
  }

  .profile-table .mini-row.vote-pref {
    grid-template-columns: 206px 1fr;
  }

  .profile-table .emoji-votes.compact {
    font-size: 0.88em;
  }

  .profile-arrow {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    place-items: center;
    color: var(--coral);
    text-align: center;
    font-size: 0.78em;
    font-weight: 680;
    line-height: 1.18;
  }

  .profile-arrow::before,
  .profile-arrow::after {
    content: "";
    width: 3px;
    height: 100%;
    background: currentColor;
    opacity: 0.72;
  }

  .monotonicity {
    grid-template-columns: 1.15fr 0.85fr;
    grid-template-rows: 1fr auto;
  }

  .status-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr 1fr;
    overflow: hidden;
    border: 1px solid rgba(23, 21, 31, 0.12);
  }

  .status-cell {
    min-height: 82px;
    display: grid;
    place-items: center;
    padding: 12px;
    border-right: 1px solid rgba(23, 21, 31, 0.1);
    border-bottom: 1px solid rgba(23, 21, 31, 0.1);
    background: var(--white);
    font-weight: 650;
  }

  .status-cell.head {
    min-height: 58px;
    color: var(--white);
    background: var(--ink);
  }

  .status-cell:nth-child(3n) {
    border-right: 0;
  }

  .status-cell.big {
    font-size: 1.42em;
    font-weight: 760;
  }

  .status-cell.votes {
    padding: 10px 12px;
  }

  .takeaway {
    grid-column: 1;
    align-self: end;
    color: var(--coral);
    font-size: 1.82em;
    font-weight: 760;
    line-height: 1.05;
  }

  .principle {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
  }

  .principle .surface-title {
    color: var(--teal);
    font-size: 1.14em;
  }

  .explain-diagram {
    display: grid;
    gap: 20px;
    height: 540px;
    margin-top: 16px;
    font-size: 22px;
  }

  .explain-kicker {
    color: var(--muted);
    font-size: 0.72em;
    font-weight: 650;
    letter-spacing: 0;
  }

  .panel-heading {
    color: var(--ink);
    font-size: 0.98em;
    font-weight: 720;
    line-height: 1.22;
  }

  .panel-heading em {
    color: var(--muted);
    font-style: normal;
    font-weight: 620;
  }

  .round-flow-v2 {
    grid-template-columns: 1fr 170px 1fr;
    align-items: stretch;
  }

  .round-panel {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 0;
    padding: 24px;
    border: 1px solid rgba(23, 21, 31, 0.24);
    background: rgba(255, 253, 248, 0.93);
  }

  .round-panel.final {
    border-color: rgba(25, 135, 84, 0.55);
    background: rgba(25, 135, 84, 0.08);
  }

  .candidate-stack {
    display: grid;
    gap: 13px;
    align-content: center;
  }

  .candidate-line {
    display: grid;
    grid-template-columns: 112px minmax(0, 1fr);
    align-items: center;
    gap: 14px;
    min-height: 64px;
    padding: 13px 16px;
    border: 1px solid rgba(23, 21, 31, 0.16);
    background: var(--white);
  }

  .candidate-line.out {
    color: var(--coral);
    border-color: rgba(223, 76, 53, 0.5);
    background: rgba(223, 76, 53, 0.07);
  }

  .candidate-line.win {
    color: var(--green);
    border-color: rgba(25, 135, 84, 0.5);
    background: rgba(25, 135, 84, 0.08);
  }

  .candidate-name {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.96em;
    font-weight: 680;
  }

  .candidate-dot {
    width: 13px;
    height: 13px;
    background: var(--ink);
  }

  .candidate-dot.apple {
    background: #b9342a;
  }

  .candidate-dot.banana {
    background: #d89d1d;
  }

  .candidate-dot.carrot {
    background: #d76521;
  }

  .candidate-dot.dragonfruit {
    background: #b74892;
  }

  .emoji-votes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px 5px;
    min-width: 0;
    line-height: 1;
    font-size: 1.28em;
  }

  .emoji-votes span {
    display: inline-grid;
    place-items: center;
    width: 1.05em;
    height: 1.05em;
  }

  .emoji-votes.compact {
    gap: 2px 4px;
    font-size: 1.02em;
  }

  .emoji-votes.center {
    justify-content: center;
  }

  .round-note {
    min-height: 38px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    color: var(--muted);
    font-size: 0.72em;
    font-weight: 620;
  }

  .result-stamp {
    align-self: end;
    justify-self: start;
    margin-top: 16px;
    color: var(--green);
    font-size: 2.0em;
    font-weight: 760;
    line-height: 0.95;
  }

  .borda-election {
    display: grid;
    grid-template-columns: 1.18fr 0.82fr;
    gap: 20px;
    height: 460px;
    margin-top: 16px;
    font-size: 17px;
  }

  .ballot-panel,
  .borda-total-panel {
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 0;
    padding: 18px 24px;
    border: 1px solid rgba(23, 21, 31, 0.22);
    background: rgba(255, 253, 248, 0.92);
  }

  .borda-total-panel {
    border-color: rgba(25, 135, 84, 0.48);
    background: rgba(25, 135, 84, 0.08);
  }

  .ballot-list,
  .total-list {
    display: grid;
    align-content: start;
    gap: 6px;
    min-height: 0;
    margin-top: 14px;
  }

  .ballot-row {
    display: grid;
    grid-template-columns: 70px 178px 24px minmax(0, 1fr);
    align-items: center;
    gap: 10px;
    min-height: 50px;
    padding: 7px 12px;
    border: 1px solid rgba(23, 21, 31, 0.12);
    background: var(--white);
  }

  .voter-id {
    color: var(--muted);
    font-size: 0.78em;
    font-weight: 680;
  }

  .preference-inline {
    display: flex;
    align-items: center;
    gap: 7px;
    white-space: nowrap;
    font-size: 0.92em;
    font-weight: 650;
  }

  .preference-inline .arrow,
  .ballot-row .arrow {
    color: var(--muted);
    font-size: 0.78em;
    font-weight: 620;
  }

  .point-bundle {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px 5px;
    min-width: 0;
    font-size: 1.12em;
    line-height: 1;
  }

  .point-bundle span {
    display: inline-grid;
    place-items: center;
    width: 1.05em;
    height: 1.05em;
  }

  .total-row {
    display: grid;
    grid-template-columns: 88px 1fr 54px;
    align-items: center;
    gap: 12px;
    min-height: 52px;
    padding: 8px 14px;
    border: 1px solid rgba(23, 21, 31, 0.12);
    background: var(--white);
  }

  .total-row.win {
    border-color: rgba(25, 135, 84, 0.58);
    background: rgba(25, 135, 84, 0.12);
  }

  .total-name {
    font-weight: 680;
  }

  .total-row .point-bundle {
    font-size: 1.02em;
  }

  .total-number {
    text-align: right;
    color: var(--ink);
    font-size: 1.18em;
    font-weight: 720;
  }

  .pairwise-card {
    align-self: end;
    margin-top: 12px;
    padding: 12px 18px;
    border: 1px solid rgba(223, 76, 53, 0.35);
    background: rgba(223, 76, 53, 0.1);
  }

  .pairwise-card .point-bundle {
    justify-content: center;
    margin-top: 8px;
    font-size: 1.12em;
  }

  .pairwise-card .duel-sep {
    width: auto;
    color: var(--muted);
    font-size: 0.88em;
  }

  .pairwise-card .preference-inline {
    justify-content: center;
    margin-top: 12px;
    color: var(--ink);
    font-size: 1.02em;
    white-space: normal;
  }

  .condorcet-loop {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 18px;
    height: 500px;
    margin-top: 18px;
    font-size: 20px;
  }

  .loop-duels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    min-height: 0;
  }

  .loop-duel-card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 0;
    padding: 20px;
    border: 1px solid rgba(23, 21, 31, 0.2);
    background: rgba(255, 253, 248, 0.92);
  }

  .loop-duel-title {
    color: var(--ink);
    font-size: 0.86em;
    font-weight: 700;
  }

  .loop-score-list {
    display: grid;
    align-content: center;
    gap: 12px;
    min-height: 0;
  }

  .loop-score-row {
    display: grid;
    grid-template-columns: 82px 1fr;
    align-items: center;
    gap: 10px;
    min-height: 64px;
    padding: 11px 12px;
    border: 1px solid rgba(23, 21, 31, 0.12);
    background: var(--white);
  }

  .loop-score-row.win {
    border-color: rgba(25, 135, 84, 0.55);
    background: rgba(25, 135, 84, 0.1);
  }

  .loop-score-row .point-bundle {
    font-size: 0.98em;
  }

  .loop-winner {
    color: var(--green);
    font-size: 1.2em;
    font-weight: 760;
    line-height: 1.05;
  }

  .loop-cycle {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr auto;
    align-items: center;
    gap: 14px;
    min-height: 96px;
    padding: 18px 24px;
    border: 1px solid rgba(223, 76, 53, 0.36);
    background: rgba(223, 76, 53, 0.1);
    color: var(--coral);
    font-size: 1.28em;
    font-weight: 760;
  }

  .loop-cycle span {
    text-align: center;
  }

  .loop-cycle .arrow {
    color: var(--muted);
    font-size: 0.72em;
    font-weight: 650;
  }

  .loop-cycle .no-winner {
    grid-column: 1 / -1;
    color: var(--ink);
    font-size: 0.72em;
    font-weight: 680;
    text-align: center;
  }
---

<!-- _class: lead section-title -->

# 민주주의의<br />수학적 불가능성

2026 너드살롱 Vol.2

발표자 배상우

---

<!-- _class: election-case election-florida -->

# 537표

<div class="case-pie florida-pie" aria-hidden="true"></div>

<div class="case-copy">
  <div class="case-kicker">2000년 미국 대통령 선거 / 플로리다</div>
  <div class="case-headline">플로리다의 25명 선거인단이<br />대통령을 결정했다</div>
  <div class="case-grid">
    <div class="vote-ledger">
      <div class="ledger-row head"><span>플로리다 최종 결과</span><span>득표수</span></div>
      <div class="ledger-row bush"><span>조지 W. 부시</span><span>2,912,790</span></div>
      <div class="ledger-row gore"><span>앨 고어</span><span>2,912,253</span></div>
      <div class="ledger-row diff"><span>차이</span><span><strong>537</strong></span></div>
    </div>
    <div class="electoral-box">
      <div class="electoral-label">최종 선거인단 <span>공식 집계, 1명 기권</span></div>
      <div class="electoral-row win"><span>부시</span><span class="score">271</span></div>
      <div class="electoral-row"><span>고어</span><span class="score">266</span></div>
      <div class="fact-row highlight"><span>당선 기준</span><span class="score">270</span></div>
    </div>
  </div>
  <div class="case-note"><strong>537표 차이</strong>가 플로리다의 선거인단 25명을 모두 움직였고, 부시는 과반 기준을 1명 넘겨 대통령이 되었다.</div>
</div>

<!--

2000년 미국 대통령 선거는 플로리다주에서 결정되었습니다.

공화당의 조지 W. 부시는 플로리다에서 291만 2,790표를 받았습니다. 민주당의 앨 고어는 291만 2,253표를 받았습니다. 두 후보의 차이는 불과 537표였습니다.

여기서 중요한 것은 플로리다 한 주의 승자가 플로리다에 배정된 선거인단 25명을 모두 가져간다는 점입니다.

그 25명이 모두 부시에게 가면서 최종 선거인단은 부시 271명, 고어 266명이 되었습니다. 당선 기준은 270명이었습니다.

따라서 플로리다의 537표 차이는 단순한 지역 격차가 아니라, 대통령을 결정한 격차였습니다.

전국 득표수에서는 고어가 부시보다 약 54만 표를 더 받았지만, 미국 대통령은 전국 득표수가 아니라 선거인단으로 결정되었습니다.
-->

---

<!-- _class: election-case election-nader -->

# 97,488표

<div class="case-pie nader-pie" aria-hidden="true"></div>

<div class="case-copy">
  <div class="case-kicker">같은 플로리다 투표지의 세 번째 후보</div>
  <div class="case-headline">녹색당 네이더의 표는<br />537표보다 181배 컸다</div>
  <div class="case-grid">
    <div class="vote-ledger">
      <div class="ledger-row head"><span>플로리다 주요 후보</span><span>득표수</span></div>
      <div class="ledger-row bush"><span>조지 W. 부시</span><span>2,912,790</span></div>
      <div class="ledger-row gore"><span>앨 고어</span><span>2,912,253</span></div>
      <div class="ledger-row nader"><span>랄프 네이더 / 녹색당</span><span><strong>97,488</strong></span></div>
    </div>
    <div class="electoral-box">
      <div class="electoral-label">비교</div>
      <div class="fact-row"><span>부시-고어 차이</span><span class="score">537</span></div>
      <div class="fact-row highlight"><span>네이더 득표</span><span class="score">97,488</span></div>
      <div class="fact-row highlight"><span>차이 대비</span><span class="score">181배</span></div>
    </div>
  </div>
  <div class="case-note">네이더 유권자 중 아주 일부만 고어를 선택했어도 플로리다의 승자, 그리고 선거인단 결과가 달라질 수 있었다.</div>
</div>

<!--
하지만 이 선거에는 부시와 고어만 출마한 것이 아니었습니다.

녹색당 후보 랄프 네이더는 플로리다에서 9만 7,488표를 받았습니다. 부시와 고어의 표 차이보다 약 181배 많은 수입니다.

네이더는 환경 보호, 기업 권력 견제, 진보적 사회정책을 주장했습니다. 정치적 성향만 놓고 보면 네이더의 지지자들은 대체로 부시보다 고어에게 가까웠습니다.

그렇다면 네이더가 출마하지 않았다면 어떻게 되었을까요?

네이더 유권자 중 극히 일부만 고어를 선택했더라도 플로리다의 승자가 바뀔 수 있었습니다. 그리고 플로리다의 승자가 바뀌었다면 미국 대통령도 바뀌었을 것입니다.

실제 선거 직전의 갤럽 조사에서는 네이더 지지자의 43%가 차선책으로 고어를, 21%가 부시를 선택했고, 21%는 투표하지 않겠다고 답했습니다. 이후 연구에서도 네이더 유권자들은 부시보다 고어를 선택할 가능성이 더 높았지만, 상당수는 기권했을 가능성이 있다고 분석했습니다.
-->

---

<!-- _class: spoiler-choice -->

# 가장 좋아하는 후보에게<br />투표하면 안 되는 선거

만약 자신의 정치성향이 다음과 같았더라도

## **네이더 > 고어 >>> 부시**

투표용지에는 하나만 표시할 수 있습니다.

<!--
여기 네이더를 가장 좋아하고, 그다음으로 고어를 선호하며, 부시는 강하게 반대하는 유권자가 있다고 해봅시다.

이 유권자가 자신의 진실한 선호에 따라 네이더에게 투표하면 어떻게 될까요?

그 표는 네이더의 득표수를 늘립니다. 그러나 네이더가 당선될 가능성이 거의 없다면, 고어에게 갈 수 있었던 표 하나가 사라집니다. 결과적으로 이 유권자가 가장 싫어하는 부시의 당선 가능성이 높아질 수 있습니다.

반대로 고어에게 투표하면 부시의 당선을 막는 데에는 도움이 됩니다. 하지만 투표 결과에는 이 유권자가 실제로 네이더를 가장 선호했다는 사실이 남지 않습니다.

다수대표제에서는 가장 좋아하는 후보에게 투표하는 행동이 오히려 자신에게 가장 나쁜 결과를 만들 수 있습니다. 이것을 흔히 스포일러 효과라고 부릅니다.
-->

---

<!-- _class: center -->

# 유권자가 잘못 투표한 것인가?

## 네이더 유권자들은
## 고어에게 투표했어야 했을까?

<!--
선거가 끝난 뒤 네이더와 네이더 유권자들은 거센 비판을 받았습니다.

"고어에게 투표했다면 부시의 당선을 막을 수 있었다."

하지만 여기에는 이상한 점이 있습니다.

민주주의 선거에서 유권자는 자신이 가장 원하는 후보에게 투표하라고 배웁니다. 그런데 실제로 그렇게 투표하면 비합리적이라고 비난받습니다. 정직하게 투표한 유권자가 잘못한 것일까요?
-->

---

<!-- _class: center -->

# 유권자가 잘못 투표한 것인가?

## 아니면 투표제도가
## 유권자의 선호를 제대로 묻지 않은 것일까?

<!--
다른 관점에서 보면 문제는 유권자가 아니라 투표절차에 있습니다.

투표절차가 유권자의 의사 정보를 소실시킨 것이죠.
-->

---

## 한 사람에게 한 표를 주고
## 가장 많은 표를 받은 사람을 당선시킨다.

## ↓

## 이것이 정말
## 사람들의 의사를 모으는 최선의 방법일까?

---

<!-- _class: center center-list -->

1. 후보를 **순위대로** 선택하게 하면 해결될까?
2. 후보마다 **점수**를 주게 하면 해결될까?
3. 후보들을 **한 명씩 비교**하면 해결될까?

<!--
다수대표제의 문제는 이미 널리 알려져 있습니다.

그래서 여러 대안이 제안되었습니다.

유권자에게 후보들의 순위를 적게 할 수도 있습니다. 가장 낮은 후보를 탈락시키고 그 표를 다음 후보에게 넘길 수도 있습니다. 순위에 따라 점수를 부여할 수도 있습니다. 모든 후보를 일대일로 비교해 다수에게 승리하는 후보를 찾을 수도 있습니다.

이런 방식들은 단순 다수대표제보다 유권자의 의사를 더 잘 반영하는 것처럼 보입니다.

"여러 사람의 서로 다른 선호를 하나의 사회적 결정으로 바꾸는 완벽한 방법이 존재하는가?"
-->

---

<!-- _class: social-choice-welcome -->

# **사회선택이론**

개인들의 서로 다른 선호(투표 결과 등)를 모아

사회 전체의 모순 없는 의사결정이나 복지 수준을 도출하는 방법

---

<!-- _class: lead section-title -->

# 1. 여러 투표제

다수대표제보다 더 좋아 보이는 방법들

---

<!-- _class: candidates center -->

# 오늘의 후보들

| ![사과](/projects/nerdsalon-2026-vol2/assets/apple-normal.webp) | ![바나나](/projects/nerdsalon-2026-vol2/assets/banana-normal.webp) | ![당근](/projects/nerdsalon-2026-vol2/assets/carrot-normal.webp) | ![용과](/projects/nerdsalon-2026-vol2/assets/dragonfruit-normal.webp) | ![가지](/projects/nerdsalon-2026-vol2/assets/eggplant-normal.webp) |
| --- | --- | --- | --- | --- |
| 사과 | 바나나 | 당근 | 용과 | 가지 |

<!--
발표 내용:

지금부터는 실제 정치인 대신 과일과 채소 후보들을 사용하겠습니다.

특정한 정당이나 정치인을 연상시키지 않고 정치적 중립을 지키기 위한 선택입니다.
-->

---

<!-- _class: candidates center -->

# 오늘의 후보들

| ![사과](/projects/nerdsalon-2026-vol2/assets/apple.webp) | ![바나나](/projects/nerdsalon-2026-vol2/assets/banana.webp) | ![당근](/projects/nerdsalon-2026-vol2/assets/carrot.webp) | ![용과](/projects/nerdsalon-2026-vol2/assets/dragonfruit.webp) | ![가지](/projects/nerdsalon-2026-vol2/assets/eggplant.webp) |
| --- | --- | --- | --- | --- |
| 사과 | 바나나 | 당근 | 용과 | 가지 |

<!--
또한 앞으로 나올 숫자와 표 속에서도 여러분의 집중력을 유지하기 위해서 실제 정치인처럼 보이게 만들었습니다.

오늘의 후보는 사과, 바나나, 당근, 용과, 가지입니다.

이제 이 후보들을 이용해 단순 다수대표제의 대안으로 제안된 세 가지 투표 방식을 살펴보겠습니다.
-->

---

<!-- _class: tight -->

# 즉석결선투표제

## Instant-runoff voting

1. 1순위 표를 센다.<br />
2. 과반수 후보가 있으면 당선된다.<br />
3. 없으면 최하위 후보를 탈락시킨다.<br />
4. 탈락 후보의 표를 다음 순위 후보에게 넘긴다.<br />
5. 과반수 후보가 나올 때까지 반복한다.

<!--
첫 번째 대안은 즉석결선투표제입니다.

보통 한 번의 투표에서 후보 한 명만 선택하는 대신, 후보들을 선호하는 순서대로 적습니다.

먼저 모든 유권자의 1순위 표를 셉니다. 과반수를 얻은 후보가 있으면 바로 당선됩니다.

과반수 후보가 없다면 가장 적은 표를 받은 후보를 탈락시킵니다. 그 후보에게 투표했던 사람들의 표는 그들이 두 번째로 선호한 후보에게 넘어갑니다.

이 과정을 과반수 후보가 나올 때까지 반복합니다.

사표를 줄이고, 당선자가 적어도 마지막 대결에서는 과반수의 지지를 받도록 만드는 제도입니다.

단순 다수대표제보다는 훨씬 합리적으로 보입니다.
-->

---

<!-- _class: diagram -->

# 사과 후보의 악재가 없을 때

<div class="profile-compare">
  <div class="profile-panel">
    <div class="panel-heading">가상의 선호 분포</div>
    <div class="mini-table profile-table">
      <div class="mini-row head vote-pref"><span>유권자</span><span>선호 순서</span></div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="8명"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span>
        <span>사과 &gt; 당근 &gt; 바나나</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="3명"><span>🍌</span><span>🍌</span><span>🍌</span></span>
        <span>바나나 &gt; 사과 &gt; 당근</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="2명"><span>🍌</span><span>🍌</span></span>
        <span>바나나 &gt; 당근 &gt; 사과</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="4명"><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span></span>
        <span>당근 &gt; 바나나 &gt; 사과</span>
      </div>
    </div>
  </div>

  <div class="profile-arrow">당근<br />탈락</div>

  <div class="profile-panel final">
    <div class="panel-heading">당근을 지운 뒤의 선호 분포</div>
    <div class="mini-table profile-table">
      <div class="mini-row head vote-pref"><span>유권자</span><span>남은 선호 순서</span></div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="8명"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span>
        <span>사과 &gt; 바나나</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="9명"><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span></span>
        <span>바나나 &gt; 사과</span>
      </div>
    </div>
    <div class="result-stamp">바나나 당선</div>
  </div>
</div>

<!--
17명의 유권자가 있다고 하겠습니다.

먼저 정확한 선호 분포를 보겠습니다.

여덟 명은 사과, 당근, 바나나 순서로 선호합니다. 세 명은 바나나, 사과, 당근 순서로 선호합니다. 두 명은 바나나, 당근, 사과 순서로 선호합니다. 네 명은 당근, 바나나, 사과 순서로 선호합니다.

가장 적은 표를 받은 당근이 먼저 탈락합니다.

당근을 선호 순서에서 지우면 여덟 명은 사과를 바나나보다 선호하고, 아홉 명은 바나나를 사과보다 선호합니다.

바나나가 당선됩니다.

사과는 첫 번째 개표에서 가장 많은 표를 얻었지만, 다른 후보의 표가 이동하면서 패배했습니다. 여기까지는 이상한 일이 아닙니다.
-->

---

<!-- _class: diagram -->

# 사과 후보의 당도 조작이 들켰을 때

<div class="profile-compare">
  <div class="profile-panel">
    <div class="panel-heading">의혹 이후의 선호 분포</div>
    <div class="mini-table profile-table">
      <div class="mini-row head vote-pref"><span>유권자</span><span>선호 순서</span></div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="6명"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span>
        <span>사과 &gt; 당근 &gt; 바나나</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="3명"><span>🍌</span><span>🍌</span><span>🍌</span></span>
        <span>바나나 &gt; 사과 &gt; 당근</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="2명"><span>🍌</span><span>🍌</span></span>
        <span>바나나 &gt; 당근 &gt; 사과</span>
      </div>
      <div class="mini-row mark vote-pref">
        <span class="emoji-votes compact" aria-label="2명"><span>🥕</span><span>🥕</span></span>
        <span>당근 &gt; 사과 &gt; 바나나</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="4명"><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span></span>
        <span>당근 &gt; 바나나 &gt; 사과</span>
      </div>
    </div>
  </div>

  <div class="profile-arrow">바나나<br />탈락</div>

  <div class="profile-panel final">
    <div class="panel-heading">바나나를 지운 뒤의 선호 분포</div>
    <div class="mini-table profile-table">
      <div class="mini-row head vote-pref"><span>유권자</span><span>남은 선호 순서</span></div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="9명"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span>
        <span>사과 &gt; 당근</span>
      </div>
      <div class="mini-row vote-pref">
        <span class="emoji-votes compact" aria-label="8명"><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span><span>🥕</span></span>
        <span>당근 &gt; 사과</span>
      </div>
    </div>
    <div class="result-stamp">사과 당선</div>
  </div>
</div>

<!--
그런데 선거 직전에 사과 후보에게 당도 조작 의혹이 생겼다고 하겠습니다.

사과를 1순위로 지지하던 유권자 중 두 명이 실망했습니다. 이들은 사과를 완전히 포기하지는 않았지만, 당근보다 아래로 내렸습니다.

이제 선호 분포는 왼쪽과 같습니다. 사과를 1순위로 두는 유권자는 여섯 명으로 줄었습니다. 상식적으로 생각하면 사과의 당선 가능성이 낮아져야 합니다.

하지만 다시 개표하면 이번에는 바나나가 최하위가 됩니다.

바나나를 선호 순서에서 지우면 아홉 명은 사과를 당근보다 선호하고, 여덟 명은 당근을 사과보다 선호합니다.

사과가 당선됩니다.

사과는 지지자를 잃기 전에는 패배했습니다. 그런데 지지자를 잃은 뒤에는 당선되었습니다.

사과의 인기가 떨어지면서 탈락 순서가 바뀌었고, 그 결과 사과에게 더 유리한 결선 구도가 만들어진 것입니다.
-->

---

<!-- _class: diagram -->

# 단조성 실패

<div class="vote-diagram monotonicity">
  <div class="surface">
    <div class="surface-title">사과의 상태가 나빠졌는데 결과는 좋아졌다</div>
    <div class="status-grid">
      <div class="status-cell head">사과의 상태</div>
      <div class="status-cell head">이전 선거</div>
      <div class="status-cell head">의혹 이후</div>
      <div class="status-cell">1순위 표</div>
      <div class="status-cell votes">
        <div class="emoji-votes compact center" aria-label="8표">
          <span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span>
        </div>
      </div>
      <div class="status-cell votes bad-result">
        <div class="emoji-votes compact center" aria-label="6표">
          <span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span>
        </div>
      </div>
      <div class="status-cell">결과</div>
      <div class="status-cell big bad-result">패배</div>
      <div class="status-cell big big-result">당선</div>
    </div>
  </div>
  <div class="takeaway">
    지지를 잃었기 때문에<br />
    <span class="big-result">오히려 당선되었다</span>
  </div>
  <div class="surface principle">
    <div class="surface-title">단조성</div>
    지지가 높아질수록<br />
    결과도 유리해야 한다.
  </div>
</div>

<!--
사과를 덜 좋아하게 된 유권자들이 생겼기 때문에 오히려 사과가 당선되었습니다.

후보에 대한 지지가 높아질수록 결과가 유리해야 한다는 성질을 단조성이라고 합니다.

즉석결선투표제는 이 단조성을 항상 만족하지 않습니다.
-->

---

<!-- _class: tight -->

# 드 보르다 투표제

## Borda count

1. 후보들을 선호하는 순서대로 적는다.<br />
2. 세 후보라면 1순위 2점, 2순위 1점, 3순위 0점을 준다.<br />
3. 후보가 더 많으면 1순위부터 한 점씩 낮춘다.<br />
4. 모든 유권자의 점수를 후보별로 더한다.<br />
5. 총점이 가장 높은 후보가 당선된다.

<!--
두 번째 대안은 드 보르다 투표제입니다.

즉석결선투표제가 탈락자의 표를 차례대로 이동시킨다면, 드 보르다 투표제는 모든 순위에 점수를 줍니다.

후보가 세 명이라면 1순위 후보에게 2점, 2순위 후보에게 1점, 3순위 후보에게 0점을 줍니다.

모든 유권자의 점수를 더해서 가장 높은 점수를 받은 후보가 당선됩니다.

후보가 다섯 명이라면 1순위부터 각각 4점, 3점, 2점, 1점, 0점을 주는 식입니다.

이 방법은 한 사람에게 한 표만 주는 대신, 유권자의 전체 선호 순서를 결과에 반영합니다.

유권자가 누구를 가장 좋아하는지만이 아니라, 나머지 후보들을 얼마나 선호하는지도 이용합니다.
-->

---

<!-- _class: diagram -->

# 3인이 출마한 선거

<div class="borda-election">
  <div class="ballot-panel">
    <div class="panel-heading">다섯 명의 실제 투표</div>
    <div class="ballot-list">
      <div class="ballot-row">
        <span class="voter-id">유권자 1</span>
        <span class="preference-inline">🍎 <span class="arrow">&gt;</span> 🍌 <span class="arrow">&gt;</span> 🐲</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="사과 2점, 바나나 1점"><span>🍎</span><span>🍎</span><span>🍌</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 2</span>
        <span class="preference-inline">🍎 <span class="arrow">&gt;</span> 🍌 <span class="arrow">&gt;</span> 🐲</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="사과 2점, 바나나 1점"><span>🍎</span><span>🍎</span><span>🍌</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 3</span>
        <span class="preference-inline">🐲 <span class="arrow">&gt;</span> 🍎 <span class="arrow">&gt;</span> 🍌</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="용과 2점, 사과 1점"><span>🐲</span><span>🐲</span><span>🍎</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 4</span>
        <span class="preference-inline">🍌 <span class="arrow">&gt;</span> 🐲 <span class="arrow">&gt;</span> 🍎</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="바나나 2점, 용과 1점"><span>🍌</span><span>🍌</span><span>🐲</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 5</span>
        <span class="preference-inline">🍌 <span class="arrow">&gt;</span> 🐲 <span class="arrow">&gt;</span> 🍎</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="바나나 2점, 용과 1점"><span>🍌</span><span>🍌</span><span>🐲</span></span>
      </div>
    </div>
  </div>

  <div class="borda-total-panel">
    <div class="panel-heading">점수 합계</div>
    <div>
      <div class="total-list">
        <div class="total-row">
          <span class="total-name">사과</span>
          <span class="point-bundle" aria-label="5점"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span>
          <span class="total-number">5점</span>
        </div>
        <div class="total-row win">
          <span class="total-name">바나나</span>
          <span class="point-bundle" aria-label="6점"><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span></span>
          <span class="total-number">6점</span>
        </div>
        <div class="total-row">
          <span class="total-name">용과</span>
          <span class="point-bundle" aria-label="4점"><span>🐲</span><span>🐲</span><span>🐲</span><span>🐲</span></span>
          <span class="total-number">4점</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
다섯 명의 유권자가 사과, 바나나, 용과를 평가한다고 하겠습니다.

왼쪽의 다섯 줄이 실제 투표입니다. 각 줄의 오른쪽에는 그 투표가 보르다 점수로 바뀐 결과를 표시했습니다. 1순위 후보는 두 번, 2순위 후보는 한 번 나타납니다.

두 명은 사과, 바나나, 용과 순서로 선호합니다.

한 명은 용과, 사과, 바나나 순서입니다.

나머지 두 명은 바나나, 용과, 사과 순서입니다.

드 보르다 점수를 계산하면 사과는 5점, 바나나는 6점, 용과는 4점입니다.

따라서 바나나가 당선됩니다.

그런데 사과와 바나나만 직접 비교해보겠습니다.

앞의 두 명은 사과를 바나나보다 선호합니다. 용과를 가장 좋아하는 한 명도 사과를 바나나보다 선호합니다.

사과를 바나나보다 선호하는 사람은 세 명이고, 바나나를 사과보다 선호하는 사람은 두 명입니다.

사과와 바나나의 양자 대결에서는 사과가 3대 2로 이깁니다.

하지만 용과를 포함해 보르다 점수를 계산하면 바나나가 당선됩니다.
-->

---

<!-- _class: diagram -->

# 용과 후보가 사퇴했다

<div class="borda-election">
  <div class="ballot-panel">
    <div class="panel-heading">용과를 지운 다섯 명의 투표</div>
    <div class="ballot-list">
      <div class="ballot-row">
        <span class="voter-id">유권자 1</span>
        <span class="preference-inline">🍎 <span class="arrow">&gt;</span> 🍌</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="사과 1점"><span>🍎</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 2</span>
        <span class="preference-inline">🍎 <span class="arrow">&gt;</span> 🍌</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="사과 1점"><span>🍎</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 3</span>
        <span class="preference-inline">🍎 <span class="arrow">&gt;</span> 🍌</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="사과 1점"><span>🍎</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 4</span>
        <span class="preference-inline">🍌 <span class="arrow">&gt;</span> 🍎</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="바나나 1점"><span>🍌</span></span>
      </div>
      <div class="ballot-row">
        <span class="voter-id">유권자 5</span>
        <span class="preference-inline">🍌 <span class="arrow">&gt;</span> 🍎</span>
        <span class="arrow">→</span>
        <span class="point-bundle" aria-label="바나나 1점"><span>🍌</span></span>
      </div>
    </div>
  </div>

  <div class="borda-total-panel">
    <div class="panel-heading">두 후보 보르다 점수</div>
    <div>
      <div class="total-list">
        <div class="total-row win">
          <span class="total-name">사과</span>
          <span class="point-bundle" aria-label="3점"><span>🍎</span><span>🍎</span><span>🍎</span></span>
          <span class="total-number">3점</span>
        </div>
        <div class="total-row">
          <span class="total-name">바나나</span>
          <span class="point-bundle" aria-label="2점"><span>🍌</span><span>🍌</span></span>
          <span class="total-number">2점</span>
        </div>
      </div>
      <div class="pairwise-card">
        <div class="panel-heading">용과만 사라졌는데 승자가 바뀐다</div>
        <div class="preference-inline">
          <span>세 후보: <strong class="bad-result">바나나</strong></span>
          <span class="arrow">→</span>
          <span>두 후보: <strong class="big-result">사과</strong></span>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
이번에는 용과 후보가 선거에서 사퇴했다고 하겠습니다.

유권자들이 사과와 바나나 중 누구를 더 좋아하는지는 전혀 바뀌지 않았습니다.

왼쪽에는 용과를 지운 뒤의 다섯 명의 투표를 한 줄씩 표시했습니다. 후보가 두 명뿐이므로 1순위 후보만 1점을 받습니다.

용과가 출마했을 때도 세 명은 사과를 바나나보다 선호했고, 두 명은 바나나를 사과보다 선호했습니다.

용과가 사퇴한 뒤에도 마찬가지입니다.

그런데 두 후보만 남겨놓고 점수를 계산하면 사과가 3대 2로 당선됩니다.

용과가 있을 때에는 바나나가 당선되었습니다. 용과가 사라지자 사과가 당선되었습니다.

용과는 원래 선거에서도 3위였습니다. 당선 가능성이 없는 후보였습니다.

그런데 이 당선되지 못하는 후보가 투표용지에 존재하는지에 따라 사과와 바나나 중 승자가 달라졌습니다.

사과와 바나나에 대한 어느 유권자의 상대적 선호도 변하지 않았습니다. 오직 제3의 후보인 용과가 사라졌을 뿐입니다.

드 보르다 투표제에서는 후보 사이의 점수 차이가 중간에 다른 후보가 어디에 놓이는지에 따라 달라집니다.

따라서 당선 가능성이 없는 후보의 출마나 사퇴, 또는 그 후보가 순위표에서 어디에 배치되는지가 최종 승자를 바꿀 수 있습니다.
-->

---

<!-- _class: tight -->

# 콩도르세 투표제

## Condorcet method

1. 모든 후보를 두 명씩 짝지어 비교한다.<br />
2. 각 대결에서는 나머지 후보를 잠시 무시한다.<br />
3. 두 후보 중 더 선호되는 쪽을 단순 다수결로 정한다.<br />
4. 모든 일대일 대결의 승패를 기록한다.<br />
5. 다른 모든 후보를 이긴 후보가 있으면 그 후보가 당선된다.

<!--
세 번째 대안은 콩도르세 투표제입니다.

아이디어는 단순합니다. 모든 후보를 두 명씩 붙여보고, 다른 모든 후보와의 일대일 대결에서 이기는 후보를 찾습니다.

후보가 사과, 바나나, 가지 세 명이라면 비교해야 하는 대결은 세 개입니다. 사과 대 바나나, 사과 대 가지, 바나나 대 가지입니다.

각 대결에서는 나머지 후보를 잠시 무시하고, 두 후보 중 어느 쪽을 더 선호하는 유권자가 많은지만 봅니다.

어떤 후보가 다른 모든 후보와의 일대일 대결에서 이긴다면, 그 후보를 콩도르세 승자라고 부릅니다.

다음 슬라이드에서는 이 방식이 항상 승자를 만들어내는지 보겠습니다.
-->

---

<!-- _class: diagram -->

# 콩도르세 루프

<div class="condorcet-loop">
  <div class="loop-duels">
    <div class="loop-duel-card">
      <div class="loop-duel-title">사과 vs 바나나</div>
      <div class="loop-score-list">
        <div class="loop-score-row win">
          <span>사과</span>
          <span class="point-bundle" aria-label="6명"><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span><span>🍎</span></span>
        </div>
        <div class="loop-score-row">
          <span>바나나</span>
          <span class="point-bundle" aria-label="3명"><span>🍌</span><span>🍌</span><span>🍌</span></span>
        </div>
      </div>
      <div class="loop-winner">사과 승리</div>
    </div>
    <div class="loop-duel-card">
      <div class="loop-duel-title">바나나 vs 가지</div>
      <div class="loop-score-list">
        <div class="loop-score-row win">
          <span>바나나</span>
          <span class="point-bundle" aria-label="6명"><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span><span>🍌</span></span>
        </div>
        <div class="loop-score-row">
          <span>가지</span>
          <span class="point-bundle" aria-label="3명"><span>🍆</span><span>🍆</span><span>🍆</span></span>
        </div>
      </div>
      <div class="loop-winner">바나나 승리</div>
    </div>
    <div class="loop-duel-card">
      <div class="loop-duel-title">가지 vs 사과</div>
      <div class="loop-score-list">
        <div class="loop-score-row win">
          <span>가지</span>
          <span class="point-bundle" aria-label="6명"><span>🍆</span><span>🍆</span><span>🍆</span><span>🍆</span><span>🍆</span><span>🍆</span></span>
        </div>
        <div class="loop-score-row">
          <span>사과</span>
          <span class="point-bundle" aria-label="3명"><span>🍎</span><span>🍎</span><span>🍎</span></span>
        </div>
      </div>
      <div class="loop-winner">가지 승리</div>
    </div>
  </div>
  <div class="loop-cycle">
    <span>🍎 사과</span>
    <span class="arrow">&gt;</span>
    <span>🍌 바나나</span>
    <span class="arrow">&gt;</span>
    <span>🍆 가지</span>
    <span class="arrow">&gt; 🍎</span>
    <span class="no-winner">한 후보가 모든 일대일 대결을 이기지 못한다. 콩도르세 승자가 없다.</span>
  </div>
</div>

<!--
결과만 보겠습니다.

사과는 바나나를 6대 3으로 이깁니다. 바나나는 가지를 6대 3으로 이깁니다. 그런데 가지는 사과를 6대 3으로 이깁니다.

가위바위보와 같은 순환이 만들어졌습니다.

각 유권자의 선호는 모두 논리적이고 일관적이었습니다. 하지만 이 선호들을 다수결로 합치자 사회 전체의 선호는 순환합니다.

모든 후보를 일대일로 비교했지만, 다른 모든 후보를 이기는 콩도르세 승자는 존재하지 않습니다.

누구를 당선시키려면 결국 추가적인 규칙을 도입해야 합니다. 그런데 어떤 추가 규칙을 선택하느냐에 따라 다시 다른 승자가 나올 수 있습니다.
-->

---

<!-- _class: dense -->

# 더 정교한 투표제도 실패한다

| 투표제 | 해결하려던 문제 | 새롭게 나타난 문제 |
| --- | --- | --- |
| 즉석결선투표제 | 사표를 줄이고 과반수 승자를 찾는다 | 지지를 잃은 후보가 오히려 당선될 수 있다 |
| 드 보르다 투표제 | 유권자의 전체 선호 순서를 반영한다 | 당선되지 못할 후보의 존재가 승자를 바꿀 수 있다 |
| 콩도르세 투표제 | 모든 후보를 일대일로 비교한다 | 다수의 선호가 순환해 승자가 없을 수 있다 |

> 서로 다른 투표제에서 우연히 발생한 개별적인 결함일까?

> 여러 사람의 선호를 **하나의 사회적 선호로 만드는 일** 자체에  
> **근본적인 한계**가 있는 것일까?

<!--
단순 다수대표제의 문제를 해결하기 위해 더 많은 정보를 사용하는 투표제들을 살펴보았습니다.

즉석결선투표제는 유권자의 차순위 선호를 이용합니다. 하지만 후보가 지지를 잃으면서 오히려 당선되는 결과가 나타났습니다.

드 보르다 투표제는 모든 순위를 점수에 반영합니다. 하지만 당선되지 못할 제3의 후보가 존재하는지에 따라 승자가 달라졌습니다.

콩도르세 투표제는 모든 후보를 일대일로 비교합니다. 하지만 다수의 선호가 원형으로 순환하면서 승자를 결정할 수 없었습니다.

각 제도의 문제는 서로 다른 모습으로 나타납니다.

하지만 공통점이 있습니다.

모두 개인들의 선호를 모아서 하나의 사회적 결정을 만들려는 과정에서 발생했습니다.

그렇다면 투표제마다 우연히 작은 결함이 하나씩 있는 것일까요?

아니면 여러 사람의 선호를 하나의 일관된 사회적 선호로 변환하는 일 자체가 본질적으로 어려운 것일까요?

이 질문에 답하려면 먼저 우리가 말하는 ‘투표제’를 수학적으로 정의해야 합니다.
-->

---

<!-- _class: lead section-title -->

# 2. 투표제의 수학적 모델

개인의 의견을 사회의 의견으로 바꾸는 함수

---

<!-- _class: center -->

# 투표제를 함수로 본다

$$
\text{개인들의 의견}
\quad\xrightarrow{\text{집계 규칙}}\quad
\text{사회의 의견}
$$

> 입력은 정확히 무엇인가?

> 출력은 정확히 무엇이어야 하는가?

<!--
앞에서는 투표제마다 서로 다른 방식으로 문제가 발생하는 것을 보았습니다.

이제부터는 개별 투표제를 하나씩 분석하는 대신, 투표제 전체를 하나의 수학적 대상으로 다루겠습니다.

가장 기본적인 생각은 간단합니다.

여러 유권자의 의견을 입력으로 받아 사회 전체의 의견을 출력하는 함수를 생각하는 것입니다.

하지만 이를 정확히 정의하려면 몇 가지를 먼저 결정해야 합니다.

유권자의 의견을 후보 한 명으로 표현할 것인지, 후보들의 순위로 표현할 것인지, 여러 쟁점에 대한 찬반으로 표현할 것인지 정해야 합니다.

그리고 결과도 당선자 한 명이어야 하는지, 후보들의 전체 순위여야 하는지, 여러 쟁점에 대한 사회의 판단이어야 하는지 정해야 합니다.

길보와 애로는 이 문제를 서로 다른 방식으로 수학화했습니다.
-->

---

<!-- _class: lead section-title -->

# 2-1. 길보의 모형

판단들을 쟁점별로 집계한다

---

<!-- _class: dense -->

# 하나의 의견을 여러 판단으로 분해한다

$$
N=\{1,2,\ldots,n\},
\qquad
J=\{1,2,\ldots,m\}
$$

$$
x^i=(x^i_1,x^i_2,\ldots,x^i_m)\in\{0,1\}^{J}
$$

$$
x^i_j=
\begin{cases}
1 & \text{유권자 }i\text{가 쟁점 }j\text{에 찬성}\\
0 & \text{유권자 }i\text{가 쟁점 }j\text{에 반대}
\end{cases}
$$

<!--
길보는 한 사람의 의견을 여러 개의 단순한 판단으로 분해합니다.

유권자들의 집합을 N, 투표할 쟁점들의 집합을 J라고 하겠습니다.

각 유권자는 모든 쟁점에 대해 찬성 또는 반대의 답을 제출합니다.

따라서 유권자 i의 전체 의견은 0과 1로 이루어진 벡터 x^i로 표현됩니다.

예를 들어 세 개의 쟁점이 있을 때 x^i=(1,1,0)이라는 의견은 첫 번째와 두 번째 쟁점에는 찬성하고, 세 번째 쟁점에는 반대한다는 뜻입니다.

길보는 개인의 의견을 여러 명제에 대한 긍정과 부정의 체계로 보고, 각 명제에 대한 답을 따로 집계하는 모형을 제시했습니다.
-->

---

<!-- _class: dense -->

# 가능한 의견과 불가능한 의견

$$
X\subseteq\{0,1\}^{J},
\qquad
x^i\in X
$$

$$
p_{AB}: A\text{를 }B\text{보다 선호한다}
$$

$$
p_{BC}: B\text{를 }C\text{보다 선호한다}
\qquad
p_{AC}: A\text{를 }C\text{보다 선호한다}
$$

$$
p_{AB}=1\land p_{BC}=1
\quad\Longrightarrow\quad
p_{AC}=1
$$

> 따라서 $(1,1,0)$은 이행성을 어기는 의견입니다.

<!--
모든 0과 1의 조합이 반드시 허용되는 것은 아닙니다.

논리적으로 가능한 의견들의 집합을 X라고 하겠습니다.

각 유권자의 의견은 반드시 X에 속해야 합니다.

예를 들어 후보 A, B, C에 대한 선호를 세 개의 쟁점으로 나눌 수 있습니다.

첫 번째 쟁점은 A를 B보다 선호하는가, 두 번째는 B를 C보다 선호하는가, 세 번째는 A를 C보다 선호하는가입니다.

어떤 유권자가 A를 B보다 선호하고, B를 C보다 선호한다면, 선호의 이행성을 가정할 때 A를 C보다 선호해야 합니다.

따라서 (1,1,0)은 논리적으로 허용되지 않는 의견입니다.

X는 단순한 투표지의 집합이 아니라, 우리가 개인에게 요구하는 논리적 일관성을 나타냅니다.

길보의 모형은 선호 순서뿐 아니라 법률안의 여러 조항, 배심원의 복수 판단, 서로 연결된 정책 쟁점처럼 논리적으로 연관된 판단들을 함께 다룰 수 있습니다. 길보는 개별 쟁점에 대한 답은 따로 집계할 수 있지만, 그 결과들이 서로 모순될 수 있다는 점을 핵심 문제로 삼았습니다.
-->

---

<!-- _class: dense -->

# 각 쟁점을 따로 집계한다

한 쟁점의 집계 규칙:

$$
f:\{0,1\}^{N}\longrightarrow\{0,1\}
$$

전체 집계 규칙:

$$
\Phi_f:X^N\longrightarrow\{0,1\}^{J}
$$

$$
\Phi_f(x^1,\ldots,x^n)_j
=
f(x^1_j,\ldots,x^n_j)
$$

<!--
이제 한 쟁점에 대한 집계 규칙을 f라고 하겠습니다.

f는 n명의 찬반을 입력받아 사회의 찬반 하나를 출력합니다.

그리고 같은 규칙 f를 모든 쟁점에 각각 적용합니다.

전체 집계 결과를 Phi_f라고 쓰면, 집단의 j번째 판단은 Phi_f(x^1,...,x^n)_j=f(x^1_j,...,x^n_j)로 정의됩니다.

여기에는 두 가지 중요한 가정이 들어 있습니다.

첫째, 각 쟁점은 다른 쟁점과 독립적으로 집계됩니다.

둘째, 모든 쟁점에 동일한 집계 규칙을 사용합니다.

예를 들어 세금 인상 문제에서는 다수결을 사용하면서 복지 확대 문제에서는 특정인의 의견을 따르는 것이 아니라, 어떤 쟁점이 주어지더라도 동일한 규칙을 적용합니다.

길보의 원래 표기에서는 한 번의 투표 결과를 R(x_1,x_2,...,x_n)=\hat{x}와 같은 형태로 나타냅니다. 그는 동일한 규칙을 여러 질문에 반복하여 적용했을 때 논리적 관계가 보존되는지를 분석했습니다.
-->

---

<!-- _class: dense -->

# 승리 연합

쟁점 $j$에 찬성한 유권자들의 집합:

$$
S_j(\mathbf{x})=\{i\in N:x^i_j=1\}
$$

승리 연합들의 집합:

$$
\mathcal{E}_f
=
\{S\subseteq N:f(\mathbf{1}_S)=1\}
$$

$$
\Phi_f(\mathbf{x})_j=1
\quad\Longleftrightarrow\quad
S_j(\mathbf{x})\in\mathcal{E}_f
$$

<!--
길보의 모형은 집계 규칙을 함수표 전체로 적는 대신, 어떤 유권자 집단이 결과를 결정할 수 있는지를 통해 표현할 수 있습니다.

쟁점 j에 찬성한 유권자들의 집합을 S_j라고 하겠습니다.

그리고 찬성했을 때 사회 전체의 찬성을 이끌어내는 연합들의 집합을 E_f라고 하겠습니다.

E_f에 속하는 집단을 길보는 효율적인 연합이라고 불렀습니다. 오늘날에는 보통 승리 연합이라고 부릅니다.

따라서 사회가 쟁점 j에 찬성하는 조건은 단순합니다.

그 쟁점에 찬성한 사람들의 집합이 승리 연합이면 됩니다.

투표제는 결국 다음 질문에 대한 답으로 표현됩니다.

"어떤 유권자들의 연합이 사회의 결정을 만들 수 있는가?"
-->

---

<!-- _class: dense -->

# 일반화된 다수결

$$
N\in\mathcal{E},
\qquad
\varnothing\notin\mathcal{E}
\tag{G1}
$$

$$
S\in\mathcal{E}
\quad\Longleftrightarrow\quad
N\setminus S\notin\mathcal{E}
\tag{G2}
$$

$$
S\in\mathcal{E},\ S\subseteq T
\quad\Longrightarrow\quad
T\in\mathcal{E}
\tag{G3}
$$

| 조건 | 의미 |
| --- | --- |
| G1 | 만장일치 찬성은 승리한다 |
| G2 | 서로 반대되는 두 진영 중 정확히 하나가 승리한다 |
| G3 | 승리 연합에 지지자가 추가되어도 패배하지 않는다 |

<!--
길보가 말하는 '다수결'은 우리가 흔히 아는 그 사람 수를 세는 제도가 아닙니다.

승리 연합들의 구조라고 이해하셔야 됩니다.

첫 번째 조건은 모든 사람이 찬성하면 사회도 찬성하고, 아무도 찬성하지 않으면 사회가 찬성하지 않는다는 조건입니다.

두 번째 조건은 유권자들이 두 진영으로 완전히 나뉘었을 때 정확히 한쪽이 승리해야 한다는 조건입니다.

세 번째 조건은 이미 승리한 연합에 새로운 지지자가 추가되었다고 해서 그 연합이 패배해서는 안 된다는 단조성 조건입니다.

길보는 이를 "다수파가 소수파에 포함되어서는 안 된다"는 구조로 설명했습니다.

이 조건들은 단순 과반수뿐 아니라 가중투표, 캐스팅보트, 특정 유권자에게 결정권을 주는 제도까지 하나의 모형 안에 포함합니다.
-->

---

<!-- _class: dense -->

# 같은 모형 안의 서로 다른 제도

$$
N=\{1,2,3,4\}
$$

단순 다수결:

$$
\mathcal{E}_{\mathrm{maj}}
=
\{S\subseteq N:|S|\ge 3\}
$$

1번 유권자가 캐스팅보트를 가진 제도:

$$
\mathcal{E}_{\mathrm{cast}}
=
\{S:|S|\ge 3\}
\cup
\{S:|S|=2,\ 1\in S\}
$$

1번 유권자의 독재:

$$
\mathcal{E}_{\mathrm{dict}}
=
\{S\subseteq N:1\in S\}
$$

> 단순 다수결에서 동수일 때는 별도의 규칙이 필요합니다.

<!--
승리 연합을 이용하면 서로 매우 다른 투표제들을 같은 언어로 표현할 수 있습니다.

네 명 중 세 명 이상이 찬성해야 승리하도록 하면 일반적인 다수결이 됩니다.

두 명 대 두 명으로 나뉘었을 때 1번 유권자가 포함된 쪽을 승리시키면, 1번 유권자가 캐스팅보트를 가진 제도가 됩니다.

1번 유권자가 포함된 모든 연합을 승리 연합으로 정하면, 다른 사람들의 의견과 관계없이 1번 유권자의 판단이 항상 사회의 판단이 됩니다.

이것이 독재입니다.

이 모형에서는 투표권의 힘이 반드시 각 개인에게 부여된 숫자의 합으로 표현될 필요도 없습니다.

길보는 어떤 승리 연합 구조는 개인별 가중치로 환원할 수 없다고 지적했습니다. 즉, 개인의 힘보다 특정한 연합의 형성 자체가 결정력을 가질 수도 있습니다.
-->

---

<!-- _class: center -->

# 집계 결과도 가능한 의견이어야 한다

$$
x^1,\ldots,x^n\in X
$$

$$
\Phi_f(x^1,\ldots,x^n)\in X
$$

$$
\Phi_f(X^N)\subseteq X
\tag{CR}
$$

> Collective Rationality  
> 집단적 합리성

<!--
개별 유권자들이 모두 논리적으로 일관된 의견을 제출했다면, 집계된 사회의 의견도 논리적으로 일관되어야 한다고 요구할 수 있습니다.

이를 집단적 합리성이라고 하겠습니다.

수식으로는 Phi_f(X^N) subset X라고 씁니다.

가능한 개인 의견들만 입력했을 때 결과도 항상 가능한 의견이어야 한다는 뜻입니다.

하지만 앞에서 본 콩도르세 순환은 이 조건이 실패한 사례입니다.

각 개인의 선호 순서는 이행적이었습니다.

그러나 각 후보 쌍을 따로 다수결로 집계하자 A가 B보다 선호되고, B가 C보다 선호되고, C가 A보다 선호되는 결과가 동시에 나왔습니다.

개인은 모두 X 안에 있었지만, 사회의 결과는 X 밖으로 나갔습니다.

길보는 이러한 현상을 선호 투표에만 한정하지 않고, 논리적으로 연결된 판단을 쟁점별로 집계할 때 일반적으로 나타날 수 있는 콩도르세 효과로 보았습니다.
-->

---

<!-- _class: dense -->

# 개인은 가능하지만 사회는 불가능하다

| 유권자 | 선호 순서 | A > B | B > C | A > C |
| --- | --- | ---: | ---: | ---: |
| 1 | $A \succ B \succ C$ | 1 | 1 | 1 |
| 2 | $B \succ C \succ A$ | 0 | 1 | 0 |
| 3 | $C \succ A \succ B$ | 1 | 0 | 0 |
| 다수결 결과 |  | **1** | **1** | **0** |

$$
(1,1,0)\notin X
$$

> 각 개인의 의견은 가능하지만, 쟁점별 다수결 결과는 이행성을 어깁니다.

<!--
여기서 집단적 합리성이 실제로 어떻게 깨지는지 보겠습니다.

세 유권자의 선호 순서는 모두 완전하고 이행적입니다. 즉 모두 X 안에 있습니다.

하지만 세 쟁점을 따로 다수결로 집계하면 A가 B보다 선호되고, B가 C보다 선호되고, 동시에 A가 C보다 선호되지 않는다는 결과가 나옵니다.

벡터로 쓰면 사회의 판단은 (1,1,0)입니다.

앞에서 보았듯이 이 벡터는 이행성을 어기는 불가능한 의견입니다.

따라서 문제는 개인들이 비합리적이라는 데 있지 않습니다. 개인의 일관된 판단들을 쟁점별로 따로 집계하는 과정에서 사회적 모순이 만들어지는 것입니다.
-->

---

<!-- _class: dense -->

# 모든 모순을 막으려 하면

$$
S,T\in\mathcal{E}
\quad\Longrightarrow\quad
S\cap T\in\mathcal{E}
\tag{G4}
$$

G1-G4를 모두 만족하면:

$$
\exists d\in N
\quad
\mathcal{E}
=
\{S\subseteq N:d\in S\}
$$

따라서

$$
\Phi_f(x^1,\ldots,x^n)=x^d
$$

<!--
서로 연결된 모든 쟁점에서 항상 논리적 일관성을 보장하려면 승리 연합들의 교집합도 승리 연합이어야 합니다.

두 명제에 대해 각각 승리한 집단이 있다면, 두 명제를 동시에 지지하는 공통 집단도 결정력을 가져야 하기 때문입니다.

따라서 S,T in E이면 S cap T도 E에 속한다는 조건이 필요해집니다.

이 조건을 앞의 조건들과 결합하면 승리 연합들의 집합은 수학적으로 울트라필터의 구조를 가집니다.

유권자 수가 유한하면 이러한 울트라필터는 반드시 한 명의 유권자를 중심으로 합니다.

즉, 어떤 유권자 d가 존재해서 d를 포함한 연합만 승리 연합이 됩니다.

그 결과 사회의 판단은 모든 쟁점에서 언제나 d의 판단과 같아집니다.

모든 가능한 논리적 관계를 언제나 보존하려고 하면, 결국 한 사람의 의견을 그대로 복사하는 규칙만 남습니다.

길보는 모든 종류의 콩도르세 효과를 완전히 피하는 보편적 규칙은 한 개인에게 결정권을 주는 규칙뿐이라고 결론 내렸습니다.
-->

---

<!-- _class: dense -->

# 길보의 모형으로 설명할 수 있는 것

| 대상 | 길보 모형에서의 표현 |
| --- | --- |
| 법안별 찬반 투표 | 쟁점별 0과 1 |
| 후보 간 비교 | $A\succ B$라는 이항 판단 |
| 다수결·가중투표 | 승리 연합족 $\mathcal{E}$ |
| 캐스팅보트 | 동수 연합 중 특정 연합을 승리로 지정 |
| 콩도르세 순환 | 집단 판단이 $X$ 밖으로 이탈 |
| 독재 | 모든 승리 연합에 같은 유권자가 포함 |

> 논리적으로 일관된 개인 판단들을 쟁점별로 따로 집계해도  
> 사회의 판단은 일관적으로 남는가?

<!--
길보의 모형은 후보 한 명을 선출하는 선거에만 적용되는 모형이 아닙니다.

서로 관련된 여러 법안을 각각 표결하는 의회, 여러 사실관계를 따로 판단하는 배심원단, 후보 간의 모든 양자 비교처럼 복수의 판단을 쟁점별로 집계하는 상황을 표현할 수 있습니다.

또한 투표제를 단순한 득표수 계산이 아니라 승리 연합의 구조로 분석할 수 있습니다.

누가 몇 표를 가지고 있는지만이 아니라, 어떤 연합이 형성되어야 결과를 결정할 수 있는지를 연구할 수 있습니다.

이 모형의 중심 질문은 다음과 같습니다.

"논리적으로 일관된 개인 판단들을 쟁점별로 따로 집계해도 사회의 판단은 일관적으로 남는가?"
-->

---

<!-- _class: lead section-title -->

# 2-2. 애로의 사회후생함수

선호 순서를 사회적 순서로 바꾼다

---

<!-- _class: dense -->

# 대안과 선호관계

$$
A=\{a,b,c,\ldots\}
$$

$$
R_i\subseteq A\times A
$$

$$
aR_i b
$$

> 유권자 $i$는 $a$를 $b$ 이상으로 선호한다.

완비성:

$$
\forall a,b\in A,\qquad
aR_i b\ \lor\ bR_i a
$$

이행성:

$$
aR_i b\land bR_i c
\quad\Longrightarrow\quad
aR_i c
$$

<!--
애로는 개인의 의견을 여러 찬반 판단의 벡터가 아니라, 대안 전체에 대한 선호관계로 표현합니다.

대안들의 집합을 A라고 하겠습니다.

선거에서는 후보들이 대안이고, 복지경제학에서는 서로 다른 소득 분배나 사회 상태가 대안이 될 수 있습니다.

유권자 i의 선호관계를 R_i라고 씁니다.

aR_i b는 유권자 i가 a를 b보다 더 좋아하거나, 적어도 b와 동등하게 평가한다는 뜻입니다.

R_i에는 두 가지 조건이 요구됩니다.

모든 두 대안을 비교할 수 있어야 한다는 완비성과, 선호가 순환하지 않아야 한다는 이행성입니다.

완비적이고 이행적인 관계를 약순서, 또는 완전 전순서라고 부릅니다. 동순위를 허용하기 때문에 약순서입니다.
-->

---

<!-- _class: dense -->

# 엄격한 선호와 무차별

엄격한 선호:

$$
aP_i b
\quad\Longleftrightarrow\quad
aR_i b\land\neg(bR_i a)
$$

무차별:

$$
aI_i b
\quad\Longleftrightarrow\quad
aR_i b\land bR_i a
$$

예시:

$$
\text{사과 }P_i\text{ 바나나}
\qquad
\text{당근 }I_i\text{ 용과}
$$

<!--
약한 선호관계 R_i로부터 엄격한 선호와 무차별을 정의할 수 있습니다.

aP_i b는 a를 b보다 엄격하게 선호한다는 뜻입니다.

유권자가 a를 b 이상으로 평가하지만 b를 a 이상으로 평가하지 않을 때 성립합니다.

반대로 aI_i b는 두 대안을 동등하게 평가한다는 뜻입니다.

애로의 모형에서 입력되는 정보는 순서 정보입니다.

유권자가 사과를 바나나보다 얼마나 더 좋아하는지는 기록하지 않습니다.

서로 다른 유권자의 선호 강도를 더하거나 비교하지도 않습니다.

오직 각 유권자에게 어떤 대안이 다른 대안보다 위에 있는지만 사용합니다.
-->

---

<!-- _class: dense -->

# 선호 프로필

$$
\mathcal{W}(A)
=
\{R\subseteq A\times A:
R\text{는 완비적이고 이행적}\}
$$

$$
\mathbf{R}
=
(R_1,R_2,\ldots,R_n)
\in\mathcal{W}(A)^N
$$

| 유권자 | 선호 순서 |
| ---: | --- |
| 1 | 사과 > 바나나 > 당근 |
| 2 | 바나나 > 당근 > 사과 |
| 3 | 당근 > 사과 > 바나나 |

<!--
대안 집합 A 위에서 가능한 모든 약순서의 집합을 W(A)라고 하겠습니다.

한 유권자의 선호는 W(A)의 원소 하나입니다.

모든 유권자의 선호를 모은 목록을 선호 프로필이라고 합니다.

하나의 프로필은 특정한 시점에서 사회 구성원들이 가지고 있는 선호 상태 하나를 나타냅니다.

하지만 투표제는 실제로 관찰된 한 프로필에 대해서만 작동해서는 안 됩니다.

사람들의 선호가 다르게 나타날 수 있는 여러 경우에도 결과를 내야 합니다.

따라서 애로는 하나의 선거 결과가 아니라, 가능한 여러 선호 프로필과 그에 대응하는 사회적 결과 사이의 관계를 연구합니다.
-->

---

<!-- _class: center -->

# 사회후생함수

$$
\mathcal{D}\subseteq\mathcal{W}(A)^N
$$

$$
F:\mathcal{D}\longrightarrow\mathcal{W}(A)
$$

$$
R=F(R_1,R_2,\ldots,R_n)
$$

> 개인들의 완전한 선호 순서  
> $\longrightarrow$  
> 사회의 완전한 선호 순서

<!--
애로의 사회후생함수는 허용된 선호 프로필 하나를 입력받아 사회 전체의 약순서 하나를 출력합니다.

여기서 D는 함수가 처리하도록 허용된 프로필들의 집합입니다.

그리고 R=F(R_1,...,R_n)은 개인들의 선호를 종합해서 얻은 사회의 선호관계입니다.

이름에 후생이라는 표현이 들어 있지만, 이 함수는 사람들의 행복이나 효용을 숫자로 더하는 함수가 아닙니다.

출력은 하나의 숫자가 아니라 대안들의 사회적 순위입니다.

따라서 애로의 사회후생함수는 다음과 같은 질문에 답합니다.

"개인들은 서로 다른 순위를 가지고 있다. 그렇다면 사회 전체의 순위는 무엇인가?"

애로의 사회후생함수는 개인의 선호 프로필을 사회적 이항관계로 대응시키며, 그 결과도 다시 완비적이고 이행적인 약순서여야 합니다.
-->

---

<!-- _class: dense -->

# 사회적 순위에서 선택을 꺼낸다

사회후생함수의 결과:

$$
R=F(\mathbf{R})
$$

실제로 선택 가능한 대안들의 집합:

$$
B\subseteq A
$$

사회적 선택집합:

$$
C_F(B,\mathbf{R})
=
\{a\in B:\forall b\in B,\ aRb\}
$$

<div class="choice-example">
  <div class="choice-label">사회 순위</div>
  <div class="choice-value">🍎 <span class="choice-symbol">&gt;</span> 🍌 <span class="choice-symbol">&gt;</span> 🥕</div>
  <div class="choice-label">선택지</div>
  <div class="choice-value">{🍌, 🥕}</div>
  <div class="choice-label">선택집합</div>
  <div class="choice-value result">{🍌}</div>
</div>

<!--
사회후생함수의 직접적인 출력은 당선자 한 명이 아니라 전체 사회적 순위입니다.

실제 선택은 이 순위에서 가장 높은 대안을 꺼내는 방식으로 정의할 수 있습니다.

현재 선택 가능한 대안들의 집합을 B라고 하겠습니다.

그러면 사회적 선택집합은 C_F(B,R)={a in B: forall b in B, aRb}로 정의할 수 있습니다.

즉, B 안의 다른 모든 대안 이상으로 평가되는 대안들의 집합입니다.

동순위가 없다면 하나의 승자가 나오고, 최상위에 동순위가 있다면 여러 대안이 선택집합에 포함됩니다.

따라서 사회후생함수는 후보 일부가 사퇴했을 때 남은 후보들 사이의 선택이 무엇인지, 두 후보만 남았을 때 사회가 누구를 더 선호하는지, 전체 후보의 사회적 순서가 무엇인지 등을 모두 표현할 수 있습니다.
-->

---

<!-- _class: dense -->

# 모든 투표제가 사회후생함수인 것은 아니다

| 투표제 | 수학적 출력 | 애로식 사회후생함수인가? |
| --- | --- | --- |
| 드 보르다 투표제 | 점수에 따른 전체 순위 | 가능 |
| 후보별 점수제 | 점수에 따른 전체 순위 | 가능 |
| 콩도르세식 양자 다수결 | 후보 간 승패 관계 | 순환하면 불가능 |
| 즉석결선투표제 | 당선자 한 명 | 그대로는 아님 |
| 독재 | 독재자의 전체 순위 | 가능 |

<!--
모든 투표제가 곧바로 애로의 사회후생함수가 되는 것은 아닙니다.

드 보르다 투표제는 각 후보의 총점을 이용해 전체 순위를 만들 수 있으므로 사회후생함수로 표현할 수 있습니다.

후보가 m명이고 유권자 i가 후보 a를 r_i(a)번째에 놓았다면 보르다 점수를 s_i(a)=m-r_i(a)로 놓을 수 있습니다.

사회적 순위는 aRb iff sum_i s_i(a) >= sum_i s_i(b)로 정의할 수 있습니다.

반면 콩도르세식 양자 다수결은 후보 간의 사회적 비교를 만들지만, 그 비교가 순환할 수 있습니다. 그러면 출력이 이행적인 약순서가 아니므로 애로의 사회후생함수가 될 수 없습니다.

즉석결선투표제는 보통 당선자 한 명만 출력합니다.

이것은 c:W(A)^N -> A 형태의 사회선택함수입니다.

전체 사회적 순위를 출력하도록 추가 규칙을 붙이지 않는 한, 애로가 정의한 사회후생함수와는 다른 대상입니다.
-->

---

<!-- _class: dense -->

# 사회후생함수에 요구할 조건

| 조건 | 형식 | 뜻 |
| --- | --- | --- |
| U | $\mathcal{D}=\mathcal{W}(A)^N$ | 무제한 영역 |
| SO | $F(\mathbf{R})\in\mathcal{W}(A)$ | 사회적 순서 |
| WP | $\left[\forall i,\ aP_i b\right]\Rightarrow aPb$ | 약한 파레토 원칙 |
| IIA | $\mathbf{R}\restriction_{\{a,b\}}=\mathbf{R}'\restriction_{\{a,b\}}\Rightarrow F(\mathbf{R})\restriction_{\{a,b\}}=F(\mathbf{R}')\restriction_{\{a,b\}}$ | 무관한 대안으로부터의 독립성 |
| ND | $\nexists d:\forall\mathbf{R},a,b,\ aP_d b\Rightarrow aPb$ | 비독재성 |

<!--
이제 어떤 사회후생함수가 바람직한지를 조건으로 표현할 수 있습니다.

무제한 영역은 논리적으로 가능한 모든 개인 선호 프로필에서 함수가 정의되어야 한다는 조건입니다.

사회적 순서 조건은 함수의 결과가 언제나 완비적이고 이행적인 약순서여야 한다는 조건입니다.

약한 파레토 원칙은 모든 유권자가 a를 b보다 엄격하게 선호하면 사회도 a를 b보다 엄격하게 선호해야 한다는 조건입니다.

무관한 대안으로부터의 독립성은 두 프로필에서 모든 유권자의 a와 b 사이 선호가 같다면, 사회의 a와 b 사이 선호도 같아야 한다는 조건입니다.

마지막으로 비독재성은 어떤 한 사람의 엄격한 선호가 모든 프로필에서 항상 사회의 엄격한 선호가 되는 일이 없어야 한다는 조건입니다.

애로의 불가능성 정리는 바로 이 조건들을 동시에 요구할 때 발생합니다. 조건들의 표준적인 수학적 형식은 위와 같습니다.
-->

---

<!-- _class: dense iia-slide -->

# IIA는 쌍별 집계를 요구한다

$$
\forall i,\ R_i\restriction_{\{a,b\}}=R_i'\restriction_{\{a,b\}}
\quad\Longrightarrow\quad
F(\mathbf{R})\restriction_{\{a,b\}}=F(\mathbf{R}')\restriction_{\{a,b\}}
$$

<div class="iia-example">
  <div class="iia-profile">
    <div class="iia-profile-title">프로필 R</div>
    <div class="iia-row head"><span>유권자</span><span>선호 순서</span></div>
    <div class="iia-row">
      <span>1</span>
      <span class="iia-pref"><span class="iia-focus">🍎</span><span class="choice-symbol">&gt;</span><span class="iia-focus">🍌</span><span class="choice-symbol">&gt;</span>🐲</span>
    </div>
    <div class="iia-row">
      <span>2</span>
      <span class="iia-pref"><span class="iia-focus">🍎</span><span class="choice-symbol">&gt;</span>🐲<span class="choice-symbol">&gt;</span><span class="iia-focus">🍌</span></span>
    </div>
    <div class="iia-row">
      <span>3</span>
      <span class="iia-pref">🐲<span class="choice-symbol">&gt;</span><span class="iia-focus">🍌</span><span class="choice-symbol">&gt;</span><span class="iia-focus">🍎</span></span>
    </div>
  </div>
  <div class="iia-profile">
    <div class="iia-profile-title">프로필 R'</div>
    <div class="iia-row head"><span>유권자</span><span>선호 순서</span></div>
    <div class="iia-row">
      <span>1</span>
      <span class="iia-pref">🐲<span class="choice-symbol">&gt;</span><span class="iia-focus">🍎</span><span class="choice-symbol">&gt;</span><span class="iia-focus">🍌</span></span>
    </div>
    <div class="iia-row">
      <span>2</span>
      <span class="iia-pref"><span class="iia-focus">🍎</span><span class="choice-symbol">&gt;</span><span class="iia-focus">🍌</span><span class="choice-symbol">&gt;</span>🐲</span>
    </div>
    <div class="iia-row">
      <span>3</span>
      <span class="iia-pref"><span class="iia-focus">🍌</span><span class="choice-symbol">&gt;</span><span class="iia-focus">🍎</span><span class="choice-symbol">&gt;</span>🐲</span>
    </div>
  </div>
</div>

<div class="iia-note">
  <span>각 유권자의 🍎-🍌 비교는 두 프로필에서 같다</span>
  <span class="arrow">⇒</span>
  <span>사회의 🍎-🍌 비교도 같아야 한다</span>
</div>

<!--
IIA는 길보의 모형과 애로의 모형이 만나는 지점입니다.

사회가 a와 b 중 무엇을 더 선호하는지 결정할 때에는, 각 유권자가 a와 b 중 무엇을 더 선호하는지만 보아야 합니다.

다른 후보 c가 어디에 놓여 있는지는 a와 b의 사회적 비교에 영향을 주어서는 안 됩니다.

개인의 선호가 모두 엄격하다고 단순화하면, 각 후보 쌍에 대해 유권자들은 사실상 0 또는 1의 판단을 제출합니다.

x_i^{ab}=1이면 aP_i b, 0이면 bP_i a라고 둘 수 있습니다.

IIA를 만족하는 사회후생함수에서는 a와 b의 사회적 관계가 어떤 쌍별 집계 함수 f_ab:{0,1}^N -> {0,1}에 의해 결정됩니다.

다만 애로의 IIA만으로는 서로 다른 후보 쌍에 반드시 동일한 함수가 사용되어야 하는 것은 아닙니다.

f_ab, f_bc, f_ac가 서로 다를 수도 있습니다.

반면 길보의 기본 모형은 모든 쟁점에 동일한 집계 함수 f를 적용합니다.

따라서 길보의 모형은 쟁점별 독립성뿐 아니라 쟁점 사이의 중립성까지 직접 집계 구조에 넣었다고 볼 수 있습니다. IIA의 표준 형식은 후보 쌍에 관한 개인 선호가 같으면 해당 후보 쌍의 사회적 선호도 같아야 한다고 요구합니다.
-->

---

<!-- _class: dense -->

# 길보와 애로의 모형

| 구분 | 길보의 모형 | 애로의 모형 |
| --- | --- | --- |
| 개인의 입력 | 논리적으로 연결된 찬반 판단들 | 대안 전체에 대한 약순서 |
| 기본 단위 | 하나의 명제 또는 쟁점 | 하나의 선호 프로필 |
| 집계 방식 | 각 쟁점에 집계 함수 $f$ 적용 | 프로필 전체에 함수 $F$ 적용 |
| 사회의 출력 | 집단 판단 벡터 | 사회적 약순서 |
| 핵심 구조 | 승리 연합 $\mathcal{E}$ | 사회후생함수 $F$ |
| 핵심 문제 | 논리적 제약 보존 | 바람직한 조건들의 동시 충족 |
| 독재의 표현 | 모든 승리 연합에 같은 사람이 포함 | 한 사람의 선호가 항상 사회를 지배 |

<!--
길보와 애로는 모두 개인의 의견을 사회의 의견으로 바꾸는 문제를 다룹니다.

그러나 출발점이 다릅니다.

길보는 한 사람의 의견을 여러 개의 단순한 판단으로 분해하고, 이 판단들을 각각 집계했을 때 논리적 일관성이 유지되는지를 묻습니다.

애로는 한 사람의 전체 선호 순서를 하나의 입력으로 보고, 여러 선호 순서를 사회의 선호 순서 하나로 바꾸는 함수를 연구합니다.

길보의 모형에서는 승리 연합이 중심이고, 애로의 모형에서는 사회후생함수가 중심입니다.

길보의 질문은 논리적으로 올바른 개인 판단들을 따로 집계하면 사회의 판단도 논리적으로 올바른가입니다.

애로의 질문은 개인 선호를 사회 선호로 바꾸는 함수가 우리가 원하는 조건들을 모두 만족할 수 있는가입니다.

두 모형은 서로 완전히 다른 이론이 아닙니다.

후보 간 선호를 여러 개의 이항 판단으로 분해하면 애로의 선호 집계 문제를 길보의 언어로도 표현할 수 있습니다.

그리고 애로의 증명에서도 어떤 유권자 연합이 후보 a와 b의 사회적 순서를 결정할 수 있는지가 중요한 역할을 합니다.
-->

---

<!-- _class: center -->

# 이제 질문을 정확히 말할 수 있다

$$
F:\mathcal{W}(A)^N\longrightarrow\mathcal{W}(A)
$$

> 다음 조건을 모두 만족하는 $F$가 존재하는가?

$$
U,\qquad SO,\qquad WP,\qquad IIA,\qquad ND
$$

> 애로의 답:  
> **대안이 셋 이상이면 존재하지 않는다.**

<!--
이제 처음의 질문을 수학적으로 정확하게 말할 수 있습니다.

우리가 찾는 것은 모든 가능한 개인 선호 프로필을 사회의 일관된 선호 순서로 바꾸는 함수입니다.

그리고 이 함수가 만장일치를 존중하고, 무관한 후보의 영향을 받지 않으며, 특정한 한 사람에게 지배되지 않기를 원합니다.

각 조건은 따로 보면 자연스럽습니다.

하지만 대안이 세 개 이상일 때 이 조건들을 모두 만족하는 사회후생함수는 존재하지 않습니다.

다음으로 이 명제가 정확히 무엇을 뜻하는지, 그리고 왜 독재만이 남게 되는지를 살펴보겠습니다.
-->

---

<!-- _class: lead section-title -->

# 3. 애로의 불가능성 정리

자연스러운 조건들을 모두 만족하는 투표제는 없다

---

<!-- _class: center -->

# 우리가 원했던 것

$$
F:\mathcal{W}(A)^N\longrightarrow\mathcal{W}(A)
$$

$$
\begin{aligned}
&\text{무제한 영역} &&(U)\\
&\text{사회적 합리성} &&(SO)\\
&\text{약한 파레토 원칙} &&(WP)\\
&\text{무관한 대안으로부터의 독립성} &&(IIA)\\
&\text{비독재성} &&(ND)
\end{aligned}
$$

> 이 조건들을 모두 만족하는  
> 사회후생함수는 존재하는가?

<!--
우리가 찾는 것은 개인들의 선호 순서를 사회 전체의 선호 순서로 바꾸는 함수입니다.

논리적으로 가능한 모든 개인 선호를 처리할 수 있어야 합니다.

결과도 완비적이고 이행적인 사회적 순서여야 합니다.

모두가 어떤 대안을 더 선호한다면 사회도 그 대안을 더 선호해야 합니다.

두 대안을 비교할 때에는 다른 대안에 관한 정보가 결과에 영향을 주어서는 안 됩니다.

그리고 어느 한 사람의 의견이 언제나 사회 전체의 의견이 되어서는 안 됩니다.
-->

---

<!-- _class: dense -->

# 애로의 불가능성 정리

$$
N=\{1,\ldots,n\},
\qquad
2\le n<\infty
$$

$$
|A|\ge 3
$$

$$
F:\mathcal{W}(A)^N\longrightarrow\mathcal{W}(A)
$$

정리:

$$
WP+IIA
\quad\Longrightarrow\quad
F\text{는 독재적이다.}
$$

즉,

$$
\nexists F:\mathcal{W}(A)^N\longrightarrow\mathcal{W}(A)
\quad
\text{such that}
\quad
WP\land IIA\land ND.
$$

> $U$와 $SO$는 함수의 타입  
> $F:\mathcal{W}(A)^N\to\mathcal{W}(A)$에 이미 들어 있다.

<!--
애로의 불가능성 정리는 다음과 같이 말합니다.

유권자의 수가 유한하고, 대안이 세 개 이상이라고 하겠습니다.

논리적으로 가능한 모든 개인 선호 프로필을 입력받아 완비적이고 이행적인 사회적 선호를 출력하는 사회후생함수를 생각합니다.

이 함수가 약한 파레토 원칙과 무관한 대안으로부터의 독립성을 만족한다면, 그 함수는 반드시 독재적입니다.

따라서 약한 파레토 원칙, 무관한 대안으로부터의 독립성, 비독재성을 모두 만족하는 사회후생함수는 존재하지 않습니다.

무제한 영역과 사회적 합리성은 함수의 정의역과 공역에 이미 포함되어 있습니다.

F:W(A)^N -> W(A)라는 표현 자체가 모든 약순서 프로필을 허용하고, 결과도 약순서여야 한다는 뜻입니다.

애로는 개인 선호에서 사회적 순서를 만드는 절차가 일정한 자연스러운 조건들을 만족할 경우, 결과가 미리 고정되어 있거나 특정 개인에게 지배될 수밖에 없다는 형태로 이 결과를 제시했습니다.
-->

---

<!-- _class: dense -->

# 다섯 조건은 각각 무엇을 막는가

| 조건 | 배제하려는 상황 |
| --- | --- |
| U | 특정한 선호를 가진 유권자는 참여할 수 없음 |
| SO | 사회가 $aPb,\ bPc,\ cPa$처럼 순환함 |
| WP | 모두가 $aPb$인데 사회는 $bRa$라고 판단함 |
| IIA | $(a,b)$의 비교가 제3의 대안 $c$에 의해 바뀜 |
| ND | 한 사람의 엄격한 선호가 언제나 사회를 지배함 |

<!--
각 조건을 제거하면 어떤 일이 가능해지는지 살펴보겠습니다.

무제한 영역을 제거하면 특정한 형태의 선호만 허용할 수 있습니다. 예를 들어 유권자들의 선호가 반드시 하나의 정치적 축 위에서 단봉 형태를 가져야 한다고 제한할 수 있습니다.

사회적 합리성을 제거하면 다수결처럼 사회의 선호가 순환하는 것을 허용하게 됩니다.

약한 파레토 원칙을 제거하면 모든 사람이 사과를 바나나보다 선호하는데도 사회가 바나나를 사과 이상으로 평가할 수 있습니다.

IIA를 제거하면 사과와 바나나에 대한 유권자들의 상대적 선호가 그대로인데도 용과의 위치에 따라 사과와 바나나의 사회적 순서가 달라질 수 있습니다.

비독재성을 제거하면 한 사람의 선호를 그대로 사회의 선호로 채택할 수 있습니다.

애로의 정리는 이 다섯 가지 문제를 한꺼번에 피할 수 없다고 말합니다.
-->

---

<!-- _class: dense -->

# 이미 세 가지 선택지를 보았다

| 집계 규칙 | 만족하는 성질 | 포기하는 성질 |
| --- | --- | --- |
| 드 보르다 투표제 | 항상 전체 순위를 만들 수 있음 | IIA |
| 후보별 다수 비교 | WP, IIA | 사회적 이행성 |
| 독재 | U, SO, WP, IIA | ND |

$$
\text{일관성}
\qquad
\text{독립성}
\qquad
\text{비독재성}
$$

> 셋을 모두 지키는 것이 문제다.

<!--
앞에서 살펴본 투표제들은 애로의 정리가 말하는 선택을 실제로 보여줍니다.

드 보르다 투표제는 후보들의 점수를 계산해 언제나 전체 순위를 만들 수 있습니다.

그러나 사과와 바나나에 대한 모든 유권자의 상대적 선호가 같더라도, 용과가 어디에 배치되는지에 따라 사과와 바나나의 사회적 순서가 달라질 수 있습니다. 따라서 IIA를 만족하지 않습니다.

후보별 다수 비교는 각 후보 쌍을 독립적으로 처리합니다. 모두가 사과를 바나나보다 선호하면 사회도 사과를 선택합니다.

그러나 후보별 결과를 합치면 콩도르세 순환이 발생할 수 있습니다. 따라서 출력이 이행적인 사회적 순서가 되지 않을 수 있습니다.

한 사람의 순위를 그대로 사회의 순위로 사용하는 독재는 나머지 조건을 모두 만족할 수 있습니다.

하지만 비독재성을 정면으로 위반합니다.

애로의 정리는 더 복잡한 계산법을 발명하면 이 문제를 모두 피할 수 있다는 가능성을 부정합니다.
-->

---

<!-- _class: center -->

# 증명의 전략

$$
\text{파레토 원칙}
\Longrightarrow
\text{전체 유권자는 결정적}
$$

$$
\Downarrow
$$

$$
\text{가장 작은 결정적 연합을 찾는다}
$$

$$
\Downarrow
$$

$$
\text{그 연합은 한 명이어야 한다}
$$

$$
\Downarrow
$$

$$
\text{그 한 명이 독재자다}
$$

<!--
증명의 핵심은 어떤 유권자 연합이 사회의 선호를 결정할 수 있는지 살펴보는 것입니다.

먼저 약한 파레토 원칙에 의해 모든 유권자가 같은 방향으로 선호하면 그 방향이 사회의 선호가 됩니다.

따라서 전체 유권자 집합은 사회적 비교를 결정할 수 있습니다.

그다음 결정력을 가진 연합 중 가장 작은 연합을 찾습니다.

그리고 대안이 세 개 이상이라는 사실을 이용해, 그 연합에 두 명 이상이 들어 있다면 더 작은 결정적 연합을 만들 수 있음을 보입니다.

이는 가장 작은 연합이라는 가정과 모순됩니다.

따라서 가장 작은 결정적 연합은 한 명으로 이루어져야 합니다.

그 한 사람이 모든 후보 쌍의 사회적 순서를 결정하므로 독재자가 됩니다.
-->

---

<!-- _class: dense -->

# 결정적 연합

연합:

$$
S\subseteq N
$$

대립 상황에서의 결정력:

$$
S\overset{a,b}{\Longrightarrow}_{0}
$$

의 의미:

$$
\left[\forall i\in S,\ aP_i b\right]
\land
\left[\forall i\notin S,\ bP_i a\right]
\Longrightarrow
aPb
$$

강한 결정력:

$$
S\overset{a,b}{\Longrightarrow}
\quad\Longleftrightarrow\quad
\forall\mathbf{R}\in\mathcal{W}(A)^N,\
\left[\forall i\in S,\ aP_i b\right]\Longrightarrow aPb
$$

<!--
유권자 연합 S가 있다고 하겠습니다.

먼저 S의 구성원은 모두 a를 b보다 선호하고, 나머지 사람들은 모두 반대로 b를 a보다 선호하는 극단적인 대립 상황을 생각합니다.

이 상황에서도 사회가 a를 b보다 선호한다면, S는 a와 b의 대립 상황에서 결정적이라고 하겠습니다.

더 강한 의미의 결정력도 정의할 수 있습니다.

S의 모든 구성원이 a를 b보다 선호하기만 하면, 나머지 유권자가 어떻게 생각하든 사회가 a를 b보다 선호하는 경우입니다.

이때 S는 a를 b보다 결정할 수 있다고 합니다.

한 명으로 이루어진 연합이 모든 후보 쌍에 대해 이런 결정력을 가진다면, 그 사람은 바로 독재자입니다.
-->

---

<!-- _class: center -->

# 결정력의 확장 정리

대안이 세 개 이상이고 $U,SO,WP,IIA$가 성립할 때:

$$
S\overset{a,b}{\Longrightarrow}_{0}
$$

인 서로 다른 $a,b$가 하나라도 존재하면,

$$
\forall x\ne y,
\qquad
S\overset{x,y}{\Longrightarrow}
$$

> 한 쌍에 대한 국소적 결정력  
> $\Longrightarrow$  
> 모든 쌍에 대한 전면적 결정력

<!--
증명에서 사용할 핵심 보조정리는 결정력의 확장 정리입니다.

어떤 연합이 단 하나의 후보 쌍에 대해, 모든 나머지 유권자의 반대를 이기고 사회의 선호를 결정할 수 있다고 하겠습니다.

그러면 그 연합은 모든 후보 쌍에서, 나머지 유권자가 어떻게 투표하든 사회의 선호를 결정할 수 있습니다.

이 결과에는 세 조건이 함께 사용됩니다.

무제한 영역을 이용하면 증명에 필요한 선호 프로필을 자유롭게 구성할 수 있습니다.

IIA를 이용하면 두 후보의 사회적 비교를 유지한 채 다른 후보들의 위치를 바꿀 수 있습니다. 애로는 IIA를 두 대안 사이의 사회적 선택이 그 두 대안에 대한 개인들의 순서에만 의존해야 한다는 조건으로 설명했습니다.

마지막으로 사회적 선호의 이행성을 이용해 한 후보 쌍에서 얻은 결정력을 세 번째 후보가 포함된 다른 비교로 전달합니다.

대안이 세 개 이상이어야 하는 이유가 여기에 있습니다.
-->

---

<!-- _class: dense -->

# 가장 작은 결정적 연합

모든 후보 쌍에 대해 결정적인 연합들의 집합:

$$
\mathcal{M}
=
\left\{
S\subseteq N:
\forall a\ne b,\
S\overset{a,b}{\Longrightarrow}
\right\}
$$

약한 파레토 원칙에 의해:

$$
N\in\mathcal{M}
$$

유권자 집합이 유한하므로:

$$
\exists S\in\mathcal{M}
\quad
\text{such that}
\quad
\nexists T\in\mathcal{M},\ T\subsetneq S
$$

<!--
모든 후보 쌍에 대해 결정력을 가진 연합들의 집합을 M이라고 하겠습니다.

전체 유권자 집합 N은 M에 속합니다.

모든 유권자가 a를 b보다 선호하면 약한 파레토 원칙에 의해 사회도 a를 b보다 선호하기 때문입니다.

따라서 결정적 연합은 적어도 하나 존재합니다.

유권자 수가 유한하므로, 포함관계를 기준으로 더 이상 줄일 수 없는 최소 결정적 연합 S를 선택할 수 있습니다.

이제 이 최소 연합에 두 명 이상이 들어 있다고 가정하고 모순을 만들겠습니다.
-->

---

<!-- _class: dense -->

# 최소 연합을 둘로 나눈다

$$
S=S_1\mathbin{\dot\cup}S_2,
\qquad
S_1\ne\varnothing,\quad S_2\ne\varnothing
$$

서로 다른 세 대안 $x,y,z$에 대해:

| 유권자 | 선호 순서 |
| --- | --- |
| $i\in S_1$ | $xP_i yP_i z$ |
| $i\in S_2$ | $yP_i zP_i x$ |
| $i\notin S$ | $zP_i xP_i y$ |

모든 $i\in S$에 대해:

$$
yP_i z
$$

따라서:

$$
yPz
$$

<!--
최소 결정적 연합 S에 적어도 두 명이 있다고 가정하겠습니다.

그러면 S를 비어 있지 않은 두 집합 S_1과 S_2로 나눌 수 있습니다.

이제 세 대안 x,y,z를 선택하고 표와 같은 선호 프로필을 만듭니다.

S_1의 유권자는 x,y,z 순서로 선호합니다.

S_2의 유권자는 y,z,x 순서로 선호합니다.

S 밖의 유권자는 z,x,y 순서로 선호합니다.

S_1과 S_2의 모든 구성원은 공통으로 y를 z보다 선호합니다.

S는 모든 후보 쌍에 대해 결정적인 연합이므로, 사회도 yPz라고 판단해야 합니다.
-->

---

<!-- _class: dense -->

# 어느 쪽이든 더 작은 연합이 결정적이다

사회는 $x$와 $y$를 비교할 수 있어야 합니다.

| 경우 | 결론 | 이유 |
| --- | --- | --- |
| $yPx$ | $S_2\overset{y,x}{\Longrightarrow}_{0}$ | $yPx$를 지지하는 사람은 정확히 $S_2$ |
| $\neg(yPx)$ | $S_1\overset{x,z}{\Longrightarrow}_{0}$ | 완비성으로 $xRy$, 이미 $yPz$, 따라서 $xPz$ |

결정력의 확장 정리에 의해:

$$
S_1\in\mathcal{M}
\quad\lor\quad
S_2\in\mathcal{M}
$$

<!--
이제 사회가 x와 y를 어떻게 비교하는지 살펴봅니다.

첫 번째 가능성은 사회가 y를 x보다 엄격하게 선호하는 경우입니다.

표에서 y를 x보다 선호하는 유권자는 정확히 S_2의 구성원뿐입니다.

나머지 모든 유권자는 x를 y보다 선호합니다.

그런데도 사회가 y를 x보다 선호했으므로 S_2는 대립 상황에서 결정적입니다.

결정력의 확장 정리에 의해 S_2는 모든 후보 쌍에 대해 결정적인 연합이 됩니다.

두 번째 가능성은 사회가 y를 x보다 엄격하게 선호하지 않는 경우입니다.

사회적 선호는 완비적이므로 xRy가 성립합니다.

앞에서 이미 yPz를 얻었습니다.

약순서에서는 xRy이고 yPz이면 xPz이므로 사회는 x를 z보다 엄격하게 선호합니다.

그런데 x를 z보다 선호하는 유권자는 정확히 S_1의 구성원뿐입니다.

따라서 S_1이 대립 상황에서 결정적이고, 확장 정리에 의해 모든 후보 쌍에 대해 결정적인 연합이 됩니다.

어느 경우든 S보다 작은 결정적 연합이 발견됩니다.
-->

---

<!-- _class: center -->

# 최소 연합은 한 명이다

$$
S_1\in\mathcal{M}
\quad\lor\quad
S_2\in\mathcal{M}
$$

하지만:

$$
S_1\subsetneq S,
\qquad
S_2\subsetneq S
$$

이는 $S$의 최소성과 모순입니다.

$$
|S|=1
$$

어떤 $d\in N$에 대해:

$$
aP_d b
\quad\Longrightarrow\quad
aPb
$$

> $d$는 독재자다.

<!--
S_1과 S_2는 모두 S의 진부분집합입니다.

그런데 앞의 논증에 따르면 둘 중 적어도 하나가 다시 모든 후보 쌍에 대해 결정적인 연합이 됩니다.

이는 S가 최소 결정적 연합이라는 가정과 모순됩니다.

따라서 최소 결정적 연합에는 두 명 이상이 들어 있을 수 없습니다.

최소 결정적 연합은 반드시 한 명으로 이루어져 있습니다.

그 유권자를 d라고 하겠습니다.

{d}가 M에 속하므로 d가 a를 b보다 엄격하게 선호하면, 다른 모든 유권자의 선호와 관계없이 사회도 a를 b보다 엄격하게 선호합니다.

이것이 애로가 정의한 독재자입니다.

따라서 약한 파레토 원칙과 IIA를 만족하는 사회후생함수는 반드시 독재적입니다.

비독재성까지 동시에 요구하면 그러한 함수는 존재하지 않습니다.
-->

---

<!-- _class: dense -->

# 왜 대안이 세 개 이상이어야 하는가

대안이 두 개뿐이라면:

$$
A=\{a,b\}
$$

예를 들어:

$$
aPb
\quad\Longleftrightarrow\quad
\lvert\{i:aP_i b\}\rvert
>
\lvert\{i:bP_i a\}\rvert
$$

$$
aIb
\quad\Longleftrightarrow\quad
\lvert\{i:aP_i b\}\rvert
=
\lvert\{i:bP_i a\}\rvert
$$

> 두 대안만 있으면 순환이 생길 수 없다.

<!--
애로의 정리는 대안이 세 개 이상일 때 적용됩니다.

대안이 두 개뿐이라면 사회적 선호가 순환할 수 없습니다.

비교해야 할 후보 쌍이 하나뿐이기 때문입니다.

예를 들어 a를 b보다 선호하는 사람과 b를 a보다 선호하는 사람의 수를 비교할 수 있습니다.

한쪽이 더 많으면 그쪽을 사회적으로 더 높은 대안으로 정하고, 수가 같으면 사회적 무차별로 처리할 수 있습니다.

이 규칙은 약한 파레토 원칙과 IIA를 만족하며 독재적이지 않습니다.

증명에서 세 번째 대안 z가 필요했던 이유도 같습니다.

한 후보 쌍에서 발생한 결정력을 다른 후보 쌍으로 옮기고, 사회적 이행성을 이용해 더 작은 결정적 연합을 찾아내려면 서로 다른 세 대안이 필요합니다.
-->

---

<!-- _class: dense -->

# 불가능성의 바깥에서

$$
\boxed{
U+SO+WP+IIA+ND
\text{는 불가능}
}
$$

| 바꿀 수 있는 것 | 가능한 접근 |
| --- | --- |
| U를 제한한다 | 단봉 선호 |
| IIA를 완화한다 | 드 보르다 방식 등 |
| 입력 정보를 늘린다 | 승인투표·점수투표 |
| 전체 순서 대신 다른 출력을 사용한다 | 승자 집합·부분순서 |
| 선호 형성 과정에 개입한다 | 토론·숙의·제도 설계 |

> 사람들의 선호에 구조가 있다면  
> 다시 가능한 것이 생길 수 있다.

<!--
애로의 불가능성 정리는 민주주의 자체가 논리적으로 불가능하다는 뜻이 아닙니다.

모든 실제 선거에서 콩도르세 순환이 발생한다는 뜻도 아닙니다.

이 정리는 특정한 모형 안에서 성립합니다.

개인의 정보는 대안에 대한 순서로 표현됩니다.

모든 논리적으로 가능한 선호 프로필을 허용합니다.

사회도 대안 전체에 대해 완비적이고 이행적인 순서를 가져야 합니다.

그리고 약한 파레토 원칙과 IIA를 요구합니다.

이 조건들을 유지하면서 비독재성까지 얻는 것이 불가능하다는 정리입니다.

즉석결선투표제처럼 당선자 한 명만 출력하는 제도는 그 자체로 애로의 사회후생함수가 아닙니다. 다만 전체 사회적 순위를 만들도록 확장하거나 후보 집합의 변화에 따른 선택을 함께 분석하면 유사한 문제가 나타날 수 있습니다.

승인투표나 점수투표처럼 단순한 순위 이외의 정보를 입력받는 제도도 애로의 원래 모형과 정확히 같은 대상은 아닙니다.

정리는 모든 대안을 금지하는 것이 아니라, 우리가 어떤 조건을 완화하고 어떤 정보를 추가할지 선택하도록 요구합니다.

모든 개인 선호를 허용하는 무제한 영역을 포기하고, 현실의 선호가 특정한 구조를 가진다고 가정할 수 있습니다.

IIA를 절대적인 조건으로 요구하지 않고, 다른 후보의 위치가 일정한 방식으로 결과에 영향을 주는 것을 허용할 수도 있습니다.

유권자에게 순위만 묻지 않고 후보별 승인 여부나 평가 점수를 물을 수도 있습니다.

사회가 반드시 모든 대안을 하나의 완전한 순서로 정해야 한다는 요구를 완화할 수도 있습니다.

다음으로 살펴볼 던컨 블랙의 정리는 첫 번째 길을 선택합니다.

유권자들의 선호가 하나의 축 위에서 단봉 형태를 가진다면, 다수결의 순환이 사라지고 중위 투표자의 선호가 특별한 역할을 하게 됩니다.
-->

---

<!-- _class: lead section-title -->

# 4. 대안적 투표제와 갈등 완화

조건을 바꾸면 다시 가능한 것이 생긴다

---

<!-- _class: lead section-title -->

# 4-1. 던컨 블랙과 단봉 선호

선호에 하나의 축이 있다면

---

<!-- _class: dense single-peak-slide -->

# 만약 선호도가 하나의 축을 따른다면?

<div class="single-peak-visual">
  <div class="peak-chart" aria-label="정부 지출 규모 10, 20, 30, 40, 50 중 30에서 가장 높은 단봉 선호 그래프">
    <div class="peak-y-label">선호도</div>
    <div class="peak-x-label">정부 지출 규모</div>
    <div class="peak-axis-y"></div>
    <div class="peak-axis-x"></div>
    <div class="peak-bars">
      <div class="peak-col h10">
        <div class="peak-bar"></div>
        <div class="peak-tick">10</div>
      </div>
      <div class="peak-col h20">
        <div class="peak-bar"></div>
        <div class="peak-tick">20</div>
      </div>
      <div class="peak-col h30">
        <div class="peak-bar"></div>
        <div class="peak-tick">30</div>
      </div>
      <div class="peak-col h40">
        <div class="peak-bar"></div>
        <div class="peak-tick">40</div>
      </div>
      <div class="peak-col h50">
        <div class="peak-bar"></div>
        <div class="peak-tick">50</div>
      </div>
    </div>
  </div>
  <div class="peak-summary">
    <div class="peak-row"><span>대안</span><strong>X ⊂ ℝ</strong></div>
    <div class="peak-row"><span>예시</span><strong>정부 지출 규모</strong></div>
    <div class="peak-row"><span>이상점</span><strong>p<sub>i</sub> = 30</strong></div>
    <div class="peak-takeaway">이상점에 가까울수록 선호하고, 이상점에서 멀어질수록 덜 선호한다.</div>
  </div>
</div>

<!--
던컨 블랙은 대안들이 하나의 공통된 축 위에 배열될 수 있는 상황을 생각했습니다.

정부 지출액, 세율, 최저임금, 정년처럼 하나의 수치로 나타낼 수 있는 정책이 대표적인 예입니다.

대안들의 집합을 X subset R이라고 하겠습니다.

각 유권자 i에게는 가장 선호하는 정책 위치 p_i가 있습니다. 이를 이상점 또는 선호의 봉우리라고 합니다.

예를 들어 어떤 유권자의 이상점이 30이라면, 이 유권자는 30을 가장 선호합니다.

그리고 30에서 왼쪽이나 오른쪽으로 멀어질수록 선호도가 낮아집니다.

선호를 그래프로 그리면 하나의 봉우리가 나타나기 때문에 이를 단봉 선호, single-peaked preference라고 부릅니다.

블랙은 가격, 생산량, 임금률, 세율, 취학 연령처럼 하나의 수량을 선택하는 문제에서 이런 선호가 나타날 수 있다고 설명했습니다.

Source: Duncan Black, "On the Rationale of Group Decision-making", Journal of Political Economy, 1948.
-->

---

<!-- _class: dense -->

# 단봉 선호의 수학적 정의

유권자 $i$의 이상점:

$$
p_i\in X
$$

선호가 엄격한 단봉 형태라는 것은:

$$
x<y\le p_i
\quad\Longrightarrow\quad
yP_i x
$$

$$
p_i\le y<x
\quad\Longrightarrow\quad
yP_i x
$$

<!--
단봉 선호를 정확히 정의해보겠습니다.

유권자 i의 이상점을 p_i라고 하겠습니다.

이상점의 왼쪽에 두 대안 x<y<=p_i가 있다면, y가 이상점에 더 가깝습니다.

따라서 유권자는 y를 x보다 선호합니다.

이상점의 오른쪽에서도 마찬가지입니다.

p_i<=y<x이면 y가 이상점에 더 가까우므로 yP_i x입니다.

중요한 것은 모든 유권자의 이상점이 같아야 한다는 것이 아닙니다.

유권자마다 원하는 위치는 달라도 됩니다.

다만 모든 유권자가 동일한 축을 인정하고, 각자의 이상점에서 멀어질수록 선호도가 내려가야 합니다. 블랙은 이를 하나의 봉우리까지 상승하고 그 이후 하강하는 선호 곡선으로 표현했습니다.

Source: Duncan Black, "On the Rationale of Group Decision-making", Journal of Political Economy, 1948.
-->

---

<!-- _class: dense -->

# 던컨 블랙의 정리

유권자의 수가 홀수라고 가정합니다.

$$
n=2k+1
$$

$$
p_{(1)}
\le
p_{(2)}
\le
\cdots
\le
p_{(k+1)}
\le
\cdots
\le
p_{(2k+1)}
$$

중위 이상점:

$$
p_m=p_{(k+1)}
=
p_{\left(\frac{n+1}{2}\right)}
$$

정리:

$$
\forall x\in X\setminus\{p_m\},
\qquad
\lvert\{i\in N:p_mP_i x\}\rvert
>
\frac n2
$$

따라서 $p_m$은 콩도르세 승자입니다.

<!--
유권자가 홀수 명이고 모든 유권자의 선호가 같은 축 위에서 단봉 형태라고 가정하겠습니다.

유권자들의 이상점을 왼쪽부터 순서대로 배열합니다.

정중앙에 있는 이상점을 p_m이라고 하겠습니다.

던컨 블랙의 정리에 따르면 이 중위 이상점은 다른 모든 대안을 일대일 다수결에서 이깁니다.

왜 그런지 살펴보겠습니다.

어떤 대안 x가 중위 이상점보다 왼쪽에 있다고 하겠습니다.

중위 이상점 또는 그보다 오른쪽에 이상점을 가진 유권자는 전체의 과반수입니다.

이들은 모두 x보다 p_m을 선호합니다.

반대로 x>p_m이라면, 중위 이상점 또는 그보다 왼쪽에 이상점을 가진 유권자 과반수가 p_m을 선호합니다.

따라서 어느 대안을 p_m과 비교하더라도 p_m을 지지하는 과반수가 존재합니다.

블랙은 홀수 명의 위원회에서 중위 이상점이 다른 모든 대안을 단순 다수로 이기며, 그러한 대안은 하나뿐임을 보였습니다.

Source: Duncan Black, "On the Rationale of Group Decision-making", Journal of Political Economy, 1948.
-->

---

<!-- _class: dense -->

# 다섯 유권자의 선택

$$
X=\{10,20,30,40,50\}
$$

$$
p_m=30
$$

<div class="median-axis" aria-label="다섯 유권자의 이상점이 10, 20, 30, 40, 50에 있고 30이 중위 이상점인 축">
  <div class="median-track"></div>
  <div class="median-point p10"><span>유권자 1</span><strong>10</strong></div>
  <div class="median-point p20"><span>유권자 2</span><strong>20</strong></div>
  <div class="median-point p30 mid"><span>유권자 3</span><strong>30</strong></div>
  <div class="median-point p40"><span>유권자 4</span><strong>40</strong></div>
  <div class="median-point p50"><span>유권자 5</span><strong>50</strong></div>
</div>

| 대결 | 30을 선택하는 유권자 | 결과 |
| --- | --- | --- |
| 30 대 10 | 2, 3, 4, 5 | 30 승리 |
| 30 대 20 | 3, 4, 5 | 30 승리 |
| 30 대 40 | 1, 2, 3 | 30 승리 |
| 30 대 50 | 1, 2, 3, 4 | 30 승리 |

<!--
다섯 명의 유권자가 각각 10, 20, 30, 40, 50을 가장 선호한다고 하겠습니다.

중앙에 있는 유권자의 이상점은 30입니다.

30과 20을 비교하면 이상점이 30, 40, 50인 세 명이 30을 선택합니다.

30과 40을 비교하면 이상점이 10, 20, 30인 세 명이 30을 선택합니다.

10이나 50처럼 더 멀리 있는 대안과 비교하면 30을 지지하는 사람은 더 많아집니다.

따라서 30은 나머지 모든 대안을 양자 대결에서 이깁니다.

앞에서 보았던 콩도르세 순환은 발생하지 않습니다.

개별 선호뿐 아니라 양자 다수결로 만들어진 사회적 선호도 이행적이 됩니다. 블랙은 단봉 선호 아래에서는 다수결 관계가 이행성을 갖는다는 점도 설명했습니다.
-->

---

<!-- _class: center -->

# 여기서 말하는 ‘사회의 최선’

$$
\text{중위 이상점}
\ne
\text{평균 이상점}
$$

$$
\text{중위 이상점}
\ne
\text{행복 총합을 최대화하는 정책}
$$

$$
\text{중위 이상점}
=
\text{모든 대안을 양자 다수결에서 이기는 정책}
$$

> 여기서 ‘사회적 최선’은  
> **콩도르세 기준의 최선**이다.

<!--
중위 투표자의 의견이 사회의 최선을 반영한다는 표현은 주의해서 사용해야 합니다.

여기서 사회의 최선은 모든 사람의 행복을 더했을 때 가장 큰 값을 만드는 정책이라는 뜻이 아닙니다.

중위 이상점은 유권자 이상점들의 평균도 아닙니다.

소수자가 매우 큰 피해를 보는지, 정책의 비용이 어떻게 분배되는지, 선호의 강도가 얼마나 큰지도 이 정리에서는 고려하지 않습니다.

블랙의 정리가 보장하는 것은 정확히 하나입니다.

중위 이상점은 다른 모든 대안을 일대일 다수결에서 이깁니다.

따라서 중위 이상점은 콩도르세 기준의 사회적 최선이라고 말할 수 있습니다.

또한 중위라는 말은 어떤 고정된 정치적 중도를 의미하지 않습니다.

전체 유권자의 이상점이 한쪽으로 이동하면 중위 이상점도 함께 이동합니다.
-->

---

<!-- _class: dense -->

# 애로의 불가능성을 어떻게 피했는가

<div class="domain-flow">
  <div class="domain-set">
    <div class="domain-label">애로의 무제한 영역</div>
    <div class="domain-formula">𝓦(X)<sup>N</sup></div>
    <div class="domain-hint">가능한 모든 선호 프로필</div>
    <div class="domain-inner">
      <div class="domain-label">블랙의 제한된 영역</div>
      <div class="domain-formula">𝓓<sub>SP</sub></div>
      <div class="domain-hint">공통 축에서 단봉형인 선호 프로필</div>
    </div>
  </div>
  <div class="domain-result">
    <div class="domain-step">무제한 영역 U를 제한한다</div>
    <div class="domain-arrow">↓</div>
    <div class="domain-outcome">양자 다수결 관계가 이행적</div>
    <div class="domain-outcome">콩도르세 승자가 존재</div>
  </div>
</div>

<!--
블랙의 정리는 애로의 정리를 반박하지 않습니다.

애로의 정리에서 중요한 조건 중 하나는 무제한 영역입니다.

논리적으로 가능한 모든 선호 순서를 허용해야 한다는 조건입니다.

블랙은 이 조건을 포기합니다.

공통된 하나의 축 위에서 단봉 형태를 이루는 선호만 허용합니다.

따라서 정의역은 모든 선호 프로필의 집합보다 훨씬 작아집니다.

이 제한된 정의역에서는 다수결의 순환이 사라지고 중위 이상점이라는 콩도르세 승자가 나타납니다.

불가능성을 피한 대가는 명확합니다.

현실의 정치가 하나의 축으로 표현되지 않거나, 유권자가 중간 대안을 가장 싫어하거나, 정체성·지역·경제·외교 문제가 서로 다른 축을 형성하면 정리의 조건이 무너질 수 있습니다.

블랙의 정리는 민주주의가 언제나 합리적이라고 말하는 것이 아니라, 어떤 구조 아래에서 합리적일 수 있는지를 보여줍니다.
-->

---

<!-- _class: lead section-title -->

# 4-2. 승인투표

한 명만 고르지 않는다

---

<!-- _class: dense -->

# 한 명이 아니라 모두 표시한다

<div class="approval-layout">
  <div class="approval-formulas">
    <div class="approval-formula">C = {a, b, c, ...}</div>
    <div class="approval-formula">A<sub>i</sub> ⊆ C</div>
    <div class="approval-formula">s(c) = Σ<sub>i∈N</sub> 1<sub>{c∈A<sub>i</sub>}</sub></div>
    <div class="approval-formula">W<sub>AV</sub> = <span class="small-op">arg max</span><sub>c∈C</sub> s(c)</div>
  </div>
  <div class="approval-ballot">
    <div class="approval-row head"><span>후보</span><span>승인</span></div>
    <div class="approval-row"><span>사과</span><span class="approval-check">✓</span></div>
    <div class="approval-row"><span>바나나</span><span class="approval-check">✓</span></div>
    <div class="approval-row"><span>당근</span><span></span></div>
    <div class="approval-row"><span>용과</span><span class="approval-check">✓</span></div>
    <div class="approval-row"><span>가지</span><span></span></div>
  </div>
</div>

<!--
승인투표에서는 유권자가 한 후보만 선택하지 않습니다.

당선되어도 괜찮다고 생각하는 후보를 원하는 만큼 모두 표시합니다.

유권자 i가 승인한 후보들의 집합을 A_i라고 하겠습니다.

후보 c의 승인점수는 c를 승인한 유권자의 수입니다.

가장 많은 승인을 받은 후보가 당선됩니다.

따라서 유권자는 가장 좋아하는 후보를 지지하면서도, 두 번째나 세 번째로 괜찮다고 생각하는 후보에게 동시에 표를 줄 수 있습니다.

2002년 프랑스 대통령 선거와 함께 시행된 대규모 현장 실험에서는 승인투표의 원리가 유권자들에게 쉽게 이해되고 받아들여졌으며, 공식 1차 투표와는 다른 후보 순위가 나타났습니다.

Source: Laslier and Van der Straeten, "A live experiment on approval voting", Experimental Economics, 2008.
-->

---

<!-- _class: dense -->

# 강한 지지와 넓은 수용

유권자 100명의 평가를 단순화한 예시입니다.

<div class="support-compare">
  <div class="support-panel">
    <div>
      <div class="support-title">다수대표제</div>
      <div class="support-subtitle">1순위 지지만 센다</div>
    </div>
    <div class="support-bars">
      <div class="support-row win">
        <span class="support-name">사과</span>
        <span class="support-track"><span class="support-segment base w40"></span></span>
        <span class="support-number">40표</span>
      </div>
      <div class="support-row">
        <span class="support-name">바나나</span>
        <span class="support-track"><span class="support-segment base w35"></span></span>
        <span class="support-number">35표</span>
      </div>
      <div class="support-row">
        <span class="support-name">당근</span>
        <span class="support-track"><span class="support-segment base w25"></span></span>
        <span class="support-number">25표</span>
      </div>
    </div>
    <div class="support-result plurality">가장 큰 1순위 집단: <strong>사과 당선</strong></div>
  </div>

  <div class="support-panel">
    <div>
      <div class="support-title">승인투표</div>
      <div class="support-subtitle">1순위 지지 + 추가 승인을 함께 센다</div>
      <div class="support-legend">
        <span class="legend-item"><span class="legend-swatch"></span>1순위 지지</span>
        <span class="legend-item"><span class="legend-swatch extra"></span>추가 승인</span>
      </div>
    </div>
    <div class="support-bars">
      <div class="support-row">
        <span class="support-name">사과</span>
        <span class="support-track"><span class="support-segment base w40"></span></span>
        <span class="support-number">40표</span>
      </div>
      <div class="support-row">
        <span class="support-name">바나나</span>
        <span class="support-track"><span class="support-segment base w35"></span><span class="support-segment extra w30"></span></span>
        <span class="support-number">65표</span>
      </div>
      <div class="support-row accept-win">
        <span class="support-name">당근</span>
        <span class="support-track"><span class="support-segment base w25"></span><span class="support-segment extra w50"></span></span>
        <span class="support-number">75표</span>
      </div>
    </div>
    <div class="support-result approval">가장 넓은 수용 범위: <strong>당근 당선</strong></div>
  </div>
</div>

<!--
단순 다수대표제에서 후보에게 필요한 것은 가장 큰 1순위 지지 집단입니다.

유권자의 40%가 열성적으로 지지하고 나머지 60%가 강하게 반대하더라도, 다른 후보들의 표가 나뉘면 당선될 수 있습니다.

승인투표에서는 다른 진영의 유권자에게도 받아들여질 수 있는지가 점수에 반영됩니다.

예시에서 사과는 가장 큰 1순위 지지층을 가지고 있지만, 다른 집단으로부터 추가 승인을 받지 못합니다.

당근은 1순위 지지층은 가장 작지만 50명의 추가 승인을 받아 가장 넓은 수용 범위를 가집니다.

그 결과 승인투표에서는 당근이 당선됩니다.

이 구조에서는 후보가 자기 진영을 결집시키는 것뿐 아니라, 다른 진영 유권자로부터 두 번째 승인이라도 얻는 것이 중요해집니다.

따라서 상대 진영 전체를 적으로 돌리는 전략의 보상이 줄어들 가능성이 있습니다.
-->

---

<!-- _class: field-experiment -->

# 실제 선거에서는 누가 유리해졌나

<div class="field-deck">
<div class="field-chart">
<div class="field-chart-head"><div><div class="field-eyebrow">2012 프랑스 대통령 선거 현장 실험</div><div class="field-chart-title">공식 득표율 vs 승인한 유권자 비율</div></div><div class="field-legend"><span><i></i>공식 1차 투표</span><span><i class="approval"></i>승인투표</span></div></div>
<div class="field-results">
<div class="field-result-row"><div class="field-candidate">Hollande</div><div class="field-line"><span class="field-line-label">공식</span><span class="field-track"><span class="field-bar" style="width:57.3%"></span></span><span class="field-value">28.6%</span></div><div class="field-line"><span class="field-line-label">승인</span><span class="field-track"><span class="field-bar approval" style="width:98.9%"></span></span><span class="field-value">49.4%</span></div></div>
<div class="field-result-row exclusive"><div class="field-candidate">Sarkozy</div><div class="field-line"><span class="field-line-label">공식</span><span class="field-track"><span class="field-bar" style="width:54.4%"></span></span><span class="field-value">27.2%</span></div><div class="field-line"><span class="field-line-label">승인</span><span class="field-track"><span class="field-bar approval" style="width:80.9%"></span></span><span class="field-value">40.5%</span></div></div>
<div class="field-result-row exclusive"><div class="field-candidate">Le Pen</div><div class="field-line"><span class="field-line-label">공식</span><span class="field-track"><span class="field-bar" style="width:35.8%"></span></span><span class="field-value">17.9%</span></div><div class="field-line"><span class="field-line-label">승인</span><span class="field-track"><span class="field-bar approval" style="width:54.9%"></span></span><span class="field-value">27.4%</span></div></div>
<div class="field-result-row inclusive"><div class="field-candidate">Mélenchon</div><div class="field-line"><span class="field-line-label">공식</span><span class="field-track"><span class="field-bar" style="width:22.2%"></span></span><span class="field-value">11.1%</span></div><div class="field-line"><span class="field-line-label">승인</span><span class="field-track"><span class="field-bar approval" style="width:78.1%"></span></span><span class="field-value">39.1%</span></div></div>
<div class="field-result-row inclusive"><div class="field-candidate">Bayrou</div><div class="field-line"><span class="field-line-label">공식</span><span class="field-track"><span class="field-bar" style="width:18.3%"></span></span><span class="field-value">9.1%</span></div><div class="field-line"><span class="field-line-label">승인</span><span class="field-track"><span class="field-bar approval" style="width:78.4%"></span></span><span class="field-value">39.2%</span></div></div>
<div class="field-result-row inclusive"><div class="field-candidate">Joly</div><div class="field-line"><span class="field-line-label">공식</span><span class="field-track"><span class="field-bar" style="width:4.6%"></span></span><span class="field-value">2.3%</span></div><div class="field-line"><span class="field-line-label">승인</span><span class="field-track"><span class="field-bar approval" style="width:53.4%"></span></span><span class="field-value">26.7%</span></div></div>
</div>
</div>
<div class="field-takeaways">
<div class="field-thesis">평가식 투표는 “넓게 받아들여지는 후보”를 끌어올렸다.</div>
<div class="field-rule-card official"><h2>공식 1차 투표</h2><strong>Le Pen: 3위 → 승인투표 5위</strong><p>한 명만 고르는 규칙은 강한 지지층과 전략적 집중을 크게 반영한다.</p></div>
<div class="field-rule-card evaluative"><h2>승인·평가식 투표</h2><strong>Bayrou: 공식 5위 → 승인투표 3위</strong><p>여러 후보를 동시에 평가하면 넓은 수용 기반이 결과에 드러난다.</p></div>
<div class="field-metrics"><div class="field-metric inclusive"><span>포괄형 후보 신호</span><b>33% / 31%</b><em>Bayrou / Mélenchon: 공식으로 찍지 않은 유권자의 승인</em></div><div class="field-metric exclusive"><span>배타형 후보 신호</span><b>19% / 12%</b><em>Sarkozy / Le Pen: 공식으로 찍지 않은 유권자의 승인</em></div></div>
<div class="field-source">Source: Baujard, Gavrel, Igersheim, Laslier & Lebon, “Who's Favored by Evaluative Voting?”, Electoral Studies 34, 2014.</div>
</div>
</div>

<!--
승인투표와 갈등 완화의 관계를 직접적으로 보여주는 연구로 2014년에 발표된 프랑스 현장 실험을 소개할 수 있습니다.

Baujard와 동료들은 2012년 프랑스 대통령 선거 1차 투표와 동시에 실험을 시행했습니다.

참가자들은 실제 공식 투표와 별도로 승인투표와 평가식 투표용지를 작성했습니다.

중요한 것은 참가자 수가 아니라, 같은 유권자 선호를 다른 규칙으로 집계했을 때 어떤 후보 유형이 상대적으로 유리해졌는가입니다.

공식 투표에서 Marine Le Pen은 17.9%로 3위였지만, 승인투표에서는 27.4%의 승인으로 5위로 내려갑니다.

반대로 François Bayrou는 공식 투표에서 9.1%로 5위였지만 승인투표에서는 39.2%의 승인으로 3위가 됩니다.

Jean-Luc Mélenchon도 공식 득표는 11.1%였지만 승인한 유권자는 39.1%였습니다.

이 차이는 논문이 말하는 배타형 후보와 포괄형 후보의 차이를 보여줍니다.

Sarkozy와 Le Pen은 자기 지지층 바깥에서 받는 승인이 낮았습니다.

공식으로 그 후보를 찍지 않은 유권자 중 Sarkozy를 승인한 사람은 19%, Le Pen을 승인한 사람은 12%였습니다.

반면 Bayrou와 Mélenchon은 공식으로 찍히지 않아도 폭넓게 승인되었습니다.

공식으로 그 후보를 찍지 않은 유권자 중 Bayrou를 승인한 사람은 33%, Mélenchon을 승인한 사람은 31%였습니다.

따라서 논문의 결론은 평가식 투표가 포괄형 후보를 상대적으로 유리하게 만들고, 공식 2회 결선투표제는 배타형 후보와 전략적 집중을 상대적으로 키운다는 것입니다.

Source: Baujard et al., "Who's Favored by Evaluative Voting?", GATE Working Paper 1430 / Electoral Studies.
-->

---

<!-- _class: lead section-title -->

# 4-3. 평가식 투표

승인에서 점수와 등급으로

---

<!-- _class: dense -->

# 승인에서 점수로

$$
r_i(c)\in G,
\qquad
G=\{0,1,\ldots,K\}
$$

$$
S(c)=\sum_{i\in N}r_i(c)
$$

$$
W_{\mathrm{score}}
=
\operatorname*{arg\,max}_{c\in C}S(c)
$$

승인투표는 다음의 특수한 경우입니다.

$$
G=\{0,1\}
$$

<!--
영어의 rated voting, evaluative voting, graded voting은 하나의 고정된 투표제를 가리키기보다 후보마다 독립적인 평가를 부여하는 투표제들의 계열을 가리킵니다.

가장 단순한 형태가 점수투표입니다.

각 유권자는 모든 후보에게 0점부터 K점까지의 점수를 줄 수 있습니다.

같은 점수를 여러 후보에게 주어도 되고, 가장 좋아하는 후보에게만 최고점을 줄 필요도 없습니다.

각 후보가 받은 점수를 합산하고 총점이 가장 높은 후보를 당선시킵니다.

승인투표는 평가 척도가 0과 1 두 단계뿐인 점수투표로 볼 수 있습니다.

비승인=0, 승인=1입니다.

평가식 투표는 승인과 반대 사이의 중간 정도를 표현할 수 있다는 점에서 승인투표보다 더 많은 정보를 받습니다.
-->

---

<!-- _class: center -->

# 양극화된 후보와 합의형 후보

100명의 유권자가 0점부터 10점까지 평가한다고 가정합니다.

| 후보 | 평가 분포 | 평균 |
| --- | --- | ---: |
| 양극화된 사과 | 45명: 10점, 55명: 0점 | 4.5 |
| 합의형 당근 | 100명: 7점 | **7** |

$$
\text{당근 당선}
$$

> 소수의 열광보다  
> 다수의 안정적인 수용이 더 높은 점수를 얻을 수 있다.

<!--
평가식 투표가 갈등을 완화할 가능성도 승인투표와 비슷한 구조에서 나옵니다.

사과 후보를 유권자의 45%가 열렬하게 지지해 10점을 주지만, 나머지 55%는 강하게 반대해 0점을 준다고 하겠습니다.

평균 점수는 4.5점입니다.

당근 후보는 누구에게도 가장 열렬한 지지를 받지 못하지만, 모든 유권자가 비교적 괜찮은 후보라고 판단해 7점을 주었다고 하겠습니다.

당근의 평균은 7점입니다.

평가식 투표에서는 당근이 당선됩니다.

단순 다수대표제에서는 1순위 지지의 크기만 기록하지만, 평가식 투표에서는 지지의 폭과 반대의 강도도 결과에 나타날 수 있습니다.

다만 이 결과는 유권자들이 공통된 척도를 비슷한 의미로 사용하고, 자신의 평가를 전략적으로 과도하게 부풀리거나 낮추지 않는다는 가정에 영향을 받습니다.
-->

---

<!-- _class: scale-experiment -->

# 유권자의 선호는 단순 선형 변환하기 어렵다

<div class="scale-deck">
<div class="scale-ranks">
<div class="scale-eyebrow">Baujard et al. · European Journal of Political Economy · 2018</div>
<div class="scale-panel-title">같은 3단계 척도인데도 후보 순위가 달라졌다</div>
<div class="scale-columns">
<div class="scale-column"><div class="scale-name">{0, 1, 2}</div><div class="scale-rank-row"><span class="scale-rank">1</span><span class="scale-candidate">Hollande</span><span class="scale-score">.94</span></div><div class="scale-rank-row lift"><span class="scale-rank">2</span><span class="scale-candidate">Bayrou</span><span class="scale-score">.91</span></div><div class="scale-rank-row"><span class="scale-rank">3</span><span class="scale-candidate">Sarkozy</span><span class="scale-score">.85</span></div><div class="scale-rank-row"><span class="scale-rank">4</span><span class="scale-candidate">Mélenchon</span><span class="scale-score">.78</span></div><div class="scale-rank-row focus"><span class="scale-rank">5</span><span class="scale-candidate">Le Pen</span><span class="scale-score">.67</span></div></div>
<div class="scale-column"><div class="scale-name">{-1, 0, 1}</div><div class="scale-rank-row"><span class="scale-rank">1</span><span class="scale-candidate">Hollande</span><span class="scale-score">.14</span></div><div class="scale-rank-row lift"><span class="scale-rank">2</span><span class="scale-candidate">Bayrou</span><span class="scale-score">.11</span></div><div class="scale-rank-row lift"><span class="scale-rank">3</span><span class="scale-candidate">Mélenchon</span><span class="scale-score">.06</span></div><div class="scale-rank-row"><span class="scale-rank">4</span><span class="scale-candidate">Sarkozy</span><span class="scale-score">-.10</span></div><div class="scale-rank-row"><span class="scale-rank">5</span><span class="scale-candidate">Joly</span><span class="scale-score">-.17</span></div><div class="scale-rank-row focus"><span class="scale-rank">8</span><span class="scale-candidate">Le Pen</span><span class="scale-score">-.34</span></div></div>
</div>
<div class="scale-drop"><b>Le Pen 5위 → 8위</b><span>음수 점수는 단순히 0점을 한 칸 낮춘 것이 아니라, 명시적 거부를 표시하는 별도 언어처럼 작동했다.</span><b>{-1,0,1}</b></div>
</div>
<div class="scale-meaning">
<div class="scale-thesis">가장 중요한 차이는 “척도의 길이”보다 “음수와 중립점의 의미”였다.</div>
<div class="scale-map"><div class="scale-map-row"><div class="scale-map-name">{0,1,2}</div><div class="scale-ticks"><span class="scale-tick reject">0</span><span class="scale-tick neutral">1</span><span class="scale-tick support">2</span></div></div><div class="scale-map-row"><div class="scale-map-name">{-1,0,1}</div><div class="scale-ticks"><span class="scale-tick reject">-1</span><span class="scale-tick neutral">0</span><span class="scale-tick support">1</span></div></div></div>
<div class="scale-notes"><div class="scale-note"><strong>{0,1,2}의 0점</strong><p>잘 알지만 거부하는 후보와 잘 모르는 후보가 같은 낮은 점수에 섞인다.</p></div><div class="scale-note"><strong>{-1,0,1}의 0점</strong><p>-1이 생기면 0은 “반대”보다 “중립/모름”에 가까운 위치로 이동한다.</p></div><div class="scale-note"><strong>{0,...,20}의 긴 척도</strong><p>21단계라도 유권자는 0, 5, 10, 15, 20 같은 상징 점수에 많이 모였다.</p></div></div>
<div class="scale-symbolic"><b>66.71%</b><span>21단계 척도에서 0·5·10·15·20에 배정된 점수의 비율. 길게 만들어도 사람들은 의미 있는 눈금으로 압축해 사용했다.</span></div>
</div>
</div>

<!--
평가식 투표에서는 어떤 점수 척도를 제공하는지가 중요합니다.

Baujard와 동료들은 2012년 프랑스 대통령 선거 현장 실험 자료를 이용해 여러 평가 척도를 비교했습니다.

승인과 비승인의 두 단계인 {0,1}, 반대·중립·찬성으로 읽을 수 있는 {-1,0,1}, 같은 세 단계이지만 음수 표현이 없는 {0,1,2}, 그리고 0점부터 20점까지의 긴 척도를 비교했습니다.

핵심 결론은 척도들이 단순한 선형 변환 관계가 아니라는 것입니다.

수학적으로는 {-1,0,1}과 {0,1,2}가 1을 더한 관계처럼 보입니다.

하지만 실제 유권자는 두 척도를 다르게 사용했습니다.

{0,1,2}에서 0점은 거부와 무관심, 또는 잘 모름이 함께 들어갈 수 있습니다.

반면 {-1,0,1}에서는 -1점이 명시적 거부의 의미를 갖고, 0점은 중립이나 잘 모름에 가까운 의미로 이동합니다.

이 차이는 후보별로 다르게 작용했습니다.

논문 표 3에서 {0,1,2} 척도에서는 Le Pen이 5위였지만, {-1,0,1} 척도에서는 8위로 내려갑니다.

Sarkozy도 3위에서 4위로 내려가고, Mélenchon은 4위에서 3위로 올라갑니다.

즉 음수 점수는 배타형 후보에게 특히 불리하게 작동했습니다.

긴 척도의 효과도 확인했습니다.

0점부터 20점까지의 21단계 척도를 제공해도 유권자들은 0, 5, 10, 15, 20 같은 상징적인 점수에 많이 몰렸습니다.

논문은 21단계 척도에서 이 상징 점수들이 전체 점수의 66.71%를 차지했다고 보고합니다.

따라서 연구진의 결론은 길이 자체보다 음수 점수의 존재와 중립점의 처리가 더 중요하다는 것입니다.

마지막으로 연구진은 음수가 없는 평가식 투표는 정확한 척도 길이가 조금 달라져도 비교적 견고할 수 있다고 제안합니다.

Source: Baujard et al., "How Voters Use Grade Scales in Evaluative Voting", European Journal of Political Economy, 2018.
-->

---

<!-- _class: mj-explainer -->

# 다수판정법은 "가운데 등급"으로 후보를 평가한다

<div class="mj-deck">
<div class="mj-board">
<div class="mj-eyebrow">Balinski & Laraki · PNAS · 2007</div>
<div class="mj-panel-title">순위표 대신, 모든 후보를 같은 등급 언어로 평가한다</div>
<div class="mj-scale"><span>최우수</span><span>우수</span><span>양호</span><span>보통</span><span>미흡</span><span>거부</span></div>
<div class="mj-candidates">
<div class="mj-row"><div class="mj-name">사과</div><div class="mj-grades"><span class="mj-grade high">최우수</span><span class="mj-grade high">최우수</span><span class="mj-grade median mid">보통</span><span class="mj-grade low">거부</span><span class="mj-grade low">거부</span></div><div class="mj-result"><span>다수등급</span><b>보통</b></div></div>
<div class="mj-row win"><div class="mj-name">바나나</div><div class="mj-grades"><span class="mj-grade high">우수</span><span class="mj-grade median high">양호</span><span class="mj-grade high">양호</span><span class="mj-grade mid">보통</span><span class="mj-grade low">미흡</span></div><div class="mj-result"><span>다수등급</span><b>양호</b></div></div>
<div class="mj-row"><div class="mj-name">당근</div><div class="mj-grades"><span class="mj-grade high">양호</span><span class="mj-grade high">양호</span><span class="mj-grade median mid">보통</span><span class="mj-grade mid">보통</span><span class="mj-grade low">미흡</span></div><div class="mj-result"><span>다수등급</span><b>보통</b></div></div>
</div>
<div class="mj-rule-line"><b>가운데 등급</b><span>각 후보의 등급을 높은 순서로 놓고 중앙을 본다. 이 등급 이상을 준 사람이 절반 이상이고, 이하를 준 사람도 절반 이상이다.</span></div>
</div>
<div class="mj-meaning">
<div class="mj-thesis">"평가의 언어를 바꾸자"</div>
<div class="mj-card"><h2>입력의 변화</h2><strong>후보를 서로 줄 세우지 않는다.</strong><p>유권자는 후보마다 독립적으로 등급을 준다. 같은 등급을 여러 후보에게 줄 수 있다.</p></div>
<div class="mj-card"><h2>집계의 변화</h2><strong>점수를 더하지 않는다.</strong><p>평균 대신 다수등급을 사용해 소수의 극단값이 결과를 과도하게 움직이는 일을 줄인다.</p></div>
<div class="mj-card"><h2>동점 처리</h2><strong>같은 다수등급이면 그 등급을 제거하며 다시 비교한다.</strong><p>중앙 등급이 같아도 주변 분포가 더 좋은 후보를 앞세운다.</p></div>
<div class="mj-source">Source: Balinski & Laraki, “A Theory of Measuring, Electing, and Ranking”, PNAS 104(21), 2007.</div>
</div>
</div>

<!--
평가를 받더라도 그 평가를 반드시 평균이나 총점으로 집계할 필요는 없습니다.

Balinski와 Laraki는 2007년 논문에서 다수판정법, Majority Judgment를 제안했습니다.

유권자는 후보마다 최우수, 우수, 양호, 보통, 미흡, 거부와 같은 공통 언어의 등급을 부여합니다.

중요한 것은 후보들을 서로 줄 세우는 것이 아니라, 각각의 후보가 어느 정도의 평가를 받을 만한지를 같은 언어로 판단한다는 점입니다.

각 후보가 받은 등급을 좋은 등급부터 나쁜 등급까지 정렬합니다.

유권자가 홀수 명이면 정중앙에 있는 등급이 그 후보의 다수등급입니다.

예시에서 사과는 두 명에게 최우수를 받지만 두 명에게 거부를 받습니다.

가운데 등급은 보통입니다.

바나나는 누구에게도 최우수를 받지 못하지만 가운데 등급이 양호입니다.

따라서 다수판정법에서는 바나나가 사과보다 앞섭니다.

이 방식은 점수를 더하거나 평균을 내는 방식이 아닙니다.

Balinski와 Laraki는 다수등급이 공통 언어로 주어진 평가를 모으는 방식이며, 전통적인 순위 집계 모델과 다른 출발점에 있다고 봅니다.

이는 애로의 순위 집계 모형에서 더 좋은 사회후생함수를 찾아낸 것이 아닙니다.

입력을 순위에서 등급으로 바꾸어 애로 정리의 전제 밖으로 이동한 것입니다.

물론 다수판정법도 전략적 평가, 공통 등급 언어의 의미, 동점 처리 방식 등에 관한 별도의 논쟁이 있습니다.

따라서 평가식 투표가 불가능성 문제를 자동으로 없애는 것이 아니라, 어떤 정보를 받을지와 어떤 대가를 감수할지를 바꾸는 것입니다.

Source: Balinski and Laraki, "A Theory of Measuring, Electing, and Ranking", PNAS, 2007.
-->

---

<!-- _class: fargo-case -->

# 현실에서 규칙을 바꾸다

<div class="fargo-grid">
<div class="fargo-numbers">
<div class="fargo-number"><div class="fargo-year">2018 이전</div><div class="fargo-value">18%<br />16.5%</div><div class="fargo-caption">9명 출마, 2석<br />단일표 방식의 당선 득표율</div></div>
<div class="fargo-number mark"><div class="fargo-year">2024</div><div class="fargo-value">46%<br />44.5%</div><div class="fargo-caption">7명 출마, 2석<br />승인투표의 당선 승인율</div></div>
<div class="fargo-number"><div class="fargo-year">2026</div><div class="fargo-value">17.64%<br />17.16%</div><div class="fargo-caption">8명 출마, 2석<br />단일표 방식으로 복귀</div></div>
</div>
<div>
<div class="fargo-timeline">
<div class="fargo-event"><b>2018</b><span>주민투표로 승인투표 도입<br />찬성 30,092 / 반대 17,282</span></div>
<div class="fargo-event"><b>2020-24</b><span>시장·시의원 선거에서 세 차례 시행</span></div>
<div class="fargo-event"><b>2025</b><span>HB 1297: 승인투표·순위선택투표 금지</span></div>
<div class="fargo-event"><b>2026</b><span>파고 선거는 다시 한 후보만 선택</span></div>
</div>
<div class="fargo-source">Sources: AP, ND Legislative testimony, Valley News Live.</div>
</div>
</div>

<!--
현실에서 규칙을 바꾼 사례로 파고를 보겠습니다.

미국 노스다코타 주의 파고에서는 2018년 시의원 선거에서 두 자리를 놓고 아홉 명이 출마했습니다.

당선자들이 얻은 표는 전체 투표의 18%와 16.5%였습니다.

후보가 많을수록 소수의 지지만 받은 후보가 당선될 가능성이 커졌습니다.

파고시의 선거·도시 거버넌스 태스크포스는 예비선거, 즉석결선투표, 비례투표, 승인투표를 비교한 뒤 시장과 시의원 선거에 승인투표를 도입하자고 권고했습니다.

파고 시민들은 2018년 11월 6일 주민투표를 통해 승인투표 도입을 결정했습니다.

찬성 30,092표, 반대 17,282표였습니다. 찬성률은 63.52%였습니다.

이후 유권자는 당선되어도 괜찮다고 판단하는 후보를 모두 선택할 수 있게 되었습니다.

가장 많은 유권자에게 승인받은 후보가 당선됩니다.

투표 장비와 개표 소프트웨어는 기존 시스템을 그대로 사용할 수 있었습니다.

파고는 2020년, 2022년, 2024년 시장과 시의원 선거에서 승인투표를 시행했습니다.

2024년 시의원 선거에는 일곱 명이 출마했습니다. 두 당선자는 각각 전체 유권자의 46%와 44.5%에게 승인받았습니다.

2025년 노스다코타주가 승인투표와 순위선택투표를 금지하면서 파고의 승인투표는 세 차례의 선거를 끝으로 종료되었습니다.

파고는 2026년 6월 선거에서 다시 한 후보만 선택하는 방식을 사용했습니다.

그 선거에서 시의원 두 당선자의 득표율은 17.64%와 17.16%였습니다.

다수대표제의 득표율은 유권자의 첫 번째 선택을 측정합니다.

승인율은 해당 후보의 당선을 받아들일 수 있다고 표시한 유권자의 범위를 측정합니다.

이 구조에서는 모든 경쟁자를 적으로 규정하는 전략의 비용이 커질 수 있습니다.

상대 후보를 지지하는 유권자에게서 받을 수 있었던 추가 승인을 잃기 때문입니다.

Sources: AP, North Dakota Legislative Assembly testimony, Valley News Live.
-->

---

<!-- _class: value-choice -->

# 넓은 수용성을 어떻게 평가할 것인가

<div class="value-grid">
<div class="value-panel accept"><div class="value-label">승인투표 지지자</div><strong>여러 집단이 받아들일 수 있는 대표</strong><p>수용 가능성이 넓은 후보를 더 좋은 결과로 본다.</p></div>
<div class="value-panel force"><div class="value-label">승인투표 비판자</div><strong>반대가 크더라도 뚜렷한 입장을 가진 대표</strong><p>타협적 후보가 과대평가될 수 있다고 본다.</p></div>
</div>
<div class="value-bottom"><b>쟁점</b><span>계산 방식의 이해 차이만이 아니라, 대표자를 평가하는 기준의 차이다.</span></div>

<!--
넓은 수용성을 어떻게 평가할 것인지는 별도의 정치적 판단입니다.

승인투표 금지 법안을 추진한 벤 코펠먼 노스다코타주 하원의원은 이 제도가 강한 입장을 가진 후보보다 여러 집단이 무난하게 받아들이는 후보에게 유리하다고 비판했습니다.

승인투표 지지자들은 같은 특성을 폭넓은 대표성이라고 평가했습니다.

양측의 차이는 계산 방식에 대한 이해보다 대표자의 기준에 있습니다.

한쪽은 여러 집단이 수용할 수 있는 후보를 선호합니다.

다른 쪽은 반대가 크더라도 뚜렷한 입장을 제시하는 후보의 가치를 높게 평가합니다.

이에 더해, 노스다코타주 정부는 지방자치단체마다 다른 투표 방식을 사용하면 선거 관리, 장비 운영, 유권자 안내가 복잡해질 수 있다고 주장했습니다.

2023년 주의회는 승인투표 금지 법안을 통과시켰지만, 더그 버검 당시 주지사는 지방자치권 침해를 이유로 거부권을 행사했습니다.

2025년에는 승인투표와 순위선택투표를 금지하는 HB 1297이 다시 통과되어 주지사의 서명을 받았습니다.
-->

---

<!-- _class: error-ledger -->

# 모든 제도는 서로 다른 오류를 허용한다

<div class="error-table">
<div class="error-cell error-head">제도</div><div class="error-cell error-head">줄이는 문제</div><div class="error-cell error-head">감수하는 문제</div>
<div class="error-cell error-rule">다수대표제</div><div class="error-cell">투표와 개표의 부담</div><div class="error-cell">표 분산, 전략투표, 낮은 득표율의 당선</div>
<div class="error-cell error-rule">즉석결선투표제</div><div class="error-cell">차순위 선호의 손실</div><div class="error-cell">탈락 순서 의존, 비단조성, 개표 복잡성</div>
<div class="error-cell error-rule">드 보르다 투표제</div><div class="error-cell">상위 선택만 보는 손실</div><div class="error-cell">주요 후보 밖의 순위가 결과를 흔듦</div>
<div class="error-cell error-rule">승인투표</div><div class="error-cell">수용 가능한 후보의 누락</div><div class="error-cell">지지 강도 압축, 승인 기준의 전략화</div>
<div class="error-cell error-rule">점수투표</div><div class="error-cell">지지 강도 정보의 손실</div><div class="error-cell">척도 해석, 극단 점수 사용</div>
</div>

<!--
좋은 투표제를 판단하려면 먼저 좋은 결과의 기준을 정해야 합니다.

수학을 사용해 투표제의 성질을 구분하고 결과를 예측할 수 있습니다.

단조성의 충족 여부, 제3후보의 영향, 콩도르세 승자의 존재 조건, 전략투표의 유인, 특정한 선호 분포에서의 결과를 분석할 수 있습니다.

그러나 어떤 오류를 더 중대하게 취급할지는 별도의 판단입니다.

다수대표제는 투표와 개표가 쉽습니다.

대신 표의 분산, 전략적 투표, 낮은 득표율의 당선을 허용할 수 있습니다.

즉석결선투표제는 차순위 선호를 활용합니다.

대신 탈락 순서에 따른 비단조성과 개표 복잡성을 감수합니다.

드 보르다 투표제는 전체 순위를 반영합니다.

대신 경쟁력이 낮은 후보의 위치가 주요 후보의 결과를 바꿀 수 있습니다.

승인투표는 여러 후보에 대한 수용 가능성을 기록합니다.

대신 지지 강도를 승인과 비승인으로 압축하고, 승인 기준을 전략적으로 선택하게 만듭니다.

점수투표는 지지의 강도를 더 세밀하게 수집합니다.

대신 점수 척도의 해석과 극단적 점수 사용에 영향을 받습니다.

수학은 선택지와 비용을 정리할 뿐, 결국 우리는 정치를 통해 그 사이의 우선순위를 정해야 합니다.
-->

---

<!-- _class: math-possibility -->

# 민주주의의 수학적 가능성

<div class="possibility-main"><strong>정치는 규칙에 의한 게임임과 동시에,<br />게임을 지배하는 규칙입니다.</strong></div>
<div class="possibility-steps">
<div class="possibility-step"><b>분석</b>각 제도의 실패 방식을 구분한다.</div>
<div class="possibility-step"><b>판단</b>사회가 더 중대하게 보는 오류를 정한다.</div>
<div class="possibility-step"><b>선택</b>그 우선순위에 맞춰 규칙을 바꾼다.</div>
</div>

<!--
민주주의의 수학적 가능성으로 마무리하겠습니다.

2000년 미국 대통령 선거에서는 가장 선호하는 후보에게 투표한 행동이 가장 반대하는 후보의 당선 가능성을 높일 수 있었습니다.

이후 살펴본 투표제들은 각각 특정한 문제를 줄이고 다른 문제를 허용했습니다.

애로의 불가능성 정리는 모든 요구를 동시에 만족하는 사회후생함수가 존재할 수 없음을 보여주었습니다.

파고 시민들은 낮은 지지율의 당선을 줄이기 위해 승인투표를 선택했습니다.

주의회는 다른 기준을 적용해 이를 금지했습니다.

후보를 선택하는 과정과 후보를 선택하는 규칙 모두 정치적 결정에 포함됩니다.

정치는 규칙에 의한 게임임과 동시에, 게임을 지배하는 규칙입니다.

완벽한 투표제는 수학적으로 기대하기 어렵습니다.

그러나 각 제도의 실패 방식을 분석하고, 사회가 우선하는 기준에 따라 규칙을 선택할 수 있습니다.

민주주의의 수학적 가능성은 이 선택 능력에 있습니다.
-->
