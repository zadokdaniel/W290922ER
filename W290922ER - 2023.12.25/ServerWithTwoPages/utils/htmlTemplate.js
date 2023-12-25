function htmlTemplate({ title = "", head = "", body = "" } = {}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${title}</title>
            ${head}
        </head>
        <body>
            ${body}
        </body>
    </html>

`;
}

module.exports = {
  htmlTemplate,
};
