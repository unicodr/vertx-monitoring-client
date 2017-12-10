import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as webpack from 'webpack';
import * as path from 'path';
import config from '../webpack.config';

class Server {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware(webpack(config));
    this.routes();
  }

  private middleware(compiler: webpack.Compiler): void {
    this.express.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.express.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../src/client/index.html')));
  }
}

const port = (process.env.PORT || 3000);
export default new Server().express.listen(port).on('listening', () => {
  console.log(`Server started on port ${port}`);
});

