// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold my-8 text-center">
        About JS Vibe Coding
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4">
          This project is created to demonstrate the skills learned during the
          course. The main goal is to build a full-featured web application
          using modern technologies like Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="mb-4">
          The application serves as a simple content management system (CMS) for
          mashups, allowing users to discover, listen, and (in the future)
          manage their own mashup collections.
        </p>
        <p>
          This project adheres to the grading criteria, including features like:
        </p>
        <ul className="list-disc list-inside mt-2 mb-4">
          <li>Static and dynamic pages</li>
          <li>CRUD operations for items</li>
          <li>Proper tooling setup with ESLint and Prettier</li>
          <li>Deployment with CI/CD</li>
          <li>And much more!</li>
        </ul>
      </div>
    </div>
  );
}
