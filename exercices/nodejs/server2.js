import { createServer } from 'http';

const PORT = process.env.PORT;

const users = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Doe'},
  {id: 3, name: 'Jim Doe'}
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  const user = users.find((user) => (user.id == id));
  if (user) {
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'User not found'}));
  }
  res.end();
};

// Route handler for GET /api/users/:id
const notFoundUserHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({message: 'User not found'}));
  res.end();
};

// Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({message: 'Route not found'}));
  res.end();
};

// Route handler for POST /api/usrs
const createUserHander = (req, res) => {

  // Check Content-Type
  if (req.headers['content-type'] !== 'application/json') {
    res.statusCode = 400;
    res.end('Content-Type must be application/json');
    return;
  }

  let body = '';
  // Listen for data
  req.on('data', (chunk) => {
    console.log("Received chunk: ", chunk.toString());
    body += chunk.toString();
  });
  req.on('end', () => {
    try {
      const newUser = JSON.parse(body);
      console.log(body);
      users.push(newUser);
      res.statusCode = 201;
      res.write(JSON.stringify(newUser));
    } catch (err) {
      res.statusCode = 400;
      res.write('Invalid JSON');
    }
    res.end();
  })

};

const server = createServer( (req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.method === 'GET') {
        if (req.url === '/api/users') {
          getUsersHandler(req, res);
        } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
          getUserByIdHandler(req, res);
        } else {
          notFoundUserHandler(req, res);
        }
      } else if (req.method === 'POST') {
        if (req.url === '/api/users') {
          createUserHander(req, res);
        } else {
          notFoundHandler(req, res);
        }
      } else {
        notFoundHandler(req, res);
      }
    })
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});