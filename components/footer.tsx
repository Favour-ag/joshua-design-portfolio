export function Footer() {
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto flex justify-around px-6">
        <p className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          © 2024 Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
