const fs = require('fs');
const axiosInstance = require('axios').default;

axiosInstance
  .get('https://admin-panel-goldenowl.herokuapp.com/api/v1/posts')
  .then((response) => {
    const listBlog = response.data.data;

    const listBlogSlug = listBlog.map((blog) => ({
      key: blog.attributes.title,
      url: blog.attributes.slug,
    }));

    fs.writeFile(
      './server/sitemap/utils/blogs.json',
      JSON.stringify(listBlogSlug),
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log('Replaced new list blog slug!!!');
      },
    );
  })
  .catch((err) => {
    console.log(err);
    console.log('Get new list blog slug failed!!!');
  });
