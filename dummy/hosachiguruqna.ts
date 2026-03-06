// What is the difference between the spread and rest operators in JavaScript?

// const [a, ...b] = [1, 2, 3]; // here b is a rest element and must be the last element in destructuring
// console.log(a);
// console.log(b);
// const c = [1, 2, 3];
// const d = [1, 2, ...c, a];
// console.log(d);

// function sum(...nums: number[]) {
//   return nums.reduce((acc, x) => acc + x, 0);
// }
// console.log(sum(...c));

// How do you flatten a nested array in programming?

// const twoD = [
//   [1, 2],
//   [3, 4],
// ];
// // const res: number[] = [];
// // Array.prototype.flat(twoD,1);
// // for(const arr of twoD){
// //     res.push(...arr);
// // }
// // const res = twoD.reduce((acc,arr) => {
// //     acc.push(...arr);
// //     return acc;
// // },[])
// // const res: number[] = ([] as number[]).concat(...twoD);
// // const res = twoD.flat()
// const res = twoD.flat(Infinity);
// console.log(res);

// What is the NodeJS event loop?

// `The NodeJS event loop is the mechanism that allows JavaScript to handle asynchronous operations using
// a single thread. It monitors the callstack and , when it becomes empty, moves callbacks from the task
// queues to stack. Microtasks such as promises are executed before macrotasks such as timers, and IO
// callbacks.`;
// `timers -> pending callbacks -> idle/prepare -> poll -> check -> close callbacks`
// console.log('start');

// setTimeout(() => console.log('timeout'), 0);

// setImmediate(() => console.log('immediate'));

// Promise.resolve().then(() => console.log('promise'));

// process.nextTick(() => console.log('nextTick'));

// console.log('end');

// How do you find the first non-repeating character in a string?

// const s = 'aebcdadf';
// const obj = {};

// for (const ch of s) {
//     if (!Object.hasOwn(obj, ch)) {
//         obj[ch] = 0;
//     }
//     obj[ch]++;
// }
// for (const entry of Object.entries(obj)) {
//     console.log(entry);
// }
// const map = new Map<string, number>();
// for (const ch of s) {
//   map.set(ch, (map.get(ch) ?? 0) + 1);
// }

// for (const entry of map.entries()) {
//   console.log(entry);
// }

// How do you reverse all characters in a string?

// const s = 'himanshu';
// console.log(s.split('').reverse().join(''))
const s = 'himanshu saini';
// console.log(s.split(' ').reverse().join(' '))

// How does ExpressJS handle routing and middleware?
// `ExpressJS handles routing and middleware using a chain of functions that process a request sequentially. each
// middleware recieves the request object response object and a next function. Calling next() passes control to the
// next middleware or route handler, while sending a response ends the request-response cycle.`;
// import express from 'express';
// const app = express();

// app.use((req, res, next) => {
//   console.log('middleware');
//   next();
// });

// app.get('/', (req, res) => res.send('response sent'));
// const PORT = 3000;
// app.listen(PORT,() => console.log(`Listening on ${PORT}`));

// How does a load balancer work?
// `A load balancer is a component that distributes incoming client requests across multiple backend servers to ensure high availability, reliability and efficient resource utilization. It sits between the client(or API Gateway) and the backend servers. When the request arrives, the load balancer forwards it to one of the available servers using strategies such as round-robin,
// least connections, IP hash. This prevents any single server from being overwhelmed and helps the system scale horizontally.
// Example of oad balancers include AWS Elastic Load Balancer, Nginx and HAProxy.`;

// How do you deploy an application on AWS EC2 and configure Nginx as a reverse proxy?
// To deploy an application on AWS EC2 and configure Nginx as a reverse proxy, the steps are:

// 1. Launch an EC2 instance from the AWS console and choose an appropriate AMI (e.g., Ubuntu).
// 2. Configure the security group to allow required ports such as:
//    - 22 for SSH
//    - 80 for HTTP
//    - 443 for HTTPS
// 3. Connect to the EC2 instance using SSH.

// 4. Install required software:
//    - Install Nginx using the package manager.
//    - Install runtime dependencies for the application (Node.js, .NET, Python, etc.).

// 5. Deploy the application:
//    - Clone the repository or upload the build artifact.
//    - Start the application server (for example running on port 3000 or 5000).

// 6. Configure Nginx as a reverse proxy:
//    - Edit the Nginx configuration file in /etc/nginx/sites-available.
//    - Add a server block that listens on port 80 and forwards requests to the application port.

// Example configuration:

// server {
//     listen 80;

//     location / {
//         proxy_pass http://localhost:3000;
//         proxy_set_header Host $host;
//         proxy_set_header X-Real-IP $remote_addr;
//     }
// }

// 7. Restart Nginx to apply the configuration.

// Now Nginx receives incoming requests and forwards them to the application server, acting as a reverse proxy.

// Docker included
// 1. Launch an EC2 instance in AWS using an Ubuntu AMI.

// 2. Configure the security group to allow:
//    - Port 22 (SSH)
//    - Port 80 (HTTP)
//    - Port 443 (HTTPS)

// 3. SSH into the EC2 instance.

// 4. Install Docker and Docker Compose on the EC2 instance.

// 5. Pull the application image from a container registry (Docker Hub, ECR, etc.) or build it from a Dockerfile.

// 6. Run the application container, exposing the application port internally (for example 3000).

// Example:
// docker run -d -p 3000:3000 my-app-image

// 7. Install Nginx on the EC2 instance.

// 8. Configure Nginx as a reverse proxy to forward incoming requests to the Docker container.

// Example Nginx configuration:

// server {
//     listen 80;

//     location / {
//         proxy_pass http://localhost:3000;
//         proxy_set_header Host $host;
//         proxy_set_header X-Real-IP $remote_addr;
//     }
// }

// 9. Restart Nginx to apply the configuration.

// Now Nginx receives incoming HTTP requests and forwards them to the Docker container running the application.

// What are higher-order functions?
// `A higher-order function is a function that either takes another function as an argument or returns a function as
// its result.Example map()`;

// How do you decide which technology to use for a specific use case?
// `When deciding which technology to use for a specific use case, I follow a structured approach.

// First, I understand the **requirements of the problem**, such as performance needs, scalability, development speed, and integration with existing systems.

// Next, I check whether there are **existing solutions or industry-standard tools** that already solve the problem effectively. This includes evaluating open-source options first and then considering paid solutions if they provide clear advantages.

// If there is no direct solution, I identify the **most critical aspect of the system**—for example, high concurrency, real-time processing, or heavy computation—and choose technologies that are well suited for that requirement.

// Finally, I validate the choice by building **small prototypes** and evaluating factors like ecosystem maturity, community support, maintainability, and cost before making the final decision.
// `;

// What is the difference between Microservices architecture and Monolithic architecture?
// `Monolithic architecture is a software design where the entire application is built and deployed as a single codebase and a single deployable unit. All components such as the UI, business logic, and data access layers are tightly integrated.

// Microservices architecture divides the application into smaller, independent services. Each service focuses on a specific business capability and can be developed, deployed, and scaled independently.

// In a monolithic architecture, a change in one part of the system typically requires redeploying the entire application. In microservices, services can be deployed independently without affecting other services.

// Monolithic systems are generally simpler to develop and manage in the early stages and work well for smaller teams. Microservices are more suitable for large and complex systems where different teams work on different services.

// Microservices also encourage loose coupling, service-to-service communication through APIs, and often follow a pattern where each service manages its own data store.
// `;

// How would you design a system to handle high traffic?
// `In order to design a system that handles high traffic, we need observability. We need health checks with proper monitoring.
// If we know the estimated amount of traffic that does not vary by a large amount, we can plan for, that we perform tests such as load tests, spike tests, and see the avaerage time taken by requests, and basis on that configure autoscaling on AWS.`;
// `To design a system that handles high traffic, I focus on scalability, performance, and reliability.

// First, I use a load balancer to distribute incoming traffic across multiple application servers so that no single server becomes a bottleneck.

// Second, I design the application to scale horizontally, meaning additional server instances can be added as traffic increases. Cloud platforms like AWS allow auto-scaling groups to automatically add or remove instances based on traffic.

// Third, I reduce database pressure using caching layers such as Redis or in-memory caching for frequently accessed data.

// Fourth, I ensure the database layer can handle scale by using techniques like read replicas, sharding, and optimized indexing.

// Fifth, I use asynchronous processing with message queues for heavy background tasks so that user requests are handled quickly.

// Finally, I implement observability through logging, monitoring, and health checks, and perform load testing or stress testing to understand system limits and configure scaling policies.
// `;

// Why are you interested in this role?
// `I’ve worked with frontend as well, but I realized I enjoy backend work more—building APIs and systems. I also realized that getting good at something requires focusing on it for a long time, so I want to go deeper into backend engineering rather than jumping between many things.`;

// What are the key principles for designing a scalable and maintainable backend architecture for a high-traffic application?
// `A scalable and maintainable backend should use modular architecture, stateless services, horizontal scaling with load balancers, caching to reduce database load, database scaling strategies like replicas or sharding, asynchronous processing for heavy tasks, strong observability, and automated deployment pipelines.`;

// How do you manage concurrency in a backend system to ensure data consistency and performance under high load?
// `Concurrency is managed using database transactions and locking strategies such as optimistic or pessimistic locking to ensure data consistency. Performance under high load is improved using stateless services, caching, message queues for asynchronous processing, and rate limiting to control request bursts.`;
