                                                                                        *******Blogera******
                                                                                        
This repository contains a comprehensive MERN stack application for a blogging platform called Blogera. The frontend is developed using React, providing an intuitive user interface for creating and managing blog posts. The backend API is built with Node.js and MongoDB.

Deployed Site: https://blogera.onrender.com/

                    *********Note: As this application uses a free service for deployment, requests may take up to 50 seconds due to inactivity.********

Overview
Blogera is a full-fledged blogging platform where users can create, read, update, and delete blog posts. It also includes user authentication using JWT, ensuring that only authenticated users 
can create, edit, or delete posts. Users can comment on other posts, with protected routes ensuring the security and integrity of the content. challenges that i faced are planning a schema for 
posts and comments i overcame it by planning the schema ahead of time in mongoose and the main challenge was to reduce the requests time as i deployed it on a free service.



Stack
Frontend: React
Backend: Node.js, Express
Database: MongoDB with Mongoose for schema-based modeling


                                                                          *********Endpoints*****
                                                                           
User Authentication
Register: POST /api/signup

Registers a new user with the provided details.
Login: POST /api/signin

Authenticates a user and returns a JWT for session management.


Blog Posts
Create Post: POST /api/createpost
Creates a new blog post. Requires user authentication.

Get All Posts: GET /api/getposts
Retrieves all blog posts currently stored in the database.

Get Single Post: GET /api/getpost/:id
Retrieves a single blog post by its ID.

Update Post: PUT /api/editpost/:id
Updates an existing blog post. Only the post owner can update. Requires user authentication.

Delete Post: DELETE /api/delete[pst/:id
Deletes a blog post. Only the post owner can delete. Requires user authentication.


Database Schema
Blog posts and users are stored in MongoDB using Mongoose with schemas defined to include fields such as title, content, author, timestamps, and comments.

Usage
Adding a Blog Post
Register and log in to create an account.
Navigate to the homepage and fill in the fields to create a new blog post.
Click "Create Post" to add it to the database.


Viewing Blog Posts
Navigate to hompage to see all the blog posts currently available.


Editing and Deleting Blog Posts
Only the owner of a blog post can edit or delete it. Navigate to the post and use the provided options to make changes or remove the post.


Adding Comments
Authenticated users can add comments to any blog post. Navigate to the post and fill in the comment field to add your comment.


Notes
User Authentication: Uses JWT for secure authentication and session management.
Protected Routes: Ensures that only authenticated users can access certain routes and perform actions like creating, editing, or deleting posts.
CRUD Operations: Full support for Create, Read, Update, and Delete operations for both blog posts and comments.
