// it is a global kind of a thing - we can use it anywhere we want

import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;