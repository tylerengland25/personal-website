export const blogTags = ['Web Development', 'Programming', 'Tutorial'] as const;

export type BlogTag = (typeof blogTags)[number];
