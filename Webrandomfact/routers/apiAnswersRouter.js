const express=require('express');
const router=express.Router();
const answerController=require('../controllers/answersController');
router.post('/add',(req,res)=>{
  answerController.createAnswer(req.body.answer,req.cookies.questionId,req.cookies.userId, (err, data) => {
    if(err)
      {console.log(err);
      res.redirect('/');
    }
    else{
      // console.log(req.body.answer);
      res.redirect(`/api/answers/${req.cookies.questionId}`);
    }
  });
});
router.get('/:id', (req, res) => {
let answerList =answerController.getAnswerByIdQuestion(req.params.id,answerList=>{
    // console.log(answerList);
    // // console.log(req.params.id);
    // console.log(answerList)
  let test =  answerList.map((answerList)=>{
      return {
        username:answerList.username,
        like:answerList.like,
      }
    })
    console.log(test);
    res.render("answer");
})
});
module.exports=router;