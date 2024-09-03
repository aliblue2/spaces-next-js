import slugify from "slugify";

const dataBase = require("better-sqlite3");
const db = dataBase("spaces.db");

export async function getAllSpaces() {
  new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM spaces").all();
}

export async function getSpceBySlug(slug) {
  new Promise((resolve) => setTimeout(resolve, 3000));
  const space = db
    .prepare(
      `
    SELECT * FROM spaces WHERE slug = ?
    `
    )
    .get(slug);

  if (space) {
    space.tags = JSON.parse(space.tags); // Convert JSON string back to array
    space.gallery = JSON.parse(space.gallery); // Convert JSON string back to array
  }

  return space;
}

export async function saveSpace(space) {
  space.slug = slugify(space.title);
  space.tags = space.tags.trim().split(/\s*,\s*/);
  space.gallery = space.gallery.trim().split(/\s*,\s*/);;
  space.tags = JSON.stringify(space.tags);
  space.gallery = JSON.stringify(space.gallery);

  db.prepare(
    `
    INSERT INTO spaces (
      title, 
      description, 
      location, 
      tags, 
      image, 
      gallery, 
      price_per_day, 
      price_per_mounth, 
      slug
    ) VALUES (
      @title,
      @description,
      @location,
      @tags,
      @image,
      @gallery,
      @price_per_day,
      @price_per_mounth,
      @slug
    )
    `
  ).run(space);
}
