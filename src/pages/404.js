import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './404.module.css';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <Layout title="404 - 页面未找到">
      <div className={`${styles.container} ${mounted ? styles.visible : ''}`}>

        {/* 背景装饰 */}
        <div className={styles.bg1} />
        <div className={styles.bg2} />

        {/* 主体内容 */}
        <div className={styles.content}>

          {/* 像素 Creeper */}
          <div className={styles.creeper}>
            <svg viewBox="0 0 64 64" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.creeperSvg}>
              {/* 头部 */}
              <rect x="8" y="2" width="48" height="40" rx="2" fill="#5d8a3c" />
              {/* 眼睛 */}
              <rect x="14" y="12" width="12" height="12" rx="1" fill="#1a1a1a" />
              <rect x="38" y="12" width="12" height="12" rx="1" fill="#1a1a1a" />
              {/* 嘴巴 */}
              <rect x="22" y="26" width="20" height="4"  rx="1" fill="#1a1a1a" />
              <rect x="22" y="30" width="6"  height="8"  rx="1" fill="#1a1a1a" />
              <rect x="36" y="30" width="6"  height="8"  rx="1" fill="#1a1a1a" />
              {/* 身体 */}
              <rect x="16" y="44" width="32" height="18" rx="2" fill="#4a7a2e" />
              {/* 腿 */}
              <rect x="8"  y="62" width="18" height="2" rx="1" fill="#4a7a2e" />
              <rect x="38" y="62" width="18" height="2" rx="1" fill="#4a7a2e" />
            </svg>
          </div>

          {/* 404 数字 */}
          <div className={styles.code404}>404</div>

          {/* 标题 */}
          <h1 className={styles.title}>迷路了？</h1>

          {/* 描述 */}
          <p className={styles.desc}>
            就像在 Minecraft 里没有地图一样，
            <br />
            你访问的页面好像不存在。
          </p>

          {/* 提示框 */}
          <div className={styles.tip}>
            <span className={styles.tipIcon}>💡</span>
            <span>
              也许这个页面已被移动、删除，或者链接有误。
            </span>
          </div>

          {/* 操作按钮 */}
          <div className={styles.actions}>
            <Link className={styles.btnPrimary} to="/">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              回到首页
            </Link>
            <Link className={styles.btnSecondary} to="/docs/intro">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              浏览教程
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}