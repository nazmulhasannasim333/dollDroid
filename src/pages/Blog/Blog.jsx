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
            What is useRef ?
            </div>
            <div className="collapse-content"> 
                <p>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference A reference is an object having a special property current </p>
            </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is useMemo ?
            </div>
            <div className="collapse-content"> 
                <p>The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. </p>
            </div>
            </div>
        </div>
     </div>
    );
};

export default Blog;