const jwt= require('jsonwebtoken');

exports.verifyToken = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({message: 'Token Tidak Ditemukan'});
    }

    const token=authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; // menyimpan data user ke req
        next();
    } catch (err) {
        return res.status(403).json({message:  'token tidak valid'});
    }
};

exports.isAdmin = (req, res, next) =>{
    if (req.user.role !=='admin'){
        return res.status(403).json({message: 'Akses hanya untuk admin'});
    }
    next();
};