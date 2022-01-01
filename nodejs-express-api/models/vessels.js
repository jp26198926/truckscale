
const BaseModel = require("./basemodel");
class Vessels extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				code: {name: 'code', type:Sequelize.STRING},
				name: {name: 'name', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "vessels",
				modelName: "vessels",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'name'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'name'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'name'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'name'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'name'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("code LIKE :search"), 
			sequelize.literal("name LIKE :search"),
		];
	}

	
}
module.exports = Vessels;
