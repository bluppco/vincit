export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.vincit.blupp.co" : "https://api.vincit.blupp.co"

}
