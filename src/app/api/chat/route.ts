import { NextResponse } from "next/server";

const KNOWLEDGE_BASE: Record<string, string> = {
    "python": "Python is a high-level, interpreted programming language known for its readability and versatility. It's the standard for Data Science and Machine Learning. In SkillNest, we offer a comprehensive course covering everything from basic syntax to advanced ML models.",
    "java": "Java is a popular, class-based, object-oriented programming language. It is widely used for building enterprise-scale applications, Android apps, and backend systems. While we don't have a dedicated Java course yet, our DSA masterclass uses Java-like patterns for algorithmic thinking.",
    "react": "React is a powerful JavaScript library for building user interfaces, developed by Meta. It uses a component-based architecture and a virtual DOM for efficient rendering. Our React & TypeScript Mastery course deep-dives into these concepts.",
    "nextjs": "Next.js is a React framework that enables server-side rendering and static site generation. Version 14 introduced the App Router and Server Actions, which we cover extensively in our Bootcamp.",
    "javascript": "JavaScript is the primary language of the web. It's used for client-side interactivity and server-side logic (via Node.js). It's a key requirement for all our fullstack courses.",
    "typescript": "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It helps developers catch errors early and provides excellent IDE support, especially in large React projects.",
    "enroll": "You can enroll in any course by clicking the 'Enroll now' button. We support UPI and Card payments with instant access upon completion.",
    "price": "Our premium courses are priced between ₹349 and ₹449. This is a one-time payment for lifetime access and future updates.",
    "who are you": "I am AI, the official learning assistant for the SkillNest platform. I'm here to help you master coding, understand our courses, and solve technical challenges.",
    "hello": "Hello! I am AI, your open-source learning companion. How can I assist you with your learning goals today?",
    "hi": "Hi there! I'm AI. Ready to dive into some code or talk about our courses?",
    "ai": "I am an intelligent assistant integrated into this platform to provide 24/7 support. I use specialized algorithms to help you learn faster and more effectively.",
    "status": "I am fully operational and ready to assist you!",
    "query": "A query is a request for information from a database or a system. In the context of this chat, your query is what you just typed! I'm here to answer it accurately.",
    "what is python": "Python is a versatile, high-level programming language used in web development, data science, and automation. Its clean syntax makes it ideal for beginners, which is why our Python course is so popular!",
    "angular": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It's a major competitor to React.",
    "vue": "Vue.js is a progressive JavaScript framework for building user interfaces, known for its approachability and performance.",
};

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiToken = process.env.HUGGINGFACE_API_TOKEN;

        if (!apiToken) {
            return new NextResponse(JSON.stringify({
                error: "Hugging Face API token not configured. Please add HUGGINGFACE_API_TOKEN to your Vercel Environment Variables."
            }), { status: 500 });
        }

        // Use a widely available model that is supported by HF Router
        const model = "meta-llama/Meta-Llama-3-8B-Instruct";

        console.log(`Sending request to HF Router with model: ${model}`);
        const response = await fetch(`https://router.huggingface.co/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiToken}`,
            },
            body: JSON.stringify({
                model,
                messages,
                stream: true,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Hugging Face API Error:", errorText);
            // Return the actual error message to the frontend for debugging
            return new NextResponse(JSON.stringify({ error: errorText || `API Error: ${response.status}` }), { status: response.status });
        }

        return new Response(response.body, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
            },
        });
    } catch (error) {
        console.error("AI Proxy Error:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
