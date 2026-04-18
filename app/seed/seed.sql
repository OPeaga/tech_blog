-- DDL
CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  img        TEXT
);

CREATE TABLE posts (
  id           SERIAL PRIMARY KEY,
  user_id      INT          NOT NULL REFERENCES users(id),
  theme        VARCHAR(50)  NOT NULL,
  subtheme     VARCHAR(50),
  text         TEXT         NOT NULL,
  published_at DATE         NOT NULL
);

-- Users
INSERT INTO users (id, name, img) VALUES
  (1, 'Lucas Mendes',    'https://i.pravatar.cc/150?u=u1'),
  (2, 'Carla Souza',     NULL),
  (3, 'Rafael Costa',    'https://i.pravatar.cc/150?u=u3'),
  (4, 'Fernanda Lima',   NULL),
  (5, 'Bruno Alves',     'https://i.pravatar.cc/150?u=u5'),
  (6, 'Juliana Rocha',   'https://i.pravatar.cc/150?u=u6'),
  (7, 'Marcos Teixeira', NULL);

-- Posts
INSERT INTO posts (id, user_id, theme, subtheme, text, published_at) VALUES
  (1, 1, 'Technology', 'TypeScript', 'Union types changed how I think about publishedAt modeling.',                                 '2024-11-01'),
  (2, 2, 'Career',     NULL,         'Migrating from PL/SQL to JS is a wild ride.',                                                '2025-01-15'),
  (3, 3, 'Technology', 'Oracle',     'Pipelined functions are underrated. Querying PL/SQL logic like a table is a game changer.', '2025-02-10'),
  (4, 4, 'Career',     NULL,         'Three years as a DBA before touching JavaScript. The context switch is real.',               '2025-03-01'),
  (5, 5, 'Technology', 'Node.js',    'Async/await saved me from callback hell. Now I just have promise hell.',                    '2025-03-18'),
  (6, 6, 'Technology', 'SQL',        'CONNECT BY LEVEL is one of those Oracle tricks you don''t forget once you learn it.',       '2025-04-02'),
  (7, 7, 'Opinion',    NULL,         'Code review culture matters more than the stack you use.',                                   '2025-04-09');
