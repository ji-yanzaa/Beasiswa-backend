const { User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password, role} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword, role});
        res.status(201).json({ message: 'user registered', user});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({ where: {email}});
        if(!user) return res.status(404).json({ message: 'user not found'});

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return res.status(401).json({message: 'invalid password'})

        const token = jwt.sign(
            {id:user.id, email:user.email, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );

        res.json({message: 'Login Succesful', token });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};