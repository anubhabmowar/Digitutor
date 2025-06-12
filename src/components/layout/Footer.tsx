export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} DigiTutor. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Empowering Digital Literacy for Everyone.
        </p>
      </div>
    </footer>
  );
}
