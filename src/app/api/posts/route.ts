import { NextResponse } from "next/server";

// Add category support and optional server-side filtering via query param
export async function GET(request: Request) {
  const data = [
    // Web Dev
    {
      slug: "building-a-portfolio-with-nextjs",
      title: "Building a Portfolio with Next.js",
      excerpt: "How I structured pages, components, and routing.",
      date: "2025-07-18",
      tags: ["nextjs", "react", "portfolio"],
      category: "Web Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    },
    {
      slug: "styling-with-tailwind",
      title: "Styling with Tailwind CSS",
      excerpt: "Patterns I use for responsive UI and dark mode.",
      date: "2025-06-22",
      tags: ["tailwind", "css", "ui"],
      category: "Web Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
{
      slug: "styling-with-tailwind",
      title: "Styling with Tailwind CSS",
      excerpt: "Patterns I use for responsive UI and dark mode.",
      date: "2025-06-22",
      tags: ["tailwind", "css", "ui"],
      category: "Web Dev",
        cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Mobile Dev
    {
      slug: "react-native-animations-basics",
      title: "React Native Animations: The Basics",
      excerpt: "Smooth interactions on mobile using Reanimated and Gesture Handler.",
      date: "2025-05-10",
      tags: ["react-native", "reanimated", "mobile"],
      category: "Mobile Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
       {
      slug: "react-native-animations-basics",
      title: "React Native Animations: The Basics",
      excerpt: "Smooth interactions on mobile using Reanimated and Gesture Handler.",
      date: "2025-05-10",
      tags: ["react-native", "reanimated", "mobile"],
      category: "Mobile Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

       {
      slug: "react-native-animations-basics",
      title: "React Native Animations: The Basics",
      excerpt: "Smooth interactions on mobile using Reanimated and Gesture Handler.",
      date: "2025-05-10",
      tags: ["react-native", "reanimated", "mobile"],
      category: "Mobile Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

       {
      slug: "react-native-animations-basics",
      title: "React Native Animations: The Basics",
      excerpt: "Smooth interactions on mobile using Reanimated and Gesture Handler.",
      date: "2025-05-10",
      tags: ["react-native", "reanimated", "mobile"],
      category: "Mobile Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
       {
      slug: "react-native-animations-basics",
      title: "React Native Animations: The Basics",
      excerpt: "Smooth interactions on mobile using Reanimated and Gesture Handler.",
      date: "2025-05-10",
      tags: ["react-native", "reanimated", "mobile"],
      category: "Mobile Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "kotlin-android-clean-architecture",
      title: "Clean Architecture on Android with Kotlin",
      excerpt: "A pragmatic guide to layers, use cases, and testing.",
      date: "2025-04-18",
      tags: ["android", "kotlin", "architecture"],
      category: "Mobile Dev",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    // Blockchain
    {
      slug: "solidity-smart-contracts-intro",
      title: "Intro to Solidity Smart Contracts",
      excerpt: "Core concepts, tools, and patterns to get started.",
      date: "2025-03-12",
      tags: ["solidity", "ethereum", "web3"],
      category: "Blockchain",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      slug: "web3-wallet-connectivity",
      title: "Web3 Wallet Connectivity Explained",
      excerpt: "How WalletConnect, MetaMask, and EIP-1193 fit together.",
      date: "2025-02-01",
      tags: ["web3", "walletconnect", "metamask"],
      category: "Blockchain",
      cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const url = new URL(request.url);
  const category = url.searchParams.get("category");

  // When a category query parameter is provided, filter on the server
  const result = category
    ? data.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
    : data;

  return NextResponse.json(result);
}
