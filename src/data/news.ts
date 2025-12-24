export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading?: string;
      text: string;
    }[];
  };
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'neue-website-online',
    title: 'Unsere neue Website ist online',
    excerpt: 'Wir freuen uns, unsere brandneue Website vorzustellen. Moderne Optik, einfache Navigation und alle Infos rund um Chassis, Motoren und unser Team.',
    date: '2024-01-15',
    author: 'NB Motorsport Team',
    category: 'Allgemein',
    image: '/26.png',
    content: {
      intro: 'Nach mehreren Monaten Arbeit ist es endlich soweit: Unsere neue Website geht live. Mit frischem Design und verbesserter Benutzerfreundlichkeit möchten wir euch noch besser über unsere Leistungen, Produkte und das Team informieren.',
      sections: [
        {
          heading: 'Was ist neu?',
          text: 'Die neue Website bietet eine klare Struktur mit direktem Zugang zu allen wichtigen Bereichen: Chassis, Motoren, Team-Infos und Kontaktmöglichkeiten. Alle Inhalte sind jetzt auch auf mobilen Geräten optimal nutzbar.'
        },
        {
          heading: 'Für Fahrer und Interessierte',
          text: 'Egal ob du auf der Suche nach einem neuen Chassis bist, dich für unsere Motorenwartung interessierst oder einfach mehr über unser Rennteam erfahren möchtest – hier findest du alle Informationen auf einen Blick.'
        },
        {
          heading: 'Kontakt leicht gemacht',
          text: 'Mit unserem neuen Kontaktformular und den direkten Ansprechpartnern sind wir noch schneller für euch erreichbar. Schreibt uns bei Fragen oder Anfragen – wir freuen uns auf eure Nachrichten!'
        }
      ]
    }
  },
  {
    id: 'frohe-weihnachten-2024',
    title: 'Frohe Weihnachten und einen guten Rutsch',
    excerpt: 'Das gesamte Team von NB Motorsport wünscht frohe Weihnachten, erholsame Feiertage und einen erfolgreichen Start ins neue Rennjahr 2025.',
    date: '2024-12-24',
    author: 'NB Motorsport Team',
    category: 'Team',
    image: '/27.jpg',
    content: {
      intro: 'Die Rennsaison 2024 war intensiv, erfolgreich und voller unvergesslicher Momente. Wir möchten uns bei allen Fahrern, Partnern und Unterstützern für das Vertrauen und die tolle Zusammenarbeit bedanken.',
      sections: [
        {
          heading: 'Rückblick auf 2024',
          text: 'Es war ein starkes Jahr für NB Motorsport: Wir durften viele Fahrer auf ihrem Weg begleiten, neue Chassis ausliefern und unsere Motorenwerkstatt weiter ausbauen. Besonders stolz sind wir auf die Erfolge unserer Teamfahrer bei nationalen und internationalen Rennen.'
        },
        {
          heading: 'Danke an alle',
          text: 'Ein großes Dankeschön geht an alle, die uns unterstützt haben – von unseren Fahrern über deren Familien bis hin zu unseren technischen Partnern. Ohne euch wären diese Erfolge nicht möglich gewesen.'
        },
        {
          heading: 'Vorfreude auf 2025',
          text: 'Wir starten motiviert in die neue Saison und haben bereits einige spannende Projekte in Planung. Bleibt dran und lasst uns gemeinsam 2025 zu einem erfolgreichen Rennjahr machen. Frohe Weihnachten und einen guten Rutsch ins neue Jahr!'
        }
      ]
    }
  }
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.id === slug);
}

export function getAllArticles(): NewsArticle[] {
  return newsArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
