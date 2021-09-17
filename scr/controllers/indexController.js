const platos=require("../data/platos.json")

module.exports={
    index:(req, res, next)=>{
        res.render('index', {platos});
      },
    detalle:(req,res)=>{
        const id =req.params.id
        const plato= platos.find(element=> element.id=== +id)
        res.render("detallMenu",{plato})
    }
}
