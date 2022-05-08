import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="mt-3">
                <table className="text-left w-full">
                    <thead className="bg-green-800 flex text-white w-full">
                        <tr className="flex w-full mb-4">
                            <th className="p-4 w-1/4"> Difference between javascript and nodejs?</th>
                            <th className="p-4 w-1/4"> When should you use nodejs and when should you use mongodb?</th>
                            <th className="p-4 w-1/4">Differences between sql and nosql databases.</th>
                            <th className="p-4 w-1/4">What is the purpose of jwt and how does it work?</th>
                        </tr>
                    </thead>

                    <tbody className="bg-grey-light text-white flex flex-col items-center justify-between overflow-y-scroll w-full" >
                        <tr className="flex w-full mb-4">
                            <td className="p-4 w-1/4"> Js is basically a programming language for scripts.
                                Node js is a runtime environment.Js basically frontend development other node backend.
                                Js run in any kind of browser. v8 is the js engine inside of node.js </td>
                            <td className="p-4 w-1/4">Frontend part deals with user interaction, A user can see only frontend part of application via web browsers
                                The database is mainly used as a storage unit of the application. All the data associated with the application is available in this database
                                Accepting the request from frontend server, searching the data from database and sending back the response to client’s browser is done by backend application.
                                Mainly there are two types of database management systems (DBMS): Relational and NoSQL DBMS

                                Relational DBMS manages the databases that store data in a structured format, using rows and columns

                                NoSQL DBMS manages the database that stores unstructured data in forms of collections and documents

                                You can choose any one of them as per requirement

                                MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following reasons:

                                NoSQL Database Management Systems are more flexible than RDBMS
                                The expense of maintaining and even setting up a RDBMS is relatively high
                                MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data
                                It holds a set of collections and stores data as document
                                Can handle variety of data and huge amount of data
                                It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database
                                All you have to do is install NPM -mongodb package in your Application Code</td>
                            <td className="p-4 w-1/4">SQl basically table bsed while noSql are document graph etc.
                                SQl fixed or static and NpSql dynamic. sql for complex queries and no sql is not enough for complex queries. </td>
                            <td className="p-4 w-1/4">JavaScript web token to share info between two partoes . Ot is for cryptographic to snsure that claims. </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;