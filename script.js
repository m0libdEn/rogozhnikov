class Developer {
    constructor(name) {
        this.name = name;
    }

    startWork() {
        return `${this.name} start work ...`;
    }

    endWork() {
        return `${this.name} end work ...`;
    }
}

class Frontend extends Developer {
    constructor(name) {
        super(name);
        this.websiteName = "";
    }

    buildWebsite() {
        return `${this.name} start build website`;
    }

    setWebsiteName(websiteName) {
        this.websiteName = websiteName;
    }
}

class Backend extends Developer {
    constructor(name) {
        super(name);
    }

    buildServer() {
        return `${this.name} start build server`;
    }
}

// Пример использования:
const frontendDev = new Frontend("Frontend Developer");
frontendDev.setWebsiteName("ebay.com");
console.log(frontendDev.startWork());
console.log(frontendDev.buildWebsite());
console.log(`Working on website: ${frontendDev.websiteName}`);
console.log(frontendDev.endWork());

console.log();

const backendDev = new Backend("Backend Developer");
console.log(backendDev.startWork());
console.log(backendDev.buildServer());
console.log(backendDev.endWork());