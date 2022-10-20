const {Schema, model, Types} = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 300
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: newDate => moment(newDate).format('MMM DD, YYYY')
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }, 
    id: false
}
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 300
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        get: newDate => moment(newDate).format('MMM DD, YYYY')

    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
},

{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;