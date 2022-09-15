const { makeBadge } = require("badge-maker");
const { createClient } = require("redis");
const { REDIS_URL } = require("./config");

const redisClient = createClient({ url: REDIS_URL });

const updateViews = async (username) => {
  return await redisClient.incr(`views:${username}`);
};

const renderBadge = (views, color, style) => {
  const format = {
    label: "Views",
    message: views.toString(),
    color: color || "green",
    style: style || "flat",
  };
  return makeBadge(format);
};

module.exports = {
  redisClient,
  updateViews,
  renderBadge,
};
