// export default function handler(req, res) {
//   const { filepath } = req.query;
//   if (!filepath) {
//     return res.status(400).json({ error: '缺少文件路径参数' });
//   }
  
//   const fs = require('fs');
//   const path = require('path');
//   const fullPath = path.join(process.cwd(), 'public', filepath);
  
//   try {
//     const html = fs.readFileSync(fullPath, 'utf8');
//     res.setHeader('Content-Type', 'text/html');
//     res.send(html);
//   } catch (err) {
//     res.status(404).json({ error: '文件未找到' });
//   }
// }