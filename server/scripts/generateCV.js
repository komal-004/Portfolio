// Generates server/files/Komal_CV.pdf and Komal_CV.docx
// Run with: npm run generate-cv   (edit the content below first)
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, BorderStyle } = require('docx');

const outDir = path.join(__dirname, '..', 'files');
fs.mkdirSync(outDir, { recursive: true });

const cv = {
  name: 'Komal',
  title: 'Backend & Full-Stack Developer',
  email: 'komaljangid0909@gmail.com',
  summary:
    'Student at JK Lakshmipat University and early-stage developer with hands-on experience across full-stack. Currently completed my PS-I internship at Saffron Synaptiq as a backend developer on the LinkedCRM project.',
  experience: [
    {
      role: 'Backend Developer Intern (PS-I)',
      org: 'Saffron Synaptiq Pvt Ltd.',
      points: [
        'Backend developer on LinkedCRM, a CRM platform for LinkedIn marketing campaigns and lead generation.',
        'Built with React.js, Node.js and PostgreSQL.',
        'Generated Swagger/OpenAPI documentation for the backend API routes.',
        'Worked in a shared Git workflow, resolving merge conflicts and environment configuration issues.',
      ],
    },
  ],
  education: [{ degree: 'Undergraduate Student', org: 'JK Lakshmipat University' }],
  projects: [
    {
      name: 'Smart Public Transport & Ticketing System ',
      desc: 'Implemented backend functionality using JavaScript with MySQL integration for secure data storage, while enhancing passenger convenience, transparency and efficiency in public transport services.',
    },
    {
      name: 'Face Detection',
      desc: 'Gained hands-on experience in computer vision and image processing by drawing real-time bounding boxes around detected faces.',
    },
    
    {
      name: 'Stock Price Prediction',
      desc: 'Visualized actual and predicted stock price trends using Matplotlib for trend analysis.',
    },
  ],
  skills: {
    Frontend: 'React.js, HTML, CSS, JavaScript',
    Backend: 'Node.js, Express.js, PostgreSQL, MongoDB, REST APIs, Swagger',
    'Tools & Technologies': 'Git, Docker, VS Code',
  },
};

// ---------- PDF ----------
function buildPdf() {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  doc.pipe(fs.createWriteStream(path.join(outDir, 'Komal_CV.pdf')));

  const accent = '#b4492a';
  const heading = (t) => {
    doc.moveDown(0.9);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(accent).text(t.toUpperCase(), { characterSpacing: 1 });
    const y = doc.y + 2;
    doc.moveTo(50, y).lineTo(545, y).lineWidth(0.6).strokeColor('#cccccc').stroke();
    doc.moveDown(0.5);
    doc.fillColor('#222222');
  };

  doc.font('Helvetica-Bold').fontSize(26).fillColor('#1a1a1a').text(cv.name);
  doc.font('Helvetica').fontSize(12).fillColor(accent).text(cv.title);
  doc.fontSize(10).fillColor('#555555').text(cv.email);

  heading('Summary');
  doc.font('Helvetica').fontSize(10.5).text(cv.summary, { lineGap: 2 });

  heading('Experience');
  cv.experience.forEach((e) => {
    doc.font('Helvetica-Bold').fontSize(11).text(e.role);
    doc.font('Helvetica-Oblique').fontSize(10).fillColor('#555555').text(e.org);
    doc.fillColor('#222222').font('Helvetica').fontSize(10.5);
    e.points.forEach((p) => doc.text('•  ' + p, { indent: 8, lineGap: 2 }));
  });

  heading('Education');
  cv.education.forEach((e) => {
    doc.font('Helvetica-Bold').fontSize(11).text(e.degree);
    doc.font('Helvetica').fontSize(10.5).text(e.org);
  });

  heading('Projects');
  cv.projects.forEach((p) => {
    doc.font('Helvetica-Bold').fontSize(11).text(p.name);
    doc.font('Helvetica').fontSize(10.5).text(p.desc, { lineGap: 2 });
    doc.moveDown(0.3);
  });

  heading('Skills');
  Object.entries(cv.skills).forEach(([k, v]) => {
    doc.font('Helvetica-Bold').fontSize(10.5).text(k + ': ', { continued: true });
    doc.font('Helvetica').text(v);
  });

  doc.end();
}

// ---------- DOCX ----------
async function buildDocx() {
  const h = (text) =>
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 280, after: 100 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'CCCCCC', space: 2 } },
      children: [new TextRun({ text: text.toUpperCase(), bold: true, color: 'B4492A', size: 22 })],
    });
  const p = (text, opts = {}) =>
    new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text, size: 21, ...opts })] });

  const children = [
    new Paragraph({ children: [new TextRun({ text: cv.name, bold: true, size: 52 })] }),
    new Paragraph({ children: [new TextRun({ text: cv.title, color: 'B4492A', size: 24 })] }),
    p(cv.email, { color: '555555' }),

    h('Summary'),
    p(cv.summary),

    h('Experience'),
  ];
  cv.experience.forEach((e) => {
    children.push(p(e.role, { bold: true, size: 22 }));
    children.push(p(e.org, { italics: true, color: '555555' }));
    e.points.forEach((pt) =>
      children.push(new Paragraph({ bullet: { level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: pt, size: 21 })] }))
    );
  });

  children.push(h('Education'));
  cv.education.forEach((e) => {
    children.push(p(e.degree, { bold: true, size: 22 }));
    children.push(p(e.org));
  });

  children.push(h('Projects'));
  cv.projects.forEach((pr) => {
    children.push(p(pr.name, { bold: true, size: 22 }));
    children.push(p(pr.desc));
  });

  children.push(h('Skills'));
  Object.entries(cv.skills).forEach(([k, v]) =>
    children.push(
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: k + ': ', bold: true, size: 21 }), new TextRun({ text: v, size: 21 })],
      })
    )
  );

  const doc = new Document({ sections: [{ children }] });
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(outDir, 'Komal_CV.docx'), buffer);
}

buildPdf();
buildDocx().then(() => console.log('CV files generated in server/files'));
