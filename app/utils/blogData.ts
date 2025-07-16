export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with NextJS and Tailwind",
    slug: "getting-started-with-nextjs-and-tailwind",
    date: "July 15, 2025",
    excerpt: "Learn how to set up a new project using Next.js and Tailwind CSS to create beautiful, responsive websites.",
    content: `
# Getting Started with NextJS and Tailwind

Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

## Why Next.js?

Next.js provides a solution to many common challenges in React applications:

- **Server-side rendering**: Next.js allows you to render your React components on the server before sending them to the client.
- **Static site generation**: Next.js can generate static HTML at build time.
- **API routes**: Next.js provides a way to create API endpoints as part of your Next.js app.

## Getting Started

First, let's create a new Next.js application:

\`\`\`bash
npx create-next-app@latest my-next-app
cd my-next-app
\`\`\`

During the setup, you'll be prompted to include Tailwind CSS. Select yes to automatically configure Tailwind CSS in your project.

## Running Your Next.js App

Once the installation is complete, you can run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

## Creating Your First Page

Next.js uses a file-system based router. To create a new page, simply add a new file to the \`app\` directory:

\`\`\`jsx
// app/about/page.jsx
export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-xl">This is the about page of our Next.js application.</p>
    </div>
  );
}
\`\`\`

## Using Tailwind CSS

Tailwind CSS is a utility-first CSS framework. Here's an example of using Tailwind to style a button:

\`\`\`jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
\`\`\`

This creates a blue button that darkens on hover, with white text, bold font, and rounded corners.

## Conclusion

You've now created a basic Next.js application with Tailwind CSS. From here, you can start building more complex components and pages for your website.
    `,
    coverImage: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1752556093/image_ydovfe.png"
  },
  {
    id: 2,
    title: "Creating Animated UI Components with Framer Motion",
    slug: "animated-ui-components-framer-motion",
    date: "July 10, 2025",
    excerpt: "Discover how to add beautiful animations to your React components using Framer Motion for a more engaging user experience.",
    content: `
# Creating Animated UI Components with Framer Motion

Framer Motion is a production-ready motion library for React that makes it easy to create beautiful animations for your web applications. It provides a simple declarative syntax for animations and gestures.

## Getting Started with Framer Motion

First, install Framer Motion in your project:

\`\`\`bash
npm install framer-motion
\`\`\`

## Basic Animation

Let's create a simple animation where a box moves when it appears on screen:

\`\`\`jsx
import { motion } from "framer-motion";

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}
\`\`\`

This creates a blue box that animates from being invisible and off-screen to visible and in position when the component mounts.

## Hover and Tap Animations

Framer Motion makes it easy to add hover and tap animations:

\`\`\`jsx
import { motion } from "framer-motion";

export default function InteractiveButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium"
    >
      Click Me
    </motion.button>
  );
}
\`\`\`

This button will slightly scale up when hovered and scale down when clicked.

## Animating Between Components

One of the most powerful features of Framer Motion is the ability to animate between components using the \`AnimatePresence\` component:

\`\`\`jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Home", "About", "Contact"];
  
  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(i)}
            className={selectedTab === i ? "font-bold" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="p-4 bg-gray-100 rounded-lg"
        >
          Content for {tabs[selectedTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
\`\`\`

This creates a simple tabbed interface where the content animates smoothly between tabs.

## Conclusion

Framer Motion provides an excellent way to add professional animations to your React applications with minimal code. By using the declarative API, you can create complex animations that enhance the user experience of your application.
    `,
    coverImage: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1752556247/still-879bd5f88faa2c210d4013090939ae0e_hmg0ma.png"
  },
  {
    id: 3,
    title: "Building a REST API with Node.js and Express",
    slug: "building-rest-api-nodejs-express",
    date: "July 5, 2025",
    excerpt: "Step-by-step guide to creating your own RESTful API using Node.js and Express for your web applications.",
    content: `
# Building a REST API with Node.js and Express

Creating a RESTful API is a common task for web developers. In this tutorial, we'll build a simple REST API using Node.js and Express.

## Setting Up the Project

First, create a new directory for your project and initialize it:

\`\`\`bash
mkdir my-rest-api
cd my-rest-api
npm init -y
\`\`\`

Install the necessary packages:

\`\`\`bash
npm install express mongoose cors dotenv
\`\`\`

## Creating the Server

Create an \`index.js\` file to set up your Express server:

\`\`\`javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the REST API' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
\`\`\`

## Connecting to MongoDB

Let's add MongoDB connection with Mongoose:

\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
\`\`\`

## Creating a Model

Create a \`models\` directory and add a file for your model, for example \`product.model.js\`:

\`\`\`javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
\`\`\`

## Creating Routes

Create a \`routes\` directory and add a file for your routes, for example \`product.routes.js\`:

\`\`\`javascript
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one product
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Create a product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
router.patch('/:id', getProduct, async (req, res) => {
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.category != null) {
    res.product.category = req.body.category;
  }

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
\`\`\`

## Connecting Routes to the Server

Update your \`index.js\` to use the routes:

\`\`\`javascript
// Import routes
const productRoutes = require('./routes/product.routes');

// Use routes
app.use('/api/products', productRoutes);
\`\`\`

## Testing the API

You can test your API using tools like Postman or by writing simple HTTP requests using a library like axios or fetch.

## Conclusion

Congratulations! You've built a basic REST API with Node.js and Express. You can extend this API by adding authentication, validation, and more complex endpoints to suit your application's needs.
    `,
    coverImage: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1752556322/37_ko7jfa.webp"
  }
];
