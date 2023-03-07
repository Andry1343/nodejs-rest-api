const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", isValidId, ctrl.deleteById);

router.put("/:id", isValidId, validateBody(schemas.putSchema), ctrl.updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
