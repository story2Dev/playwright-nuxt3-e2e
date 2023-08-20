create TABLE IF NOT EXISTS todos (
  id serial PRIMARY KEY,
  title character varying NOT NULL,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamp without time zone NOT NULL DEFAULT now(),
  updated_at timestamp without time zone NOT NULL DEFAULT now()
);