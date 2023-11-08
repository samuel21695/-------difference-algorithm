export default function (filename) {
  // todo need more research dealing with try catch statement && ESM modules
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading files')
    return null;
  }
}