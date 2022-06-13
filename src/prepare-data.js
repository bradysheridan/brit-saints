const { dirname } = require('path');
const fs = require('fs');
const glob = require('glob');
const matter = require('gray-matter');

// set data source directory
const rootDir = dirname(require.main.filename);

// load saints
const saintFiles = loadFiles(rootDir + '/content/serve/saints/*.md', function(filePaths) {
  const saints = formatFiles(filePaths, 'saint');
  fs.writeFileSync(rootDir + '/content/serve/saints/index.json', JSON.stringify(saints));
});

async function loadFiles(dirPath, cb) {
  glob(dirPath, (err, files) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      cb(files);
    }
  });
}

function formatFiles(files, idPrefix) {
  let res = [];

  files.forEach((file, i) => {
    let itemId = (idPrefix) ? `${idPrefix}-${i}` : `file-${i}`;
    let item = matter.read(file).data;
    item.id = itemId;

    // format coordinates
    if (item.location.manual_latitude && item.location.manual_longitude) {
      item.location.coordinates = [parseFloat(item.location.manual_longitude), parseFloat(item.location.manual_latitude)];
    } else if (item.location.map_geojson) {
      item.location.coordinates = JSON.parse(item.location.map_geojson).coordinates;
    } else {
      item.location.coordinates = null;
    }

    res.push(item);
  });

  return res;
}
