const Date = require("../models/Date.model");

module.exports.datesController = {
  createDate: async (req, res) => {
    try {
      const {registration, lastVisit } = req.body;
      const date = await Date.create({
        registration,
        lastVisit,
      });
      res.json(date);
    } catch (error) {
      res.json(`Ошибка при добвалении даты ${error.message}`);
    }
  },

  getAllDate: async (req, res) => {
    try {
      const dates = await Date.find();
      res.json(dates);
    } catch (error) {
      res.json(`Ошибка при выводе дат ${error.message}`);
    }
  },

  deleteDate: async (req, res) => {
    try {
      await Date.findByIdAndDelete(req.params.id)
      res.json('Успешно удален')
    } catch (error) {
      res.json(`Ошибка при удалении дат ${error.message}`);
    }
  }
};
