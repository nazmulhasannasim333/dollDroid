import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='max-w-7xl mx-auto'>
          <div className=' my-24 md:mx-32 mx-6'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and where should we store them on the client-side ?
            </div>
            <div className="collapse-content"> 
                <p>Acces and refresh token as similer, if access token is expired then refresh token create a new token. we store it in localhost or http only cookie</p>
            </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases
            </div>
            <div className="collapse-content"> 
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS ?
            </div>
            <div className="collapse-content"> 
                <p>Node JS is JavaScript base framework, and Express JS node JS fremework part. 
                    <br />
                    Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI
                </p>
            </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work ?
            </div>
            <div className="collapse-content"> 
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
            </div>
        </div>
     </div>
    );
};

export default Blog;