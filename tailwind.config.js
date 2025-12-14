/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // 色のクラス（よく使われるもの）
    {
      pattern:
        /^(text|bg|border)-(red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan)-(100|200|300|400|500|600|700|800|900)$/,
    },
    // サイズのクラス
    {
      pattern:
        /^(w|h|p|m|px|py|mx|my|mt|mb|ml|mr|pt|pb|pl|pr)-(0|1|2|3|4|5|6|7|8|9|10|11|12|16|20|24|32|40|48|56|64|72|80|96)$/,
    },
    // テキストサイズ
    {
      pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)$/,
    },
    // フォント太さ
    "font-thin",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
    // 角丸
    {
      pattern: /^rounded(-none|-sm|-md|-lg|-xl|-2xl|-3xl|-full)?$/,
    },
    // 影
    {
      pattern: /^shadow(-sm|-md|-lg|-xl|-2xl|-inner|-none)?$/,
    },
    // Flexbox
    "flex",
    "flex-col",
    "flex-row",
    "items-center",
    "items-start",
    "items-end",
    "justify-center",
    "justify-start",
    "justify-end",
    "justify-between",
    "justify-around",
    // その他よく使われるクラス
    "block",
    "inline",
    "inline-block",
    "hidden",
    "relative",
    "absolute",
    "fixed",
    "sticky",
    "text-center",
    "text-left",
    "text-right",
    "text-justify",
    "uppercase",
    "lowercase",
    "capitalize",
    "normal-case",
    "underline",
    "line-through",
    "no-underline",
    "italic",
    "not-italic",
    "truncate",
    "overflow-hidden",
    "overflow-visible",
    "overflow-scroll",
    "cursor-pointer",
    "cursor-default",
    "transition",
    "transform",
    // ホバー効果
    {
      pattern:
        /^hover:(bg|text|border)-(red|blue|green|yellow|purple|pink|indigo|gray|orange|teal|cyan)-(100|200|300|400|500|600|700|800|900)$/,
    },
    "hover:scale-105",
    "hover:scale-110",
    "hover:shadow-lg",
    "hover:shadow-xl",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#03a9f4",
        gray: {
          700: "#03a9f4", // text-gray-700を#03a9f4に変更
        },
      },
    },
  },
  plugins: [],
};
