# 🚀 CodeCrate – Code Snippet Manager & Executor

**CodeCrate** is a real-time, modern code snippet manager that enables users to **create, organize, execute**, and **share** code across multiple languages. Built with developer experience in mind, it offers an interactive Monaco editor, user dashboard, and multi-language support — all with a beautiful UI powered by Next.js.

🔗 **Live Site:** [CodeCrate](https://codecrate.vercel.app/)  
📂 **Source Code:** [GitHub](https://github.com/Suraj7299/Codecrate)

---

## ✨ Features

🧠 **Smart Snippet Storage** – Save, edit, tag, and search your code snippets easily.  
🖍️ **Monaco Editor Integration** – A VSCode-like editing experience in the browser.  
🗃️ **Multi-Language Support** – Organize snippets by language, project, or tags.  
📤 **Public Sharing** – Generate public or private shareable links to any snippet.  
📈 **User Dashboard** – Track total snippets, favorite languages, and starred items.  
🎨 **Custom Themes** – Choose from multiple themes to personalize your workspace.  
🔐 **Authentication** – Seamless and secure user auth via Clerk.  
💳 **Subscription Model** – Free tier (basic features) and Pro tier with advanced tools via LemonSqueezy.

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15, TypeScript, TailwindCSS, shadcn/ui  
- **Authentication:** Clerk  
- **Payments:** LemonSqueezy  
- **Database:** Convex (real-time)  
- **Editor:** Monaco Editor  
- **Deployment:** Vercel

---

## ⚙️ Installation & Setup

Follow these steps to set up CodeCrate locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Suraj7299/Codecrate.git
cd CodeCrate

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create a .env.local file in the root with the following content:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CHECKOUT_URL=your_lemonsqueezy_checkout_url
PAYMENT_WEBHOOK_SIGNING_SECRET=your_lemonsqueezy_webhook_secret

# 4️⃣ Run the development server
npm run dev

Now open your browser and navigate to:
http://localhost:3000
```
---
🤝 Contributing

Contributions, issues, and feature suggestions are welcome!
Feel free to fork the repo, open an issue, or submit a pull request 🚀

---

📜 License

This project is licensed under the GNU GENERAL PUBLIC LICENSE v3.

---
🧑‍💼 Author

Suraj Kumar
Thanks for checking out CodeCrate! Happy coding ✨

---          

