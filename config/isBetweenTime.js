const moment = require("moment");
module.exports.isBetweenTime = (start_date, end_date) => {
  var format = "YYYY-MM-DD HH:mm:ss";
  var time = moment(new Date(), format);
  let beforeTime = moment(start_date).tz("Asia/Ho_Chi_Minh").format(format);
  let afterTime = moment(end_date).tz("Asia/Ho_Chi_Minh").format(format);
  if (time.isBetween(beforeTime, afterTime)) {
    return true;
  }
  return false;
};
