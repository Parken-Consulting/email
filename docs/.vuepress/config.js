module.exports = {
  title: "Transactional Emails - Parken Consulting, India",
  description: "AWS SES Integrations, Click Tracking, Open Tracking, Email Inbox Placement Consulting from India",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "AWS SES", link: "/guide/transactional-email-click-and-open-tracking.html" },
    ]
  },
  dest: "public",
  plugins: [
      'social-share',
    {
      'sitemap': {
        hostname: 'https://email.parkenconsulting.com/'
      },
    }
  ],
};
