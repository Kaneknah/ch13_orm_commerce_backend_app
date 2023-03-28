const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// GET route for find all tags
router.get("/", async (req, res) => {
	try {
		const tagData = await Tag.findAll({
			include: [
				{
					model: Product,
				},
			],
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET route for find a single tag
router.get("/:id", async (req, res) => {
	try {
		const tagData = await Tag.findByPk(req.params.id, {
			include: [
				{
					model: Product,
				},
			],
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

//POST Route for creating a new tag
router.post("/", async (req, res) => {
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Put Route for updating a tag by ID
router.put("/:id", (req, res) => {
	Tag.update(req.body, {
		where: {
			id: req.params.id,
		},
	}).then((tagData) => {
		if (!tagData) {
			res.status(404).json({ message: "No tag for this ID" });
			return;
		}
		res.json(tagData);
	});
});

//DELETE Route for deleting a tag by ID
router.delete("/:id", async (req, res) => {
	try {
		const tagData = await Tag.destroy({
			where: { id: req.params.id },
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
