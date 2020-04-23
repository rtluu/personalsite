/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onRouteUpdate = ({ location, prevLocation }) => {
    if (location && location.state)
        location.state.referrer = prevLocation ? prevLocation.pathname : null
}