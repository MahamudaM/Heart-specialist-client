import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse  collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  Difference between SQL and NoSQL?
  </div>
  <div className="collapse-content"> 
    <p>The following table highlights the major differences between SQL and NoSQL −SQL databases are classified as Relational databases, i.e., RDBMS.NoSQL databases are known as non-relational or distributed database.NoSQL databases are known as non-relational or distributed database.SQL databases use standard Structured Query Languages, as the name suggests.
SQL is an industry-standard and very powerful language to execute complex queries.NoSQL database has dynamic schema for unstructured data. The data stored in a NoSQL database is not structured.
Data could be stored as document-oriented, column oriented, graph-based or organized as a Key-Value store. The syntax can vary from database to database.SQL databases have a fixed, pre-defined schema, which makes the data storage more rigid, static, and restrictive.NoSQL databases don’t have a pre-defined schema, which makes them schema-less and more flexible.SQL follows ACID (Atomicity, Consistency, Isolation and Durability) properties for its operations.NoSQL is based on CAP (Consistency, Availability, and Partition Tolerance).SQL databases can only be run on a single system and because of this, they don’t follow the distribution of data and hence they don’t support hierarchical storage of data.NoSQL Databases can run on multiple systems, and hence, they support data distribution features like data repetition, partition, etc., making them the best option for hierarchical storage of data.</p>
  </div>
</div>
{/* 2 */}
<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is JWT, and how does it work?
  </div>
  <div className="collapse-content"> 
    <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information</p>
  </div>
</div>
{/* 3 */}
<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content"> 
    <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
  </div>
</div>
{/* 4 */}
<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content"> 
    <p>NodeJS internally manages a limited thread pool which handles multiple client requests based on which thread is avaiable in the pool to process the request.because programmers cannot create threads on the fly to handle new incoming requests.NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.</p>
  </div>
</div>
        </div>
    );
};

export default Blogs;