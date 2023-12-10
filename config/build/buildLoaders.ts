import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  // if we dont use TS than we would need to add babel here.
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  return [typescriptLoader, sassLoader];
}
