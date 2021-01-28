const {check,validatorresult } = require('express-validator');
const path = require('path')

 const checkMail = [
    check('name')
        .notEmpty().withMessage('The Name Should Not Be Empty')
        .bail()
        .isString().withMessage('The Name Should Be String'),
    check('email').notEmpty().withMessage('Email Should Not Be Empty').bail()
        .isEmail().withMessage('Invalid Emial'),
    check("tel")
        .notEmpty().withMessage("Phone Number Can Not Be Empty")
        .bail()
       .isMobilePhone().withMessage('Phone Number Field Must Contain Between 6 and 12 digits'),

    check("country")
       .notEmpty().withMessage("Country Can Not Be Empty")
       .bail()
      .isString().withMessage('country Should Be String'),
];

module.exports = { checkMail };