DROP TABLE IF EXISTS fighters;

CREATE TABLE fighters (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  japanese TEXT NOT NULL,
  originalAppearance TEXT NOT NULL,
  birthplace TEXT NOT NULL,
  fightingStyle TEXT NOT NULL,
  job TEXT NOT NULL,
  powers TEXT NOT NULL,
  image TEXT NOT NULL,
  quote TEXT NOT NULL
);