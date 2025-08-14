export type ApiPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags?: string[];
  category?: string;
  cover?: string;
};

export const posts: ApiPost[] = [
  {
    slug: "dart-copywith-beginner-guide",
    title: "Leveraging the copyWith Method in Dart (Beginner-Friendly Guide)",
    excerpt: "Beginner-friendly explanation of copyWith with examples, tips, and a challenge.",
    content: `
# Leveraging the \`copyWith\` Method in Dart (Beginner-Friendly Guide)

If you've just started Flutter or Dart, you've probably heard the term **copyWith**.

It sounds fancy, but it's just a way to make a new copy of an object while changing only the parts you want.

> Think of it like this: You have a sandwich you like, but you want *more cheese*. Instead of rebuilding it from scratch, you copy it and add cheese. That's \`copyWith\`. 🥪

## Why use \`copyWith\`?

- Keeps your data safe (immutability)
- Clear one-line updates
- Avoids rewriting all fields

## A simple example

Let’s say we have a \`User\`:

\`\`\`dart
class User {
  final String name;
  final int age;
  final String email;

  User({
    required this.name,
    required this.age,
    required this.email,
  });

  User copyWith({String? name, int? age, String? email}) {
    return User(
      name: name ?? this.name,
      age: age ?? this.age,
      email: email ?? this.email,
    );
  }
}
\`\`\`

## How it works

\`\`\`dart
void main() {
  User user1 = User(name: "John Doe", age: 30, email: "john@example.com");

  // Copy user1 but change only the age
  User user2 = user1.copyWith(age: 31);

  print(user1.age); // 30 (unchanged)
  print(user2.age); // 31 (new)
}
\`\`\`

## Why not just mutate \`user1\`?

In Flutter (and reactive UIs), immutable models make state changes predictable and easier to debug.

### Tips for beginners

- Include every field in \`copyWith\`.
- Keep fields \`final\`.
- For nested models, chain: \`post.copyWith(author: post.author.copyWith(name: "New"))\`.

## 💡 Beginner Challenge

Create a \`Product\` class with: \`name\`, \`price\`, \`stock\`.

Then:

1. Instantiate a product.
2. Use \`copyWith\` to create a new one:
   - Same name
   - Price increased by 10
   - Stock reduced by 1

### Possible solution

\`\`\`dart
class Product {
  final String name;
  final double price;
  final int stock;

  Product({
    required this.name,
    required this.price,
    required this.stock,
  });

  Product copyWith({String? name, double? price, int? stock}) {
    return Product(
      name: name ?? this.name,
      price: price ?? this.price,
      stock: stock ?? this.stock,
    );
  }
}

void main() {
  final p1 = Product(name: "Keyboard", price: 50, stock: 12);
  final p2 = p1.copyWith(price: p1.price + 10, stock: p1.stock - 1);

  print(p1.price); // 50
  print(p2.price); // 60
}
\`\`\`

Happy coding! 🚀
`,
    date: "2025-08-14",
    tags: ["dart", "flutter", "copywith"],
    category: "Dart",
    cover: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "building-a-portfolio-with-nextjs",
    title: "Building a Portfolio with Next.js",
    excerpt: "How I structured pages, components, and routing.",
    content: "Full article content for Building a Portfolio with Next.js...",
    date: "2025-07-18",
    tags: ["nextjs", "react", "portfolio"],
    category: "Web Dev",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop",
  },
  {
    slug: "styling-with-tailwind",
    title: "Styling with Tailwind CSS",
    excerpt: "Patterns I use for responsive UI and dark mode.",
    content: "Full article content for Styling with Tailwind CSS...",
    date: "2025-06-22",
    tags: ["tailwind", "css", "ui"],
    category: "Web Dev",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop",
  },
  {
    slug: "react-native-animations-basics",
    title: "React Native Animations: The Basics",
    excerpt: "Smooth interactions on mobile using Reanimated and Gesture Handler.",
    content: "Full article content for React Native Animations...",
    date: "2025-05-10",
    tags: ["react-native", "reanimated", "mobile"],
    category: "Mobile Dev",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop",
  },
  {
    slug: "kotlin-android-clean-architecture",
    title: "Clean Architecture on Android with Kotlin",
    excerpt: "A pragmatic guide to layers, use cases, and testing.",
    content: "Full article content for Kotlin Android Clean Architecture...",
    date: "2025-04-18",
    tags: ["android", "kotlin", "architecture"],
    category: "Mobile Dev",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop",
  },
]