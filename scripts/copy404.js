// Copy docs/index.html to docs/404.html for GitHub Pages SPA routing fallback.
import { copyFile, constants } from 'fs';
import { resolve } from 'path';

const src = resolve('docs', 'index.html');
const dest = resolve('docs', '404.html');

copyFile(src, dest, constants.COPYFILE_FICLONE, (err) => {
  if (err) {
    console.error('Failed to create 404.html from index.html:', err);
    process.exit(1);
  } else {
    console.log('Created docs/404.html for GitHub Pages routing.');
  }
});
