const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:|^\/\//i;

const getBasePrefix = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
};

export const withBasePath = (path?: string | null) => {
  if (!path || ABSOLUTE_URL_PATTERN.test(path) || path.startsWith("#")) {
    return path;
  }

  const basePrefix = getBasePrefix();
  if (basePrefix && (path === basePrefix || path.startsWith(`${basePrefix}/`))) {
    return path;
  }

  if (path === "/") {
    return basePrefix ? `${basePrefix}/` : "/";
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return basePrefix ? `${basePrefix}${normalizedPath}` : normalizedPath;
};

export const stripBasePath = (path?: string) => {
  const basePrefix = getBasePrefix();
  if (!basePrefix || !path) {
    return path;
  }

  if (path === basePrefix) {
    return "/";
  }

  return path.startsWith(`${basePrefix}/`) ? path.slice(basePrefix.length) : path;
};
