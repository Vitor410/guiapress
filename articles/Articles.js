const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

Category.hasMany(Article);       
Article.belongsTo(Category);     

Article.sync({force: false}) 

module.exports = Article;
