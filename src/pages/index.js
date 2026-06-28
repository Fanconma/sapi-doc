import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';



/* ── 主页面 ── */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="首页"
      description="Minecraft Script API 中文教程 —— 从入门到精通"
    >
      {/* Hero */}
      <section className={styles.hero}>
        <div >

        </div>

        <h1 className={styles.heroTitle}>
          Script API
          <br />
          <span className={styles.heroTitleAccent}>开发教程</span>
        </h1>

        <p className={styles.heroSubtitle}>
          系统学习 Minecraft Script API，
          <br className={styles.heroBreak} />
          用 JavaScript 创造属于你的游戏内容。
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.btnPrimary} to="/docs/intro">
            开始学习
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link className={styles.btnSecondary}
            to="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/"
            target="_blank">
            官方文档
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </div>

        {/* 代码预览装饰 */}
        <div className={styles.heroCode}>
          <div className={styles.heroCodeBar}>
            <span /><span /><span />
            <p className={styles.heroCodeTitle}>main.js</p>
          </div>
          <pre className={styles.heroCodePre}><code>{`import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe(({ player }) => {
  player.sendMessage(
    "§aWelcome, §e" + player.name + "§a!"
  );
});`}</code></pre>
        </div>

        {/* 背景装饰圆 */}
        <div className={styles.heroBg1} />
        <div className={styles.heroBg2} />
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>准备好开始了吗？</h2>
          <p className={styles.ctaSubtitle}>
            从第一个 Hello World 脚本开始，踏上 Script API 的开发之旅。
          </p>
          <Link className={styles.btnPrimary} to="/docs/intro">
            立即开始
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
}