import { Router } from "express";
import type { Request, Response } from "express";
import { animeInfo } from "../../models/animeInfo.js";
import { Users } from "../../models/index.js";

const router = Router();

//POST /animeInfo - create a new animeInfo card
router.post('/', async (req: Request, res: Response) => {
    const {
        image,
        title,
        year,
        genre,
        review,
        topAnime
    } = req.body;
    try {
        const newAnimeInfo = await animeInfo.create({
            image, title, year, genre, review, topAnime
        })
        res.status(201).json(newAnimeInfo);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});
//POST /Users - create a Users objects
router.post('/users', async (req: Request, res: Response) => {
    const {
        username,
        password
    } = req.body;
    try {
        const newUsers = await Users.create({
            username, password
        })
        res.status(201).json(newUsers);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

export default router;