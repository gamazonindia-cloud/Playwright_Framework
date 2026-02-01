import os from 'os';
import path from 'path';
import fs from 'fs';

export function getSystemDownloadsFolder(): string {
  const homeDir = os.homedir();
  return path.join(homeDir, 'Downloads');
}

export function getLatestDownloadedFile(): string {

  const downloadsDir = getSystemDownloadsFolder();

  const files = fs.readdirSync(downloadsDir)
    .map(file => {
      const filePath = path.join(downloadsDir, file);
      return {
        path: filePath,
        time: fs.statSync(filePath).mtime.getTime()
      };
    })
    .sort((a, b) => b.time - a.time);

  if (files.length === 0) {
    throw new Error('No files found in Downloads folder');
  }

  return files[0].path;
}
