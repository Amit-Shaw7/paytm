const zod = require('zod');

const validateTransferAmount = zod.object({
    toAccount : zod.string(),
    amount : zod.number()
});

module.exports = {
    validateTransferAmount
}