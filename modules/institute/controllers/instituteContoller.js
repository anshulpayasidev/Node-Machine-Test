const connectDB = require('../../../config/database');
class InstituteController {

  /**
   * Create function for get institute list.
   * @param {*} req 
   * @param {*} res 
   */
  async getInstiute(req, res) {
    try {
      const institute = await connectDB('institutes');

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Institute list displayed successfully.",
        "response": { "institute_list": institute }
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for add instiute name.
   * @param {*} req 
   * @param {*} res 
   */
  async addInstiute(req, res) {

    try {

      const { type, name } = req.body;
      const validateName = await connectDB('institutes').select("id").where({ name: name }).first();

      if (validateName) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Name already exist.",
          "response": {}
        })
      }
      await connectDB('institutes').insert({ type, name });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Institute added successfully.",
        "response": {}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for add education board.
   * @param {*} req 
   * @param {*} res 
   */
  async addBoards(req, res) {

    try {
      const { name } = req.body;
      const validateName = await connectDB('education_boards').select("id").where({ name: name }).first();

      if (validateName) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Name already exist.",
          "response": {}
        })
      }
      await connectDB('education_boards').insert({ name });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Education board added successfully.",
        "response": {}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for get education boards.
   * @param {*} req 
   * @param {*} res 
   */
  async getEducationBoard(req, res) {

    try {
      const educationBoards = await connectDB('education_boards');

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Education boards list displayed successfully.",
        "response": { "education_boards_list": educationBoards }
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for add medium.
   * @param {*} req 
   * @param {*} res 
   */
  async addMedium(req, res) {
    try {
      const { name } = req.body;
      const validateName = await connectDB('mediums').select("id").where({ name: name }).first();

      if (validateName) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Name already exist.",
          "response": {}
        })
      }
      await connectDB('mediums').insert({ name });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Medium added successfully.",
        "response": {}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for get mediums.
   * @param {*} req 
   * @param {*} res 
   */
  async getMedium(req, res) {

    try {
      const medium = await connectDB('mediums');

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Mediums list displayed successfully.",
        "response": { "medium_list": medium }
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for add class categories.
   * @param {*} req 
   * @param {*} res 
   */
  async addClassCategories(req, res) {
    try {
      const { name } = req.body;
      const validateName = await connectDB('class_categories').select("id").where({ name: name }).first();

      if (validateName) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Name already exist.",
          "response": {}
        })
      }

      await connectDB('class_categories').insert({ name });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Class category added successfully.",
        "response": {}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for get class categories.
   * @param {*} req 
   * @param {*} res 
   */
  async getClassCategory(req, res) {

    try {
      const classCategories = await connectDB('class_categories');

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Class categories displayed successfully.",
        "response": { "class_categories_list": classCategories }
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for add standards.
   * @param {*} req 
   * @param {*} res 
   */
  async addStandard(req, res) {
    try {
      const { class_category_id, name } = req.body;

      const validateCategoryId = await connectDB('class_categories').select("id").where({ id: class_category_id }).first();

      if (!validateCategoryId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid class category id.",
          "response": {}
        })
      }

      const validateName = await connectDB('standards').select("id").where({ name: name }).first();

      if (validateName) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Name already exist.",
          "response": {}
        })
      }
      await connectDB('standards').insert({ class_category_id, name });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Standard added successfully.",
        "response": {}
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for get standards.
   * @param {*} req 
   * @param {*} res 
   */
  async getStandards(req, res) {

    try {
      const { class_category_id } = req.query;
      const validateCategoryId = await connectDB('class_categories').select("id").where({ id: class_category_id }).first();

      if (!validateCategoryId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid class category id.",
          "response": {}
        })
      }

      const standards = await connectDB('standards').where({ "class_category_id": class_category_id });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Standards list displayed successfully.",
        "response": { "standards_list": standards }
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  /**
   * Create function for add subjects.
   * @param {*} req 
   * @param {*} res 
   */
  async addSubject(req, res) {

    try {
      const { standard_id, name } = req.body;

      const validateStandardId = await connectDB('standards').select("id").where({ id: standard_id }).first();

      if (!validateStandardId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid standard id.",
          "response": {}
        })
      }

      const validateName = await connectDB('subjects').select("id").where({ "standard_id": standard_id, "name": name }).first();

      if (validateName) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Subject already exist.",
          "response": {}
        })
      }

      await connectDB('subjects').insert({ standard_id, name });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Subject added successfully.",
        "response": {}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }

  }

  /**
   * Create function for get subject list.
   * @param {*} req 
   * @param {*} res 
   * @returns 
   */
  async getSubject(req, res){
    try {
      
      const { standard_id } = req.query;
      const validateStandardId = await connectDB('standards').select("id").where({ id: standard_id }).first();

      if (!validateStandardId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid standard id.",
          "response": {}
        })
      }

      const subjects = await connectDB('subjects').where({ "standard_id": standard_id });

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Subjects list displayed successfully.",
        "response": {"subject_list": subjects}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }
  }

  async createRegistration(req, res){

    try {

      const {institute_id, board_id, medium_id, class_category_id, standard_id, user_id} = req.body;

      const validateInstituteId = await connectDB('institutes').select("id").where({ id: institute_id }).first();

      if (!validateInstituteId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid institute id.",
          "response": {}
        })
      }

      const validateBoardId = await connectDB('education_boards').select("id").where({ id: board_id }).first();

      if (!validateBoardId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid education board id.",
          "response": {}
        })
      }

      const validateMediumId = await connectDB('mediums').select("id").where({ id: medium_id }).first();

      if (!validateMediumId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid medium id.",
          "response": {}
        })
      }

      const validateCategoryId = await connectDB('class_categories').select("id").where({ id: class_category_id }).first();

      if (!validateCategoryId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid class category id.",
          "response": {}
        })
      }

      const validateStandardId = await connectDB('standards').select("id").where({ id: standard_id }).first();

      if (!validateStandardId) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Invalid standard id.",
          "response": {}
        })
      }

      const validateUser = await connectDB('registrations').select('id').where({"user_id": user_id}).first();
      if (validateUser) {
        return res.status(400).json({
          "status_code": 400,
          "status": "fail",
          "message": "Your form is already submitted.",
          "response": {}
        })
      }

      await connectDB('registrations').insert({institute_id, board_id, medium_id, class_category_id, standard_id, user_id});

      res.status(200).json({
        "status_code": 200,
        "status": "success",
        "message": "Registration form submited successfully.",
        "response": {}
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal server error"
      })
    }

  }
}

module.exports = InstituteController;