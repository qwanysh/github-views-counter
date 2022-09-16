const { renderBadge, updateViews } = require("./utils");

const REPOSITORY_URL = "https://github.com/qwanysh/github-views-counter";

const indexHandler = (req, res) => {
  res.redirect(REPOSITORY_URL);
};

const viewsHandler = async (req, res) => {
  const { username } = req.params;
  const { color, style } = req.query;

  const views = await updateViews(username);
  let badge;

  try {
    badge = renderBadge(views, color, style);
  } catch (err) {
    res.status(400).send();
    return;
  }

  res.set("content-type", "image/svg+xml");
  res.set("cache-control", "max-age=0, no-cache, no-store, must-revalidate");
  res.send(badge);
};

module.exports = {
  indexHandler,
  viewsHandler,
};
