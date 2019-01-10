import json
import logging
from datetime import datetime
import tornado.web
import tornado.ioloop


class Backend(tornado.web.RequestHandler):
    
    def _process_request(self):
        logging.debug('New request: {}.'.format(self.request))
        action_arg = self.get_argument('action', None)
        
        if action_arg is None:
            self.write(json.dumps({
                'success': False,
                'error': 'Action needed.',
                'execdt': str(datetime.now())
            }))
        else:
            action = '{}{}'.format(action_arg, self.request.method.upper())
            if not hasattr(self, action):
                self.write(json.dumps({
                    'success': False,
                    'error': 'Unknown action: {}.'.format(action),
                    'execdt': str(datetime.now())
                }))
            else:
                action_fn = getattr(self, action)
                result = action_fn()
                result['execdt'] = str(datetime.now())
                self.write(json.dumps(result))

    def get(self):
        logging.debug('GET arguments: {} (type {})'.format(str(self.request.arguments), str(type(self.request.arguments))))
        return self._process_request()

    def post(self):
        logging.debug('POST request.body: {}'.format(self.request.body))
        logging.debug('POST arguments: {} (type {})'.format(str(self.request.arguments), str(type(self.request.arguments))))
        return self._process_request()
    
    def probeGET(self):
        return {
            'success': True,
            'message': 'probe succeeded using GET.'
        }

    def probePOST(self):
        return {
            'success': True,
            'message': 'probe succeeded using POST.'
        }


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    
    handlers = [
        (r'/backend', Backend, {}),
        (r'/(.*)', tornado.web.StaticFileHandler, {
            'path': '../app',
            'default_filename': 'index.html'
        }),
    ]

    app = tornado.web.Application(handlers, debug=True)
    try:
        logging.debug('Server starting at http://localhost:8000.')
        app.listen(8000)
        tornado.ioloop.IOLoop.instance().start()
    except Exception as e:
        logging.error(str(e))

    tornado.ioloop.IOLoop.instance().stop()
