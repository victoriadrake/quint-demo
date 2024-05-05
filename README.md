[![Netlify Status](https://api.netlify.com/api/v1/badges/304f5eaf-5706-4e78-bc8d-276f3a6e086a/deploy-status)](https://app.netlify.com/sites/quint-theme-demo/deploys)

# Quint Demo Site

This is the demo site repository for **Quint**, a minimalist Hugo theme designed to offer a light, airy feel with a focus on simplicity and elegance.

[View the demo site here.](https://quint-theme-demo.netlify.app/)

For instructions on using the Quint theme for your own existing site, go to the [Quint theme repository](https://github.com/victoriadrake/hugo-theme-quint).

## Quickest Start

You can deploy this demo site as a template for your new website using Netlify. Just tap your heels together and click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/victoriadrake/quint-demo)

See [Collected Notes CMS](#collected-notes-cms) to set up posting from your iPhone.

## Still Pretty Quick Start

To run this demo site locally or deploy it to your own server, follow these steps:

### 1. Install Prerequisites

Ensure you have the following installed:

- [Hugo](https://gohugo.io/getting-started/installing/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### 2. Clone the Repository

Clone this repository to get the content and configuration of the demo site:

```bash
git clone https://github.com/victoriadrake/quint-demo.git
```

### 3. Run Locally

Navigate to the repository directory and start Hugo:

```bash
hugo server
```

Open your web browser and visit `http://localhost:1313` to view the demo site.

See [Collected Notes CMS](#collected-notes-cms) to set up posting from your iPhone.

### 4. Deployment

To deploy this demo site to a live server, follow the instructions for your preferred hosting provider. Here are guides for some common platforms:

- [GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)
- [GitLab Pages](https://gohugo.io/hosting-and-deployment/hosting-on-gitlab/)

## Collected Notes CMS

The Quint template can use the Collected Notes app as a CMS and also saves your posts to the site repository, for [redundancy](https://victoria.dev/blog/digital-resilience-redundancy-for-websites-and-communications/). It fetches new posts each time you build, and if you're deploying via Netlify or GitHub Actions, you can use a webhook to deploy the site whenever you make a new post with Collected Notes.

To set up your own site:

1. Deploy the Quint template to Netlify with the button above, or follow the [Still Pretty Quick Start](#still-pretty-quick-start) if you plan to use another deployment solution.
2. Sign up for [Collected Notes](https://collectednotes.com/) if you haven't already (there's a free plan) and download the Collected Notes app on your iPhone.
3. Update the `utils/fetch-posts.js` file to use your Collected Notes site name.
4. Allow the GitHub Action to push changes back to your repository to save your posts. Under Settings > Actions > General > Workflow permissions, choose Read and write permissions.

Netlify will trigger a new build each time you push to your site repo, or, if you have a Collected Notes Premium subscription, you can set a [Netlify Build Hook](https://docs.netlify.com/configure-builds/build-hooks/) URL in your Collected Notes site settings to automatically redeploy the site when you make a post or update an existing post.

## Contributing

Contributions to improve the template site are welcome! Please feel free to fork the repository, make changes, and submit a pull request. For more substantial changes or enhancements, please open an issue first to discuss what you would like to change.

To contribute to the Quint theme (anything under `quint-demo/themes/quint`), go to the [Quint theme repository](https://github.com/victoriadrake/hugo-theme-quint).

## License

This demo site and the Quint theme are open-sourced under the MIT License. See the LICENSE file for more details.

## Support

If you encounter any issues or have questions about using the demo site, please open an issue in this repository. For more detailed support on using Hugo, refer to the [official Hugo documentation](https://gohugo.io/documentation/).
