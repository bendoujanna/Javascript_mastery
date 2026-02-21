// async taks manager

const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            id === 1 ? resolve({ id: 1, name: "Bendou Janna" }) : reject("User not found");
        }, 1000);
    });
};

const checkSubscription = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, status: "Active", plan: "Premium" }), 1500);
    });
};

const loadDashboardData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Analytics", "Recent Trips", "Notifications"]), 800);
    });
};

const enforceTimeout = (ms) => {
    return new Promise((_, reject) => {
        setTimeout(() => reject(`Timeout Error: Request exceeded ${ms}ms`), ms);
    });
};

async function runTaskManager(userId) {
    console.log("Starting Manager...");
    
    try {
        const user = await fetchUser(userId);
        
        const [sub, data] = await Promise.race([
            Promise.all([checkSubscription(user.id), loadDashboardData()]),
            enforceTimeout(2000)
        ]);

        console.log(user.name);
        console.log(sub.status);
        console.log(data);

    } catch (error) {
        console.error(error);
    } finally {
        console.log("Manager Closed...");
    }
}

runTaskManager(1);