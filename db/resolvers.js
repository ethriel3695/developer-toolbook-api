const Affirmation = require('../models/Affirmation');
module.exports = {
  Query: {
    async getAffirmations(root, { type, userId, archive }) {
      return await Affirmation.find({ type: type, userId: userId }).sort({
        createdAt: 'descending'
      });
    },
    async getAffirmation(root, { _id }) {
      return await Affirmation.findById(_id);
    }
  }
  // Mutation: {
  //   createFieldIssue: (
  //     parent,
  //     { model, sn, customer, requester, requesterId, issueDesc, sameIssue },
  //     { db },
  //     info
  //   ) =>
  //     db.field_issue.create({
  //       model: model,
  //       sn: sn,
  //       customer: customer,
  //       requester: requester,
  //       issueDesc: issueDesc,
  //       sameIssue: sameIssue
  //     }),
  //   updateFieldIssue: (
  //     parent,
  //     { model, sn, customer, requester, requesterId, issueDesc, id, sameIssue },
  //     { db },
  //     info
  //   ) =>
  //     db.field_issue.update(
  //       {
  //         model: model,
  //         sn: sn,
  //         customer: customer,
  //         requester: requester,
  //         requesterId: requesterId,
  //         issueDesc: issueDesc,
  //         sameIssue: sameIssue
  //       },
  //       {
  //         where: {
  //           id: id
  //         }
  //       }
  //     ),
  //   deleteFieldIssue: (parent, { id }, { db }, info) =>
  //     db.field_issue.destroy({
  //       where: {
  //         id: id
  //       }
  //     })
  // }
};
