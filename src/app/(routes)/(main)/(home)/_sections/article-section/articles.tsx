import { Article as ArticleType } from '@/data/get-articles';

import Article from './article';

interface ArticleProps {
  articles: ArticleType[];
}

export default function Articles({ articles }: ArticleProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Article
          key={`collection-${article.id}`}
          id={article.id}
          title={article.title}
          description={article.description}
          image={article.image}
          date={article.date}
        />
      ))}
    </div>
  );
}
