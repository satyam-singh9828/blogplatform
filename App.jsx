import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import Header from "./assets/components/Header";
import HeroSection from "./assets/components/HeroSection";
import Footer from "./assets/components/Footer";
import AboutPage from "./assets/components/AboutSection";
import ContactPage from "./assets/components/ContactSection";
import BlogPage from "./assets/components/BlogPage";
import SinglePostView from "./assets/components/SinglePostview";


// Dummy data for blog posts. In a real application, this would come from an API or database.
const posts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    image: 'https://tse3.mm.bing.net/th/id/OIP.exvUfqXGbGN4o9qJYC8WowHaEK?pid=Api&P=0&h=180',
    excerpt: 'Explore how artificial intelligence is changing the way we build websites...',
    content: `The integration of artificial intelligence into web development is no longer a futuristic concept. AI is rapidly transforming how we build websites, from code generation to user experience. Tools like GitHub Copilot and Tabnine are powerful AI assistants that suggest code snippets and entire functions, drastically speeding up development time. 

Beyond coding, AI is being used for automated testing, bug detection, and even generating website designs from text prompts. The next wave of AI in web development will likely focus on personalized user experiences, where AI algorithms dynamically change content and layout based on user behavior. This shift means developers will need to adapt their skills, focusing more on high-level architecture and less on repetitive, manual tasks.`,
    author: 'Alex Carter',
    date: 'August 28, 2025',
    category: 'Tech'
  },
  {
    id: 2,
    title: 'A Beginner’s Guide to Component-Based Design',
    image: 'https://tse1.mm.bing.net/th/id/OIP.J6-ssD6uOQhPdTJhHDqmjgHaDf?pid=Api&P=0&h=180',
    excerpt: 'Learn the fundamentals of creating reusable components with React...',
    content: `Component-based design is a fundamental paradigm in modern front-end development, especially with libraries like React. It’s the practice of breaking down a complex user interface into small, independent, and reusable building blocks. Instead of thinking about a whole page at once, you design and build individual parts like buttons, cards, and navigation bars.

This approach offers significant advantages. It promotes code reusability, which reduces development time and ensures a consistent look and feel across your application. Components are also easier to maintain and test, as you can isolate and fix issues without affecting the rest of the application. The key to successful component-based design is to create components that are modular, have a clear purpose, and can be easily combined to build any UI.`,
    author: 'Emily Chen',
    date: 'August 25, 2025',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Styling with Tailwind: A Developer’s Best Friend',
    image: 'https://tse3.mm.bing.net/th/id/OIP.bb5RFgvr1djWNaDBTpGbVgHaEy?pid=Api&P=0&h=180',
    excerpt: 'Discover the power of utility-first CSS and how it speeds up your workflow...',
    content: `Tailwind CSS is a utility-first CSS framework that has revolutionized how developers style web applications. Unlike traditional CSS frameworks that provide pre-built components, Tailwind gives you a set of low-level utility classes like 'flex', 'pt-4', 'text-center', and 'rotate-90'. You build your designs directly in your HTML by combining these classes.

This approach offers unparalleled flexibility and speed. You're not restricted by a framework's design system; you can create unique, custom designs without writing any custom CSS. The benefits include a smaller final CSS bundle size since you only use the classes you need and a much faster workflow as you don't have to switch between HTML and a separate CSS file constantly. Tailwind is a tool that empowers developers to be more productive and creative.`,
    author: 'Michael Lee',
    date: 'August 22, 2025',
    category: 'CSS'
  },
  {
    id: 4,
    title: 'Demystifying the JavaScript Event Loop',
    image: 'https://tse4.mm.bing.net/th/id/OIP.jbXf8Mg3gKgpATx6SMjc5QHaEK?pid=Api&P=0&h=180',
    excerpt: 'Understanding the event loop is crucial for any serious JavaScript developer...',
    content: `The JavaScript Event Loop is a core concept that every developer needs to understand to write non-blocking asynchronous code. In simple terms, it's a mechanism that allows JavaScript, which is single-threaded, to handle asynchronous operations like API calls and user events without freezing the main thread.

When an asynchronous function is called, it's moved to a separate queue. The Event Loop continuously checks if the main call stack is empty. If it is, it pulls a function from the queue and puts it on the call stack to be executed. This process ensures that heavy, time-consuming operations don't block the UI, keeping your application responsive. Understanding this mechanism helps you debug complex asynchronous bugs and write more efficient and performant code.`,
    author: 'Liam O’Connell',
    date: 'July 30, 2025',
    category: 'JavaScript'
  },
  {
    id: 5,
    title: 'Building a High-Performance Website with Next.js',
    image: 'https://tse2.mm.bing.net/th/id/OIP.F3MEE7IsuVPzLYZxTqN9JQHaEK?pid=Api&P=0&h=180',
    excerpt: 'Next.js is a powerful framework for building fast, SEO-friendly React applications...',
    content: `Next.js is a production-ready React framework that brings powerful features like server-side rendering (SSR) and static site generation (SSG) to the table. By rendering pages on the server, Next.js provides significant performance benefits, including faster initial page loads and improved SEO. Unlike traditional single-page applications (SPAs), Next.js delivers fully-formed HTML to the browser, making it easier for search engine crawlers to index your content.

Next.js also excels at optimizing images, fonts, and scripts, which are crucial for achieving high scores on performance metrics like Google's Core Web Vitals. The framework's file-system-based routing is intuitive and simple to use, while its API routes make it easy to build a full-stack application within a single repository. For building modern, fast, and scalable React applications, Next.js is an excellent choice.`,
    author: 'David Kim',
    date: 'Aug 10, 2025',
    category: 'Frameworks'
  },
  {
    id: 6,
    title: 'A Look at the New CSS Features in 2025',
    image: 'https://tse1.mm.bing.net/th/id/OIP.1ynZaycTJwoZgjGzGSWjJAHaEc?pid=Api&P=0&h=180',
    excerpt: 'From container queries to Cascade Layers, the world of CSS is constantly evolving...',
    content: `The world of CSS is constantly evolving, with new features being added to the standard to simplify styling and solve common developer pain points. One of the most significant recent additions is Container Queries, which allow you to style elements based on the size of their parent container, rather than the viewport size. This makes creating responsive components much more intuitive and modular.

Another game-changer is Cascade Layers. This feature gives developers granular control over the CSS cascade, allowing them to define specific layers for their styles, such as base styles, framework styles, and custom styles. This helps prevent specificity wars and makes managing complex stylesheets much easier. Other features like  and new color functions are also empowering developers to build more dynamic and visually appealing layouts with less code.`,
    author: 'Maria Garcia',
    date: 'Aug 5, 2025',
    category: 'CSS'
  },
  {
    id: 7,
    title: 'The Importance of Accessibility in Web Design',
    image: 'https://tse3.mm.bing.net/th/id/OIP.CpU4-nlviGfH1eEWiEEWqwHaEK?pid=Api&P=0&h=180',
    excerpt: 'Designing for accessibility isn\'t just a best practice—it\'s a fundamental aspect...',
    content: `Web accessibility is the practice of designing and developing websites so that people with disabilities can use them effectively. This includes people with visual, auditory, motor, and cognitive impairments. Accessibility is not just a legal requirement in many places; it's a fundamental aspect of building inclusive web experiences.

By implementing practices like providing alternative text for images, using proper semantic HTML, ensuring good color contrast, and making sites navigable via keyboard, you can make your website usable for a much wider audience. Accessible websites also tend to have better SEO, and a better user experience for everyone. In short, designing for accessibility is about doing the right thing for your users and building a better web for all.`,
    author: 'Sophia Rossi',
    date: 'July 28, 2025',
    category: 'Design'
  },
  {
    id: 8,
    title: 'Getting Started with TypeScript',
    image: 'https://tse3.mm.bing.net/th/id/OIP.7g_ro9olLVcRSNT50Meg6gHaEK?pid=Api&P=0&h=180',
    excerpt: 'TypeScript adds static typing to JavaScript, helping you catch errors early...',
    content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language, which is a major benefit for building large-scale applications. With static typing, you can catch common errors like typos and incorrect function arguments at compile time rather than at runtime. This leads to more robust and reliable code.

Another key advantage of TypeScript is improved developer tooling. IDEs and code editors can provide better autocompletion, refactoring, and error checking when they have type information. This enhances the developer experience and makes large codebases easier to navigate and maintain. While there is a slight learning curve, the long-term benefits of using TypeScript, especially in team environments, far outweigh the initial effort.`,
    author: 'David Kim',
    date: 'July 20, 2025',
    category: 'JavaScript'
  },
  {
    id: 9,
    title: 'Microservices vs. Monoliths: A Developer\'s Dilemma',
    image: 'https://tse4.mm.bing.net/th/id/OIP.bY-ku1HgrMpqcLrYYvFHtAHaEK?pid=Api&P=0&h=180',
    excerpt: 'Choosing the right architectural pattern is critical for a project\'s success...',
    content: `Choosing the right architectural pattern is a critical decision that can define a project’s long-term success. The Microservices vs. Monoliths debate is at the heart of this decision. A monolithic architecture is a single, large application that contains all of its functions in one codebase. It’s often simpler to develop and deploy initially.

Microservices, on the other hand, are a collection of small, independent services that communicate with each other. Each service is responsible for a single business function. This approach offers benefits like better scalability, as you can scale individual services as needed, and increased resilience. However, microservices introduce complexity in terms of deployment, testing, and managing communication between services. The best choice depends on the project's size, team structure, and business needs.`,
    author: 'Michael Lee',
    date: 'July 15, 2025',
    category: 'Architecture'
  },
  {
    id: 10,
    title: 'The Art of Clean Code',
    image: 'https://tse3.mm.bing.net/th/id/OIP.-zKcPdCbNASi_Ex4iqOB-wHaHa?pid=Api&P=0&h=180',
    excerpt: 'Writing code that is easy to read, understand, and maintain...',
    content: `Writing clean code is a skill that distinguishes a good developer from a great one. It’s about writing code that is easy for others (and your future self) to read, understand, and modify. The core principles of clean code include using meaningful names for variables, functions, and classes, and writing small, focused functions that do one thing well.

Another key principle is to avoid duplication. The "Don't Repeat Yourself" (DRY) principle helps you write more maintainable code. Additionally, writing good comments and documentation, when necessary, can clarify complex logic. Ultimately, clean code reduces the cognitive load on developers, speeds up development time in the long run, and significantly lowers the number of bugs. It’s a practice that pays dividends throughout a project's lifecycle.`,
    author: 'Alex Carter',
    date: 'July 10, 2025',
    category: 'Best Practices'
  },
];
function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans antialiased text-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <Header />
        <main className="pt-20 max-w-7xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <section className="py-16 bg-white text-center">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Discover Our Blog
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Click the button below to view all our latest articles.
                      </p>
                    <Link
  to="/blog"
  className="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
>
  Go to Blog
</Link>



                    </div>
                  </section>
                </>
              }
            />
            <Route path="/blog" element={<BlogPage posts={posts} />} />
            <Route path="/blog/:id" element={<SinglePostView posts={posts} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
