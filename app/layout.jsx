import Header from "@/components/common/Header";
import "./globals.css";
("alirezaabdolmaleki600 ,VSTBBkqrGZ8adU6U");
export const metadata = {
  title: "اسپیس ، فضای اشتراکی",
  description:
    "اسپیس فضایی برای پیدا کردن فضای کار و میز اشتراکی در سرار ایران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-whiteColor text-blackColor">
        <Header />
        <div className="w-full max-w-[1100px] p-5 mx-auto">{children}</div>
      </body>
    </html>
  );
}
