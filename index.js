/**
 * YouTube Thumbnail Fetcher
 * Extract high-resolution YouTube thumbnails from any URL.
 * Backed by ThumbHD: https://thumbhd.com
 */

const YOUTUBE_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|live\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

/**
 * Extracts the 11-character YouTube video ID.
 * @param {string} url - YouTube video or Shorts link.
 * @returns {string|null} - Video ID or null if invalid.
 */
function extractVideoId(url) {
  if (typeof url !== 'string') return null;
  const match = url.trim().match(YOUTUBE_REGEX);
  return match ? match[1] : null;
}

/**
 * Generates thumbnail URLs for all available qualities.
 * @param {string} url - YouTube video URL or Video ID.
 * @returns {object} - Map of thumbnail qualities and URLs.
 */
function getThumbnails(url) {
  const videoId = extractVideoId(url) || (url.length === 11 ? url : null);

  if (!videoId) {
    throw new Error('Invalid YouTube URL or Video ID');
  }

  const base = `https://img.youtube.com/vi/${videoId}`;

  return {
    videoId,
    maxres: `${base}/maxresdefault.jpg`, // 1280x720 (Full HD)
    standard: `${base}/sddefault.jpg`,    // 640x480 (SD)
    high: `${base}/hqdefault.jpg`,        // 480x360 (HQ)
    medium: `${base}/mqdefault.jpg`,      // 320x180 (MQ)
    default: `${base}/default.jpg`,        // 120x90 (Small)
  };
}

module.exports = {
  extractVideoId,
  getThumbnails,
};