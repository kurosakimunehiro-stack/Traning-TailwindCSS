import { useState, useEffect } from "react";

const TailwindLearningApp = () => {
  const [level, setLevel] = useState("beginner"); // 'beginner', 'intermediate', 'advanced', 'typography', or 'practical'
  const [currentLesson, setCurrentLesson] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  const beginnerLessons = [
    {
      title: "1. テキストの色を変える",
      description: "青色のテキストを作ってみましょう",
      hint: "text-blue-500",
      solution: "text-blue-500",
      preview: (classes) => <div className={classes}>こんにちは</div>,
    },
    {
      title: "2. 文字の背景色を設定する",
      description: "文字に黄色のハイライト（背景色）をつけてみましょう",
      hint: "bg-yellow-200",
      solution: "bg-yellow-200",
      preview: (classes) => (
        <div>
          <span className={classes}>この文字にハイライト</span>
        </div>
      ),
    },
    {
      title: "3. パディングを追加する",
      description: "全方向に大きめのパディング(8)を追加",
      hint: "p-8",
      solution: "p-8",
      preview: (classes) => (
        <div className={`bg-blue-100 ${classes}`}>パディング</div>
      ),
    },
    {
      title: "4. マージンを追加する",
      description: "上下に大きめのマージン(8)を追加",
      hint: "my-8",
      solution: "my-8",
      preview: (classes) => (
        <div className={`bg-green-100 p-4 ${classes}`}>マージン</div>
      ),
    },
    {
      title: "5. テキストのサイズ",
      description: "大きなテキストサイズ(2xl)に変更",
      hint: "text-2xl",
      solution: "text-2xl",
      preview: (classes) => <div className={classes}>大きい文字</div>,
    },
    {
      title: "6. フォントの太さ",
      description: "テキストを太字にする",
      hint: "font-bold",
      solution: "font-bold",
      preview: (classes) => <div className={classes}>太字</div>,
    },
    {
      title: "7. 角を丸くする",
      description: "ボックスの角を丸く(lg)する",
      hint: "rounded-lg",
      solution: "rounded-lg",
      preview: (classes) => (
        <div className={`bg-purple-200 p-4 ${classes}`}>角丸</div>
      ),
    },
    {
      title: "8. 影をつける",
      description: "ボックスに大きめの影(lg)を追加する",
      hint: "shadow-lg",
      solution: "shadow-lg",
      preview: (classes) => (
        <div className={`bg-white p-4 ${classes}`}>影付き</div>
      ),
    },
    {
      title: "9. 中央揃え",
      description: "テキストを中央揃えにする",
      hint: "text-center",
      solution: "text-center",
      preview: (classes) => <div className={classes}>中央揃え</div>,
    },
    {
      title: "10. 幅を設定する",
      description: "要素の幅を64(256px)に設定",
      hint: "w-64",
      solution: "w-64",
      preview: (classes) => (
        <div className={`bg-indigo-200 p-4 ${classes}`}>幅64</div>
      ),
    },
    {
      title: "11. 高さを設定する",
      description: "要素の高さを32(128px)に設定",
      hint: "h-32",
      solution: "h-32",
      preview: (classes) => (
        <div
          className={`bg-pink-200 ${classes} flex items-center justify-center`}
        >
          高さ32
        </div>
      ),
    },
    {
      title: "12. ボーダーを追加",
      description: "2pxの境界線を追加",
      hint: "border-2",
      solution: "border-2",
      preview: (classes) => <div className={`p-4 ${classes}`}>ボーダー</div>,
    },
    {
      title: "13. ボーダーの色",
      description: "赤い境界線の色を設定",
      hint: "border-red-500",
      solution: "border-red-500",
      preview: (classes) => (
        <div className={`p-4 border-2 ${classes}`}>赤いボーダー</div>
      ),
    },
    {
      title: "14. Flexboxで横並び",
      description: "Flexboxを有効にする",
      hint: "flex",
      solution: "flex",
      preview: (classes) => (
        <div className={classes}>
          <span className="bg-blue-200 p-2">A</span>
          <span className="bg-green-200 p-2">B</span>
          <span className="bg-red-200 p-2">C</span>
        </div>
      ),
    },
    {
      title: "15. Flexで中央配置",
      description: "要素を画面中央に配置(flex、縦横中央)",
      hint: "flex items-center justify-center",
      solution: "flex items-center justify-center",
      preview: (classes) => (
        <div className={`h-32 bg-gray-100 ${classes}`}>
          <span className="bg-blue-500 text-white px-4 py-2 rounded">中央</span>
        </div>
      ),
    },
    {
      title: "16. 横方向のパディング",
      description: "左右のパディングのみ6を追加",
      hint: "px-6",
      solution: "px-6",
      preview: (classes) => (
        <div className={`bg-teal-200 ${classes}`}>横パディング</div>
      ),
    },
    {
      title: "17. 縦方向のマージン",
      description: "上下のマージンのみ4を追加",
      hint: "my-4",
      solution: "my-4",
      preview: (classes) => (
        <div className={`bg-orange-200 p-2 ${classes}`}>縦マージン</div>
      ),
    },
    {
      title: "18. テキストの配置",
      description: "テキストを右揃えにする",
      hint: "text-right",
      solution: "text-right",
      preview: (classes) => <div className={classes}>右揃え</div>,
    },
    {
      title: "19. 最大幅を設定",
      description: "最大幅をmd(448px)に制限",
      hint: "max-w-md",
      solution: "max-w-md",
      preview: (classes) => (
        <div className={`bg-cyan-200 p-4 ${classes}`}>最大幅制限</div>
      ),
    },
    {
      title: "20. 複数のクラスを組み合わせ",
      description: "背景色(青100)、パディング(4)、角丸(md)、影(md)を全て適用",
      hint: "bg-blue-100 p-4 rounded-md shadow-md",
      solution: "bg-blue-100 p-4 rounded-md shadow-md",
      preview: (classes) => <div className={classes}>組み合わせ</div>,
    },
  ];

  const intermediateLessons = [
    {
      title: "1. Flexの縦並び",
      description: "Flexboxで要素を縦に並べる",
      hint: "flex flex-col",
      solution: "flex flex-col",
      preview: (classes) => (
        <div className={classes}>
          <span className="bg-blue-200 p-2">A</span>
          <span className="bg-green-200 p-2">B</span>
          <span className="bg-red-200 p-2">C</span>
        </div>
      ),
    },
    {
      title: "2. Flexの間隔",
      description: "Flex要素間にギャップ(4)を追加",
      hint: "flex gap-4",
      solution: "flex gap-4",
      preview: (classes) => (
        <div className={classes}>
          <span className="bg-blue-200 p-2">A</span>
          <span className="bg-green-200 p-2">B</span>
          <span className="bg-red-200 p-2">C</span>
        </div>
      ),
    },
    {
      title: "3. グリッドレイアウト",
      description: "3列のグリッドを作成",
      hint: "grid grid-cols-3",
      solution: "grid grid-cols-3",
      preview: (classes) => (
        <div className={`${classes} gap-2`}>
          <div className="bg-blue-200 p-2">1</div>
          <div className="bg-green-200 p-2">2</div>
          <div className="bg-red-200 p-2">3</div>
          <div className="bg-yellow-200 p-2">4</div>
          <div className="bg-purple-200 p-2">5</div>
          <div className="bg-pink-200 p-2">6</div>
        </div>
      ),
    },
    {
      title: "4. グリッドの間隔",
      description: "グリッド要素間にギャップ(3)を追加",
      hint: "grid grid-cols-2 gap-3",
      solution: "grid grid-cols-2 gap-3",
      preview: (classes) => (
        <div className={classes}>
          <div className="bg-blue-200 p-2">1</div>
          <div className="bg-green-200 p-2">2</div>
          <div className="bg-red-200 p-2">3</div>
          <div className="bg-yellow-200 p-2">4</div>
        </div>
      ),
    },
    {
      title: "5. ホバー時の背景色",
      description: "マウスを乗せたら背景を緑500に変更",
      hint: "bg-blue-500 hover:bg-green-500",
      solution: "bg-blue-500 hover:bg-green-500",
      preview: (classes) => (
        <div className={`p-4 text-white ${classes}`}>マウスを乗せてみて</div>
      ),
    },
    {
      title: "6. ホバー時の拡大",
      description: "マウスを乗せたら1.05倍に拡大",
      hint: "hover:scale-105",
      solution: "hover:scale-105",
      preview: (classes) => (
        <div className={`bg-purple-500 p-4 text-white transition ${classes}`}>
          ホバーで拡大
        </div>
      ),
    },
    {
      title: "7. トランジション効果",
      description: "変化をスムーズにするトランジションを追加",
      hint: "transition",
      solution: "transition",
      preview: (classes) => (
        <div
          className={`bg-blue-500 hover:bg-red-500 p-4 text-white ${classes}`}
        >
          スムーズな変化
        </div>
      ),
    },
    {
      title: "8. 透明度を設定",
      description: "透明度を50%に設定",
      hint: "opacity-50",
      solution: "opacity-50",
      preview: (classes) => (
        <div className={`bg-blue-500 p-4 text-white ${classes}`}>半透明</div>
      ),
    },
    {
      title: "9. カーソルの形を変更",
      description: "カーソルをポインター(指の形)に変更",
      hint: "cursor-pointer",
      solution: "cursor-pointer",
      preview: (classes) => (
        <div className={`bg-indigo-500 p-4 text-white ${classes}`}>
          マウスを乗せてみて
        </div>
      ),
    },
    {
      title: "10. オーバーフローを隠す",
      description: "はみ出た内容を隠す",
      hint: "overflow-hidden",
      solution: "overflow-hidden",
      preview: (classes) => (
        <div className={`bg-gray-200 p-4 h-20 ${classes}`}>
          <div className="h-40 bg-blue-300">
            長いコンテンツ長いコンテンツ長いコンテンツ長いコンテンツ
          </div>
        </div>
      ),
    },
    {
      title: "11. 絶対配置",
      description: "要素を絶対配置にする",
      hint: "absolute",
      solution: "absolute",
      preview: (classes) => (
        <div className="relative h-32 bg-gray-100">
          <div className={`${classes} top-4 left-4 bg-red-500 p-2 text-white`}>
            絶対配置
          </div>
        </div>
      ),
    },
    {
      title: "12. 相対配置",
      description: "親要素を相対配置にする",
      hint: "relative",
      solution: "relative",
      preview: (classes) => (
        <div className={`${classes} h-32 bg-gray-100`}>
          <div className="absolute top-4 left-4 bg-blue-500 p-2 text-white">
            子要素
          </div>
        </div>
      ),
    },
    {
      title: "13. z-indexを設定",
      description: "重なり順を10に設定",
      hint: "z-10",
      solution: "z-10",
      preview: (classes) => (
        <div className="relative h-32">
          <div className="absolute top-4 left-4 bg-blue-500 p-4 text-white">
            下
          </div>
          <div
            className={`absolute top-8 left-8 bg-red-500 p-4 text-white ${classes}`}
          >
            上
          </div>
        </div>
      ),
    },
    {
      title: "14. Flexで均等配置",
      description: "要素を両端と中央に均等配置",
      hint: "flex justify-between",
      solution: "flex justify-between",
      preview: (classes) => (
        <div className={classes}>
          <span className="bg-blue-200 p-2">左</span>
          <span className="bg-green-200 p-2">中央</span>
          <span className="bg-red-200 p-2">右</span>
        </div>
      ),
    },
    {
      title: "15. Flexで要素を伸ばす",
      description: "要素を残りスペースいっぱいに伸ばす",
      hint: "flex-1",
      solution: "flex-1",
      preview: (classes) => (
        <div className="flex gap-2">
          <div className="bg-blue-200 p-2">固定</div>
          <div className={`bg-green-200 p-2 ${classes}`}>伸びる</div>
          <div className="bg-red-200 p-2">固定</div>
        </div>
      ),
    },
    {
      title: "16. テキストを省略",
      description: "はみ出たテキストを...で省略",
      hint: "truncate",
      solution: "truncate",
      preview: (classes) => (
        <div className={`w-32 ${classes}`}>
          とても長いテキストがここに入ります
        </div>
      ),
    },
    {
      title: "17. 角を部分的に丸く",
      description: "左上の角のみ丸く(lg)する",
      hint: "rounded-tl-lg",
      solution: "rounded-tl-lg",
      preview: (classes) => (
        <div className={`bg-purple-300 p-4 ${classes}`}>左上だけ角丸</div>
      ),
    },
    {
      title: "18. ボーダーの位置指定",
      description: "下側のみボーダー(2px)を追加",
      hint: "border-b-2",
      solution: "border-b-2",
      preview: (classes) => <div className={`p-4 ${classes}`}>下線</div>,
    },
    {
      title: "19. 縦横比を維持",
      description: "16:9の縦横比を設定",
      hint: "aspect-video",
      solution: "aspect-video",
      preview: (classes) => (
        <div className={`bg-blue-200 w-48 ${classes}`}>16:9</div>
      ),
    },
    {
      title: "20. 複雑な組み合わせ",
      description: "グリッド(3列)、ギャップ(4)、ホバーで拡大、トランジション",
      hint: "grid grid-cols-3 gap-4 hover:scale-105 transition",
      solution: "grid grid-cols-3 gap-4 hover:scale-105 transition",
      preview: (classes) => (
        <div className={classes}>
          <div className="bg-blue-200 p-2">1</div>
          <div className="bg-green-200 p-2">2</div>
          <div className="bg-red-200 p-2">3</div>
        </div>
      ),
    },
  ];

  const advancedLessons = [
    {
      title: "1. レスポンシブ - スマホで非表示",
      description: "スマホ(デフォルト)では非表示、タブレット以上(md)で表示",
      hint: "hidden md:block",
      solution: "hidden md:block",
      preview: (classes) => (
        <div className={`bg-blue-200 p-4 ${classes}`}>タブレット以上で表示</div>
      ),
    },
    {
      title: "2. レスポンシブ - 画面サイズで幅変更",
      description: "スマホは全幅、タブレット(md)以上は半分の幅",
      hint: "w-full md:w-1/2",
      solution: "w-full md:w-1/2",
      preview: (classes) => (
        <div className={`bg-green-200 p-4 ${classes}`}>レスポンシブ幅</div>
      ),
    },
    {
      title: "3. ダークモード対応",
      description: "ダークモードで背景を灰色800に変更",
      hint: "bg-white dark:bg-gray-800",
      solution: "bg-white dark:bg-gray-800",
      preview: (classes) => (
        <div className={`p-4 ${classes}`}>ダークモード対応</div>
      ),
    },
    {
      title: "4. ダークモードでテキスト色変更",
      description: "ライトモードは黒、ダークモードは白に",
      hint: "text-gray-900 dark:text-white",
      solution: "text-gray-900 dark:text-white",
      preview: (classes) => (
        <div className={`bg-gray-100 dark:bg-gray-800 p-4 ${classes}`}>
          テキスト色変更
        </div>
      ),
    },
    {
      title: "5. フォーカス時のスタイル",
      description: "フォーカス時に青いリングを表示",
      hint: "focus:ring-2 focus:ring-blue-500",
      solution: "focus:ring-2 focus:ring-blue-500",
      preview: (classes) => (
        <input
          type="text"
          placeholder="クリックしてみて"
          className={`border-2 p-2 rounded ${classes}`}
        />
      ),
    },
    {
      title: "6. グループホバー",
      description: "親要素のホバーで子要素の色を変更",
      hint: "group-hover:text-blue-500",
      solution: "group-hover:text-blue-500",
      preview: (classes) => (
        <div className="group bg-gray-100 p-4 hover:bg-gray-200 cursor-pointer">
          <span className={classes}>親にホバーで変化</span>
        </div>
      ),
    },
    {
      title: "7. アニメーション - バウンス",
      description: "バウンスアニメーションを追加",
      hint: "animate-bounce",
      solution: "animate-bounce",
      preview: (classes) => (
        <div className={`bg-purple-500 text-white p-4 inline-block ${classes}`}>
          バウンス
        </div>
      ),
    },
    {
      title: "8. アニメーション - スピン",
      description: "回転アニメーションを追加",
      hint: "animate-spin",
      solution: "animate-spin",
      preview: (classes) => (
        <div
          className={`w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full ${classes}`}
        ></div>
      ),
    },
    {
      title: "9. トランスフォーム - 回転",
      description: "45度回転させる",
      hint: "rotate-45",
      solution: "rotate-45",
      preview: (classes) => (
        <div className={`bg-red-500 w-16 h-16 ${classes}`}></div>
      ),
    },
    {
      title: "10. トランスフォーム - 傾斜",
      description: "X軸方向に12度傾斜",
      hint: "skew-x-12",
      solution: "skew-x-12",
      preview: (classes) => (
        <div className={`bg-green-500 p-4 inline-block ${classes}`}>傾斜</div>
      ),
    },
    {
      title: "11. フィルター - ぼかし",
      description: "ぼかし効果を適用",
      hint: "blur-sm",
      solution: "blur-sm",
      preview: (classes) => (
        <div className={`bg-blue-500 text-white p-4 ${classes}`}>
          ぼかし効果
        </div>
      ),
    },
    {
      title: "12. フィルター - グレースケール",
      description: "グレースケール効果を適用",
      hint: "grayscale",
      solution: "grayscale",
      preview: (classes) => (
        <div
          className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 ${classes}`}
        >
          グレースケール
        </div>
      ),
    },
    {
      title: "13. スクロール動作",
      description: "スムーズスクロールを有効化",
      hint: "scroll-smooth",
      solution: "scroll-smooth",
      preview: (classes) => (
        <div className={`h-32 overflow-y-scroll ${classes}`}>
          <div className="h-96 bg-gradient-to-b from-blue-200 to-purple-200 p-4">
            スクロールしてみて
          </div>
        </div>
      ),
    },
    {
      title: "14. スナップスクロール",
      description: "スクロール時に要素にスナップ",
      hint: "snap-y snap-mandatory",
      solution: "snap-y snap-mandatory",
      preview: (classes) => (
        <div className={`h-32 overflow-y-scroll ${classes}`}>
          <div className="snap-start h-32 bg-blue-200 flex items-center justify-center">
            1
          </div>
          <div className="snap-start h-32 bg-green-200 flex items-center justify-center">
            2
          </div>
          <div className="snap-start h-32 bg-red-200 flex items-center justify-center">
            3
          </div>
        </div>
      ),
    },
    {
      title: "15. 背景グラデーション",
      description: "青から紫へのグラデーション",
      hint: "bg-gradient-to-r from-blue-500 to-purple-500",
      solution: "bg-gradient-to-r from-blue-500 to-purple-500",
      preview: (classes) => (
        <div className={`p-4 text-white ${classes}`}>グラデーション</div>
      ),
    },
    {
      title: "16. リング効果",
      description: "青いリングを追加",
      hint: "ring-4 ring-blue-500",
      solution: "ring-4 ring-blue-500",
      preview: (classes) => (
        <div className={`bg-white p-4 ${classes}`}>リング効果</div>
      ),
    },
    {
      title: "17. 分割線",
      description: "Flex子要素間に分割線を追加",
      hint: "divide-y divide-gray-300",
      solution: "divide-y divide-gray-300",
      preview: (classes) => (
        <div className={`flex flex-col ${classes}`}>
          <div className="p-2">項目1</div>
          <div className="p-2">項目2</div>
          <div className="p-2">項目3</div>
        </div>
      ),
    },
    {
      title: "18. スペース配置",
      description: "Flex子要素間に縦スペース(4)を追加",
      hint: "space-y-4",
      solution: "space-y-4",
      preview: (classes) => (
        <div className={`flex flex-col ${classes}`}>
          <div className="bg-blue-200 p-2">A</div>
          <div className="bg-green-200 p-2">B</div>
          <div className="bg-red-200 p-2">C</div>
        </div>
      ),
    },
    {
      title: "19. 複雑なレスポンシブ",
      description: "スマホで縦並び、タブレット(md)以上で横並び",
      hint: "flex flex-col md:flex-row",
      solution: "flex flex-col md:flex-row",
      preview: (classes) => (
        <div className={`${classes} gap-2`}>
          <div className="bg-blue-200 p-2 flex-1">A</div>
          <div className="bg-green-200 p-2 flex-1">B</div>
          <div className="bg-red-200 p-2 flex-1">C</div>
        </div>
      ),
    },
    {
      title: "20. 総合応用",
      description: "グラデーション背景、ホバーで拡大、トランジション、影、角丸",
      hint: "bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110 transition shadow-lg rounded-xl",
      solution:
        "bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110 transition shadow-lg rounded-xl",
      preview: (classes) => (
        <div className={`p-6 text-white font-bold ${classes}`}>総合応用</div>
      ),
    },
  ];

  const typographyLessons = [
    {
      title: "1. 行間を設定",
      description: "行間をゆったり(relaxed)にする",
      hint: "leading-relaxed",
      solution: "leading-relaxed",
      preview: (classes) => (
        <div className={classes}>
          これは複数行のテキストです。行間を調整することで読みやすさが大きく変わります。適切な行間設定は重要です。
        </div>
      ),
    },
    {
      title: "2. 字間を設定",
      description: "字間を広く(wide)する",
      hint: "tracking-wide",
      solution: "tracking-wide",
      preview: (classes) => <div className={classes}>字間が広がります</div>,
    },
    {
      title: "3. 行数を制限",
      description: "テキストを2行に制限して省略",
      hint: "line-clamp-2",
      solution: "line-clamp-2",
      preview: (classes) => (
        <div className={classes}>
          これは長いテキストです。行数制限を設定すると、指定した行数を超える部分は省略記号で表示されます。これは非常に便利な機能です。
        </div>
      ),
    },
    {
      title: "4. テキストの装飾",
      description: "テキストに下線を引く",
      hint: "underline",
      solution: "underline",
      preview: (classes) => <div className={classes}>下線付きテキスト</div>,
    },
    {
      title: "5. テキストの変換",
      description: "テキストを大文字に変換",
      hint: "uppercase",
      solution: "uppercase",
      preview: (classes) => <div className={classes}>uppercase text</div>,
    },
    {
      title: "6. フォントファミリー",
      description: "モノスペースフォントに変更",
      hint: "font-mono",
      solution: "font-mono",
      preview: (classes) => <div className={classes}>Monospace Font 123</div>,
    },
    {
      title: "7. テキストの折り返し",
      description: "長い単語を強制的に折り返す",
      hint: "break-all",
      solution: "break-all",
      preview: (classes) => (
        <div className={`w-32 ${classes}`}>verylongwordwithoutspaces</div>
      ),
    },
    {
      title: "8. 空白の扱い",
      description: "改行や空白を保持する",
      hint: "whitespace-pre-line",
      solution: "whitespace-pre-line",
      preview: (classes) => (
        <div className={classes}>{"1行目\n2行目\n3行目"}</div>
      ),
    },
    {
      title: "9. テキストのインデント",
      description: "最初の行をインデント(8)する",
      hint: "indent-8",
      solution: "indent-8",
      preview: (classes) => (
        <div className={classes}>
          これは段落の最初の行です。インデントが設定されています。
        </div>
      ),
    },
    {
      title: "10. プレースホルダーのスタイル",
      description: "プレースホルダーを灰色400にする",
      hint: "placeholder:text-gray-400",
      solution: "placeholder:text-gray-400",
      preview: (classes) => (
        <input
          type="text"
          placeholder="プレースホルダー"
          className={`border-2 p-2 rounded ${classes}`}
        />
      ),
    },
    {
      title: "11. 最初の文字を大きく",
      description: "最初の文字を2倍のサイズ、太字にする",
      hint: "first-letter:text-2xl first-letter:font-bold",
      solution: "first-letter:text-2xl first-letter:font-bold",
      preview: (classes) => (
        <p className={classes}>
          これは段落のテキストです。最初の文字だけ大きくなります。
        </p>
      ),
    },
    {
      title: "12. リストのスタイル",
      description: "リストマーカーをディスク型にする",
      hint: "list-disc",
      solution: "list-disc",
      preview: (classes) => (
        <ul className={`${classes} ml-6`}>
          <li>項目1</li>
          <li>項目2</li>
          <li>項目3</li>
        </ul>
      ),
    },
    {
      title: "13. リストの位置",
      description: "リストマーカーを内側に配置",
      hint: "list-inside",
      solution: "list-inside",
      preview: (classes) => (
        <ul className={`list-disc ${classes}`}>
          <li>項目1</li>
          <li>項目2</li>
        </ul>
      ),
    },
    {
      title: "14. テキストの影",
      description: "テキストに影を追加",
      hint: "drop-shadow-lg",
      solution: "drop-shadow-lg",
      preview: (classes) => (
        <div className={`text-2xl font-bold ${classes}`}>影付きテキスト</div>
      ),
    },
    {
      title: "15. 縦書きテキスト",
      description: "テキストを縦書きにする",
      hint: "writing-mode-vertical-rl",
      solution: "writing-mode-vertical-rl",
      preview: (classes) => (
        <div
          className={`h-32 ${classes}`}
          style={{ writingMode: "vertical-rl" }}
        >
          縦書き
        </div>
      ),
    },
    {
      title: "16. テキストの均等配置",
      description: "テキストを両端揃えにする",
      hint: "text-justify",
      solution: "text-justify",
      preview: (classes) => (
        <div className={`w-64 ${classes}`}>
          これは長めのテキストです。両端揃えにすることで、左右の端が揃って見やすくなります。
        </div>
      ),
    },
    {
      title: "17. 行の高さを数値指定",
      description: "行の高さを10(2.5rem)に設定",
      hint: "leading-10",
      solution: "leading-10",
      preview: (classes) => (
        <div className={classes}>
          行の高さが広い
          <br />
          2行目のテキスト
        </div>
      ),
    },
    {
      title: "18. 斜体テキスト",
      description: "テキストを斜体にする",
      hint: "italic",
      solution: "italic",
      preview: (classes) => (
        <div className={classes}>Italic Text イタリック</div>
      ),
    },
    {
      title: "19. 取り消し線",
      description: "テキストに取り消し線を引く",
      hint: "line-through",
      solution: "line-through",
      preview: (classes) => <div className={classes}>取り消されたテキスト</div>,
    },
    {
      title: "20. 複雑な文字組み",
      description: "大きめ、太字、行間広く、字間広く、中央揃え",
      hint: "text-xl font-bold leading-relaxed tracking-wide text-center",
      solution: "text-xl font-bold leading-relaxed tracking-wide text-center",
      preview: (classes) => (
        <div className={classes}>美しい文字組みのテキスト</div>
      ),
    },
  ];

  const practicalLessons = [
    {
      title: "1. ボタンの基本",
      description: "青背景、白文字、パディング、角丸のボタン",
      hint: "bg-blue-500 text-white px-6 py-2 rounded-lg",
      solution: "bg-blue-500 text-white px-6 py-2 rounded-lg",
      preview: (classes) => <button className={classes}>ボタン</button>,
    },
    {
      title: "2. ホバー付きボタン",
      description: "ホバーで濃い青、カーソルがポインター、トランジション",
      hint: "bg-blue-500 hover:bg-blue-700 cursor-pointer transition",
      solution: "bg-blue-500 hover:bg-blue-700 cursor-pointer transition",
      preview: (classes) => (
        <button className={`text-white px-6 py-2 rounded-lg ${classes}`}>
          ホバーしてみて
        </button>
      ),
    },
    {
      title: "3. カードの基本",
      description: "白背景、パディング(6)、角丸(xl)、影(lg)",
      hint: "bg-white p-6 rounded-xl shadow-lg",
      solution: "bg-white p-6 rounded-xl shadow-lg",
      preview: (classes) => <div className={classes}>カードコンテンツ</div>,
    },
    {
      title: "4. ホバーで浮くカード",
      description: "ホバーで影を大きく、少し拡大、トランジション",
      hint: "hover:shadow-2xl hover:scale-105 transition",
      solution: "hover:shadow-2xl hover:scale-105 transition",
      preview: (classes) => (
        <div className={`bg-white p-6 rounded-xl shadow-lg ${classes}`}>
          ホバーで浮く
        </div>
      ),
    },
    {
      title: "5. 入力フィールド",
      description: "ボーダー(2)、パディング(3)、角丸(lg)、幅いっぱい",
      hint: "border-2 p-3 rounded-lg w-full",
      solution: "border-2 p-3 rounded-lg w-full",
      preview: (classes) => (
        <input type="text" placeholder="入力してください" className={classes} />
      ),
    },
    {
      title: "6. フォーカス付き入力",
      description: "フォーカス時に青ボーダー、アウトラインなし",
      hint: "focus:border-blue-500 focus:outline-none",
      solution: "focus:border-blue-500 focus:outline-none",
      preview: (classes) => (
        <input
          type="text"
          placeholder="クリックしてみて"
          className={`border-2 p-3 rounded-lg ${classes}`}
        />
      ),
    },
    {
      title: "7. ナビゲーションバー",
      description: "Flex、要素間スペース(8)、パディング(4)、白背景、影",
      hint: "flex space-x-8 p-4 bg-white shadow-md",
      solution: "flex space-x-8 p-4 bg-white shadow-md",
      preview: (classes) => (
        <nav className={classes}>
          <a href="#" className="text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-600">
            About
          </a>
          <a href="#" className="text-gray-600">
            Contact
          </a>
        </nav>
      ),
    },
    {
      title: "8. レスポンシブグリッド",
      description: "スマホ1列、タブレット(md)2列、PC(lg)3列",
      hint: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      solution: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      preview: (classes) => (
        <div className={`${classes} gap-4`}>
          <div className="bg-blue-200 p-4">1</div>
          <div className="bg-green-200 p-4">2</div>
          <div className="bg-red-200 p-4">3</div>
        </div>
      ),
    },
    {
      title: "9. センタリングコンテナ",
      description: "最大幅(4xl)、左右マージン自動、左右パディング(4)",
      hint: "max-w-4xl mx-auto px-4",
      solution: "max-w-4xl mx-auto px-4",
      preview: (classes) => (
        <div className={`${classes} bg-gray-100 p-4`}>
          センタリングされたコンテンツ
        </div>
      ),
    },
    {
      title: "10. バッジ",
      description: "小さい文字、太字、赤背景、白文字、パディング小、角丸",
      hint: "text-xs font-bold bg-red-500 text-white px-2 py-1 rounded",
      solution: "text-xs font-bold bg-red-500 text-white px-2 py-1 rounded",
      preview: (classes) => <span className={classes}>NEW</span>,
    },
    {
      title: "11. アバター画像",
      description: "円形、幅高さ(16)、オブジェクトカバー",
      hint: "rounded-full w-16 h-16 object-cover",
      solution: "rounded-full w-16 h-16 object-cover",
      preview: (classes) => (
        <div
          className={`${classes} bg-gradient-to-r from-blue-400 to-purple-400`}
        ></div>
      ),
    },
    {
      title: "12. トグルスイッチ風",
      description: "相対配置、グレー背景、幅(14)、高さ(8)、角丸(full)",
      hint: "relative bg-gray-300 w-14 h-8 rounded-full",
      solution: "relative bg-gray-300 w-14 h-8 rounded-full",
      preview: (classes) => (
        <div className={classes}>
          <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full"></div>
        </div>
      ),
    },
    {
      title: "13. プログレスバー",
      description: "グレー背景、角丸(full)、高さ(2)、オーバーフロー隠す",
      hint: "bg-gray-200 rounded-full h-2 overflow-hidden",
      solution: "bg-gray-200 rounded-full h-2 overflow-hidden",
      preview: (classes) => (
        <div className={classes}>
          <div className="bg-blue-500 h-full w-3/4"></div>
        </div>
      ),
    },
    {
      title: "14. タグ/チップ",
      description: "インラインブロック、青背景薄、青文字、パディング小、角丸",
      hint: "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full",
      solution: "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full",
      preview: (classes) => <span className={classes}>React</span>,
    },
    {
      title: "15. ドロップシャドウ付き画像",
      description: "角丸(lg)、影(xl)、オブジェクトカバー",
      hint: "rounded-lg shadow-xl object-cover",
      solution: "rounded-lg shadow-xl object-cover",
      preview: (classes) => (
        <div
          className={`${classes} w-48 h-32 bg-gradient-to-r from-purple-400 to-pink-400`}
        ></div>
      ),
    },
    {
      title: "16. フッター",
      description: "グレー背景、白文字、中央揃え、パディング(8)",
      hint: "bg-gray-800 text-white text-center p-8",
      solution: "bg-gray-800 text-white text-center p-8",
      preview: (classes) => <footer className={classes}>© 2024 My Site</footer>,
    },
    {
      title: "17. モーダルオーバーレイ",
      description: "固定配置、インセット0、黒背景、透明度50%",
      hint: "fixed inset-0 bg-black bg-opacity-50",
      solution: "fixed inset-0 bg-black bg-opacity-50",
      preview: (classes) => (
        <div className="relative h-32 overflow-hidden">
          <div
            className={`${classes.replace(
              "fixed",
              "absolute"
            )} flex items-center justify-center`}
          >
            <div className="bg-white p-4 rounded">モーダル</div>
          </div>
        </div>
      ),
    },
    {
      title: "18. ステッカー風ボタン",
      description: "グラデーション、影大、角丸(xl)、パディング、白文字、太字",
      hint: "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-xl px-8 py-3 text-white font-bold",
      solution:
        "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-xl px-8 py-3 text-white font-bold",
      preview: (classes) => <button className={classes}>今すぐ始める</button>,
    },
    {
      title: "19. 区切り線",
      description: "高さ(px)、グレー背景、幅いっぱい、上下マージン(4)",
      hint: "h-px bg-gray-300 w-full my-4",
      solution: "h-px bg-gray-300 w-full my-4",
      preview: (classes) => (
        <div>
          <p>上のコンテンツ</p>
          <div className={classes}></div>
          <p>下のコンテンツ</p>
        </div>
      ),
    },
    {
      title: "20. ヒーローセクション",
      description:
        "Flex、縦並び、中央配置、高さ画面、グラデーション背景、白文字",
      hint: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      solution:
        "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      preview: (classes) => (
        <div className={classes}>
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p>素晴らしいサイトへようこそ</p>
        </div>
      ),
    },
  ];

  const lessons =
    level === "beginner"
      ? beginnerLessons
      : level === "intermediate"
      ? intermediateLessons
      : level === "advanced"
      ? advancedLessons
      : level === "typography"
      ? typographyLessons
      : practicalLessons;
  const lesson = lessons[currentLesson];

  // userInputが変更されたときにプレビューを強制更新
  useEffect(() => {
    setPreviewKey((prev) => prev + 1);
  }, [userInput]);

  const checkAnswer = () => {
    return userInput.trim() === lesson.solution;
  };

  const isCorrect = checkAnswer();

  const switchLevel = (newLevel) => {
    setLevel(newLevel);
    setCurrentLesson(0);
    setUserInput("");
    setShowHint(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-4">
          TailwindCSS繰り返し訓練
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => switchLevel("beginner")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              level === "beginner"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            入門編
          </button>
          <button
            onClick={() => switchLevel("intermediate")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              level === "intermediate"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            中級編
          </button>
          <button
            onClick={() => switchLevel("advanced")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              level === "advanced"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            応用編
          </button>
          <button
            onClick={() => switchLevel("typography")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              level === "typography"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            文字組編
          </button>
          <button
            onClick={() => switchLevel("practical")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              level === "practical"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            実践編
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{lesson.title}</h2>
            <span className="text-lg font-semibold text-indigo-600">
              {currentLesson + 1} / {lessons.length}
            </span>
          </div>

          <p className="text-lg text-amber-800 mb-6 font-bold">
            {lesson.description}
          </p>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              プレビュー:
            </h3>
            <div className="bg-white border border-gray-300 rounded p-4 min-h-24 flex items-center justify-center">
              <div
                key={previewKey}
                className="w-full flex items-center justify-center"
              >
                {lesson.preview(userInput)}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-amber-800 mb-2">
              TailwindCSSクラスを入力してください:
            </label>
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={showHint ? "" : "例: text-blue-500"}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-xl relative z-10 bg-transparent"
                autoComplete="off"
                spellCheck="true"
                inputMode="latin"
                lang="en"
              />
              {showHint && (
                <div className="absolute left-4 top-3 text-xl text-gray-300 pointer-events-none z-0">
                  {lesson.hint}
                </div>
              )}
            </div>
          </div>

          {isCorrect && (
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mb-4">
              <p className="text-green-800 font-semibold">
                ✓ 正解です！次の課題に進みましょう
              </p>
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={() => setShowHint(true)}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
              >
                ヒントを見る
              </button>
              <button
                onClick={() => {
                  setUserInput("");
                  setShowHint(false);
                }}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              >
                再挑戦
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setCurrentLesson(Math.max(0, currentLesson - 1));
                  setUserInput("");
                  setShowHint(false);
                }}
                disabled={currentLesson === 0}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                前へ
              </button>
              <button
                onClick={() => {
                  setCurrentLesson(
                    Math.min(lessons.length - 1, currentLesson + 1)
                  );
                  setUserInput("");
                  setShowHint(false);
                }}
                disabled={currentLesson === lessons.length - 1}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次へ
              </button>
            </div>
          </div>
        </div>

        {/* 学習ガイドセクション */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 mb-6 border border-blue-100">
          <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
            📓 TailwindCSS 学習ガイド
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                🎯 基本ルール
              </h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>
                  • <strong>数値の基本:</strong> 指示がない場合は{" "}
                  <code className="bg-gray-100 px-1 rounded">500</code> を使用
                </li>
                <li>
                  • <strong>色の濃さ:</strong> 100（薄い）〜 900（濃い）
                </li>
                <li>
                  • <strong>サイズ:</strong> 1 = 0.25rem（4px）
                </li>
                <li>
                  • <strong>クラス形式:</strong> プロパティ-色-濃さ
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                💡 よく使う値
              </h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>
                  • <strong>色:</strong> blue, red, green, yellow, gray
                </li>
                <li>
                  • <strong>濃さ:</strong> 100, 200, 300, 400, 500, 600, 700,
                  800
                </li>
                <li>
                  • <strong>サイズ:</strong> 2, 4, 6, 8, 12, 16, 20, 24, 32
                </li>
                <li>
                  • <strong>テキスト:</strong> sm, base, lg, xl, 2xl, 3xl
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-sm text-amber-800">
              <strong>💡 コツ:</strong>
              入力中にリアルタイムでプレビューが更新されます。
              数値を変えて（例：500→300→800）色の変化を確認してみましょう！
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            💡{" "}
            {level === "beginner"
              ? "入門編で学ぶ概念"
              : level === "intermediate"
              ? "中級編で学ぶ概念"
              : level === "advanced"
              ? "応用編で学ぶ概念"
              : level === "typography"
              ? "文字組編で学ぶ概念"
              : "実践編で学ぶ概念"}
          </h3>
          {level === "beginner" ? (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-semibold text-blue-800 mb-2">
                  📚 入門編の学習内容
                </h4>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li>
                    <strong>色:</strong> text-色-濃さ（文字色）,
                    bg-色-濃さ（背景色）
                  </li>
                  <li>
                    <strong>スペース:</strong>{" "}
                    p/m/px/py/mx/my-数字（パディング・マージン）
                  </li>
                  <li>
                    <strong>サイズ:</strong> w-数字, h-数字,
                    max-w-サイズ（幅・高さ）
                  </li>
                  <li>
                    <strong>テキスト:</strong> text-サイズ, text-配置, font-太さ
                  </li>
                  <li>
                    <strong>装飾:</strong> rounded-サイズ, shadow-サイズ,
                    border-太さ
                  </li>
                  <li>
                    <strong>レイアウト:</strong> flex, items-center,
                    justify-center
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✅ 入門編のルール
                </h4>
                <ul className="space-y-1 text-amber-800 text-sm">
                  <li>
                    • 色の濃さは <strong>500</strong>{" "}
                    がデフォルト（例：text-blue-500）
                  </li>
                  <li>• 数値は4の倍数が基本（4, 8, 12, 16, 20, 24...）</li>
                  <li>
                    • 色名：blue, red, green, yellow, purple, pink, gray など
                  </li>
                  <li>• 試しに数値を変えて違いを確認してみましょう！</li>
                </ul>
              </div>
            </div>
          ) : level === "intermediate" ? (
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-purple-800 mb-2">
                  📚 中級編の学習内容
                </h4>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li>
                    <strong>Flexbox応用:</strong> flex-col, gap,
                    justify-between, flex-1
                  </li>
                  <li>
                    <strong>Grid:</strong> grid, grid-cols-数字, gap
                  </li>
                  <li>
                    <strong>インタラクション:</strong> hover:, transition,
                    cursor-
                  </li>
                  <li>
                    <strong>配置:</strong> absolute, relative, z-数字
                  </li>
                  <li>
                    <strong>表示制御:</strong> overflow-, opacity-, truncate
                  </li>
                  <li>
                    <strong>詳細装飾:</strong> aspect-, rounded-位置-,
                    border-位置-
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <h4 className="font-semibold text-orange-800 mb-2">
                  ⚡ 中級編のポイント
                </h4>
                <ul className="space-y-1 text-amber-800 text-sm">
                  <li>
                    • <strong>hover:</strong> マウスを乗せたときの効果
                  </li>
                  <li>
                    • <strong>transition</strong> でスムーズな変化を実現
                  </li>
                  <li>
                    • <strong>grid-cols-3</strong> で3列グリッド
                  </li>
                  <li>• 複数のクラスを組み合わせて使用</li>
                </ul>
              </div>
            </div>
          ) : level === "advanced" ? (
            <ul className="space-y-2 text-amber-800">
              <li>
                <strong>レスポンシブ:</strong> sm:, md:, lg:
                など画面サイズ別スタイル
              </li>
              <li>
                <strong>ダークモード:</strong> dark: で暗い画面対応
              </li>
              <li>
                <strong>状態:</strong> focus:, group-hover: など条件付きスタイル
              </li>
              <li>
                <strong>アニメーション:</strong> animate-bounce, animate-spin
              </li>
              <li>
                <strong>トランスフォーム:</strong> rotate-, scale-, skew-
              </li>
              <li>
                <strong>フィルター:</strong> blur-, grayscale, brightness-
              </li>
              <li>
                <strong>スクロール:</strong> scroll-smooth, snap-
              </li>
              <li>
                <strong>グラデーション:</strong> bg-gradient-to-方向 from- to-
              </li>
              <li>
                <strong>高度なレイアウト:</strong> divide-, space-, ring-
              </li>
            </ul>
          ) : level === "typography" ? (
            <ul className="space-y-2 text-amber-800">
              <li>
                <strong>行間:</strong> leading-tight/normal/relaxed/loose
              </li>
              <li>
                <strong>字間:</strong> tracking-tight/normal/wide/wider
              </li>
              <li>
                <strong>行数制限:</strong> line-clamp-数字
              </li>
              <li>
                <strong>装飾:</strong> underline, line-through, uppercase
              </li>
              <li>
                <strong>フォント:</strong> font-sans/serif/mono
              </li>
              <li>
                <strong>折り返し:</strong> break-all, break-words
              </li>
              <li>
                <strong>空白:</strong> whitespace-nowrap/pre/pre-line
              </li>
              <li>
                <strong>インデント:</strong> indent-数字
              </li>
              <li>
                <strong>疑似要素:</strong> first-letter:, placeholder:
              </li>
              <li>
                <strong>リスト:</strong> list-disc/decimal, list-inside/outside
              </li>
            </ul>
          ) : (
            <ul className="space-y-2 text-amber-800">
              <li>
                <strong>ボタン:</strong> 基本形、ホバー効果、トランジション
              </li>
              <li>
                <strong>カード:</strong> 影、角丸、ホバーで浮く効果
              </li>
              <li>
                <strong>フォーム:</strong> 入力欄、フォーカス効果
              </li>
              <li>
                <strong>ナビゲーション:</strong> Flexレイアウト、スペース配分
              </li>
              <li>
                <strong>レスポンシブグリッド:</strong> 画面サイズで列数変更
              </li>
              <li>
                <strong>コンテナ:</strong> max-width、中央配置
              </li>
              <li>
                <strong>UI部品:</strong>{" "}
                バッジ、アバター、トグル、プログレスバー
              </li>
              <li>
                <strong>タグ/チップ:</strong> 小さなラベル要素
              </li>
              <li>
                <strong>レイアウト:</strong>{" "}
                フッター、モーダル、ヒーローセクション
              </li>
              <li>
                <strong>総合:</strong> 実際のWebサイトで使う実践的なパターン
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TailwindLearningApp;
