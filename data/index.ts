import type { Author, Blog } from "~/types";
export { authors, blogs };

const authors: Author[] = [
  {
    id: 1,
    name: "Dr. Alice Johnson",
  },
  {
    id: 2,
    name: "Neva Runolfsson",
  },
  {
    id: 3,
    name: "Ray Daugherty PhD",
  },
  {
    id: 4,
    name: "Dr. Reyes Reichel Jr.",
  },
  {
    id: 5,
    name: "Estel Hessel V",
  },
  {
    id: 6,
    name: "Bernardo Boyer",
  },
  {
    id: 7,
    name: "Prof. Jermaine Dibbert MD",
  },
  {
    id: 8,
    name: "Odell Herzog",
  },
  {
    id: 9,
    name: "Mervin Thompson",
  },
  {
    id: 10,
    name: "Glenna Ruecker",
  },
  {
    id: 11,
    name: "Mrs. Ova Kozey V",
  },
  {
    id: 12,
    name: "Roberto Reilly",
  },
  {
    id: 13,
    name: "Prof. Scottie Murphy MD",
  },
  {
    id: 14,
    name: "Faye Kassulke",
  },
];

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    content:
      "Artificial Intelligence (AI) is transforming industries, from healthcare to finance. This blog explores current trends and future possibilities.",
    status: "unpublished",
    author: "Prof. Jermaine Dibbert MD",
  },
  {
    id: 2,
    title: "10 UI/UX Trends to Watch in 2025",
    content:
      "Discover the upcoming trends in UI/UX design that are shaping the way users interact with digital products.",
    status: "published",
    author: "Estel Hessel V",
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrencies",
    content:
      "Blockchain technology offers a range of applications beyond digital currencies. Learn how it’s being used in supply chain and digital identity.",
    status: "published",
    author: "Bernardo Boyer",
  },
  {
    id: 4,
    title: "Top Cybersecurity Tips for Businesses",
    content:
      "Cybersecurity threats are growing. This blog provides practical advice for businesses to safeguard their data.",
    status: "unpublished",
    author: "Dr. Reyes Reichel Jr.",
  },
  {
    id: 5,
    title: "Building Scalable Web Applications",
    content:
      "Explore best practices for building web applications that can handle millions of users without breaking a sweat.",
    status: "published",
    author: "Odell Herzog",
  },
  {
    id: 6,
    title: "How Marketing Analytics Drive Success",
    content:
      "Learn how leveraging data-driven marketing strategies can improve campaign performance and ROI.",
    status: "published",
    author: "Glenna Ruecker",
  },
  {
    id: 7,
    title: "Quantum Computing: A Beginner's Guide",
    content:
      "This blog introduces the fundamental concepts of quantum computing and its potential impact on various industries.",
    status: "unpublished",
    author: "Prof. Scottie Murphy MD",
  },
  {
    id: 8,
    title: "The Rise of Remote Work Technology",
    content:
      "Remote work is here to stay. Learn about the tools and platforms empowering global teams to collaborate effectively.",
    status: "unpublished",
    author: "Neva Runolfsson",
  },
  {
    id: 9,
    title: "Designing for Accessibility in 2025",
    content:
      "Accessibility is more important than ever. This blog explores tools and techniques for creating inclusive digital experiences.",
    status: "unpublished",
    author: "Estel Hessel V",
  },
  {
    id: 10,
    title: "Cloud-Native Applications Explained",
    content:
      "What does it mean to go 'cloud-native'? Learn about the architecture and tools driving modern software development.",
    status: "published",
    author: "Roberto Reilly",
  },
  {
    id: 11,
    title: "Ethical Challenges in AI Development",
    content:
      "As AI becomes more powerful, ethical considerations are crucial. Explore the challenges developers face and potential solutions.",
    status: "published",
    author: "Prof. Jermaine Dibbert MD",
  },
  {
    id: 12,
    title: "Effective Product Management in Agile Teams",
    content:
      "Product management is evolving in agile environments. This blog provides tips for prioritization and communication.",
    status: "published",
    author: "Mrs. Ova Kozey V",
  },
  {
    id: 13,
    title: "Data Visualization Best Practices",
    content:
      "Transform your raw data into compelling stories with effective data visualization techniques.",
    status: "published",
    author: "Ray Daugherty PhD",
  },
  {
    id: 14,
    title: "How Entrepreneurs Can Embrace Innovation",
    content:
      "Innovation is key to staying competitive. This blog offers strategies for fostering creativity and adaptability.",
    status: "published",
    author: "Mervin Thompson",
  },
];
