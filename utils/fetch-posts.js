const fs = require('fs');
const https = require('https');
const path = require('path');

// TODO: Change "quint" below to your Collected Notes site name
const API_URL = 'https://collectednotes.com/quint.json';

// Directory to save markdown files
const CONTENT_DIR = path.join(__dirname, '../content/blog');

// Ensure the directory exists
fs.mkdir(CONTENT_DIR, { recursive: true }, (err) => {
    if (err) {
        console.error('Failed to create directory:', err);
        return;
    }

    // Fetch the posts using https
    https.get(API_URL, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const posts = JSON.parse(data).notes;

            // Create markdown files for each post
            posts.forEach(post => {
                const filePath = path.join(CONTENT_DIR, `${post.path}.md`);

                // Split the body into lines, remove the first line, and rejoin the rest
                const bodyWithoutTitle = post.body.split('\n').slice(1).join('\n');

                const content = `---
title: "${post.title.replace(/"/g, '\\"')}"
date: "${new Date(post.updated_at).toISOString()}"
draft: false
description: "${post.headline.replace(/"/g, '\\"')}"
---
${bodyWithoutTitle}
`;

                fs.writeFileSync(filePath, content, 'utf8');
            });
        });
    }).on('error', (e) => {
        console.error(`Failed to fetch posts: ${e.message}`);
    });
});
