export const blogPosts = [
  {
    id: 1,
    slug: "why-i-chose-mern-stack",
    title: "Why I Chose the MERN Stack as a Self-Taught Developer",
    excerpt:
      "A personal account of how I evaluated different tech stacks and why MongoDB, Express, React, and Node.js made the most sense for where I wanted to go as a full-stack developer.",
    date: "2025-05-12",
    readingTime: 6,
    category: "Career",
    tags: ["MERN", "Self-Learning", "Full-Stack"],
    content: `
## Why I Chose the MERN Stack

When I started my self-learning journey, I was overwhelmed by the number of choices: PHP, Django, Rails, Laravel, Spring Boot, and more. Every forum thread had different opinions. I needed to make a decision and stick with it.

### JavaScript Everywhere

The biggest appeal of the MERN stack was using one language across the entire stack. Learning JavaScript deeply and applying it on both the frontend and backend felt more efficient than context-switching between Python and JavaScript.

### Community and Jobs

React and Node.js dominate the job market for junior developers in India. The community resources — tutorials, open source projects, Stack Overflow answers — are enormous. That meant faster learning and more help when stuck.

### The Decision

I picked MERN and committed. No second-guessing. And it paid off.
    `.trim(),
  },
  {
    id: 2,
    slug: "lessons-from-first-freelance-project",
    title: "5 Lessons From My First Freelance Project as a 16-Year-Old Developer",
    excerpt:
      "My first freelance project was a humbling experience. Here are the five most important things I learned about client communication, scope creep, deadlines, and pricing your work.",
    date: "2025-06-01",
    readingTime: 8,
    category: "Freelance",
    tags: ["Freelancing", "Client Work", "Growth"],
    content: `
## Lessons From My First Freelance Project

Getting my first paid client felt incredible. Then reality set in.

### 1. Scope Creep Is Real

The client kept adding "small" features. I learned to define scope in writing before writing a single line of code.

### 2. Communication Is Half The Job

I underestimated how important regular updates are. Clients want to feel informed, not surprised.

### 3. Price Your Time Correctly

I undercharged significantly. Time has value. Pricing too low also signals lack of confidence.

### 4. Test Before Demoing

I showed a broken feature in a client call. Embarrassing and avoidable. Always test in production conditions first.

### 5. Document Everything

Comments, READMEs, changelogs. The client will eventually work with another developer. Leave things better than you found them.
    `.trim(),
  },
  {
    id: 3,
    slug: "building-real-time-apps-socketio",
    title: "Building Real-Time Applications with Socket.io and React",
    excerpt:
      "A practical guide to setting up bidirectional WebSocket communication between a React frontend and an Express backend using Socket.io — with a chat app as the example project.",
    date: "2025-06-18",
    readingTime: 10,
    category: "Technical",
    tags: ["Socket.io", "React", "Node.js", "WebSockets"],
    content: `
## Building Real-Time Apps with Socket.io

Real-time features — live chat, notifications, collaborative editing — used to feel out of reach. Socket.io makes them accessible.

### Setting Up the Server

\`\`\`javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: 'http://localhost:5173' }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('message', (data) => {
    io.emit('message', data);
  });
});
\`\`\`

### Connecting from React

\`\`\`javascript
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

socket.on('message', (data) => {
  setMessages(prev => [...prev, data]);
});
\`\`\`

It really is that simple to get started.
    `.trim(),
  },
];
