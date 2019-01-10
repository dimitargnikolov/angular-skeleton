# Web App with AngularJS Client and Tornado Server

To get started, you need [npm](https://www.npmjs.com/) for the AngularJS client, and [Python3](https://www.python.org/) and [virtualenv](https://virtualenv.pypa.io/en/latest/) for the server.

Clone the repository:
```
$ clone https://github.com/dimitargnikolov/angular-skeleton.git
$ cd angular-skeleton
```

## Client Setup

```
$ npm install
```

If you want the client unit tests continuously running:

```
$ npm test
```

If you want to run the client end-to-end tests once:

```
$ npm run protractor
```

## Server Setup

```
$ cd ../server
$ virtualenv python3 VENV
$ source VENV/bin/activate
$ pip install -r requirements.txt
$ python server.py
```

You can now access the skeleton app at `http://localhost:8000`.
