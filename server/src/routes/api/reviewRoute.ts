import { Router } from "express";
import type { Request, Response } from "express";
import { Review } from "../../models/index.js";
//import a user such that the review is saved to the user's account

const router = Router();

/////////////////////////////////////////////////POST ROUTES
//POST /reviews - create a new review
router.post('/reviews', async (req: Request, res: Response) => {
    const {
        rating,
        heading,
        desc,
        cardId
    } = req.body;
    try {
        const newReview = await Review.create({
            rating, heading, desc, cardId
        })
        res.status(201).json(newReview);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

export default router;