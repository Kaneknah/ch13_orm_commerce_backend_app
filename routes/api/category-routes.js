const router = require("express").Router();
const { Category, Product } = require("../../models");

//GET Route for finding all Categories
router.get("/", async (req, res) => {
	try {
		const categoryData = await Category.findAll({
			include: [
				{
					model: Product,
				},
			],
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET Route for finding one Category by ID
router.get("/:id", async (req, res) => {
	try {
		const categoryData = await Category.findByPk(req.params.id, {
			include: [
				{
					model: Product,
				},
			],
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

//POST Route for creating a new Category
router.post("/", async (req, res) => {
	try {
		const categoryData = await Category.create(req.body);
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
	Category.update(req.body, {
		where: {
			id: req.params.id,
		},
	}).then((categoryData) => {
		if (!categoryData) {
			res.status(404).json({ message: "No Category for this ID" });
			return;
		}
		res.json(categoryData);
	});
});

//DELETE Route deleting a Category by its ID
router.delete("/:id", async (req, res) => {
	try {
		const categoryData = await Category.destroy({
			where: { id: req.params.id },
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
