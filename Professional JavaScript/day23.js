// ES4 + features

// messy code

const apiResponse = {
    requestId: "REQ-9948",
    timestamp: "2026-03-01",
    payload: {
        userProfile: {
            username: "code_ninja",
            email: "ninja@dev.com",
            theme: "dark_mode"
        },
        accessRights: ["read", "comment"]
    }
};

const { username, email } = apiResponse.payload.userProfile;
const { accessRights } = apiResponse.payload;

const updatedRights = [...accessRights, "admin_delete"];

const cleanUser = {
    username,
    email,
    permissions: updatedRights,
    status: "Active"
};

console.log(cleanUser);