import React from "react";
import "./Blog.css";
import useTitle from "../../Hooks/useTitle";
const Blogs = () => {
  useTitle("Blogs")
  return (
    <div className="bg-gray-100 p-8 bg-blog ">
      <h1 className="text-3xl font-bold mb-4">
        Question 1 : What is an access token and refresh token? How do they work
        and where should we store them on the client-side?
      </h1>
      <p className="text-lg mb-8">
        Answer : Access Token: An access token is like a special pass that a
        computer gives you when you log in. It helps the computer know who you
        are and what things you're allowed to do. The pass only works for a
        little while, like a few minutes or hours. You need to show this pass
        whenever you want to do something on the computer, like accessing
        certain websites or using specific features. Refresh Token: A refresh
        token is another kind of pass that the computer gives you when you log
        in. . Storage on the Client-side: To keep these passes safe, we need to
        store them in secure places on the computer where you use them. The
        access token can be kept in a special area that the computer can easily
        find, like a locked box. The refresh token, . It's like a secret
        treasure hidden in a special vault that only the computer knows about.
      </p>

      <h1 className="text-3xl font-bold mb-4">
        Question 2 : Compare SQL and NoSQL databases?
      </h1>
      <p className="text-lg mb-8">
        Answer :SQL Databases: SQL databases are like organized treasure chests.
        They have special boxes (tables) with neat rows and columns. Each box
        holds It's like having a map to locate everything. NoSQL Databases:
        NoSQL databases are like magical bags where you can put anything you
        want. You don't need to organize things in boxes. shapes and sizes of
        items. It's flexible and allows you to add or take out things easily.
        Scalability: SQL databases can grow bigger by adding more power to one
        treasure chest. It's like making the chest stronger and bigger to hold
        more things. databases use a special language called SQL to talk to
        them. It's like speaking a secret code to ask questions and get answers.
        NoSQL databases have their own ways of understanding and answering
        questions. It's like using a different language or special signals to
        communicate.
      </p>

      <h1 className="text-3xl font-bold mb-4">
        Question 3 : What is express js? What is Nest JS ?
      </h1>
      <p className="text-lg mb-8">
        Answer : Express.js: Express.js is like a toolbox for building websites
        and apps. It helps developers create web stuff using JavaScript. It's
        small and easy to use. Think of it as a fast bike that can take you
        anywhere on the internet. Nest.js: Nest.js is a cool tool for building
        websites too, but it's a bit different. It's like a robot helper that
        follows special rules. It uses TypeScript, which is like a secret
        language for programming. Nest.js helps make big websites with lots of
        features. It's like having a team of robots working together to build
        something amazing.
      </p>

      <h1 className="text-3xl font-bold mb-4">
        Question 4 :What is MongoDB aggregate and how does it work ?
      </h1>
      <p className="text-lg mb-8">
        Answer : MongoDB Aggregate: MongoDB Aggregate is like a super tool for
        organizing and analyzing lots of information. It helps you make sense of
        a big collection of data. It's like having a bunch of cool steps that
        you can follow to process and understand the information. How it Works:
        steps, like a pipeline. Each step does something special to the data and
        passes it to the next step. It's like an assembly line where each worker
        does a specific job to make something awesome. Hook: In programming, a
        hook is like a magic trick that happens when you do something. It's a
      </p>
    </div>
  );
};

export default Blogs;
