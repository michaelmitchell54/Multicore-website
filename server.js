const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  etag: true
}));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Multicore website running on port ${PORT}`);
});
