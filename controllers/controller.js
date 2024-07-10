import Professor from "../models/Professor.js"
import passport from '../config/passport.js';

export function telaInicio(req,res) {
    res.render('tela.ejs')
}
export function abreLogin(req,res){
    res.render("login.ejs")
}
export function login(req,res){
    passport.authenticate('local', {
        successRedirect: '/user/lst',
        failureRedirect: '/escola/'
    })
}