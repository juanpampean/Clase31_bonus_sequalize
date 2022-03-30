module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        favorite_movie_id :{
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: 'actors',
        timestamps: false
    };
    const Actor = sequelize.define(alias, cols, config)

    Actor.associate = function(models) {
        Actor.belongsTo(models.Movie,{
            as:"peliFav",
            foreignKey:"favorite_movie_id"
        })
    }

    return Actor
}