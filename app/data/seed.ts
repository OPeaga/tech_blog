import { prisma } from "@/app/lib/prisma";

async function seed() {
  const [lucas, carla, rafael, fernanda, bruno, juliana, marcos] =
    await Promise.all([
      prisma.user.create({ data: { name: "Lucas Mendes", img: "https://i.pravatar.cc/150?u=u1" } }),
      prisma.user.create({ data: { name: "Carla Souza" } }),
      prisma.user.create({ data: { name: "Rafael Costa", img: "https://i.pravatar.cc/150?u=u3" } }),
      prisma.user.create({ data: { name: "Fernanda Lima" } }),
      prisma.user.create({ data: { name: "Bruno Alves", img: "https://i.pravatar.cc/150?u=u5" } }),
      prisma.user.create({ data: { name: "Juliana Rocha", img: "https://i.pravatar.cc/150?u=u6" } }),
      prisma.user.create({ data: { name: "Marcos Teixeira" } }),
    ]);

  await prisma.post.createMany({
    data: [
      { userId: lucas.id,    theme: "Technology", subtheme: "TypeScript", text: "Union types changed how I think about publishedAt modeling.",                              publishedAt: new Date("2024-11-01") },
      { userId: carla.id,    theme: "Career",                             text: "Migrating from PL/SQL to JS is a wild ride.",                                             publishedAt: new Date("2025-01-15") },
      { userId: rafael.id,   theme: "Technology", subtheme: "Oracle",     text: "Pipelined functions are underrated. Querying PL/SQL logic like a table is a game changer.", publishedAt: new Date("2025-02-10") },
      { userId: fernanda.id, theme: "Career",                             text: "Three years as a DBA before touching JavaScript. The context switch is real.",             publishedAt: new Date("2025-03-01") },
      { userId: bruno.id,    theme: "Technology", subtheme: "Node.js",    text: "Async/await saved me from callback hell. Now I just have promise hell.",                   publishedAt: new Date("2025-03-18") },
      { userId: juliana.id,  theme: "Technology", subtheme: "SQL",        text: "CONNECT BY LEVEL is one of those Oracle tricks you don't forget once you learn it.",       publishedAt: new Date("2025-04-02") },
      { userId: marcos.id,   theme: "Opinion",                            text: "Code review culture matters more than the stack you use.",                                 publishedAt: new Date("2025-04-09") },
    ],
  });

  console.log("Seed concluído: 7 usuários e 7 posts inseridos.");
}

seed()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
