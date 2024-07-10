export default function (req, res, next) {
    if (req.isAuthenticated()&&req.user.admin == true) {
        return next();
    }
    console.log("Negado")
    res.redirect("/");
};