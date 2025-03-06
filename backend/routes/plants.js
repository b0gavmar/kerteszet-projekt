import express from "express"

const router = express.router();

router.get("/pants",async(req,res,next)=>{
    try{
        //const plants =
        //res.status(200).json(plants);
    }
    catch(err){
        next(err);
    }
});

router.post("/plants",async(req,res,next)=>{
    try{
        //await 
        //res.status(200)
    }
    catch(err){
        next(err)
    }
})

router.put("/plants/:id", async (req, res, next) => {
  try {
    //await
    //res.status(200)
  } catch (err) {
    next(err);
  }
});

router.delete("/plants/:id", async (req, res, next) => {
  try {
    //await
    //res.status(200)
  } catch (err) {
    next(err);
  }
});

export default router;