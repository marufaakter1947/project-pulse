// // "use client";
// // import { useState } from "react";

// // export default function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// // //   const handleLogin = async () => {
// // //     const res = await fetch("/api/auth/login", {
// // //       method: "POST",
// // //       body: JSON.stringify({ email, password }),
// // //     });
// // //     const data = await res.json();
// // //     console.log(data);
// // //   };
// // const handleLogin = async () => {
// //   const res = await fetch("/api/auth/login", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({ email, password }),
// //   });

// //   if (!res.ok) {
// //     const err = await res.text();
// //     alert(err || "Login failed");
// //     return;
// //   }

// //   const data = await res.json();
// //   console.log(data);

// //   localStorage.setItem("token", data.token);
// //   localStorage.setItem("user", JSON.stringify(data.user));
// // };

// //   return (
// //     <div className="h-screen flex items-center justify-center">
// //       <div className="p-6 border rounded w-80">
// //         <h2 className="text-xl font-bold mb-4">Login</h2>
// //         <input
// //           className="border p-2 w-full mb-2"
// //           placeholder="Email"
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           className="border p-2 w-full mb-4"
// //           placeholder="Password"
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button
// //           onClick={handleLogin}
// //           className="bg-blue-600 text-white w-full py-2 rounded"
// //         >
// //           Login
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import toast from "react-hot-toast";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     if (!res.ok) {
//       const err = await res.text();
//       toast.error(err || "Login failed");
//       return;
//     }

//     const data = await res.json();

//     // Save token & user
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     // Show toast
//     toast.success("Login Successful!");

//     // Redirect to home after short delay
//     setTimeout(() => {
//       window.location.href = "/";
//     }, 1000);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="p-6 border rounded w-80">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <input
//           className="border p-2 w-full mb-2"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           className="border p-2 w-full mb-4"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 text-white w-full py-2 rounded"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.text();
      toast.error(err || "Login failed");
      return;
    }

    const data = await res.json();

    // Save token & user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // Show success toast
    toast.success("Login Successful!");

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 border rounded w-80 bg-white shadow">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full mb-4 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
