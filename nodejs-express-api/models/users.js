
const BaseModel = require("./basemodel");
class Users extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				email: {name: 'email', type:Sequelize.STRING},
				username: {name: 'username', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				firstname: {name: 'firstname', type:Sequelize.STRING},
				lastname: {name: 'lastname', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "users",
				modelName: "users",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'email', 
			'username', 
			'firstname', 
			'lastname'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'email', 
			'username', 
			'firstname', 
			'lastname'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'email', 
			'username', 
			'firstname', 
			'lastname'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'email', 
			'username', 
			'firstname', 
			'lastname'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'email', 
			'username', 
			'firstname', 
			'lastname'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("email LIKE :search"), 
			sequelize.literal("username LIKE :search"), 
			sequelize.literal("password LIKE :search"), 
			sequelize.literal("firstname LIKE :search"), 
			sequelize.literal("lastname LIKE :search"),
		];
	}

	
}
module.exports = Users;
