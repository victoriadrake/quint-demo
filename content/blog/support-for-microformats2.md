---
title: Support for Microformats2
date: '2024-08-25T18:13:27.758Z'
draft: false
---
Quint provides support for IndieWeb through the use of microformats2. The theme makes your content more accessible and better suited for search engines, social media platforms, and other applications that consume structured data.

## Why Use Microformats2?

Microformats2 classes allow you to describe the content of your pages more effectively. For example, by marking up data that describes people, posts, or events, you can make this data available in a standardized format that can be interpreted by a variety of IndieWeb services. This enhances how your content is used and displayed across the web.

For a deeper dive into microformats2, you can explore the [Microformats Wiki](http://microformats.org/wiki/Main_Page) for extensive documentation and examples.

## Microformats in Quint

The following classes are supported in Quint's templates:

- **h-entry**: This class is applied to the main container of a blog post or article. It marks the content as an entry, such as a blog post or other published content.

- **p-name**: This class is added to the title of a post or entry. It helps define the name or title of the content.

- **e-content**: Applied to the main content area, this class indicates that the enclosed content is the primary content of the entry.

- **dt-published datetime**: Applied to the published date of the entry.

- **h-card**: This class is used for person or organization details, such as an author’s information. It groups related information into a single entity.

- **u-url**: When used inside an `h-card`, this class marks up links to URLs associated with the entity, such as the author’s homepage or profile.

- **u-photo**: Applied to images inside an `h-card`, this class identifies photos associated with the entity, such as a profile picture or logo.

For more details on microformats2, including additional classes and how to implement them, check out the [Microformats Wiki](http://microformats.org/wiki/Main_Page).
