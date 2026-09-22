export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let redirect = false;

    if (url.protocol === "http:") {
      url.protocol = "https:";
      redirect = true;
    }

    if (url.hostname === "www.computeraidedcomposition.com") {
      url.hostname = "computeraidedcomposition.com";
      redirect = true;
    }

    if (redirect) {
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
