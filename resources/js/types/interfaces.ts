type PlatformUrl = string | null;

interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    isbn: string;
    description: string;
    category: string;
    theme: string;
    audience: string;
    language: string;
    format: string;
    releaseDate: string;
    pages: number;
    price: number;
    cover: string;
    new: string;
    amazon_url: PlatformUrl;
    adinkra_url: PlatformUrl;
    youscribe_url: PlatformUrl;
    lq_url: PlatformUrl;
}

// Interface pour la collection de livres
interface BookCollection {
    books: Book[];
}

// Énumérations optionnelles pour les valeurs fixes
enum BookFormat {
    PAPER = "Papier uniquement",
    DIGITAL = "Numérique uniquement",
    BOTH = "Papier et numérique",
}

enum BookLanguage {
    FRENCH = "Français",
    ENGLISH = "Anglais",
}

enum BookAudience {
    GENERAL = "Grand Public",
    PROFESSIONAL = "Professionnel",
    CHILDREN = "8-12 ans",
    ADULT = "Adulte",
}

export type { Book, BookCollection, PlatformUrl };
export { BookFormat, BookLanguage, BookAudience };
