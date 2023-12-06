import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildWebpackConfig(props: BuildOptions): webpack.Configuration {
  const { mode = 'development', paths } = props;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(props),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
