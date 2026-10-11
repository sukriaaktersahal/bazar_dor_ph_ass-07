// bengali.ts file details
const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// converting number to bengali number
export function toBengaliNumber(num: number | string): string {
  return num
    .toString()
    .split("")
    .map((d) => (/\d/.test(d) ? bengaliDigits[parseInt(d)] : d))
    .join("");
}

// formatting Bengali Price
export function formatBengaliPrice(num: number): string {
  const formatted = num.toLocaleString("en-IN");
  return toBengaliNumber(formatted);
}

// BanglaDate
export function getBanglaDate(): string {
  const now = new Date();
  const months = [ "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",];
  const day = toBengaliNumber(now.getDate());
  const month = months[now.getMonth()];
  const year = toBengaliNumber(now.getFullYear());
  return `${day} ${month}, ${year}`;
}

// format Change
export function formatChange(change: number): string {
  if (change > 0) return `▲ ${toBengaliNumber(change.toFixed(1))}%`;
  if (change < 0) return `▼ ${toBengaliNumber(Math.abs(change).toFixed(1))}%`;
  return `— ${toBengaliNumber("0.0")}%`;
}








 

