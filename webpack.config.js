import path, {dirname} from "path"
import { fileURLToPath } from 'url';

// const entryFiles = fs.readdir(folder, (err, files) => {
//     if (err) {
//       console.error('Erro ao ler a pasta:', err);
//       return;
//     }
  
//     const entries = Object.fromEntries(
//         files.map(file => { 
//             const fileName = path.parse(file).name
//             return [`pages/${fileName}`, `./src/js/pages/${fileName}.js`]
//         })
//       );
//       console.log(entries)
//       return entries
// });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const webpackConfig = {
        mode: 'production',
        entry: { 
          "main":  './src/js/main.js',
          "pages/home-page":  './src/js/pages/home-page.js',
          "libs/slick": "./src/js/libs/slick.min.js",
          "libs/jquery": "./src/js/libs/jquery.min.js"

        },
        output: 
        {
            filename: '[name].min.js',
            path: path.resolve(__dirname, 'dist/js'),
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                      'style-loader', // 3. Inject styles into DOM
                      'css-loader',   // 2. Turn css into commonjs
                      'sass-loader'   // 1. Turn scss into css
                    ],
                },
            ],
        },
    };
  

export default webpackConfig