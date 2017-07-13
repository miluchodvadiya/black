/*module.exports = (dato, root, i18n) => {
  const content = { hello: "world" }
  root.createDataFile("data/foobar.yml", 'yaml', content)
}


module.exports = (dato, root, i18n) => {
  root.createPost("content/post/my-post.md", "yaml", {
    frontmatter: {
      title: "First article",
      type: "post",
      categories: ["random"],
      weight: 4,
      date: "2012-04-06",
    },
    content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
  });
}


module.exports = (dato, root, i18n) => {
  root.directory("content/post", (dir) => {
    for (let i = 0; i < 10; i++) {
      dir.createPost(`post-${i}.md`, "yaml", {
        frontmatter: {
          title: `Article ${i}`,
          type: "post",
          categories: ["random"],
          weight: 4,
          date: "2012-04-06",
        },
        content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
      });
    }
  });
}
*/



/*module.exports = (dato, root, i18n) => {

  // inside a "post" directory...
  root.directory("content/post", (dir) => {


    // ...iterate over the "Blog post" records...
    dato.blogPosts.forEach((blogPost) => {

      // ...and create a markdown file for each article!
      root.createPost(`${blogPost.slug}.md`, "yaml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          categories: blogPost.categories.map(cat => cat.slug),
          date: blogPost.publishedAt,
        },
        content: blogPost.content
      });
    });
  });
}*/
/*module.exports = (dato, root) => {
  root.directory('data/', dir => {
    dir.createDataFile('home.toml', 'toml', {
      sitename: dato.homepage.sitename,
      tagline: dato.homepage.tagline,
      description: dato.homepage.description
    });
  });
}*/


module.exports = (dato, root, i18n) => {


/*
  root.directory("content/post", (dir) => {
    for (let i = 0; i < 10; i++) {
      dir.createPost(`post-${i}.md`, "yaml", {
        frontmatter: {
          title: `Article ${i}`,
          type: "post",
          categories: ["random"],
          weight: 4,
          date: "2012-04-06",
        },
        content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
      });
    }
  });*/

//console.log(dato.itemsById);

//console.log(i18n.availableLocales);



  // inside a "post" directory...
  root.directory("content/post", (dir) => {
    //console.log(dato);
    //console.log(dato.posts);

    // iterate over all the available locales...
    i18n.availableLocales.forEach((locale) => {

      // switch to the nth locale
      i18n.withLocale(locale, () => {


    // ...iterate over the "Blog post" records...
    dato.posts.forEach((blogPost) => {
    // To get the rich text of each post
    //console.log(blogPost.header.map(head => head.testPageTitle));
      // ...and create a markdown file for each article!
      root.createPost(`content/post/${blogPost.slug}.md`, "yaml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          categories: blogPost.categories,
          weight: blogPost.weight,
          date: blogPost.date,
          header: blogPost.header.map(head => head.testPageTitle),

        },
        content: blogPost.content+blogPost.testField,
        
      });
    });
  });
 });
  });
// add {{ .Params.Testfield }} in post template to get the changes in layout directory



}
