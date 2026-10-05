import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const publicImagesDir = path.join(projectRoot, 'public', 'images');
const heroBgSrc = path.join(projectRoot, 'src', 'assets', 'images', 'hero-bg.jpg');
const heroBgPublic = path.join(projectRoot, 'public', 'images', 'hero-bg.webp');

async function processHero() {
  const statsBefore = fs.statSync(heroBgSrc);
  await sharp(heroBgSrc)
    .resize(1920, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(heroBgPublic);

  const statsAfter = fs.statSync(heroBgPublic);
  console.log(`Hero Image: ${statsBefore.size} bytes -> ${statsAfter.size} bytes (${((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1)}% reduction)`);
}

async function processPublicImages() {
  const files = fs.readdirSync(publicImagesDir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const srcPath = path.join(publicImagesDir, file);
      const baseName = path.basename(file, path.extname(file));
      const destPath = path.join(publicImagesDir, `${baseName}.webp`);

      const statsBefore = fs.statSync(srcPath);
      await sharp(srcPath)
        .resize(800, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(destPath);

      const statsAfter = fs.statSync(destPath);
      console.log(`${file}: ${statsBefore.size} bytes -> ${statsAfter.size} bytes (${((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1)}% reduction)`);
      // Remove original JPG to keep build lean
      fs.unlinkSync(srcPath);
    }
  }
}

async function main() {
  console.log('Optimizing images...');
  await processHero();
  await processPublicImages();
  console.log('Image optimization complete!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
