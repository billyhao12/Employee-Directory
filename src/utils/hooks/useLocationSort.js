const useLocationSort = ( sort ) => {

    return (userA, userB) => {

        if (!sort) return 0;

        const locationA = `${userA.location.city}, ${userA.location.state}`;
        const locationB = `${userB.location.city}, ${userB.location.state}`;

        if (locationA < locationB) {
            return sort === "asc" ? -1 : 1;
        }

        if (locationA > locationB) {
            return sort === "asc" ? 1 : -1;
        }

        return 0;

    }

}

export default useLocationSort;