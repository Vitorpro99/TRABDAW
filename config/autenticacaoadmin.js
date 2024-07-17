export default function (req, res, next) {
    if (req.isAuthenticated()&&req.user.admin) {
        return next();
    }
    console.log("Negado")
    res.redirect("/escola/login");
};