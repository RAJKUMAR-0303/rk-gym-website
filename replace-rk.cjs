const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = [...walk('src').filter(f => f.endsWith('.js') || f.endsWith('.jsx')), 'index.html', 'package.json'];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let original = c;
  
  // Replace "RK Gym", "RK gym", "RK GYM" with "RK"
  c = c.replace(/RK Gym/gi, 'RK');
  
  // Replace "FitForge Gym", "Fit Forge", "FitForge" with "RK"
  c = c.replace(/FitForge Gym/gi, 'RK');
  c = c.replace(/Fit Forge/gi, 'RK');
  c = c.replace(/FitForge/gi, 'RK');
  c = c.replace(/fitforge/gi, 'rk');
  c = c.replace(/FITFORGE/g, 'RK');
  
  // Also fix "RK Gym" that became "RK Gym Gym" if any
  c = c.replace(/RK Gym/gi, 'RK');
  c = c.replace(/RK RK/gi, 'RK');

  if (c !== original) {
    fs.writeFileSync(f, c);
    console.log('Updated ' + f);
  }
});
