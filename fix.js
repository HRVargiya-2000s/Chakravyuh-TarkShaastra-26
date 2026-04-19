const fs = require('fs');
const path = 'D:/TarkShaastra/Chakravyuh/frontend/src/pages/DashboardPrincipal.jsx';
let txt = fs.readFileSync(path, 'utf8');
txt = txt.replace(/className=\{w-full max-w-2xl rounded-2xl p-6 \}/g, 'className=\"w-full max-w-2xl rounded-2xl p-6 bg-white dark:bg-gray-800\"');
txt = txt.replace(/className=\{p-3 rounded-lg \}/g, 'className=\"p-3 rounded-lg bg-gray-100 dark:bg-gray-700\"');
txt = txt.replace(/className=\{w-full h-48 rounded-lg flex items-center justify-center \}/g, 'className=\"w-full h-48 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700\"');
fs.writeFileSync(path, txt);
