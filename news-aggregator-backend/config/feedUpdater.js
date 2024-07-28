'use strict';

const Parser = require('rss-parser');

// 1. Fix the diffInDays function
function diffInDays(date1, date2) {
  const msInDay = 24 * 60 * 60 * 1000;
  return Math.floor((date1 - date2) / msInDay);
}

// 2. Function to fetch new feed items from a feed URL
async function getNewFeedItemsFrom(feedUrl) {
  const parser = new Parser();
  try {
    const rss = await parser.parseURL(feedUrl);
    const todaysDate = new Date();
    return rss.items.filter((item) => {
      const blogPublishedDate = new Date(item.pubDate);
      return diffInDays(todaysDate, blogPublishedDate) === 0;
    });
  } catch (error) {
    console.error(`Error fetching feed from ${feedUrl}:`, error.message);
    return []; // Return an empty array if there's an error
  }
}

// 3. Fetch feed URLs from Strapi
async function getFeedUrls() {
  try {
    return await strapi.services.feedsources.find({
      enabled: true,
    });
  } catch (error) {
    console.error('Error fetching feed URLs:', error.message);
    return [];
  }
}

// 4. Fetch new feed items from all URLs
async function getNewFeedItems() {
  let allNewFeedItems = [];
  const feeds = await getFeedUrls();

  for (let i = 0; i < feeds.length; i++) {
    const { link } = feeds[i];
    const feedItems = await getNewFeedItemsFrom(link);
    allNewFeedItems = [...allNewFeedItems, ...feedItems];
  }

  return allNewFeedItems;
}

// 5. Main function to fetch and create news items in Strapi
async function main() {
  const feedItems = await getNewFeedItems();

  for (let i = 0; i < feedItems.length; i++) {
    const item = feedItems[i];

    const newsItem = {
      title: item.title,
      preview: item.contentSnippet,
      link: item.link,
      creator: item.creator,
      sponsored: false,
    };

    try {
      await strapi.services.newsitems.create(newsItem);
    } catch (error) {
      console.error('Error creating news item:', error.message);
    }
  }
}

// 6. Export the main function
module.exports = {
  main,
};
