import { NextResponse } from "next/server";

const KNOWLEDGE_BASE: Record<string, string> = {
    "python": "Python is a high-level, interpreted programming language known for its readability and versatility. It's the standard for Data Science and Machine Learning. In SkillNest, we offer a comprehensive course covering everything from basic syntax to advanced ML models.",
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
};

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1].content.toLowerCase();

        // Find the best match in our knowledge base
        let response = "That is a great question! I'm constantly learning more about that topic. Could you please provide more details so I can give you a more specific answer? In the meantime, feel free to ask about Python, React, Next.js, or our course pricing!";

        for (const key in KNOWLEDGE_BASE) {
            if (lastMessage.includes(key)) {
                response = KNOWLEDGE_BASE[key];
                break;
            }
        }

        // Comprehensive Fallback for programming topics
        if (lastMessage.includes("how to") || lastMessage.includes("code") || lastMessage.includes("create")) {
            response = "To implement that, I recommend starting with the fundamental concepts in our related course. For example, if you're building a web app, our Next.js Bootcamp covers project structure, routing, and data handling in detail. Would you like me to highlight specific lessons for you?";
        }

        // Simulate streaming for a realistic AI feel
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                const words = response.split(" ");
                for (const word of words) {
                    // Add data: prefix to match the streaming format expected by the frontend
                    const data = JSON.stringify({
                        choices: [{ delta: { content: word + " " } }]
                    });
                    controller.enqueue(encoder.encode(`data: ${data}\n\n`));
                    await new Promise((resolve) => setTimeout(resolve, 30)); // Delay per word
                }
                controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                controller.close();
            },
        });

        return new Response(stream, {
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
