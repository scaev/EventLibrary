const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      //max 3 months
      max: () => new Date(+new Date() + 90 * 24 * 60 * 60 * 1000),
      // https://stackoverflow.com/questions/29899208/mongoose-date-field-set-default-to-date-now-n-days
      required: true,
    },
    eventCategory: {
      type: String,
      enum: [
        "Yoga",
        "Swimming",
        "Concert",
        "Games night",
        "Dance party",
        "Happy hour",
        "Karaoke",
      ],
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
