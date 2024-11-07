function User(name, email, password, nickname) {
    this.id = crypto.randomUUID();
    this.status = 'active';
    this.name = name;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.role = 'user';
    this.createAt = new Date();
    this.updateAt = new Date();
    this.deleteAt = null;
}

User.prototype.makeLogin = function(email, password) {
    if (this.email === email && this.password === password) {
        return true;
    }
    return false;
}

User.prototype.update = function(name, email, password, nickname) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.updateAt = new Date();
}

User.prototype.delete = function() {
    this.status = 'inactive';
    this.deleteAt = new Date();
}

User.prototype.reactivate = function() {
    this.status = 'active';
    this.deleteAt = null;
}

User.prototype.changePassword = function(password) {
    this.password = password;
    this.updateAt = new Date();
}

User.prototype.checkDuplicate_Email = function(email) {
    if (this.email === email) {
        return true;
    }
    return false;
}

User.prototype.checkDuplicate_Nickname = function(nickname) {
    if (this.nickname === nickname) {
        return true;
    }
    return false;
}

User.prototype.showData = function() {
    return {
        id: this.id,
        status: this.status,
        name: this.name,
        email: this.email,
        nickname: this.nickname,
        createAt: this.createAt,
        updateAt: this.updateAt,
        deleteAt: this.deleteAt
    }
}

function Admin(name, email, password, nickname, areas) {
    User.call(this, name, email, password, nickname);
    this.role = 'admin';
    this.areas = areas;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.addArea = function(area) {
    this.areas.push(area);
}

Admin.prototype.removeArea = function(area) {
    const index = this.areas.indexOf(area);
    this.areas.splice(index, 1);
}

Admin.prototype.showData = function() {
    return {
        id: this.id,
        status: this.status,
        name: this.name,
        email: this.email,
        nickname: this.nickname,
        createAt: this.createAt,
        updateAt: this.updateAt,
        deleteAt: this.deleteAt,
        areas: this.areas
    }
}

function ServiceUser(name, email, password, nickname, areas, accessAPI, OwnerID) {
    User.call(this, name, email, password, nickname);
    this.role = 'service_user';
    this.accessAPI = accessAPI;
    this.areas = areas;
    this.OwnerID = OwnerID
}

ServiceUser.prototype = Object.create(User.prototype);
ServiceUser.prototype.constructor = ServiceUser;

ServiceUser.prototype.showData = function() {
    return {
        id: this.id,
        status: this.status,
        name: this.name,
        email: this.email,
        nickname: this.nickname,
        createAt: this.createAt,
        updateAt: this.updateAt,
        deleteAt: this.deleteAt,
        areas: this.areas,
        accessAPI: this.accessAPI,
        OwnerID: this.OwnerID
    }
}   

const user = new User('João', 'abc@abc.com', '123456', 'joaozinho');
const admin = new Admin('Maria', 'abc@cba.com', '654321', 'mariazinha', ['Financeiro', 'RH']);
const serviceUser = new ServiceUser('José', 'cda@cda.com', '654321', 'josezinho', ['Financeiro', 'RH'], ['API1', 'API2'], user.id);

console.log(user.showData());
console.log(admin.showData());
console.log(serviceUser.showData());