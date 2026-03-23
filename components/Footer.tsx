import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Mellem Træerne
            </h3>
            <p className="text-sm text-muted-foreground">
              En dag Mellem Træerne i Dronningedalen. Musik, fællesskab og medskabelse.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/historie" className="text-muted-foreground hover:text-primary transition-colors">
                  Historie
                </Link>
              </li>
              <li>
                <Link href="/mellem-traerne" className="text-muted-foreground hover:text-primary transition-colors">
                  Mellem Træerne
                </Link>
              </li>
              <li>
                <Link href="/frivillige" className="text-muted-foreground hover:text-primary transition-colors">
                  Frivillige
                </Link>
              </li>
              <li>
                <Link href="/praktisk" className="text-muted-foreground hover:text-primary transition-colors">
                  Praktisk info
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Dronningedalen</li>
              <li>Løgumkloster</li>
              <li className="pt-2">
                <a href="mailto:info@mellemtraerne.dk" className="hover:text-primary transition-colors">
                  info@mellemtraerne.dk
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Slotsengens Musik. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
