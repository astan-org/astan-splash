// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { password } = await req.json();

//   if (password === process.env.SITE_PASSWORD) {
//     const res = NextResponse.json({ success: true });
    
//     // Set secure HTTP-only cookie for 1 day
//     res.cookies.set({
//       name: "site-password",
//       value: password,
//       path: "/",
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 60 * 60 * 24, // 1 day
//     });

//     return res;
//   }

//   return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
// }
