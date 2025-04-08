"use client";

import { useRef, useEffect } from "react";
import { animate } from "animejs";

export default function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      animate(ref.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: "easeOutQuad",
      });
    }
  }, []);

  return (
    <section className="max-w-3xl mx-auto text-center mb-12 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">You Only Live Once</h1>
      <p className="text-base mb-6">ただの技術大好き専門学生</p>

      <div className="border-l-2 border-gray-600 pl-4 text-left space-y-6">
        {/* 2025 - 現時点 */}
        <div>
          <p className="text-sm text-gray-400 mb-1">2025 - 現時点</p>
          <h3 className="font-semibold text-gray-100">Go・Rustの学習</h3>
          <p className="text-sm">
            アルバイトをしていく中でバックエンド技術に魅了され、GoとRust学習を頑張っています
          </p>
        </div>

        {/* 2023 ~ 現在 */}
        <div>
          <p className="text-sm text-gray-400 mb-1">2023 ~ 現在</p>
          <h3 className="font-semibold text-gray-100">
            秋田くりひろげ株式会社 アルバイト
          </h3>
          <p className="text-sm">
            JavaやC#を使ってGUIツール実装などを行いました
          </p>
        </div>

        {/* 2022 */}
        <div>
          <p className="text-sm text-gray-400 mb-1">2022</p>
          <h3 className="font-semibold text-gray-100">
            東京デザインテクノロジーセンター専門学校 入学
          </h3>
          <p className="text-sm">プログラミングの基礎を学習</p>
        </div>
      </div>
    </section>
  );
}
