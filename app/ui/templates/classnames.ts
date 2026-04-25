import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const m = montserrat.className;
const r = roboto.className;

export const btn = {
  primary: `${r} inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold shadow-sm hover:bg-zinc-700 active:scale-[0.98] active:bg-zinc-800 transition-all duration-150 cursor-pointer select-none`,
  secondary: `${r} inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 hover:border-zinc-400 active:scale-[0.98] transition-all duration-150 cursor-pointer select-none`,
  ghost: `${r} inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200 active:scale-[0.98] transition-all duration-150 cursor-pointer select-none`,
  danger: `${r} inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-500 active:scale-[0.98] active:bg-red-700 transition-all duration-150 cursor-pointer select-none`,
};

export const navLink = {
  base: `${m} relative text-zinc-400 font-medium text-sm uppercase tracking-widest transition-colors duration-150 hover:text-zinc-100 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-zinc-400 after:transition-all after:duration-200 hover:after:w-full`,
  active: `${m} relative text-zinc-100 font-semibold text-sm uppercase tracking-widest after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-zinc-100`,
  brand: `${m} flex items-center gap-2 text-base font-medium uppercase tracking-widest text-zinc-100 hover:text-white transition-colors duration-150`,
};

const fieldBase = `${r} w-full rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed`;

export const input = {
  field: `${fieldBase} px-3.5 py-2.5`,
  textarea: `${fieldBase} px-3.5 py-3 resize-none leading-7`,
  select: `${fieldBase} px-3.5 py-2.5 appearance-none cursor-pointer`,
  checkbox: `${r} w-4 h-4 rounded border-zinc-300 text-zinc-900 accent-zinc-900 cursor-pointer disabled:opacity-50`,
  radio: `${r} w-4 h-4 border-zinc-300 text-zinc-900 accent-zinc-900 cursor-pointer disabled:opacity-50`,
  label: `${m} block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5`,
  wrapper: "flex flex-col",
  row: "flex items-center gap-2",
  error: `${r} flex items-center gap-1.5 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5`,
  fieldError: `${r} text-xs text-red-500 font-medium mt-1`,
  hint: `${r} text-xs text-zinc-400 mt-1`,
};

export const link = {
  base: `${r} text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline transition-colors duration-150`,
  subtle: `${r} text-sm text-zinc-400 hover:text-zinc-600 underline-offset-4 hover:underline transition-colors duration-150`,
  back: `${r} inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150 group`,
};

export const text = {
  body: `${r} text-zinc-600 leading-7 text-[0.9375rem]`,
  lead: `${r} text-zinc-500 text-base leading-relaxed`,
  muted: `${r} text-sm text-zinc-400 leading-snug`,
  small: `${r} text-xs text-zinc-500`,
  caption: `${r} text-[11px] font-medium text-zinc-400 uppercase tracking-wider`,
  strong: `${r} font-semibold text-zinc-900`,
};

export const title = {
  display: `${m} text-4xl font-extrabold text-zinc-900 tracking-tighter leading-tight`,
  page: `${m} text-3xl font-bold text-zinc-900 tracking-tight leading-snug`,
  section: `${m} text-2xl font-bold text-zinc-900 tracking-tight`,
  card: `${m} text-base font-semibold text-zinc-900 tracking-tight`,
};

export const tag = {
  primary: `${r} inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-100`,
  secondary: `${r} inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200`,
  muted: `${r} inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-50 text-zinc-400 border border-zinc-200`,
};
