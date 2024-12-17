import { Router } from "express";
import type { Request, Response } from "express";
import { animeInfo } from "../../models/animeInfo.js";
import { Users } from "../../models/index.js";

const router = Router();

///////////////////////////////////////////POST ROUTES
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

/////////////////////////////////GET ROUTES
//GET /animeInfo - get all anime info for card
router.get('/', async(_req: Request, res: Response) => {
    try {
        const animeInfoMult = await animeInfo.findAll();
        res.status(200).json(animeInfoMult);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

//GET /animeInfo/:id - get animeInfo by ID
router.get('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const animeInfoID = await animeInfo.findByPk(id);
        if (animeInfoID) {
            res.status(200).json(animeInfoID);
        } else {
            res.status(200).json({
                error: "The Requested Information has not been found."
            })
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

//GET /Users - get all login credentials from User
router.get('/users', async(_req: Request, res: Response) => {
    try {
        const logins = await Users.findAll();
        res.status(200).json(logins);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

///////////////////////////////PUT ROUTES
//PUT /animeInfo/:id - update animeInfo by ID
router.put('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const animeInfoUpdate = await animeInfo.findByPk(id);
        if (animeInfoUpdate) {
            animeInfoUpdate.image = body.image ? body.image : animeInfoUpdate.image;
            animeInfoUpdate.title = body.title ? body.title : animeInfoUpdate.title;
            animeInfoUpdate.year = body.year ? body.year : animeInfoUpdate.year;
            animeInfoUpdate.genre = body.genre ? body.genre : animeInfoUpdate.genre;
            animeInfoUpdate.review = body.review ? body.review : animeInfoUpdate.review;
            animeInfoUpdate.topAnime = body.topAnime ? body.topAnime : animeInfoUpdate.topAnime;
            animeInfoUpdate.save();
            res.status(200).json(animeInfoUpdate);
        } else {
            res.status(200).json({
                error: "The Requested Information has not been found."
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

//PUT /User - update User username/password
router.put('/users', async(req: Request, res: Response) => {
    const body = req.body;
    try {
        const login = await Users.findByPk();
        if (login) {
            login.username = body.username ? body.username : login.username;
            if (body.password) {
                login.setPassword(body.password);
            }
            login.save();
            res.status(200).json(login);
        } else {
            res.status(200).json({
                error: "The Requested User has not been found."
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.messages
        });
    }
});

///////////////////////////////DELETE ROUTES
//DELETE /animeInfo/:id - delete anime info by ID
router.delete('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await animeInfo.destroy({ where: { id: id }});
        res.status(200).json({
            message: "Anime Info Card has been deleted."
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

//DELETE /User - self explanatory
router.delete('/users', async(_req: Request, res: Response) => {
    try {
        await Users.destroy();
        res.status(200).json({
            message: "User has been deleted."
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
});

export default router;