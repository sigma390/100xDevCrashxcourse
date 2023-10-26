"use strict";
// ## Create a course selling website
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ### Description
// 1. Admins should be able to sign up
// 2. Admins should be able to create courses
//    1. Course has a title, description, price, and image link
//    2. Course should be able to be published
// 3. Admins should be able to edit courses
// 4. Users should be able to sign up
// 5. Users should be able to purchase courses
// 6. Users should be able to view purchased courses
// 7. Users should be able to view all courses
// ## Routes
// ### Admin Routes:
//  - POST /admin/signup
//    Description: Creates a new admin account.
//    Input: { username: 'admin', password: 'pass' }
//    Output: { message: 'Admin created successfully' }
//  - POST /admin/login
//    Description: Authenticates an admin. It requires the admin to send username and password in the headers.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Output: { message: 'Logged in successfully' }
//  - POST /admin/courses
//    Description: Creates a new course.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Input: Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }
//    Output: { message: 'Course created successfully', courseId: 1 }
//  - PUT /admin/courses/:courseId
//    Description: Edits an existing course. courseId in the URL path should be replaced with the ID of the course to be edited.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Input: Body { title: 'updated course title', description: 'updated course description', price: 100, imageLink: 'https://updatedlinktoimage.com', published: false }
//    Output: { message: 'Course updated successfully' }
//  - GET /admin/courses
//    Description: Returns all the courses.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
//    User Routes:
// ### User routes
//  - POST /users/signup
//    Description: Creates a new user account.
//    Input: { username: 'user', password: 'pass' }
//    Output: { message: 'User created successfully' } 
//  - POST /users/login
//    Description: Authenticates a user. It requires the user to send username and password in the headers.
//    Input: Headers: { 'username': 'user', 'password': 'pass' }
//    Output: { message: 'Logged in successfully' }
//  - GET /users/courses
//    Description: Lists all the courses.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
//  - POST /users/courses/:courseId
//    Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Output: { message: 'Course purchased successfully' }
//  - GET /users/purchasedCourses
//    Description: Lists all the courses purchased by the user.
//    Input: Headers: { 'username': 'admin', 'password': 'pass' }
//    Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
app.use(express_1.default.json());
let ADMINS = [];
let USERS = [];
let COURSES = [];
//authentication 
let secret = "OMKAR";
function generateJWT(user, secret) {
    let payload = { username: user.username };
    let ans = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '1h' });
    return ans;
}
const AdminAUTH = (req, res, next) => {
    // const {username,password} = req.headers;
    // let admin = ADMINS.find(a=>a.username=== username&& a.password=== password);
    let authHead = req.headers.keyy;
    console.log(authHead);
    // if (admin) {
    //     next();
    // }
    // else{
    //     res.status(403).json({message:"auth failed"});
    // }
    if (authHead) {
        const tkn = authHead.split(' ')[1];
        jsonwebtoken_1.default.verify(tkn, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
// Admin routes
app.post('/admin/signup', (req, res) => {
    // logic to sign up admin
    const admin = req.body;
    const existsAdmin = ADMINS.find(a => a.username === admin.username);
    const token = generateJWT(admin, secret); // generate a token
    if (existsAdmin) {
        res.status(403).json({ message: "Admin already exists" });
    }
    else {
        ADMINS.push(admin);
        res.status(200).json({ message: "Admin created Succesfully", token });
    }
});
app.post('/admin/login', (req, res) => {
    const { username, password } = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if (admin) {
        const token = generateJWT(admin, secret);
        res.status(200).json({ message: "Logged in succesfully ", token });
    }
    else {
        res.status(403).json({ message: "admin authentication failed" });
    }
});
app.post('/admin/courses', AdminAUTH, (req, res) => {
    // logic to create a course
    let newCourse = req.body;
    newCourse.id = COURSES.length + 1;
    COURSES.push(newCourse);
    res.json({ message: "Course added succesfully", id: newCourse.id });
});
app.put('/admin/courses/:courseId', (req, res) => {
    // logic to edit a course
});
app.get('/admin/courses', (req, res) => {
    // logic to get all courses
    res.json({ course: COURSES });
});
// User routes
app.post('/users/signup', (req, res) => {
    // logic to sign up user
});
app.post('/users/login', (req, res) => {
    // logic to log in user
});
app.get('/users/courses', (req, res) => {
    // logic to list all courses
});
app.post('/users/courses/:courseId', (req, res) => {
    // logic to purchase a course
});
app.get('/users/purchasedCourses', (req, res) => {
    // logic to view purchased courses
});
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
