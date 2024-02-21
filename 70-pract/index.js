"use strict";
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {
    constructor(status) {
        this.stop = (reason) => {
            return `Transfer stopped. Reason: ${reason}. Date: ${new Date().toLocaleString()}`;
        };
        this.checkTransferStatus = () => {
            return this.transferStatus;
        };
        this.makeError = () => {
            return `Status ${TransferStatus.Rejected}, error message ${ErrorMessages.NotEnoughSpace}`;
        };
        this.transferStatus = status;
    }
    start(p, d) {
        return `Transfer started for path: ${p} with data: ${d}`;
    }
}
const transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.start("new/path", ["newData1", "newData2"]));
console.log(transfer.checkTransferStatus());
console.log(transfer.stop("Stopped"));
console.log(transfer.makeError());
