/*
 *Array of routes that are accessible to the public. [No Authentication Required] 
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification"
]

/*
 *Array of routes that are accessible only when authenticated. [Authentication Required] 
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/*
 *Prefix for API Authentication Routes
  Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/*
 * Default redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";