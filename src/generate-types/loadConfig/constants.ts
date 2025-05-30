import type { Config } from '../../types.js';

export const DEFAULT_CONFIG: Config = {
  inputDir: null,
  outputPath: './',
  outputFileName: 'translations.d.ts',
  localeFilesExtension: '.json',
  generateDocs: true,
  generateKeys: true,
  generateParams: true,
  preferredLangOrder: ['sad'],
};
