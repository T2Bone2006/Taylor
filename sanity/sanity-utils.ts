"use client"
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { config } from "@/sanity.config";
import { SanityTypes } from "./types";

export const client = createClient(config);

const builder = imageUrlBuilder(client);


export const urlFor = (source: SanityTypes) => builder.image(source);
