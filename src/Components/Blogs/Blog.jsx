import React from "react";
import "./Blog.css"
const Blog = () => {
  return (
    <div className="bg-gray-100 p-8 bg-blog ">
      <h1 className="text-3xl font-bold mb-4">
        Question 1: Tell us the differences between uncontrolled and controlled
        components.
      </h1>
      <p className="text-lg mb-8">
        Answer : Controlled components and uncontrolled components are both ways
        to create buttons, input boxes, and other parts of a website. An
        uncontrolled component is like a toy that plays by itself. It knows what
        to do and doesn't need anyone else to help. But sometimes, it can be
        hard to control or change what it does. A controlled component is like a
        toy that you control with a remote. You can tell it what to do and
        change it whenever you want. This makes it easier to manage and change
        the toy's behavior. In web development, controlled components are more
        complex to create but offer more control and easier data management.
        Uncontrolled components are simpler to create but can be harder to
        manage and update.
      </p>

      <h1 className="text-3xl font-bold mb-4">
        Question 2: How to validate React props using PropTypes?
      </h1>
      <p className="text-lg mb-8">
        Answer :Sometimes when building a website, we want to make sure that the
        right kind of information is being used in certain parts of the website.
        We can do this by using a tool called PropTypes in React. With
        PropTypes, we can tell the website what kind of information to expect in
        certain parts, like whether it should be a word, a number, or a list.
        This way, if someone tries to use the wrong kind of information, the
        website will let them know it's not correct and won't let them do it.
        PropTypes helps make sure that the website works properly and avoids
        mistakes.
      </p>

      <h1 className="text-3xl font-bold mb-4">
        Question 3: Tell us the difference between Node.js and Express.js.
      </h1>
      <p className="text-lg mb-8">
        Answer : Node.js and Express.js are both like superheroes in the world
        of web development. Node.js is like Superman, who has super strength and
        can do amazing things. Just like Superman, Node.js is super powerful and
        allows developers to use JavaScript on the server-side, which is pretty
        amazing! Express.js is like Batman, who has lots of cool gadgets and
        tools to fight crime. Just like Batman, Express.js provides developers
        with a set of tools and features to build web applications with ease.
        It's like having a cool utility belt full of tools that make web
        development much easier. In short, Node.js is like Superman, providing
        the platform for developers to create server-side applications, while
        Express.js is like Batman, offering a set of powerful tools and features
        to make building web applications a breeze. Together, they make an
        amazing team, just like the Justice League!.
      </p>

      <h1 className="text-3xl font-bold mb-4">
        Question 4: What is a custom hook, and why will you create a custom
        hook?
      </h1>
      <p className="text-lg mb-8">
        Answer : Have you ever had to do the same thing over and over again,
        like tying your shoes or brushing your teeth? It gets boring and
        repetitive, right? Well, programming can sometimes feel the same way!
        That's where custom hooks come in! They're like magical spells that let
        you do the same thing in lots of different places without having to
        repeat yourself. Just like a magic wand that helps Harry Potter cast
        spells, custom hooks can help you cast programming spells that do things
        like fetching data or handling loading states. With custom hooks, you
        can create your own magic spells that you can use over and over again in
        different parts of your website, just like Harry Potter uses his spells
        to defeat the Dark Lord. It's like having your own set of superpowers
        that make programming easier and more fun! So, next time you find
        yourself doing the same thing over and over again in your code, remember
        to use custom hooks to simplify your life and add some magic to your
        programming journey!
      </p>
    </div>
  );
};

export default Blog;
