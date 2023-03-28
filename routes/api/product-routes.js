const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");


// GET Route for finding all products
router.get("/", async (req, res) => {
	try {
		const productData = await Product.findAll({
			include: [{ model: Category }, { model: Tag }],
		});
		res.status(200).json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET Route for finding one product by ID.
router.get("/:id", async (req, res) => {
	try {
		const productData = await Product.findByPk(req.params.id, {
			include: [
				{ model: Category, attributes: ["id", "category_name"] },
				{ model: Tag, attributes: ["id", "tag_name"] },
			],
		});
		res.status(200).json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST Route for creating new product
router.post("/", async (req, res) => {
	try {
		const productData = await Product.create(req.body);
		res.status(200).json(productData);
	} catch (err) {
		res.status(400).json(err);
	}
});

//POSt Route for creating a new Product
router.post("/", async (req, res) => {
	Product.create(req.body)
		.then((product) => {
			
			if (req.body.tagIds.length) {
				const productTagIdArr = req.body.tagIds.map((tag_id) => {
					return {
						product_id: product.id,
						tag_id,
					};
				});
				return ProductTag.bulkCreate(productTagIdArr);
			}
			res.status(200).json(product);
		})
		.then((productTagIds) => res.status(200).json(productTagIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

// PUT Route for updating a product by ID
router.put("/:id", (req, res) => {
	// update product data
	Product.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((product) => {
			return ProductTag.findAll({ where: { product_id: req.params.id } });
		})
		.then((productTags) => {
			const productTagIds = productTags.map(({ tag_id }) => tag_id);
			const newProductTags = req.body.tagIds
				.filter((tag_id) => !productTagIds.includes(tag_id))
				.map((tag_id) => {
					return {
						product_id: req.params.id,
						tag_id,
					};
				});
			const productTagsToRemove = productTags
				.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
				.map(({ id }) => id);

			return Promise.all([
				ProductTag.destroy({ where: { id: productTagsToRemove } }),
				ProductTag.bulkCreate(newProductTags),
			]);
		})
		.then((updatedProductTags) => res.json(updatedProductTags))
		.catch((err) => {
			res.status(400).json(err);
		});
});

// DELETE Route for deleting one product by ID
router.delete("/:id", async (req, res) => {
	
	try {
		const productData = await Product.destroy({
			where: { id: req.params.id },
		});

		res.status(200).json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
