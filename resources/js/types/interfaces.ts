import React from "react";

type PlatformUrl = string | null;

interface Book {
    id: number;
    title: string;
    slug: string;
    authors: Author[];
    year: number;
    isbn: string;
    description: string;
    collection: Collection;
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
    classrooms: string[];
}

interface BannerProps {
    title?: string;
    description?: React.ReactNode;
    backgroundImage?: string;
    textAlign?: "center" | "left" | "right";
    className?: string;
    padding?: string;
}
// Interface pour la collection de livres
interface BookCollection {
    books: Book[];
}

interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    featured_image: string;
    published_at: string;
    categories: BlogCategory[];
    tags?: BlogTag[];
}

interface BlogCategory {
    id: number;
    name: string;
    slug: string;
}

interface BlogTag {
    id: number;
    name: string;
    slug: string;
}

enum BookFormat {
    PAPER = "Papier uniquement",
    DIGITAL = "Numérique uniquement",
    BOTH = "Papier et numérique",
}

enum BookAudience {
    GENERAL = "Grand Public",
    PROFESSIONAL = "Professionnel",
    CHILDREN = "8-12 ans",
    ADULT = "Adulte",
}

interface Author {
    id: number;
    name: string;
    slug: string;
    //books?: Book[];
    profession?: string;
    biography?: string;
    photo?: string;
    linkedin?: string;
    facebook?: string;
}

interface BookLanguage {
    id: number;
    name: string;
}

interface Team {
    id: number;
    name: string;
    position: string;
    photo: string;
    facebook?: string;
    linkedin?: string;
    bio?: string;
}

interface Collection {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    books?: Book[];
}

export type {
    Book,
    BookCollection,
    PlatformUrl,
    Author,
    BannerProps,
    Team,
    Post,
    BlogCategory,
    BlogTag,
    BookLanguage,
    Collection,
};
export { BookFormat, BookAudience };
